const Quotation =
    require("./quotation.model");

exports.createQuotation =
    async (req, res) => {

        try {

            const quotation =
                await Quotation.create({
                    ...req.body,
                    quotationNumber:
                        "QUO-" + Date.now()
                });

            res.status(201).json(
                quotation
            );

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    };

exports.getQuotations =
    async (req, res) => {

        const quotations =
            await Quotation.find()
                .populate("vendorId")
                .populate("rfqId");

        res.json(quotations);
    };

exports.getQuotationById =
    async (req, res) => {

        const quotation =
            await Quotation.findById(
                req.params.id
            )
                .populate("vendorId")
                .populate("rfqId");

        res.json(quotation);
    };

exports.updateQuotation =
    async (req, res) => {

        const quotation =
            await Quotation.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json(quotation);
    };

exports.deleteQuotation =
    async (req, res) => {

        await Quotation.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:
                "Quotation Deleted"
        });
    };