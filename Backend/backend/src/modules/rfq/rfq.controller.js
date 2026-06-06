const RFQ = require("./rfq.model");

exports.createRFQ = async (req, res) => {

    try {

        const rfq =
            await RFQ.create(req.body);

        res.status(201).json(rfq);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

exports.getRFQs = async (req, res) => {

    const rfqs =
        await RFQ.find()
            .populate("vendors");

    res.json(rfqs);
};

exports.getRFQById = async (req, res) => {

    const rfq =
        await RFQ.findById(
            req.params.id
        )
            .populate("vendors");

    res.json(rfq);
};

exports.updateRFQ = async (req, res) => {

    const rfq =
        await RFQ.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

    res.json(rfq);
};

exports.deleteRFQ = async (req, res) => {

    await RFQ.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: "RFQ Deleted"
    });
};