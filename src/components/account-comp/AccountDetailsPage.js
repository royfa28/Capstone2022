import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useMyAccountContext } from "../../context/accountContext";

export default function AccountDetailsPage() {

    const { accountDetails } = useMyAccountContext();

    return (
        <>
            <Container fluid>
                <Row>
                    <h3>Personal Details</h3>
                    <Row className="justify-content-between mb-2">
                        <Col>{accountDetails.fullName}</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <h3>Contact Details</h3>
                    <Row className="justify-content-between mb-2">
                        <Col>{accountDetails.emailAddress}</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-between  mb-2">
                        <Col>{accountDetails.phoneNumber}</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <h3>Delivery Address</h3>
                    <Row className="justify-content-between  mb-2">
                        <Col>{accountDetails.address}</Col>
                        <Col className="col-1">
                            <Button>Edit</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}