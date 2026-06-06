const mongoose = require("mongoose");

const rfqSchema = new mongoose.Schema(
    {
        rfqNumber: {
            type: String,
            unique: true
        },

        title: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

        deadline: {
            type: Date,
            required: true
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        vendors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Vendor"
            }
        ],

        items: [
            {
                itemName: String,
                quantity: Number,
                unit: String,
                specification: String
            }
        ],

        status: {
            type: String,
            enum: [
                "DRAFT",
                "PUBLISHED",
                "CLOSED",
                "APPROVED",
                "REJECTED"
            ],
            default: "DRAFT"
        }
    },
    {
        timestamps: true
    });

module.exports =
    mongoose.model(
        "RFQ",
        rfqSchema
    );