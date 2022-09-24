const router = require("express").Router();
const { Order } = require("../models/OrderModel");

router.post("/addOrder/:order", async (request, response) => {
    try {
        await new Order({
            emailAddress: request.body.emailAddress,
            orderDate: request.body.orderDate,
            totalPrice: request.body.totalPrice,
            orderDetails: request.body.orderDetails,
        }).save();
        response.status(201).send({ message: "Purchase successful!!!" });
    } catch (error) {
        response.status(500).send({ message: error });
    }
});

router.get("/allOrders/:email", async (request, response) => {
    // console.log(request.params);
    Order.find({ emailAddress: request.params.email })
        .then((data) => {
            // console.log(data);
            response.json(data);
        }).catch((error) => {
            console.log("error", error);
        });
})

router.get("/:orderID", async (request, response) => {
    var id = request.params.orderID;
    console.log("Test");

    Order.findById(id).then((data) => {
        // console.log("Data: ", data);
        response.json(data.orderDetails);
    }).catch((error) => {
        console.log("error", error);
    });
});

module.exports = router;