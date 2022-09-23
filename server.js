const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT
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

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
// });

app.use(cors());

const Router = require("./src/server/routes");
const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/users");
const updateUserRoutes = require("./src/routes/updateUser");
const addOrder = require("./src/routes/orders");
// Routes
app.use("/", Router);
app.use("/api/auth", authRoutes);
app.use("/api/addUser", userRoutes);
app.use("/api/updateUser/:account", updateUserRoutes);
app.use("/api", addOrder);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});