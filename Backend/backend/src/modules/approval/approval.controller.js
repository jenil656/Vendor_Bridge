const Approval =
    require("./approval.model");

exports.createApproval =
    async (req, res) => {

        try {

            const approval =
                await Approval.create(
                    req.body
                );

            res.status(201).json(
                approval
            );

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    };

exports.getApprovals =
    async (req, res) => {

        const approvals =
            await Approval.find()
                .populate("quotationId");

        res.json(approvals);
    };

exports.getApprovalById =
    async (req, res) => {

        const approval =
            await Approval.findById(
                req.params.id
            )
                .populate("quotationId");

        res.json(approval);
    };

exports.updateApproval =
    async (req, res) => {

        const approval =
            await Approval.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json(approval);
    };