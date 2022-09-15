import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from './components/header-comp/Header';
import Footer from './components/footer-comp/Footer';
import Homepage from './components/homepage-comp/Homepage';
import ProductList from './components/body-comp/ProductList';
import AccountPage from './components/account-comp/AccountPage';
import ProductPage from './components/body-comp/ProductPage';
import AccDetailsPage from "./components/account-comp/AccountDetailsPage";
import OrderHistoryPage from './components/account-comp/OrderHistoryPage';
import ShoppingCart from './components/shoppingCart-comp/ShoppingCart';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Product-List/:consoleType" element={<ProductList />} />
                <Route path="/Account_Page" element={<AccountPage />} >
                    <Route path="Account_Page/:userID" element={<AccDetailsPage />} />
                </Route>
                <Route path="Account_Page/Order_History/:orderID" element={<OrderHistoryPage />} />
                <Route path="/ProductPage/:productID" element={<ProductPage />} />
                <Route path="/Shopping_Cart" element={<ShoppingCart />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App