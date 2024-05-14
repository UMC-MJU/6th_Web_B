import React, { useEffect, useState } from 'react';
import CardList from './CardList';

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch("'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzBhZjEzNDBlM2Y1MzJmNzRjZTBiZjQ3N2IzNzA5MyIsInN1YiI6IjY2MzFlMTIyYzA0NDI5MDEyYzhkYTM4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ig0ZNiR16d86E5s9OghZB_FYtElIprOnjMCFwcvDlIw",
        Accept: "application/json"
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setMovies(data.results);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      setError(error.message);
      setIsLoading(false);
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="now_playing">
      <CardList movies={movies} />
    </div>
  );
}

export default Upcoming;