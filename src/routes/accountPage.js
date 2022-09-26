const express = require("express");
const router = express.Router();
const { User } = require("../models/userModel");
const { OtherSeller } = require("../models/ListProductModel");

router.get("/:id", async (request, response) => {
    var id = request.params.id;
    console.log(id);

    User.findById(id).then((data) => {
        // console.log("Data: ", data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });
});

router.get("/product-listed/:email", async (request, response) => {
    var email = request.params.email;
    console.log(email);

    OtherSeller.find({ emailAddress: email }).then((data) => {
        response.json(data);
    }).catch((error) => {
        console.log(error);
    });
})

module.exports = router;