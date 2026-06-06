const ActivityLog =
    require("./activity-log.model");

exports.createLog =
    async (req, res) => {

        try {

            const log =
                await ActivityLog.create(
                    req.body
                );

            res.status(201).json(log);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    };

exports.getLogs =
    async (req, res) => {

        const logs =
            await ActivityLog.find()
                .sort({ createdAt: -1 });

        res.json(logs);
    };

exports.getLogById =
    async (req, res) => {

        const log =
            await ActivityLog.findById(
                req.params.id
            );

        res.json(log);
    };
