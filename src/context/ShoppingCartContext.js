import { createContext, useContext } from "react";

const ShoppingCartCxt = createContext({});

export const useMyCartContext = () => useContext(ShoppingCartCxt);

function ShoppingCartContext(props) {

    return (
        <ShoppingCartCxt.Provider value={{}}>
            {props.children}
        </ShoppingCartCxt.Provider>
    );
}

export default ShoppingCartContext