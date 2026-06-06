const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema(
    {
        quotationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quotation",
            required: true
        },

        approverName: {
            type: String,
            required: true
        },

        remarks: {
            type: String
        },

        status: {
            type: String,
            enum: [
                "PENDING",
                "APPROVED",
                "REJECTED"
            ],
            default: "PENDING"
        }
    },
    {
        timestamps: true
    });

module.exports =
    mongoose.model(
        "Approval",
        approvalSchema
    );