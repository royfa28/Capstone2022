import React, { useEffect } from 'react';
import ProductBanner from "./ProductBanner";
import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import { useMyProductsContext } from "../../context/ProductsContext";

export default function ProductPage() {

    let id = useParams();

    const { singleProduct, getSingleProduct } = useMyProductsContext();

    useEffect(() => {
        getSingleProduct(id.productID);
        const interval = setInterval(() => {
            getSingleProduct(id.productID);
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, [id.productID]);
    console.log(singleProduct);

    return (
        <div>
            <Row>
                <Col><ProductBanner /></Col>
            </Row>

            <Row> {singleProduct.productTitle} </Row>

            <Row>
                <Col md={8} xs={12}>
                    <Card>
                        <Card.Header>
                            <Nav justify="true" variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                    <Nav.Link href="#first">Product Details</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link href="#second">Other Sellers</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>

                        <Card.Body>
                            <Card.Text>
                                {singleProduct.productDescription}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={4} xs={12}>
                    <Card>
                        <Card.Body>
                            <p>Genre: {singleProduct.productGenre}</p>
                            <p>Platform: {singleProduct.productPlatform}</p>
                        </Card.Body>

                        <Card.Footer>
                            Add to cart
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}