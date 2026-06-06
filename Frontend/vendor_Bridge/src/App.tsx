import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { AppLayout } from "@/components/layout/AppLayout";

import Landing from "@/pages/Landing";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import EmailVerification from "@/pages/auth/EmailVerification";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import ProfileSetup from "@/pages/auth/ProfileSetup";

import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import ProcurementDashboard from "@/pages/dashboard/ProcurementDashboard";
import VendorDashboard from "@/pages/dashboard/VendorDashboard";
import ManagerDashboard from "@/pages/dashboard/ManagerDashboard";

import VendorList from "@/pages/vendors/VendorList";
import VendorAdd from "@/pages/vendors/VendorAdd";
import VendorEdit from "@/pages/vendors/VendorEdit";
import VendorDetails from "@/pages/vendors/VendorDetails";
import VendorPerformance from "@/pages/vendors/VendorPerformance";

import RFQList from "@/pages/rfqs/RFQList";
import RFQCreate from "@/pages/rfqs/RFQCreate";
import RFQDetails from "@/pages/rfqs/RFQDetails";

import QuotationList from "@/pages/quotations/QuotationList";
import QuotationSubmit from "@/pages/quotations/QuotationSubmit";
import QuotationComparison from "@/pages/quotations/QuotationComparison";

import ApprovalQueue from "@/pages/approvals/ApprovalQueue";
import ApprovalDetails from "@/pages/approvals/ApprovalDetails";

import PurchaseOrderList from "@/pages/purchase-orders/PurchaseOrderList";
import PurchaseOrderDetails from "@/pages/purchase-orders/PurchaseOrderDetails";

import InvoiceList from "@/pages/invoices/InvoiceList";
import InvoiceDetails from "@/pages/invoices/InvoiceDetails";

import DeliveryTracking from "@/pages/delivery/DeliveryTracking";
import Reports from "@/pages/reports/Reports";
import Notifications from "@/pages/notifications/Notifications";
import ActivityLogs from "@/pages/logs/ActivityLogs";
import AuditLogs from "@/pages/logs/AuditLogs";
import UserManagement from "@/pages/users/UserManagement";
import Profile from "@/pages/profile/Profile";
import Settings from "@/pages/settings/Settings";
import NotFound from "@/pages/NotFound";

function DashboardRouter() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  switch (user.role) {
    case "admin": return <AdminDashboard />;
    case "procurement": return <ProcurementDashboard />;
    case "vendor": return <VendorDashboard />;
    case "manager": return <ManagerDashboard />;
  }
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />

            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<DashboardRouter />} />

              <Route path="/vendors" element={<VendorList />} />
              <Route path="/vendors/add" element={<VendorAdd />} />
              <Route path="/vendors/performance" element={<VendorPerformance />} />
              <Route path="/vendors/:id" element={<VendorDetails />} />
              <Route path="/vendors/:id/edit" element={<VendorEdit />} />

              <Route path="/rfqs" element={<RFQList />} />
              <Route path="/rfqs/create" element={<RFQCreate />} />
              <Route path="/rfqs/:id" element={<RFQDetails />} />

              <Route path="/quotations" element={<QuotationList />} />
              <Route path="/quotations/comparison" element={<QuotationComparison />} />
              <Route path="/quotations/submit/:rfqId" element={<QuotationSubmit />} />

              <Route path="/approvals" element={<ApprovalQueue />} />
              <Route path="/approvals/:id" element={<ApprovalDetails />} />

              <Route path="/purchase-orders" element={<PurchaseOrderList />} />
              <Route path="/purchase-orders/:id" element={<PurchaseOrderDetails />} />

              <Route path="/invoices" element={<InvoiceList />} />
              <Route path="/invoices/:id" element={<InvoiceDetails />} />

              <Route path="/delivery" element={<DeliveryTracking />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/activity" element={<ActivityLogs />} />
              <Route path="/audit" element={<AuditLogs />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
