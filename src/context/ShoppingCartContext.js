import { createContext, useContext, useState } from "react";

const ShoppingCartCxt = createContext({});

export const useMyCartContext = () => useContext(ShoppingCartCxt);

function ShoppingCartContext(props) {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

    const addItems = (product) => {
        const exist = shoppingCart.find(x => x._id === product._id);
        if (!exist) {
            setShoppingCart([...shoppingCart, {
                ...product,
                qty: 1,
                subTotal: parseFloat(product.productPrice)
            }]);
        }
    }

    const increment = (product) => {
        if (product.qty >= 5) {
            alert("Can only put 5 items max");
        } else {
            setShoppingCart(shoppingCart.map(x =>
                x._id === product._id ? {
                    ...product,
                    qty: product.qty + 1,
                    subTotal: parseFloat((product.qty + 1) * product.productPrice)
                } : x))
        }
    }

    const decrement = (product) => {
        if (product.qty <= 1) {
            removeItem(product);
        } else {
            setShoppingCart(shoppingCart.map(x =>
                x._id === product._id ? {
                    ...product,
                    qty: product.qty - 1,
                    subTotal: parseFloat((product.qty - 1) * product.productPrice)
                } : x))
        }
    }

    const removeItem = (product) => {
        setShoppingCart(shoppingCart.filter(cart => {
            return cart._id !== product._id;
        }))
    }

    const Values = {
        shoppingCart, totalPrice,
        addItems, setShoppingCart, increment, decrement, removeItem, setTotalPrice
    }

    return (
        <ShoppingCartCxt.Provider value={Values}>
            {props.children}
        </ShoppingCartCxt.Provider>
    );
}

export default ShoppingCartContext