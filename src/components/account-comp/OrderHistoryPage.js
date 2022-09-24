import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import { useMyOrderContext } from "../../context/OrderContext";

export default function OrderHistoryPage() {

    let id = useParams();

    const { singleHistory, getSingleHistory } = useMyOrderContext();

    useEffect(() => {
        getSingleHistory(id.orderID);
        const interval = setInterval(() => {
            getSingleHistory(id.orderID);
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, [id.orderID]);

    return (
        <>
            {/* {console.log(id)} */}
            <Container fluid="lg">
                Order {id.orderID}

                {singleHistory.map((data, index) => {
                    return (
                        <Row key={index}>
                            <Col>
                                image place holder
                            </Col>
                            <Col >
                                <span> {data.productTitle} Qty: {data.qty} Price: ${data.productPrice}</span>
                            </Col>
                        </Row>
                    )
                })}

            </Container>
        </>
    )
}
