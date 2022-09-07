import { createContext, useContext, useState } from "react";

const ShoppingCartCxt = createContext({});

export const useMyCartContext = () => useContext(ShoppingCartCxt);

function ShoppingCartContext(props) {
    
    const [cart, setCart] = useState();
    const quantity = useState(0);

    return (
        <ShoppingCartCxt.Provider value={{}}>
            {props.children}
        </ShoppingCartCxt.Provider>
    );
}

export default ShoppingCartContext