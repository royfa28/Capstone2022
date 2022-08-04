import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './navigation.css';

export default function NavBar() {
    // const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (

        <div className='bg-info text-white'>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto justify-content-end nav" justify="true">
                            <Nav.Link href="#">PS 4</Nav.Link>
                            <Nav.Link href="#">PS 5</Nav.Link>
                            <Nav.Link href="#">Xbox</Nav.Link>
                            <Nav.Link href="#">Nintendo Switch</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
}