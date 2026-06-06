const Notification =
    require("./notification.model");

exports.createNotification =
    async (req, res) => {

        try {

            const notification =
                await Notification.create(
                    req.body
                );

            res.status(201).json(
                notification
            );

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    };

exports.getNotifications =
    async (req, res) => {

        const notifications =
            await Notification.find()
                .sort({ createdAt: -1 });

        res.json(notifications);
    };

exports.markAsRead =
    async (req, res) => {

        const notification =
            await Notification.findByIdAndUpdate(
                req.params.id,
                { isRead: true },
                { new: true }
            );

        res.json(notification);
    };