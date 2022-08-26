import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './header.css';
import LoginModal from '../login-comp/Login';

import { useMyLoginContext } from '../../context/loginContext';

import cartLogo from '../../assets/shopping-cart.png';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Header() {

    // Use my context provider to handle Modal show / Hide
    const { setModal, modalShow, loggedIn } = useMyLoginContext();

    function changeModal() {
        setModal();
    }

    console.log("Modal status: " + modalShow);
    return (

        <div>
            <article>
                <header>
                    <div className="row">

                        {/* <!-- Logo --> */}
                        <div className="col-2">
                            <h3><Link to="/">Games2Sell</Link></h3>
                        </div>

                        {/* <!-- Where the search bar and function --> */}
                        <div className="col-8">
                            <Form className="d-flex header-bar">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            </Form>
                        </div>

                        {/* <!-- If not logged in, will show register/login if not will show account --> */}
                        <div className="col-1">
                            {loggedIn ?
                                <Button variant="primary" onClick={changeModal}>
                                    Account
                                </Button> 
                                :
                                <Button variant="primary" onClick={changeModal}>
                                    Login
                                </Button>}

                            <LoginModal show={modalShow} onHide={changeModal} />
                        </div>

                        <div className="col-1">
                            {/* Import cart logo locally */}
                            <img src={cartLogo} alt='Shopping cart' />
                        </div>
                    </div>

                </header>
            </article>
        </div>
    );
};
