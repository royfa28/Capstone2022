import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Button, Container } from "react-bootstrap";

import "./OrderCard.css"

export default function OrderCard() {
    return (
        <>
            <Link to="/Account_Page/Order_History/:orderID">

                <Container fluid>
                    <Row className="order-history-card">
                        <Row className="justify-content-between">
                            <Col>
                                <p>Order Date:</p>
                                <h4>Sat,11 September</h4>
                            </Col>

                            <Col xs={4} md={2}>
                                <p>Order total:</p>
                                <h4>$ Price</h4>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Link>
        </>

    )
}
