const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/userModel");

router.post("/add_user", async (request, response) => {
    // console.log("Body: ", request.body);
    const userData = request.body;

    // Create new class to hold the user model
    const newUser = new User(userData);

    try {
        const { error } = validate(request.body);
        if (error)
            return response.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ emailAddress: request.body.emailAddress });
        if (user)
            return response.status(409).send({ message: "User with given email already exist" });

        await new User({ ...request.body }).save();
        response.status(201).send({ message: "User created successfully" });
    } catch (error) {
        response.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;