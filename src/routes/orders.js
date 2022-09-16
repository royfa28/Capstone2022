const router = require("express").Router();
const { ShoppingCart } = require("../models/OrderModel");

router.post("/", async (request, response) => {

    try {
        // console.log(request.body.orderDetails);
        // console.log(request.body);

        await new ShoppingCart({
            emailAddress: request.body.emailAddress,
            orderDate: request.body.orderDate,
            totalPrice: request.body.totalPrice,
            orderDetails: request.body.orderDetails,
        }).save();
        response.status(201).send({ message: "Purchase successful!!!" });
    } catch (error) {
        response.status(500).send({ message: error });
    }

})

module.exports = router;