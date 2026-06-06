const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema(
    {
        quotationNumber: {
            type: String,
            unique: true
        },

        rfqId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RFQ",
            required: true
        },

        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vendor",
            required: true
        },

        items: [
            {
                itemName: String,
                quantity: Number,
                rate: Number,
                amount: Number
            }
        ],

        totalAmount: {
            type: Number,
            required: true
        },

        deliveryDays: {
            type: Number
        },

        remarks: {
            type: String
        },

        status: {
            type: String,
            enum: [
                "SUBMITTED",
                "UNDER_REVIEW",
                "SELECTED",
                "REJECTED"
            ],
            default: "SUBMITTED"
        }
    },
    {
        timestamps: true
    });

module.exports =
    mongoose.model(
        "Quotation",
        quotationSchema
    );