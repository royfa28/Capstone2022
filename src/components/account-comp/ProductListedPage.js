/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { useMyAccountContext } from "../../context/accountContext";
import { useMyProductsContext } from '../../context/ProductsContext';

export default function ProductListedPage() {

    const { accountDetails, productListed, viewListedProducts } = useMyAccountContext();
    const { singleProduct, getSingleProduct } = useMyProductsContext();

    useEffect(() => {
        viewListedProducts(accountDetails.emailAddress);
        const interval = setInterval(() => {
            viewListedProducts(accountDetails.emailAddress);
            // console.log(orderHistory);
        }, 1000 * 3600);
        return () => clearInterval(interval);
    }, [accountDetails])

    let productID = [...new Set(productListed.map((data) => data.productID))];

    useEffect(() => {
        productID.map((data) =>{
            getSingleProduct(data);
        })
        const interval = setInterval(() => {
            productID.map((data) =>{
                getSingleProduct(data);
            })
        }, 1000 * 3600);
        return () => clearInterval(interval);
    }, [accountDetails])

    return (
        <>
            {console.log(singleProduct.productTitle)}
            <Container>
                <h3>Product Listed by {accountDetails.fullName}</h3>
                {productListed.map((data, index) => {
                    return (
                        <>
                            <Row key={index}>
                                <Col>
                                    <p>{data.productID}</p>
                                </Col>
                                <Col>
                                    <p>Price: ${data.productPrice}</p>
                                </Col>
                            </Row>
                        </>
                    )
                })}
            </Container>
        </>

    )
}
