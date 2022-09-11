import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

export default function AccountDetailsPage() {
    return (
        <>
            <Container fluid>
                <Row>
                    <h3>Personal Details</h3>
                    <Row className="justify-content-between mb-2">
                        <Col>Full Name</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <h3>Contact Details</h3>
                    <Row className="justify-content-between mb-2">
                        <Col>Email address</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-between  mb-2">
                        <Col>Phone Number</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <h3>Delivery Address</h3>
                    <Row className="justify-content-between  mb-2">
                        <Col>Delivery Address</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}