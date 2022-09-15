import React, { useEffect } from 'react';
import { Card, Col, Row, Button, Container } from "react-bootstrap";

import { useMyCartContext } from '../../context/ShoppingCartContext';

export default function ShoppingCart() {

    const { shoppingCart, increment, decrement, removeItem, totalPrice, setShoppingCart, setTotalPrice } = useMyCartContext();
    let countTotal = 0;

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(shoppingCart));

        // Get total price by looping through the data
        shoppingCart.map(cart => {
            countTotal = + parseFloat(cart.subTotal + countTotal);
            // cart.subTotal = cart.qty * cart.productPrice;
        })
        setTotalPrice(countTotal);
    }, [shoppingCart]);

    return (
        <>
            <Container fluid>
                {shoppingCart.map((data, key) => {
                    return (
                        <Row className="mt-3">
                            <Col className="col-2">
                                <img src="https://picsum.photos/100/150"></img>
                            </Col>
                            <Col>
                                <Row className="justify-content-center mb-3">
                                    {data.productTitle} - {data.productPlatform}
                                </Row>
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
                            <Col className="col-2">
                                <Row className="justify-content-center mb-3">
                                    Price: {data.productPrice}
                                </Row>
                                <Row>
                                    <Button>Remove</Button>
                                </Row>
                            </Col>
                        </Row>

                    )
                })}

                <Row>
                    <Col>
                        Total price:
                    </Col>
                    <Col className="col-2">
                        ${totalPrice}
                    </Col>
                </Row>
            </Container >
        </>
    )
}