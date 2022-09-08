const express = require("express");
const userModel  = require("./models");
const productModel = require("./models");
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/add_product", async (request, response) => {
    const product = new productModel(request.body);

    try {
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/products", async (request, response) => {
    const products = await productModel.find({});

    try {
        response.send(products);
        console.log(products);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;