const mongoose = require("mongoose");

const purchaseorderSchema =
    new mongoose.Schema(
        {
            poNumber: {
                type: String,
                unique: true
            },

            quotationId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Quotation",
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

            status: {
                type: String,
                enum: [
                    "GENERATED",
                    "SENT",
                    "ACCEPTED",
                    "DELIVERED",
                    "CLOSED"
                ],
                default: "GENERATED"
            }
        },
        {
            timestamps: true
        });

module.exports =
    mongoose.model(
        "Purchaseorder",
        purchaseorderSchema
    );