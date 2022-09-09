import React from 'react'
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from "react-bootstrap/Tabs";

import AccDetailsPage from "./AccountDetailsPage";
import AccOrderHistoryPage from './AccOrderHistoryPage';

// import { useMyAccountContext } from "../../context/accountContext";
import { useMyLoginContext } from '../../context/loginContext';
import { Button } from 'react-bootstrap';

export default function AccountPage() {

    const { loginStatus } = useMyLoginContext();

    function checkLogin() {
        console.log("Logout");
        loginStatus();
    }

    // const { accountNav, setAccountNav } = useMyAccountContext();

    return (
        <>
            <Tabs defaultActiveKey="Account Details" id="justify-tab-example" className="mb-3" justify="true">
                <Tab eventKey="Account Details" title="Account Details">
                    <AccDetailsPage />
                </Tab>

                <Tab eventKey="Order History" title="Order History">
                    <AccOrderHistoryPage />
                </Tab>
                <Tab eventKey="Products Listed" title="Products Listed">

                </Tab>

                <Tab eventKey="Logout" title="Logout" onSelect={checkLogin}>
                    <Button onClick={checkLogin} variant="danger"> <Link to="/"> LOGOUT </Link></Button>
                </Tab>
            </Tabs>
        </>

    );
}
