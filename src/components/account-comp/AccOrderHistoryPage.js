import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";

import "./OrderCard.css"

import { useMyAccountContext } from '../../context/accountContext';
import { useMyOrderContext } from '../../context/OrderContext';

export default function AccOrderHistoryPage() {

    const { accountDetails } = useMyAccountContext();
    const { viewOrders, orderHistory } = useMyOrderContext();

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
                {orderHistory.map((data, index) => {
                    return (
                        <Link to={"/Account_Page/Order_History/" + data} key={index}>
                            <Row className="order-history-card mb-4" >
                                <Row className="justify-content-center">
                                    Order ID: #{data.orderID}
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
