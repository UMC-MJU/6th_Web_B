import { useState } from 'react'
import './App.css'
import {movies} from './data/moviesData'
import MovieList from './components/MovieList';
import MovieInfor from './components/MovieInfor';

function App() {

  return (
    <>
      <div className="app">
        <MovieList movies={movies.results} />
      </div>
    </>
  )
}

export default App
