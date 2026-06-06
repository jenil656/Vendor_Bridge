const express = require("express");

const router = express.Router();

const {
    getDashboardReport
} = require("./report.controller");

router.get(
    "/dashboard",
    getDashboardReport
);

module.exports = router;