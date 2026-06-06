const Vendor = require("./vendor.model");

exports.createVendor = async (req, res) => {
    try {

        const vendor =
            await Vendor.create(req.body);

        res.status(201).json(vendor);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

exports.getVendors = async (req, res) => {

    const vendors =
        await Vendor.find();

    res.json(vendors);
};

exports.getVendorById = async (req, res) => {

    const vendor =
        await Vendor.findById(
            req.params.id
        );

    res.json(vendor);
};

exports.updateVendor = async (req, res) => {

    const vendor =
        await Vendor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

    res.json(vendor);
};

exports.deleteVendor = async (req, res) => {

    await Vendor.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: "Vendor Deleted"
    });
};