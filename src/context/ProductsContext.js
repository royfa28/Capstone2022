import { createContext, useContext, useState } from "react";
import Axios from "../axios.js";

const productsCxt = createContext();
export const useMyProductsContext = () => useContext(productsCxt);

function ProductsContext(props) {

    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);

    const getAllProducts = async () => {
        Axios({
            url: `/products`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            setProducts(response.data);
            console.log("Axios work");
        }).catch((error) => {
            // console.log(error);
            console.log("Internal server error");
        })
    }

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

        // await Axios.get("/products/" + id)
        //     .then((response) => {
        //         setSingleProduct(response.data);
        //         console.log(singleProduct);
        //     }).catch(() => {
        //         console.log("Internal server error");
        //     })
    }

    const Values = {
        products, singleProduct,
        getAllProducts, getSingleProduct
    }

    return (
        <productsCxt.Provider value={Values}>
            {props.children}
        </productsCxt.Provider>
    )
}

export default ProductsContext;