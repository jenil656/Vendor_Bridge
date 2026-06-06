const express = require("express");

const router = express.Router();

const {
    createVendor,
    getVendors,
    getVendorById,
    updateVendor,
    deleteVendor
} = require("./vendor.controller");

router.post("/", createVendor);

router.get("/", getVendors);

router.get("/:id", getVendorById);

router.put("/:id", updateVendor);

router.delete("/:id", deleteVendor);

module.exports = router;