import { createContext, useContext, useState } from "react";
import Axios from "axios";

const productsCxt = createContext();
export const useMyProductsContext = () => useContext(productsCxt);

function ProductsContext(props) {

    const [products, setProducts] = useState([]);

    const getAllProducts = async() => {
        await Axios.get("/products")
            .then((response) => {
                setProducts(response.data);
                console.log(products);
            }).catch(() => {
                console.log("Internal server error");
            })
    }

    const Values = {
        products,
        getAllProducts,
    }

    return (
        <productsCxt.Provider value={Values}>
            {props.children}
        </productsCxt.Provider>
    )
}

export default ProductsContext;