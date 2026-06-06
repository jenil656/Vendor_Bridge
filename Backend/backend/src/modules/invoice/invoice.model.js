const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
    {
        invoiceNumber: {
            type: String,
            unique: true
        },

        purchaseOrderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PurchaseOrder",
            required: true
        },

        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vendor",
            required: true
        },

        subtotal: {
            type: Number,
            required: true
        },

        tax: {
            type: Number,
            default: 18
        },

        total: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            enum: [
                "GENERATED",
                "SENT",
                "PAID"
            ],
            default: "GENERATED"
        }
    },
    {
        timestamps: true
    });

module.exports =
    mongoose.model(
        "Invoice",
        invoiceSchema
    );