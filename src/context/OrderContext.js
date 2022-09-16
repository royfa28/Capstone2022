import { createContext, useContext } from "react";
import moment from "moment";
import Axios from "axios";

const OrderCxt = createContext({});

export const useMyOrderContext = () => useContext(OrderCxt);

function OrderContext(props) {

    const createOrder = (account, product, totalPrice) => {
        var date = moment(new Date()).format('MMMM Do YYYY');
        console.log(date);
        let orderData = [];
        let orderDetail = [];
        product.map((item, index) => {
            orderDetail.push({
                productID: item._id,
                productPrice: item.productPrice,
            });
        })
        orderData =
        {
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
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const Values = {
        createOrder
    }
    return (
        <OrderCxt.Provider value={Values}>
            {props.children}
        </OrderCxt.Provider>
    )
}

export default OrderContext