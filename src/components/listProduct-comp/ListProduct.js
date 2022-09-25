import React, { useState, useEffect } from 'react'
import { Form, Container, FloatingLabel, Dropdown, DropdownButton } from "react-bootstrap"
import { useMyProductsContext } from '../../context/ProductsContext';

import "./ListProduct.css"

export default function ListProduct() {
    const [dropdownValue, setDropdownValue] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Select Game');

    const handleSelect = (e) => {
        console.log(e);
        setDropdownValue(e);
        setDropdownTitle(e);
    }

    const { products, getAllProducts } = useMyProductsContext();

    useEffect(() => {
        getAllProducts();
        const interval = setInterval(() => {
            getAllProducts();
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Container fluid="lg" className="list-product-container">
                {console.log(products)}
                <Form className="list-product-form">
                    <DropdownButton title={dropdownTitle} id="dropdown-menu-align-right" className="product-drop-down d-grid gap-2"
                        onSelect={handleSelect}>
                        {products.map((data, index) => {
                            return (
                                <Dropdown.Item key={index} eventKey={data._id}>{data.productTitle}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                    {dropdownValue}
                    <Form.Group className="mb-3" controlId="basic-addon2" id="userPrice">
                        <FloatingLabel controlId="floatingInput"
                            label="Set your price">
                            <Form.Control placeholder="Enter your desired price" name="userPrice" />
                        </FloatingLabel>
                    </Form.Group>

                </Form>
            </Container>
        </>

    )
}
