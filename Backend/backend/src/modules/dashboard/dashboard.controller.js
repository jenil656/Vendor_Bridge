const Vendor =
    require("../vendor/vendor.model");

const RFQ =
    require("../rfq/rfq.model");

const Quotation =
    require("../quotation/quotation.model");

const PurchaseOrder =
    require("../purchase-order/purchase-order.model");

const Invoice =
    require("../invoice/invoice.model");

exports.getDashboardData =
    async (req, res) => {

        try {

            const totalVendors =
                await Vendor.countDocuments();

            const totalRFQs =
                await RFQ.countDocuments();

            const totalQuotations =
                await Quotation.countDocuments();

            const totalPOs =
                await PurchaseOrder.countDocuments();

            const totalInvoices =
                await Invoice.countDocuments();

            res.json({

                totalVendors,

                totalRFQs,

                totalQuotations,

                totalPOs,

                totalInvoices

            });

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    };
