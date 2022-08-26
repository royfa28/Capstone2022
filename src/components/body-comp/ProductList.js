import React from 'react';
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from './ProductCard';

export default function ProductList() {

    let params = useParams();
    let productListText = "";
    console.log(params);

    if (params.consoleType != null) {
        productListText = "Console tpye is " + params.consoleType;
    } else { productListText = "" }

    return (
        <div className="container-lg">
            {productListText}

            <Row className="Card-Row">
                <Col xs={12} md={4} lg={3} xl={2}>
                    <ProductCard />
                </Col>

                <Col xs={12} md={4} lg={3} xl={2}>
                    <ProductCard />
                </Col>

                <Col xs={12} md={4} lg={3} xl={2}>
                    <ProductCard />
                </Col>

                <Col xs={12} md={4} lg={3} xl={2}>
                    <ProductCard />
                </Col>

                <Col xs={12} md={4} lg={3} xl={2}>
                    <ProductCard />
                </Col>

                <Col xs={12} md={4} lg={3} xl={2}>
                    <ProductCard />
                </Col>

                <Col xs={12} md={4} lg={3} xl={2}>
                    <ProductCard />
                </Col>




                {/* <Card className="Product-Card" md={4} lg={3} xl={2}>
                    <Card.Img className="Card-Image" variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card> */}
            </Row>
        </div>
    )
}