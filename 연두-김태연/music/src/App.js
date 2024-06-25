import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

function App() {
  return (
    <AppContainer>
      <Navbar/>
      <MainPage/>
      <Cart />
      <Footer/>
    </AppContainer>
  );
}

export default App;
