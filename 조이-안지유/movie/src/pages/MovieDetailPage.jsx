import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import styled from "styled-components";

const MovieDetailPage = () => {
  const params = useParams();
  const [movieData, setMovieData] = useState({});

  console.log(params);
  console.log(movieData);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {query: params.title, include_adult: 'false', language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const movieId = response.data.results[0].id;
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {language: 'en-US'},
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY
          }
        }).then((res) => {
          setMovieData(res.data);
        }).catch((err) => {
          console.log(err);
        })
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [params.title])

  const {original_title, overview, poster_path, vote_average, popularity, release_date} = movieData;
  console.log(original_title, overview, poster_path, vote_average, popularity, release_date);

  return (
    <MovieDetailContainer>
      <MoviePoster src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
      <MovieInfoBox>
        <MovieTitle>{original_title}</MovieTitle>
        <MovieInfoCategory>평점 {vote_average}</MovieInfoCategory>
        <MovieInfoCategory>개봉일 {release_date}</MovieInfoCategory>
        <MovieInfoCategory>줄거리</MovieInfoCategory>
        <MovieOverview>{overview}</MovieOverview>
      </MovieInfoBox>
    </MovieDetailContainer>
  );
};

export default MovieDetailPage;

const MovieDetailContainer = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  width: 100%;
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

const MovieInfoCategory = styled.p`
  color: white;
  font-size: 17px;
`

const MovieOverview = styled.p`
  font-size: 15px;
  color: white;
  margin: 0;
`
