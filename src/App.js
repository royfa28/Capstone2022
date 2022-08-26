import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/header-comp/Header';
import Homepage from './components/homepage-comp/Homepage';
import Container from 'react-bootstrap/esm/Container';

import ProductList from './components/body-comp/ProductList';

const App = () => {
  return (
    <Container fluid="lg">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Product-List/:consoleType" element={<ProductList />} />
      </Routes>
    </Container>
  )
}

export default App