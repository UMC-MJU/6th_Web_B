import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledPoster = styled.div`
  border-radius: 10px;
  width: 250px;
  margin: 16px;
  margin-top: 40px;
  background-color: #33366d;
  color: white;
  position: relative;
  display: inline-block;
  cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능함을 나타냄 */

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px 10px 0 0;
  }

  .overview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 0.5s ease;
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 10px 10px 10px 10px;
  }

  &:hover .overview {
    opacity: 1;
  }

  .overview p {
    margin-top: 15px;
  }

  .overview h2, p {
    margin: 0;
    font-size: 16px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
  }

  .info h5 {
    margin: 0;
  }

  .info span {
    margin-left: 3px;
  }
`;

const Poster = ({ title, poster_path, vote_average, overview, release_date, original_title, backdrop_path }) => {
  const roundedRating = vote_average.toFixed(1); // 별점 반올림
  const displayOverview = overview || 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'; //overview가 없을 경우
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // hover 상태를 관리하는 상태 변수

  const handlePosterClick = () => {
    navigate(`/movie/${title}`, {
      state: {
        title,
        poster_path,
        vote_average,
        overview,
        release_date,
        original_title,
        backdrop_path
      }
    });
  };

  return (
    <StyledPoster onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handlePosterClick}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      {isHovered && (
        <div className='overview'> 
          <h2>{title}</h2>
          <p>{displayOverview}</p>
        </div>
      )}
      <div className='info'>
        <h5>{title}</h5>
        <span>{roundedRating}</span>
      </div>
    </StyledPoster>
  );
}

export default Poster;
