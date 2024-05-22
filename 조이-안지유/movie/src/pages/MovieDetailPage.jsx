import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import CastCrewInfo from "../components/CastCrewInfo.jsx";

const MovieDetailPage = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY
      }
    };
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?language=ko-KR`, options)
      .then(response => {
        console.log(response);
        setMovieData(response.data);
      })
      .catch(err => console.error(err));
  }, [])

  const {id, original_title, overview, poster_path, vote_average, popularity, release_date} = movieData;
  console.log(movieData);
  return (
    <>
      <MovieBackground url={`https://image.tmdb.org/t/p/w500/${poster_path}`}>
        <MovieDetailContainer>
          <MoviePoster src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
          <MovieInfoBox>
            <MovieTitle>{original_title}</MovieTitle>
            <MovieInfoCategory>평점 <MovieStar grade={Math.floor(vote_average)}/></MovieInfoCategory>
            <MovieInfoCategory>개봉일 {release_date}</MovieInfoCategory>
            <MovieInfoCategory>줄거리</MovieInfoCategory>
            {overview ? (<MovieOverview>{overview}</MovieOverview>) : (<MovieOverview>TMDB에서 제공하는 API에 상세 줄거리 정보가
              없습니다.</MovieOverview>)}
          </MovieInfoBox>
        </MovieDetailContainer>
      </MovieBackground>
      <CastCrewInfo/>
    </>
  );
};

export default MovieDetailPage;


const MovieBackground = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  height: 100vh;
`

const MovieDetailContainer = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 99vh;
  gap: 70px;
`

const MoviePoster = styled.img`
  width: 340px;
  height: 500px;
`
const MovieInfoBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`

const MovieTitle = styled.h1`
  color: white;
`

const MovieInfoCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 5px;
  color: white;
  font-size: 17px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`

const MovieStar = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.grade}, 1fr);

  &:before {
    content: "${props => "⭐".repeat(props.grade)}";
  }
`

const MovieOverview = styled.p`
  font-size: 15px;
  color: white;
  margin: 0;
`
