import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  return (
    <AuthLayout title="Forgot password?" subtitle="Enter your email and we'll send a reset link" footer={<Link to="/login" className="text-primary hover:underline">Back to login</Link>}>
      <form onSubmit={(e) => { e.preventDefault(); if (!email) return toast.error("Enter email"); toast.success("Reset link sent"); nav("/reset-password"); }} className="space-y-4">
        <div className="space-y-1.5"><Label>Email Address</Label><Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Send Reset Link</Button>
        <div className="rounded-lg border border-border bg-muted p-3 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">Recovery flow</p>
          <p className="mt-1">Enter Email → Receive Code → Verify → Reset Password</p>
        </div>
      </form>
    </AuthLayout>
  );
}
