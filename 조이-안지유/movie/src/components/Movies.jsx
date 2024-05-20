import React, {useState} from 'react';
import "../styles/movies.css";
import MovieInfo from "./MovieInfo.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Movies = (props) => {
  const {id, original_title, overview, poster_path, vote_average} = props.data;
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const openInfo = () => {
    setIsHover(true);
  }
  const closeInfo = () => {
    setIsHover(false);
  }

  return (
    <Movie onMouseEnter={openInfo} onMouseLeave={closeInfo} onClick={() => {
      navigate(`/movie/${id}`)
    }}>
      {isHover && <MovieInfo title={original_title} info={overview}/>}
      <MoviePoster src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
      <MovieBasic>
        <MovieTitle>{original_title}</MovieTitle>
        <MovieTitle>{vote_average}</MovieTitle>
      </MovieBasic>

    </Movie>
  );
};

export default Movies;

const Movie = styled.div`
  width: 240px;
  height: 430px;
  background-color: rgb(56, 58, 102);
  margin: 15px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  :hover {
    cursor: pointer;
  }
`

const MoviePoster = styled.img`
  width: 240px;
  height: 350px;
  border-radius: 6px 6px 0 0;
`

const MovieBasic = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0;
`

const MovieTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: white;
`
