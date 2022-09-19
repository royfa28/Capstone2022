const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");
const { User } = require("../models/userModel");

// Find all users
// router.get("/users", async (request, response) => {
//     const users = await User.find({});

//     try {
//         response.send(users);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

// Find products by ID -> On Click
router.get("/Account_Page/:id", async (request, response) => {
    var id = request.params.id;
    console.log(id);

    User.findById(id).then((data) => {
        // console.log("Data: ", data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });
});

// const showTodos = async (id) => {
//     // This function will be called by TodoViewComp
//     await Axios.get(`https://iod-todo-backend.herokuapp.com/todo/${id}`)
//         .then((res) => {
//             if (res.status === 200) {
//                 setSingleTodo(res.data);
//             }
//         }).catch((err) => {
//             console.log(err);
//         })
// };

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
        // console.log("Data: ", data);
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
});

module.exports = router;