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
import Footbar from './components/Footbar';
import MovieDetailPage from './pages/MovieDetailPage'

// movie components를 받는 container
function App() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/discover/movie?api_key=8ef789919cffed29e0e0fac9a90d79bc')
  //     .then(response => response.json())
  //     .then(data => setMovies(data))
  //     .catch(error => console.error('API 호출 중 오류 발생:', error));
  // }, []);

  return (
    <div className='root-wrap'>
      <BrowserRouter>
        {/* routing에 영향을 받지 않고, 고정되고 싶은 것은 <Routes> 밖에 있어야 함! */}
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/:title" element={<MovieDetailPage/>}/>
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/toprated" element={<TopRatePage />} />
          <Route path="/upcoming" element={<UpComing />} />
        </Routes>
        <Footbar />
      </BrowserRouter>
    </div>

    // <div>
    //   {movies.results ? (
    //     <div className='body-container'>
    //     {
    //     movies.results.map((item)=>{
    //         return (
    //           <Movie
    //             key={item.id}
    //             title = {item.title}
    //             poster_path= {item.poster_path}
    //             vote_average={item.vote_average}
    //             overview={item.overview}
    //             />
    //         );
    //     })
    //   }
    //   </div>
    //   ) : (
    //     <p>영화 로딩 중...</p>
    //   )}

    // </div>
  );
}

export default App;

// jsx 문법을 사용할 때는 {} 중괄호 내에 입력 !!