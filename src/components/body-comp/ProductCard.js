import React, { useContext } from 'react'
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Spiderman from '../../assets/Product Image/Spiderman.jpg';
import { useMyProductsContext } from "../../context/ProductsContext";
import { useMyCartContext } from '../../context/ShoppingCartContext';
import "./ProductCard.css";

export default function ProductCard() {

    const { products } = useMyProductsContext();
    const { addItems, shoppingCart, increment, decrement, removeItem } = useMyCartContext();

    let cartIndex;
    function addToCart(product) {
        addItems(product);
    }

    function getIndex(_id) {
        cartIndex = shoppingCart.findIndex(e => e._id === _id);
    }

    return (
        <Row xs={1} md={4} xl={6} lg={5} className="g-4">
            {products.map((data, index) => {
                const item = {
                    _id: data._id,
                    productPrice: data.productPrice,
                    productTitle: data.productTitle,
                }
                getIndex(data._id)
                // {console.log(item)}
                return (
                    <Col key={index}>
                        {console.log(shoppingCart)}
                        <Card className="Product-Card h-100">
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
                                {shoppingCart[cartIndex] === undefined ? (
                                    <Button className="w-100" onClick={() => addToCart(item)}>Add to cart</Button>
                                ) :
                                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                            <Button size="sm" onClick={() => decrement(shoppingCart[cartIndex])}> - </Button>
                                            <div> <span className="fs-5">{shoppingCart[cartIndex].qty}</span> in cart</div>
                                            <Button size="sm" onClick={() => increment(shoppingCart[cartIndex])}> + </Button>
                                        </div>

                                        <Button variant="danger" size="sm" onClick={() => removeItem(shoppingCart[cartIndex])}> Remove </Button>
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