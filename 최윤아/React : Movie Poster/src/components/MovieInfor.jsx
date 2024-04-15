import React from 'react';

function MovieInfor({ movie }) {
  return (
    <div className="movie-details">
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieInfor;