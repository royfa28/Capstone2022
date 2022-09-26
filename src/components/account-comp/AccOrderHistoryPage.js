/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";

import "./OrderCard.css"

import { useMyAccountContext } from '../../context/accountContext';
import { useMyOrderContext } from '../../context/OrderContext';

export default function AccOrderHistoryPage() {

    const { accountDetails } = useMyAccountContext();
    const { viewOrders, orderHistory } = useMyOrderContext();

    // Function to load the order history
    useEffect(() => {
        viewOrders(accountDetails.emailAddress);
        const interval = setInterval(() => {
            viewOrders(accountDetails.emailAddress);
            // console.log(orderHistory);
        }, 1000 * 3600);
        return () => clearInterval(interval);
    }, [accountDetails])

    return (
        <>
            <Container fluid>

                {/* Loop through the order history data and list in below */}
                {orderHistory.map((data, index) => {
                    return (

                        // When clicked will pass data to OrderHistoryPage.js as a params
                        <Link to={"/" + data._id} key={index}>
                            <Row className="order-history-card mb-4" >
                                <Row className="justify-content-center">
                                    <p>Order ID: #{data.orderID}</p>
                                </Row>
                                <Row className="justify-content-between">
                                    <Col>
                                        <p>Order Date:</p>
                                        <h4>{data.orderDate}</h4>
                                    </Col>

                                    <Col xs={4} md={2}>
                                        <p>Order total:</p>
                                        <h4>$ {data.totalPrice}</h4>
                                    </Col>
                                </Row>
                            </Row>
                        </Link>
                    )
                })}
            </Container>
        </>
    )
}
