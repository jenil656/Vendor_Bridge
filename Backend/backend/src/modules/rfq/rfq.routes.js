const express = require("express");

const router = express.Router();

const {
    createRFQ,
    getRFQs,
    getRFQById,
    updateRFQ,
    deleteRFQ
}
    =
    require("./rfq.controller");

router.post("/", createRFQ);

router.get("/", getRFQs);

router.get("/:id", getRFQById);

router.put("/:id", updateRFQ);

router.delete("/:id", deleteRFQ);

module.exports = router;