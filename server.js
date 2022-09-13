const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Router = require("./src/server/routes");
const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/users");

const app = express();
const PORT = process.env.PORT || 8080

const username = "royfelix";
const password = "Royfelix2802";
const cluster = "games2sell.lmxutq1";
const dbname = "MyDatabase";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
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


// Routes
app.use("/", Router);
app.use("/api/auth", authRoutes);
app.use("/api/addUser", userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});