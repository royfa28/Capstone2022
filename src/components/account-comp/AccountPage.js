import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, Button, Container } from 'react-bootstrap';
import JWTDecode from "jwt-decode";

import AccDetailsPage from "./AccountDetailsPage";
import AccOrderHistoryPage from './AccOrderHistoryPage';
import ListProductPage from '../listProduct-comp/ListProduct'

import { useMyAccountContext } from "../../context/accountContext";

export default function AccountPage() {

    function logout() {
        console.log("Logout");
        localStorage.removeItem("token");
        window.location.reload();
        // loginStatus();
    }
    const decodedToken = JWTDecode(localStorage.getItem("token"));
    const { viewAccount } = useMyAccountContext();

    useEffect(() => {
        viewAccount(decodedToken._id);
        const interval = setInterval(() => {
            viewAccount(decodedToken._id);
        }, 1000 * 3600);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Container fluid="lg">
                <Tabs defaultActiveKey="Account Details" id="justify-tab-example" className="mb-3 mt-3" justify="true">
                    <Tab eventKey="Account Details" title="Account Details">
                        <AccDetailsPage />
                    </Tab>

                    <Tab eventKey="Order History" title="Order History">
                        <AccOrderHistoryPage />
                    </Tab>
                    <Tab eventKey="Products Listed" title="Products Listed">
                        <Link to="/Account_Page/List-Product"><Button >List product</Button></Link>
                    </Tab>

                    <Tab eventKey="Logout" title="Logout">
                        <Link to="/"><Button onClick={logout} variant="danger"> <Link to="/"> LOGOUT </Link></Button></Link>
                    </Tab>
                </Tabs>
            </Container>
        </>

    );
}
