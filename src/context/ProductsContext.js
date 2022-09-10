import { createContext, useContext, useState } from "react";
import Axios from "axios";

const productsCxt = createContext();
export const useMyProductsContext = () => useContext(productsCxt);

function ProductsContext(props) {

    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);

    const getAllProducts = async() => {
        await Axios.get("/products")
            .then((response) => {
                setProducts(response.data);
                console.log(products);
            }).catch(() => {
                console.log("Internal server error");
            })
    }

    const getSingleProduct = async(id) => {
        await Axios.get("/products/" + id)
            .then((response) => {
                setSingleProduct(response.data);
                console.log(singleProduct);
            }).catch(() => {
                console.log("Internal server error");
            })
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