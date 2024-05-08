import React from 'react'
// import styled, { createGlobalStyle } from 'styled-components';



const Popular=()=>{
    
    return(
        <div>
            <postercontainer>
                <imgcontainer>
                {/* <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /> */}
                </imgcontainer>
                <textcontainer>

                </textcontainer>
            </postercontainer>
        </div>
    );  
};

export default Popular;

/*
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
*/