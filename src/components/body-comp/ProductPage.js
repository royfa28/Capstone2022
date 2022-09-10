import React from 'react';
import ProductBanner from "./ProductBanner";
import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import { useMyProductsContext } from "../../context/ProductsContext";

export default function ProductPage() {

    let params = useParams();
    console.log(params);

    const { products } = useMyProductsContext();
    console.log(products);

    // console.log("Product Name " + ProductData[Index].productTitle);
    return (
        <div>
            <Row>
                <Col>
                    <ProductBanner />
                </Col>
            </Row>

            <Row>
                {products.productTitle}
            </Row>
            
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
                                {products.productDescription}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={4} xs={12}>
                    <Card>
                        <Card.Body>
                            <p>Genre:</p>
                            <p>Platform:</p>
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