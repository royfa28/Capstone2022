import React from 'react';
import Header from './components/header-comp/Header';
import Homepage from './components/homepage-comp/Homepage';

import Container from 'react-bootstrap/esm/Container';

const App = () => {
  return (
    <Container fluid="lg">
      <Header />
      <Homepage />
    </Container>
  )
}

export default App