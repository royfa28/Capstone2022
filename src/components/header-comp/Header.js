import React from 'react';
import Navigation from './Navigation'
import './header.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Header() {
    return (
        <div>
            <article>
                <header className="main-container">
                    <div className="row">

                        {/* <!-- Logo --> */}
                        <div className="col-2">
                            <h3>Games2Sell</h3>
                        </div>

                        {/* <!-- Where the search bar and function --> */}
                        <div className="col-8">
                            <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div>

                        {/* <!-- If not logged in, will show register/login if not will show account --> */}
                        <div className="col-1">
                            Login
                        </div>
                        <div className="col-1">
                            {/* Shopping cart */}

                        </div>
                    </div>

                </header>
                {/* <!-- Navigation for different location --> */}
                <Navigation />
            </article>
        </div>
    );
};
