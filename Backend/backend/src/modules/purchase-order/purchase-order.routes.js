const express = require("express");

const router =
    express.Router();

const {
    createPO,
    getPOs,
    getPOById,
    updatePO,
    deletePO
}
    =
    require(
        "./purchase-order.controller"
    );

router.post(
    "/",
    createPO
);

router.get(
    "/",
    getPOs
);

router.get(
    "/:id",
    getPOById
);

router.put(
    "/:id",
    updatePO
);

router.delete(
    "/:id",
    deletePO
);

module.exports =
    router;
