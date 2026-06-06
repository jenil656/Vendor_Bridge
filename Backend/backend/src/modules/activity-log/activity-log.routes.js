const express = require("express");

const router =
    express.Router();

const {
    createLog,
    getLogs,
    getLogById
}
    =
    require(
        "./activity-log.controller"
    );

router.post(
    "/",
    createLog
);

router.get(
    "/",
    getLogs
);

router.get(
    "/:id",
    getLogById
);

module.exports =
    router;
