import React from 'react';
import ProductBanner from "./ProductBanner";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

export default function ProductDetails() {
    return (
        <div>
            <Row>
                <Col>
                    <ProductBanner />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    Game Title
                </Col>

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
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={4} xs={12}>
                    <Card className="Product-Card">
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