const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080
// const { USER, PASSWORD, CLUSTERNAME, DBNAME } = process.env;
// console.log(USER, PASSWORD, CLUSTERNAME, DBNAME);

const USER = "royfelix"
const PASSWORD = "Royfelix2802"
const CLUSTERNAME = "games2sell.lmxutq1"
const DBNAME = "MyDatabase"

mongoose.connect(
    `mongodb+srv://${USER}:${PASSWORD}@${CLUSTERNAME}.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
});

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const productsRoutes = require("./src/routes/products");
const authRoutes = require("./src/routes/auth");
const addUserRoutes = require("./src/routes/addUser");
const updateUserRoutes = require("./src/routes/updateUser");
const accountRoutes = require("./src/routes/accountPage")
const ordersRoutes = require("./src/routes/orders");
const listProductRoutes = require("./src/routes/listProduct");

app.use(cors());

// Routes
app.use("/", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/addUser", addUserRoutes);
app.use("/api/updateUser/:account", updateUserRoutes);
app.use("/Account_Page", accountRoutes);
app.use("/api", ordersRoutes);
app.use("/List-Product", listProductRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});