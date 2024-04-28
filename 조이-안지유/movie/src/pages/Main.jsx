import React, {useEffect, useState} from 'react';
import Movies from "../components/Movies.jsx";
import "../styles/movies.css";
import styled from "styled-components";

const Main = (props) => {
  const moviesData = props.data.results;
  const [movieData, setMovieData] = useState([])

  useEffect(() => {

  })
  return (
    <MovieContainer>
      {moviesData.map((data, index) => (
        <Movies data={data} key={index}/>
      ))}
    </MovieContainer>
  );
};

export default Main

const MovieContainer = styled.div`
  display: flex;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 1040px;
  height: auto;
  flex-wrap: wrap;
`
