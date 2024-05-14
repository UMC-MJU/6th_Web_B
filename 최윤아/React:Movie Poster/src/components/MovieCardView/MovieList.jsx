import React from 'react';
import { useQuery } from 'react-query';
import MovieCard from './MovieCard';
import { fetchMovies } from '../api';  // API 호출 함수

function MovieList({ category }) {
  const { data: movies, isLoading, error } = useQuery([category], () => fetchMovies(category));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="card-list">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default MovieList;
