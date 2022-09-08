import React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';

import Header from './components/header-comp/Header';
import Homepage from './components/homepage-comp/Homepage';
import ProductList from './components/body-comp/ProductList';
import AccountDetails from './components/account-comp/AccountDetails';
import ProductDetails from './components/body-comp/ProductDetails';
import ProductData from "./local-database/allProducts.json";

const App = () => {

  return (
    <Container fluid="lg">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Product-List/:consoleType" element={<ProductList />} />
        <Route path="/Account-Details" element={<AccountDetails />} />
        <Route path="/ProductDetails/:productID" element={<ProductDetails />} />
      </Routes>
    </Container>
  )
}

export default App