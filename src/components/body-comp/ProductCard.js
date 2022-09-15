import React, { useEffect } from 'react'
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Spiderman from '../../assets/Product Image/Spiderman.jpg';
import { useMyProductsContext } from "../../context/ProductsContext";
import { useMyCartContext } from '../../context/ShoppingCartContext';
import "./ProductCard.css";

export default function ProductCard() {

    const { products } = useMyProductsContext();
    const { addItems, shoppingCart, increment, decrement, removeItem, setShoppingCart, setTotalPrice } = useMyCartContext();

    let countTotal = 0;
    function addToCart(product) {
        addItems(product);
    }

    function getIndex(_id) {
        return shoppingCart.findIndex(e => e._id === _id);
    }

    // Get shopping cart into useState if there is local storage
    useEffect(() => {
        const cart = localStorage.getItem("Cart");
        if (cart !== null) setShoppingCart(JSON.parse(cart));
    }, []);

    // Save to local storage everytime shoppingcart array change
    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(shoppingCart));

        // Get total price by looping through the data
        shoppingCart.map(cart => {
            countTotal =+ parseFloat(cart.subTotal + countTotal);
            // cart.subTotal = cart.qty * cart.productPrice;
        })
        setTotalPrice(countTotal);
    }, [shoppingCart]);

    return (
        <Row xs={1} md={4} xl={6} lg={5} className="g-4">
            {/* {console.log(shoppingCart)} */}
            {products.map((data, index) => {
                const item = {
                    _id: data._id,
                    productPrice: data.productPrice,
                    productTitle: data.productTitle,
                    productPlatform: data.productPlatform,
                }

                return (
                    <Col key={index}>
                        <Card className="Product-Card h-100">
                            {/* {console.log(shoppingCart[cartIndex])} */}
                            <Link to={"/ProductPage/" + data._id} >
                                {/* Game picture */}
                                <Card.Img variant="top" src={Spiderman} />

                                <Card.Body>
                                    <Card.Title className="align-items-baseline">
                                        <p>{data.productTitle}</p>
                                        <p className="text-muted">{data.productPrice}</p>
                                    </Card.Title>
                                </Card.Body>
                            </Link>
                            <Card.Footer className="mt-auto" style={{ padding: "0px" }}>
                                {/* If shopping cart not initialized will show as true, and render first option */}
                                {shoppingCart[getIndex(data._id)] === undefined ? (
                                    <Button className="w-100" onClick={() => addToCart(item)}>Add to cart</Button>
                                ) :
                                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                            <Button size="sm" onClick={() => decrement(shoppingCart[getIndex(data._id)])}> - </Button>
                                            <div> <span className="fs-5">{shoppingCart[getIndex(data._id)].qty}</span> in cart</div>
                                            <Button size="sm" onClick={() => increment(shoppingCart[getIndex(data._id)])}> + </Button>
                                        </div>

                                        <Button variant="danger" size="sm" onClick={() => removeItem(shoppingCart[getIndex(data._id)])}> Remove </Button>
                                    </div>
                                }
                            </Card.Footer>

                        </Card>
                    </Col>
                )
            })}

        </Row >
    )
}