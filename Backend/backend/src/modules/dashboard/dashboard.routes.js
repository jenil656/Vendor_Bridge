const express = require("express");

const router =
    express.Router();

const {
    getDashboardData
}
    =
    require(
        "./dashboard.controller"
    );

router.get(
    "/",
    getDashboardData
);

module.exports =
    router;