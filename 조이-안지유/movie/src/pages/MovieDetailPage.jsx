import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

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

  return (
    <>
    </>
  );
};

export default MovieDetailPage;
