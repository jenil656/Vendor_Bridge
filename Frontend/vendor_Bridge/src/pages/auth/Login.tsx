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
      footer={<>Don't have an account? <Link to="/register" className="font-medium text-primary hover:underline">Create one</Link></>}
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
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Log in</Button>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button type="button" variant="outline">Continue with Google</Button>
          <Button type="button" variant="outline">Continue with Microsoft</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
