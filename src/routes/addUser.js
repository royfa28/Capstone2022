const router = require("express").Router();
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { User } = require("../models/userModel");

router.post("/", async (request, response) => {

    try {
        console.log(request.body);
        const { error } = validate(request.body);
        console.log("try");
        if (error)
            return response.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ emailAddress: request.body.emailAddress });
        if (user)
            return response.status(409).send({ message: "User with given email already exist" });

        await new User({ ...request.body }).save();
        response.status(201).send({ message: "User created successfully" });
    } catch (error) {
        response.status(500).send({ message: "Internal server error =cccc" });
    }
});

const validate = (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required().label("Full Name"),
        emailAddress: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        phoneNumber: Joi.string().required().label("Phone Number"),
    });
    return schema.validate(data);
}

// Find all users
// router.get("/users", async (request, response) => {
//     const users = await User.find({});

//     try {
//         response.send(users);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

module.exports = router;