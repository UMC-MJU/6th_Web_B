import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; // HomePage 컴포넌트 임포트
import MovieList from './components/MovieCardView/MovieList';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '70px', paddingBottom: '30px' }}>  
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/Popular" element={<MovieList category="Popular" />} />
          <Route path="/NowPlaying" element={<MovieList category="NowPlaying" />} />
          <Route path="/TopRated" element={<MovieList category="TopRated" />} />
          <Route path="/NowPlaying" element={<MovieList category="NowPlaying" />} />
          <Route path="/movie/:movieName" element={<MovieDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
