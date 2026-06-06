const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
    {
        vendorCode: {
            type: String,
            unique: true
        },

        companyName: {
            type: String,
            required: true
        },

        gstNumber: {
            type: String,
            required: true
        },

        category: {
            type: String
        },

        contactPerson: {
            type: String
        },

        email: {
            type: String,
            required: true
        },

        phone: {
            type: String
        },

        address: {
            type: String
        },

        rating: {
            type: Number,
            default: 0
        },

        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE", "BLOCKED"],
            default: "ACTIVE"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Vendor",
    vendorSchema
);