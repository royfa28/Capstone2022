import React, { useEffect } from 'react';
import ProductImageSlider from "./ProductImageSlider";
import { useParams } from "react-router-dom";

import { Row, Col, Card, Tab, Tabs } from 'react-bootstrap';

import { useMyProductsContext } from "../../context/ProductsContext";
import { Container } from 'react-bootstrap';

import "./ProductPage.css"

export default function ProductPage() {

    let id = useParams();

    const { singleProduct, getSingleProduct } = useMyProductsContext();

    useEffect(() => {
        getSingleProduct(id.productID);
        const interval = setInterval(() => {
            getSingleProduct(id.productID);
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Container>
                <Row className="Product-Page">
                    <Col md={8} xs={12}><ProductImageSlider /></Col>

                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Body>
                                <p>Genre: {singleProduct.productGenre}</p>
                                <p>Platform: {singleProduct.productPlatform}</p>
                            </Card.Body>

                            <Card.Footer>
                                Add to cart
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

                <Row className="product-tab-content">
                    <Tabs defaultActiveKey="Product Details" id="justify-tab-example" className="mb-3 mt-3" justify="true">
                        <Tab eventKey="Product Details" title="Product Details">
                            <h3>{singleProduct.productTitle}</h3>
                            {singleProduct.productDescription}
                        </Tab>

                        <Tab eventKey="Other Seller" title="Other Seller">
                            Other Seller
                        </Tab>
                    </Tabs>
                </Row>
            </Container>

        </div>
    )
}