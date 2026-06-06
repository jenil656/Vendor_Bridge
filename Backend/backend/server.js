const path = require("path");

require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

const connectDB =
    require("./src/config/db");

const app =
    require("./src/app");

const PORT =
    process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(
            `Server Running On Port ${PORT}`
        );
    });
};

startServer();
