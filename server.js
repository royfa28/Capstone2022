const express = require("express");
const mongoose = require("mongoose");
const Router = require("./src/server/routes")

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

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
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use("/", Router);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});