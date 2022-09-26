/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Col, Row, Button, Container } from "react-bootstrap";
import JWTDecode from "jwt-decode";
import "./shoppingCart.css";

import { useMyCartContext } from '../../context/ShoppingCartContext';
import { useMyAccountContext } from '../../context/accountContext';
import { useMyOrderContext } from '../../context/OrderContext';

export default function ShoppingCart() {

    const { shoppingCart, increment, decrement, removeItem, totalPrice, setShoppingCart, setTotalPrice } = useMyCartContext();

    const { accountDetails, viewAccount } = useMyAccountContext();

    const { createOrder } = useMyOrderContext();

    let countTotal = 0;

    // Get the account details
    useEffect(() => {
        // Determine if local storage is empty or not
        if (!localStorage.getItem("token")) { }
        else {
            const decodedToken = JWTDecode(localStorage.getItem("token"));
            viewAccount(decodedToken._id);
        }
    }, [localStorage.getItem("token")]);

    // Get shopping cart into useState if there is local storage
    useEffect(() => {
        const cart = localStorage.getItem("Cart");
        if (cart !== null) setShoppingCart(JSON.parse(cart));
    }, []);

    // Everything the shopping cart was changed, it will reflect on the 'Cart' local storage
    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(shoppingCart));

        // Get total price by looping through the data
        shoppingCart.map(cart => {
            countTotal = parseFloat(cart.subTotal + countTotal);
            // cart.subTotal = cart.qty * cart.productPrice;
        })
        setTotalPrice(parseFloat(countTotal).toFixed(2));
    }, [shoppingCart]);

    // Post the shopping cart into database
    function checkout(cart) {
        // If user is not logged on, alert user to login.
        if (!localStorage.getItem("token")) {
            alert("You need to login");
        } else {
            createOrder(accountDetails, cart, totalPrice);
            localStorage.removeItem("Cart");
            window.location.reload(false);
        }
    }

    return (
        <>
            <Container className="lg-fluid">
                {/* Loop through Shoppingcart data and show in page */}
                <Row className="mt-3">
                    <Col lg={8} md={12}>
                        {shoppingCart.map((data, key) => {
                            return (
                                <Row key={key}>
                                    <Col className="col-2">
                                        <img src="https://picsum.photos/100/150" alt="product"></img>
                                    </Col>
                                    <Col>
                                        {/* Show product name and the platform */}
                                        <Row className="justify-content-center mb-3">
                                            {data.productTitle} - {data.productPlatform}
                                        </Row>

                                        {/* Product Quantity add or decrease */}
                                        <Row>
                                            <Col>
                                                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                                    <Button size="sm" onClick={() => decrement(shoppingCart[key])}> - </Button>
                                                    <div> <span className="fs-5">{shoppingCart[key].qty}</span></div>
                                                    <Button size="sm" onClick={() => increment(shoppingCart[key])}> + </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>

                                    {/* Show each individual price and remove button */}
                                    <Col className="col-2">
                                        <p>
                                            Price: ${data.productPrice}
                                        </p>
                                        <Button onClick={() => removeItem(shoppingCart[key])}>Remove</Button>

                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col lg={4} md={12} className="shoppingCart-Col">
                        <Row className="checkout-section">
                            <Row className="justify-content-between">
                                <Col>
                                    Total price:
                                </Col>
                                <Col className="col-2">
                                    ${totalPrice}
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                {shoppingCart.length === 0 ?
                                    (<Button disabled className="checkout-button" onClick={() => checkout(shoppingCart)}>disabled</Button>)
                                    : <Button className="checkout-button" onClick={() => checkout(shoppingCart)}>Checkout</Button>}

                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
