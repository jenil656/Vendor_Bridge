import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import type { Role } from "@/lib/roles";
import { toast } from "sonner";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.532 24.552c0-1.636-.132-3.196-.388-4.692H24.48v9.068h13.012c-.572 2.98-2.248 5.504-4.764 7.196v5.972h7.704c4.508-4.148 7.1-10.26 7.1-17.544z" fill="#4285F4"/>
      <path d="M24.48 48c6.48 0 11.916-2.148 15.888-5.804l-7.704-5.972c-2.148 1.44-4.896 2.292-8.184 2.292-6.296 0-11.628-4.252-13.532-9.968H3.008v6.168C6.964 42.892 15.144 48 24.48 48z" fill="#34A853"/>
      <path d="M10.948 28.548A14.888 14.888 0 0 1 10.1 24c0-1.58.272-3.112.748-4.548v-6.168H3.008A23.952 23.952 0 0 0 .48 24c0 3.864.928 7.52 2.528 10.716l7.94-6.168z" fill="#FBBC05"/>
      <path d="M24.48 9.484c3.548 0 6.732 1.22 9.236 3.612l6.912-6.912C36.388 2.392 30.952 0 24.48 0 15.144 0 6.964 5.108 3.008 13.284l7.94 6.168c1.904-5.716 7.236-9.968 13.532-9.968z" fill="#EA4335"/>
    </svg>
  );
}

export default function Login() {
  const [show, setShow] = useState(false);
  const [role, setRole] = useState<Role>("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error("Enter email and password"); return; }
    login(role);
    toast.success("Welcome back!");
    nav("/dashboard");
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to your VendorBridge workspace"
      footer={<>Don't have an account? <Link to="/register" className="font-medium text-primary hover:underline">Create one</ Link></>}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email / Username</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot password?</Link>
          </div>
          <div className="relative">
            <Input id="password" type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required className="pr-10" />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label>Sign in as (demo)</Label>
          <Select value={role} onValueChange={(v) => setRole(v as Role)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Administrator</SelectItem>
              <SelectItem value="procurement">Procurement Officer</SelectItem>
              <SelectItem value="vendor">Vendor</SelectItem>
              <SelectItem value="manager">Manager / Approver</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" className="h-4 w-4 rounded border-border" /> Remember me
        </label>

        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">
          Log in
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-3 text-xs text-muted-foreground">or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => toast.info("Google sign-in coming soon")}
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-medium text-[#1A202C] transition-all hover:border-[#C4D2EA] hover:bg-[#F7F8FA] hover:shadow-sm active:scale-[0.99]"
        >
          <GoogleIcon />
          Continue with Google
        </button>
      </form>
    </AuthLayout>
  );
}