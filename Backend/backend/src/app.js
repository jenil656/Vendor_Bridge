const express = require("express");

const app = express();

app.use(express.json());

// Routes
const authRoutes = require("./modules/auth/auth.routes");
const vendorRoutes = require("./modules/vendor/vendor.routes");
const rfqRoutes = require("./modules/rfq/rfq.routes");
const quotationRoutes = require("./modules/quotation/quotation.routes");
const purchaseOrderRoutes = require("./modules/purchase-order/purchase-order.routes");
const reportRoutes = require("./modules/report/report.routes");
const notificationRoutes = require("./modules/notification/notification.routes");
const invoiceRoutes = require("./modules/invoice/invoice.routes");
const dashboardRoutes = require("./modules/dashboard/dashboard.routes");
const approvalRoutes = require("./modules/approval/approval.routes");
const activityLogRoutes = require("./modules/activity-log/activity-log.routes");

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/rfqs", rfqRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/purchase-orders", purchaseOrderRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/approvals", approvalRoutes);
app.use("/api/activity-logs", activityLogRoutes);

module.exports = app;
