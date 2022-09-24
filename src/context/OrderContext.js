import { createContext, useContext, useState } from "react";
import moment from "moment";
import Axios from "../axios";

const OrderCxt = createContext({});

export const useMyOrderContext = () => useContext(OrderCxt);

function OrderContext(props) {

    const [orderHistory, setOrderHistory] = useState([]);
    const [singleHistory, setSingleHistory] = useState([]);

    const createOrder = (account, product, totalPrice) => {
        var date = moment(new Date()).format('MMMM Do YYYY');
        console.log(date);
        let orderData = [];
        let orderDetail = [];
        product.map((item, index) => {
            orderDetail.push({
                productID: item._id,
                productPrice: item.productPrice,
                qty: item.qty,
                productTitle: item.productTitle,
            });
        })
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
            localStorage.removeItem("Cart");
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }

    const viewOrders = async (email) => {
        Axios({
            url: `api/allOrders/${email}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            // console.log("Success");
            console.log(response.data);
            setOrderHistory(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    // Get single order history
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