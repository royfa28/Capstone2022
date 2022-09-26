import React, { useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import { useMyProductsContext } from '../../context/ProductsContext';

export default function OtherSeller() {

    const { otherSellers, singleProduct, getOtherSeller } = useMyProductsContext();

    useEffect(() => {
        getOtherSeller(singleProduct._id);
        const interval = setInterval(() => {
            getOtherSeller(singleProduct._id);
            // console.log(orderHistory);
        }, 1000 * 3600);
        return () => clearInterval(interval);
    }, [singleProduct])

    return (
        <>
            <Container fluid="lg">
                <h5>List of other sellers</h5>
                {otherSellers.map((data, index) => {
                    return (
                        <Row className="justify-content-between" key={index}>
                            <Col md={8}>{data.emailAddress}</Col>
                            <Col md={2}>${data.productPrice}</Col>
                            <Col md={2}><Button>Cart</Button></Col>
                        </Row>
                    )
                })}

            </Container>

        </>

    )
}
