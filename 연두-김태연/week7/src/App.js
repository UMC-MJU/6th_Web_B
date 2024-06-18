import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import SignUpPage from './components/SignUpPage';
import PopularPage from './components/PopularPage';
import NowPlayingPage from './components/NowPlayingPage';
import TopRatedPage from './components/TopRatedPage';
import UpComing from './components/UpComing';
import MovieDetailPage from './components/MovieDetailPage ';
import NotFound from './components/NotFound';
import styled from 'styled-components';
import LoginPage from './components/login';

const Container = styled.div`
  position: relative;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Container>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upComing" element={<UpComing />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          {isLoggedIn && <Navigate to="/" />}
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
