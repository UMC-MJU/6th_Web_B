import React, { useEffect, useState } from 'react';
import CardList from './CardList';

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzBhZjEzNDBlM2Y1MzJmNzRjZTBiZjQ3N2IzNzA5MyIsInN1YiI6IjY2MzFlMTIyYzA0NDI5MDEyYzhkYTM4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ig0ZNiR16d86E5s9OghZB_FYtElIprOnjMCFwcvDlIw'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="Upcoming">
      <CardList movies={movies} />
    </div>
  );
}

export default Upcoming;