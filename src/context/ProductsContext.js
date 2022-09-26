import { createContext, useContext, useState } from "react";
import Axios from "../axios.js";

const productsCxt = createContext();
export const useMyProductsContext = () => useContext(productsCxt);

function ProductsContext(props) {

    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);
    const [otherSellers, setOtherSellers] = useState([]);

    // Get all products from database
    const getAllProducts = async () => {
        Axios({
            url: `/products`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            // console.log(error);
            console.log("Internal server error");
        })
    }

    // Get single product details based on the product clicked
    const getSingleProduct = async (id) => {
        Axios({
            url: `/products/${id}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            setSingleProduct(response.data);
        }).catch((error) => {
            console.log("Internal server error");
        })
    }

    // Get all other sellers that sell the product
    const getOtherSeller = async (productID) => {
        Axios({
            url: `/OtherSeller/${productID}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            setOtherSellers(response.data);
            // console.log("Axios work");
        }).catch((error) => {
            // console.log(error);
            console.log("Internal server error");
        })
    }

    // Call the router at listProduct.js
    const listProduct = async (productID, productPrice, emailAddress) => {
        const productData = {
            productID: productID,
            productPrice: productPrice,
            emailAddress: emailAddress,
        }
        Axios({
            url: `List-Product/${productData}`,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: productData,
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const Values = {
        products, singleProduct, otherSellers,
        getAllProducts, getSingleProduct, listProduct, getOtherSeller
    }

    return (
        <productsCxt.Provider value={Values}>
            {props.children}
        </productsCxt.Provider>
    )
}

export default ProductsContext;