const express = require("express");

const router =
    express.Router();

const {
    createApproval,
    getApprovals,
    getApprovalById,
    updateApproval
}
    =
    require(
        "./approval.controller"
    );

router.post(
    "/",
    createApproval
);

router.get(
    "/",
    getApprovals
);

router.get(
    "/:id",
    getApprovalById
);

router.put(
    "/:id",
    updateApproval
);

module.exports =
    router;