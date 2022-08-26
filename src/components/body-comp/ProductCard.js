import React from 'react'
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Spiderman from '../../assets/Product Image/Spiderman.jpg';

import "./ProductCard.css";

export default function ProductCard() {

    return (
        <Row xs={1} md={4} xl={6} lg={5} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col>
                    <Card className="Product-Card">
                        <Card.Header>Card Title</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={Spiderman} />
                        </Card.Body>

                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
