import './App.css';
import Movie from './components/Movie';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import NowPlayingPage from './pages/NowPlayingPage';
import PopularPage from './pages/PopularPage';
import TopRatePage from './pages/TopRatePage';
import UpComing from './pages/UpComing';
import Navbar from './components/Navbar';
import MovieDetailPage from './pages/MovieDetailPage'
import NotFoundPage from './pages/NotFoundPage';

// movie components를 받는 container
function App() {

  return (
    <div className='root-wrap'>
      <BrowserRouter>
        {/* routing에 영향을 받지 않고, 고정되고 싶은 것은 <Routes> 밖에 있어야 함! */}
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/movie/:title" element={<MovieDetailPage/>}/>
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/toprated" element={<TopRatePage />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// jsx 문법을 사용할 때는 {} 중괄호 내에 입력 !!