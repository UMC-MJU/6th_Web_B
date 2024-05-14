import React, {useEffect, useState} from 'react';
import axios from "axios";
import Movies from "../components/Movies.jsx";
import styled from "styled-components";

const TopRatedPage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/top_rated',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data.results)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])
  return (
    <MovieContainer>
      {movieData.map((data, index) => (
        <Movies data={data} key={index}/>
      ))}
    </MovieContainer>
  );
};

export default TopRatedPage;

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`
