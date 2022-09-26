/* eslint-disable array-callback-return */
import { createContext, useContext, useState } from "react";
import moment from "moment";
import Axios from "../axios";

const OrderCxt = createContext({});

export const useMyOrderContext = () => useContext(OrderCxt);

// Middleware for interaction between Orders
function OrderContext(props) {

    const [orderHistory, setOrderHistory] = useState([]);
    const [singleHistory, setSingleHistory] = useState([]);

    // Post the order into database
    const createOrder = (account, product, totalPrice) => {
        var date = moment(new Date()).format('MMMM Do YYYY');
        console.log(date);

        // Create variables to bse used later
        let orderData = [];
        let orderDetail = [];
        product.map((item) => {
            // Get data from the product and parse some of it into new array
            orderDetail.push({
                productID: item._id,
                productPrice: item.productPrice,
                qty: item.qty,
                productTitle: item.productTitle,
            });
        })
        // Create a new array, where we input the order detail array inside
        orderData = {
            emailAddress: account.emailAddress,
            orderDate: date,
            totalPrice: totalPrice,
            orderDetails: orderDetail
        }
        console.log(orderData);

        Axios({
            url: `api/addOrder/${orderData}`,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: orderData,
        }).then((response) => {
            // console.log("Success");
            // Remove local storage upon successfull
            localStorage.removeItem("Cart");
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }

    // View all orders based on the customer email address
    const viewOrders = async (email) => {
        Axios({
            url: `api/allOrders/${email}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            // console.log(response.data);
            setOrderHistory(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    // Get single order history based on the order clicked
    const getSingleHistory = async (orderID) => {
        console.log(orderID);
        Axios({
            url: `api/${orderID}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            console.log(response.data);
            setSingleHistory(response.data);
        }).catch((error) => {
            console.log(error);
            console.log("Internal server error");
        });
    }

    const Values = {
        orderHistory, singleHistory,
        createOrder, viewOrders, getSingleHistory
    }
    return (
        <OrderCxt.Provider value={Values}>
            {props.children}
        </OrderCxt.Provider>
    )
}

export default OrderContext