import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';


import Header from './components/header-comp/Header';
import Homepage from './components/homepage-comp/Homepage';
import ProductList from './components/body-comp/ProductList';
import AccountPage from './components/account-comp/AccountPage';
import ProductPage from './components/body-comp/ProductPage';
import AccDetailsPage from "./components/account-comp/AccountDetailsPage";
import OrderHistoryPage from './components/account-comp/OrderHistoryPage';

const App = () => {
    return (
        <Container fluid="lg">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Product-List/:consoleType" element={<ProductList />} />
                <Route path="/Account_Page" element={<AccountPage />} >
                    <Route path="Account_Page/:userID" element={<AccDetailsPage />} />  
                </Route>
                <Route path="Account_Page/Order_History/:orderID" element={<OrderHistoryPage />} />
                <Route path="/ProductPage/:productID" element={<ProductPage />} />
            </Routes>
        </Container>
    )
}

export default App