import React from 'react'
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Spiderman from '../../assets/Product Image/Spiderman.jpg';
import { useMyProductsContext } from "../../context/ProductsContext";
import "./ProductCard.css";

export default function ProductCard() {

    const { products } = useMyProductsContext();
    console.log(products);

    const quantity = 1;

    return (
        <Row xs={1} md={4} xl={6} lg={5} className="g-4">
            {products.map((data, key) => {
                return (
                    <Col>
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
                                {quantity === 0 ? (
                                    <Button className="w-100">Add to cart</Button>
                                ) :
                                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                            <Button size="sm"> - </Button>
                                            <div> <span className="fs-5">{quantity}</span> in cart</div>
                                            <Button size="sm"> + </Button>
                                        </div>

                                        <Button variant="danger" size="sm"> Remove </Button>
                                    </div>}
                            </Card.Footer>

                        </Card>
                    </Col>
                )
            })}

        </Row >
    )
}