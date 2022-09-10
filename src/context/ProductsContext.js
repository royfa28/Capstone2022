import { createContext, useContext, useState } from "react";
import Axios from "axios";

const productsCxt = createContext();
export const useMyProductsContext = () => useContext(productsCxt);

function ProductsContext(props) {

    const [products, setProducts] = useState([]);

    const getAllProducts = async() => {
        await Axios.get("/products")
            .then((response) => {
                const data = response.data;
                console.log(data);
                console.log("Data has been retrieved");
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