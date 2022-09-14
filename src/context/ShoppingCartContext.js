import { createContext, useContext, useState } from "react";

const ShoppingCartCxt = createContext({});

export const useMyCartContext = () => useContext(ShoppingCartCxt);

function ShoppingCartContext(props) {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addItems = (product) => {

        const exist = shoppingCart.find(x => x._id === product._id);
        if (!exist) {

            // Somehow need to click the button twice for it to load
            setShoppingCart([
                ...shoppingCart,
                { ...product, qty: 1 }]);

        }
    }

    const increment = (product) => {
        if (product.qty >= 5) {
            alert("Can only put 5 items max");
        } else {
            setShoppingCart(shoppingCart.map(x =>
                x._id === product._id ? { ...product, qty: product.qty + 1 } : x))
        }
    }

    const decrement = (product) => {
        if (product.qty <= 1) {
            removeItem(product);
        } else {
            setShoppingCart(shoppingCart.map(x =>
                x._id === product._id ?
                    { ...product, qty: product.qty - 1 } : x))
        }
    }

    const removeItem = (product) => {
        setShoppingCart(shoppingCart.filter(cart => {
            return cart._id !== product._id;
        }))
    }

    const Values = {
        shoppingCart,
        addItems, setShoppingCart, increment, decrement, removeItem
    }
    return (
        <ShoppingCartCxt.Provider value={Values}>
            {props.children}
        </ShoppingCartCxt.Provider>
    );
}

export default ShoppingCartContext