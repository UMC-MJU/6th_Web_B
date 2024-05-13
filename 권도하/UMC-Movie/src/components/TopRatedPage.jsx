// TopRatedPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Poster from './Poster';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const TopRatedPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
          params: {
            language: 'ko',
            page: '1'
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer + ${import.meta.env.REACT_APP_TMDB_TOKEN}`
          }
        });
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <Container>
      {topRatedMovies.map((movie, index) => (
        <Poster
          key={index}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          overview={movie.overview}
          original_title={movie.original_title}
        />
      ))}
    </Container>
  );
};

export default TopRatedPage;
