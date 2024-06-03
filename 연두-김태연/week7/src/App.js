import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import MainPage from './components/MainPage';
import SignUpPage from './components/SignUpPage';
import PopularPage from './components/PopularPage';
import NowPlayingPage from './components/NowPlayingPage';
import TopRatedPage from './components/TopRatedPage';
import UpComing from './components/UpComing';
import MovieDetailPage from './components/MovieDetailPage ';
import NotFound from './components/NotFound';
import styled from 'styled-components';
import Loginpage from './components/Login';

const Container = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/popular' element={<PopularPage/>}/>
          <Route path='/nowplaying' element={<NowPlayingPage/>}/>
          <Route path='/toprated' element={<TopRatedPage/>}/>
          <Route path='/upComing' element={<UpComing/>}/>
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/Login' element={<Loginpage/>}/>
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;