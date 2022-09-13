const express = require("express");
const router = express.Router();
const { User } = require("../models/userModel");
const productModel = require("../models/productModel");

// router.post("/add_user", async (request, response) => {
//     // console.log("Body: ", request.body);
//     const userData = request.body;

//     // Create new class to hold the user model
//     const newUser = new User(userData);

//     // Save it
//     newUser.save((error) => {
//         if (error) {
//             response.status(500).json({ msg: "Sorry internal server error" });
//         } else {
//             response.json({ msg: "We receive your package" });
//         }
//     })
// });

// Find all users
// router.get("/users", async (request, response) => {
//     const users = await User.find({});

//     try {
//         response.send(users);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

// Find users based on email can be used for validating
router.get("/user/:email", async (request, response) => {
    console.log(request.params.email);

    User.find({ emailAddress: request.params.email }).then((data) => {
        console.log("Data: ", data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });
});

router.post("/add_product", async (request, response) => {
    const product = new productModel(request.body);

    try {
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/products", async (request, response) => {

    productModel.find({}).then((data) => {
        console.log("Data: ", data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });

    // response.json(data);
});

// Find products by ID -> On Click
router.get("/products/:id", async (request, response) => {
    var id = request.params.id;
    console.log(id);

    productModel.findById(id).then((data) => {
        console.log("Data: ", data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });

    // response.json(data);
});

module.exports = router;