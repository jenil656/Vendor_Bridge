const Invoice =
    require("./invoice.model");

exports.createInvoice =
    async (req, res) => {

        try {

            const invoice =
                await Invoice.create({

                    ...req.body,

                    invoiceNumber:
                        "INV-" + Date.now()

                });

            res.status(201).json(
                invoice
            );

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    };

exports.getInvoices =
    async (req, res) => {

        const invoices =
            await Invoice.find()
                .populate("vendorId")
                .populate("purchaseOrderId");

        res.json(invoices);
    };

exports.getInvoiceById =
    async (req, res) => {

        const invoice =
            await Invoice.findById(
                req.params.id
            )
                .populate("vendorId")
                .populate("purchaseOrderId");

        res.json(invoice);
    };

exports.updateInvoice =
    async (req, res) => {

        const invoice =
            await Invoice.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json(invoice);
    };