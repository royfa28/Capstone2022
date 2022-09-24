const express = require("express");
const router = express.Router();
const { User } = require("../models/userModel");

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

module.exports = router;