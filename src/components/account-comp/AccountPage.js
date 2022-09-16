import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, Button } from 'react-bootstrap';
import JWTDecode from "jwt-decode";

import AccDetailsPage from "./AccountDetailsPage";
import AccOrderHistoryPage from './AccOrderHistoryPage';

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
            <Tabs defaultActiveKey="Account Details" id="justify-tab-example" className="mb-3 mt-3" justify="true">
                <Tab eventKey="Account Details" title="Account Details">
                    <AccDetailsPage />
                </Tab>

                <Tab eventKey="Order History" title="Order History">
                    <AccOrderHistoryPage />
                </Tab>
                <Tab eventKey="Products Listed" title="Products Listed">

                </Tab>

                <Tab eventKey="Logout" title="Logout">
                    <Button onClick={logout} variant="danger"> <Link to="/"> LOGOUT </Link></Button>
                </Tab>
            </Tabs>
        </>

    );
}
