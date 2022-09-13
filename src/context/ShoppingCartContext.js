import { createContext, useContext, useState } from "react";

const ShoppingCartCxt = createContext({});

export const useMyCartContext = () => useContext(ShoppingCartCxt);

function ShoppingCartContext(props) {

    const [itemQuantity, setItemQuantity] = useState(0);
    const [shoppingCart, setShoppingCart] = useState([]);

    const addItems = (product) => {

        const exist = shoppingCart.find(x => x._id === product._id);
        if (!exist) {

            // Somehow need to click the button twice for it to load
            setShoppingCart([
                ...shoppingCart,
                { ...product, qty: 1 }]);
            
        } else {
            setShoppingCart(shoppingCart.map(x =>
                x._id === product._id ?
                    { ...exist, qty: exist.qty + 1 } : x))
            console.log("Shopping Cart");
            console.log(shoppingCart);
        }
    }

    const Values = {
        itemQuantity, shoppingCart,
        addItems, setShoppingCart
    }
    return (
        <ShoppingCartCxt.Provider value={Values}>
            {props.children}
        </ShoppingCartCxt.Provider>
    );
}

export default ShoppingCartContext