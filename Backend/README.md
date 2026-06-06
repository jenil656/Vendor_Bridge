# VendorBridge ERP Backend

VendorBridge ERP is a procurement backend built with Node.js, Express, MongoDB, and Mongoose. It provides APIs for vendors, RFQs, quotations, purchase orders, invoices, approvals, notifications, reports, activity logs, authentication, and dashboard data.

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT authentication
- bcrypt password hashing
- Nodemon for development

## Project Structure

```text
VendorBridge-ERP/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── db.js
│       └── modules/
│           ├── activity-log/
│           ├── approval/
│           ├── auth/
│           ├── dashboard/
│           ├── invoice/
│           ├── notification/
│           ├── purchase-order/
│           ├── quotation/
│           ├── report/
│           ├── rfq/
│           └── vendor/
├── .env
└── package.json
```

## Installation

Install dependencies from the backend folder:

```powershell
cd backend
npm install
```

If you also want to install dependencies from the project root:

```powershell
npm install
cd backend
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
```

The backend loads environment variables from the root `.env` file.

## Run The Server

Start the server:

```powershell
cd backend
npm run start
```

Start the server in development mode with auto-restart:

```powershell
cd backend
npm run dev
```

Default server URL:

```text
http://localhost:5000
```

## API Routes

### Auth

```text
POST /api/auth/signup
POST /api/auth/login
```

### Vendors

```text
POST   /api/vendors
GET    /api/vendors
GET    /api/vendors/:id
PUT    /api/vendors/:id
DELETE /api/vendors/:id
```

### RFQs

```text
POST   /api/rfqs
GET    /api/rfqs
GET    /api/rfqs/:id
PUT    /api/rfqs/:id
DELETE /api/rfqs/:id
```

### Quotations

```text
POST   /api/quotations
GET    /api/quotations
GET    /api/quotations/:id
PUT    /api/quotations/:id
DELETE /api/quotations/:id
```

### Purchase Orders

```text
POST   /api/purchase-orders
GET    /api/purchase-orders
GET    /api/purchase-orders/:id
PUT    /api/purchase-orders/:id
DELETE /api/purchase-orders/:id
```

### Invoices

```text
POST /api/invoices
GET  /api/invoices
GET  /api/invoices/:id
PUT  /api/invoices/:id
```

### Approvals

```text
POST /api/approvals
GET  /api/approvals
GET  /api/approvals/:id
PUT  /api/approvals/:id
```

### Notifications

```text
POST /api/notifications
GET  /api/notifications
PUT  /api/notifications/:id/read
```

### Reports

```text
GET /api/reports/dashboard
```

### Dashboard

```text
GET /api/dashboard
```

### Activity Logs

```text
POST /api/activity-logs
GET  /api/activity-logs
GET  /api/activity-logs/:id
```

## NPM Scripts

```text
npm run start  # Run server with node
npm run dev    # Run server with nodemon
```

## Main Dependencies

- `express`
- `mongoose`
- `dotenv`
- `jsonwebtoken`
- `bcrypt`
- `cors`
- `morgan`
- `multer`
- `nodemailer`
- `pdfkit`
- `swagger-ui-express`
- `zod`
- `nodemon`

## Notes

- Make sure MongoDB Atlas allows your current IP address in Network Access.
- Keep your real `.env` values private.
- If MongoDB SRV DNS fails, use the standard MongoDB connection string with direct shard hosts.
