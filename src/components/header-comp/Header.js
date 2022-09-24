import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './header.css';
import LoginModal from '../login-comp/Login';
// import NavBar from './Navigation';

import { useMyLoginContext } from '../../context/loginContext';

import cartLogo from '../../assets/shopping-cart.png';

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Header() {

    // Use my context provider to handle Modal show / Hide
    const { setModal, modalShow } = useMyLoginContext();

    function changeModal() {
        setModal();
    }
    console.log("Modal status: " + modalShow);
    return (
        <>
            <header>
                <Container fluid="lg">
                    <Row className="justify-content-between header-row">
                        {/* <!-- Logo --> */}
                        <Col className="col-2">
                            <h3><Link to="/">Games2Sell</Link></h3>
                        </Col>

                        {/* <!-- Where the search bar and function --> */}
                        <Col className="col-5">
                            <Form className="d-flex header-bar">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            </Form>
                        </Col>

                        {/* <!-- If not logged in, will show register/login if not will show account --> */}
                        <Col className="col-1 order-last ">
                            {/* If token for account is there, show account otherwise Login */}
                            {localStorage.getItem("token") ?
                                <Link to="/Account_Page">
                                    <Button variant="primary">
                                        Account
                                    </Button>
                                </Link>
                                :
                                <Button variant="primary" onClick={changeModal}>
                                    Login
                                </Button>}

                            <LoginModal show={modalShow} onHide={changeModal} />
                        </Col>

                        <Col className="col-1 order-last">
                            {/* Import cart logo locally */}
                            <Link to="Shopping_Cart">
                                <img src={cartLogo} alt='Shopping cart' />
                            </Link>

                        </Col>
                    </Row>
                </Container>
            </header>

            {/* Remove navbar for now */}
            {/* <NavBar /> */}
        </>


    );
};
