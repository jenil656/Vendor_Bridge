import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

export default function ProfileSetup() {
  const [tab, setTab] = useState("vendor");
  const nav = useNavigate();
  const { login } = useAuth();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login(tab === "vendor" ? "vendor" : "procurement");
    toast.success("Profile setup complete");
    nav("/dashboard");
  };

  const FileSlot = ({ label }: { label: string }) => (
    <div className="rounded-lg border-2 border-dashed border-border bg-muted/40 p-4 text-center">
      <Upload className="mx-auto h-5 w-5 text-muted-foreground" />
      <p className="mt-1.5 text-xs font-medium">{label}</p>
      <p className="text-[10px] text-muted-foreground">PNG, JPG or PDF up to 5MB</p>
    </div>
  );

  return (
    <AuthLayout title="Complete your profile" subtitle="Just a few more details to get started">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vendor">I'm a Vendor</TabsTrigger>
          <TabsTrigger value="employee">I'm an Employee</TabsTrigger>
        </TabsList>
        <TabsContent value="vendor">
          <form onSubmit={submit} className="space-y-4 pt-4">
            <FileSlot label="Upload Company Logo" />
            <div className="space-y-1.5"><Label>Company Description</Label><Textarea rows={3} /></div>
            <div className="space-y-1.5"><Label>Company Address</Label><Textarea rows={2} /></div>
            <div className="space-y-1.5"><Label>Contact Person</Label><Input /></div>
            <div className="grid grid-cols-2 gap-3"><FileSlot label="GST Certificate" /><FileSlot label="Business Certifications" /></div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Complete Setup</Button>
          </form>
        </TabsContent>
        <TabsContent value="employee">
          <form onSubmit={submit} className="space-y-4 pt-4">
            <FileSlot label="Upload Profile Picture" />
            <div className="space-y-1.5"><Label>Department</Label><Input /></div>
            <div className="space-y-1.5"><Label>Designation</Label><Input /></div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">Continue to Dashboard</Button>
          </form>
        </TabsContent>
      </Tabs>
    </AuthLayout>
  );
}
