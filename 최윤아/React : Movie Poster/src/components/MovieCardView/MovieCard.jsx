import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  return (
    <div className="card" style={{ width: '200px', margin: '10px' }}>
      <img src={imageUrl} alt={movie.title} />
      <div className="card-info"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'pointer' }} >
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average} ({movie.vote_count} votes)</p>
      </div>
    </div>
  );
}

export default MovieCard;
