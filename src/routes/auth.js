const router = require("express").Router();
const { User } = require("../models/userModel");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";

router.post("/", async (request, response) => {
    try {
        const { error } = validate(request.body);

        if (error)
            return response.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ emailAddress: request.body.emailAddress });
        if (!user)
            return response.status(401).send({ message: "Invalid Email or Password" });
        if (request.body.password === user.password) {
            const token = jwt.sign({
                _id: user._id,
                emailAddress: user.emailAddress
            }, JWT_SECRET );
            // const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" });
            console.log(token);
            // response.status(200).send({ message: "Logged in successfull" });
            console.log("Login successful");
            return response.status(200).send({ message: "ok", accessToken: token });
        }

        return response.status(401).send({ message: "Invalid email or password" });

    } catch (error) {
        response.status(500).send({ message: "Internal server error" });
    }
})

const validate = (data) => {
    const schema = Joi.object({
        emailAddress: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = router;