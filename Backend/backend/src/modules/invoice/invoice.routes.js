const express = require("express");

const router =
    express.Router();

const {
    createInvoice,
    getInvoices,
    getInvoiceById,
    updateInvoice
}
    =
    require(
        "./invoice.controller"
    );

router.post(
    "/",
    createInvoice
);

router.get(
    "/",
    getInvoices
);

router.get(
    "/:id",
    getInvoiceById
);

router.put(
    "/:id",
    updateInvoice
);

module.exports =
    router;