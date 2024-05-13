import React, { useState } from 'react';
import '../App.css'; 

const Poster = ({ title, poster_path, vote_average, overview, index }) => {
  const [isHovered, setIsHovered] = useState(false); //hover 관리

  return (
//onMouseEnter={() => setIsHovered(true)}: 마우스가 요소 위에 올라갔을 때 실행 
//마우스가 요소 위에 있을 떄 : setIsHovered(true)가 호출되어 isHovered 상태를 true로 변경합니다. 
//onMouseLeave={() => setIsHovered(false)}: 이 부분은 마우스가 요소를 벗어났을 때 실행되는 이벤트입니다. 

// [ 다르게 표현하기 ]
//const MyComponent = () => {
/* const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // isHovered 상태를 true로 업데이트
  }

  const handleMouseLeave = () => {
    setIsHovered(false); // isHovered 상태를 false로 업데이트
  }*/

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