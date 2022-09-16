const router = require("express").Router();
const { User } = require("../models/userModel");

router.put("/", async (request, response) => {
    //You can pass req.body directly or you can separate object
    
    const update = {
        fullName: request.body.fullName,
        address: request.body.address,
        phoneNumber: request.body.phoneNumber,
    }
    const filter = {emailAddress: request.body.emailAddress}
    const updatedDocument = await User.findOneAndUpdate(filter, update);
    return response.status(200).send(updatedDocument);
});

module.exports = router;