import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    // const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div className='bg-info text-white'>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto justify-content-end nav" justify="true">
                            <Nav.Link> <Link to="/Product-List/ps4"> PS 4 </Link></Nav.Link>
                            <Nav.Link> <Link to="/Product-List/ps5"> PS 5 </Link></Nav.Link>
                            <Nav.Link> <Link to="/Product-List/ps4"> XBox</Link></Nav.Link>
                            <Nav.Link> <Link to="/Product-List/ps4"> Nintendo-Switch </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
}