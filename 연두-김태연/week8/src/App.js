import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  //navigate 오류 나와서 추가함 
  //Routes 컴포넌트 내에서 직접 navigate를 호출하려고 했던 부분이 문제->useEffect를 사용하여 처리하도록 수정
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setIsLoggedIn(false);
  };

  return (
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
      </Routes>
      <Footer />
    </Container>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
