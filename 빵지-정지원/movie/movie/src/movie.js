import React, { useState } from 'react';

const Poster = ({ title, poster_path, vote_average, overview, index }) => {
  const [isHovered, setIsHovered] = useState(false); // hover 상태를 관리하는 상태 변수

    return (
    <div className='poster' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        {isHovered && (
        <div className='overview'> 
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
        )}
        <div className='info'>
        <h5>{title}</h5>
        <span>{vote_average}</span>
        </div>
    </div>
    );
}

export default Poster;