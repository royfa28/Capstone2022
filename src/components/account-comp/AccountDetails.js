import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import { useMyAccountContext } from "../../context/accountContext";

export default function AccountDetails() {

    // const { accountNav, setAccountNav } = useMyAccountContext();

    return (
        <Card>
            <Card.Header>
                <Nav justify="true" variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Account Details</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="#second">Order History</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="#third">Products Listed</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="#fourth">Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>

            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>

        </Card>
    );
}
