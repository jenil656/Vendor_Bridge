const PurchaseOrder =
    require("./purchase-order.model");

exports.createPO =
    async (req, res) => {

        try {

            const po =
                await PurchaseOrder.create({

                    ...req.body,

                    poNumber:
                        "PO-" + Date.now()

                });

            res.status(201).json(po);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    };

exports.getPOs =
    async (req, res) => {

        const pos =
            await PurchaseOrder.find()
                .populate("quotationId")
                .populate("vendorId");

        res.json(pos);
    };

exports.getPOById =
    async (req, res) => {

        const po =
            await PurchaseOrder.findById(
                req.params.id
            )
                .populate("quotationId")
                .populate("vendorId");

        res.json(po);
    };

exports.updatePO =
    async (req, res) => {

        const po =
            await PurchaseOrder
                .findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true }
                );

        res.json(po);
    };

exports.deletePO =
    async (req, res) => {

        await PurchaseOrder.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "PO Deleted"
        });
    };
