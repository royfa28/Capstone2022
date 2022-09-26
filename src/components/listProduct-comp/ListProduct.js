import React, { useState, useEffect } from 'react'
import { Form, Container, FloatingLabel, Dropdown, DropdownButton, Button } from "react-bootstrap";
import JWTDecode from "jwt-decode";
import { useMyProductsContext } from '../../context/ProductsContext';
import { useMyAccountContext } from '../../context/accountContext';
import { useNavigate } from 'react-router-dom';

import "./ListProduct.css"

export default function ListProduct() {
    const [productID, setProductID] = useState('');
    const [productTitle, setProductTitle] = useState('Select Game');

    const navigate = useNavigate();

    const handleSelect = (e) => {
        // Get data from the JSON data and parse it into a readable array
        const values = JSON.parse(e);
        console.log(values);
        setProductID(values._id);
        setProductTitle(values.productTitle);
    }

    const { products, getAllProducts, listProduct } = useMyProductsContext();
    const { accountDetails, viewAccount } = useMyAccountContext();

    useEffect(() => {
        getAllProducts();
        const interval = setInterval(() => {
            getAllProducts();
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Determine if local storage is empty or not
        if (!localStorage.getItem("token")) { }
        else {
            const decodedToken = JWTDecode(localStorage.getItem("token"));
            viewAccount(decodedToken._id);
        }
    }, [localStorage.getItem("token")]);

    const addProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (productTitle === "Select Game") {
            console.log("selectgame")
        } else {
            const price = formData.get("userPrice");
            // console.log(accountDetails.emailAddress);
            listProduct(productID, price, accountDetails.emailAddress);
            // console.log(productTitle);
            navigate("/");
        }
        e.target.reset();
    }

    return (
        <>
            <Container fluid="lg" className="list-product-container">
                {console.log(accountDetails)}
                <Form className="list-product-form d-grid gap-2" onSubmit={(e) => addProduct(e)}>
                    <h3 style={{ "textAlign": "center" }}>Choose game to sell</h3>
                    <DropdownButton title={productTitle} id="dropdown-menu-align-right" className="product-drop-down d-grid gap-2"
                        onSelect={handleSelect}>
                        {products.map((data, index) => {
                            return (
                                <Dropdown.Item key={index} eventKey={JSON.stringify(data)}>{data.productTitle}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>

                    <Form.Group className="mb-3" controlId="basic-addon2" id="userPrice">
                        <FloatingLabel controlId="floatingInput"
                            label="Set your price">
                            <Form.Control type="number" step="0.01" min="1" name="userPrice" required />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit"> List product </Button>
                </Form>
            </Container>
        </>

    )
}
