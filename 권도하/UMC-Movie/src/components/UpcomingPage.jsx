// UpcomingPage.jsx
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

const UpcomingPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
          params: {
            language: 'ko',
            page: '1'
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
          }
        });
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <Container>
      {upcomingMovies.map((movie, index) => (
        <Poster
          key={index}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          overview={movie.overview}
          index={index}
        />
      ))}
    </Container>
  );
};

export default UpcomingPage;
