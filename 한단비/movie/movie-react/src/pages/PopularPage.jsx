import React from 'react'
import MovieList from '../components/MovieList';

export default function PopularPage() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=8ef789919cffed29e0e0fac9a90d79bc';
    return (
        <div>
          <MovieList apiUrl={apiUrl} />
        </div>
      );
}
