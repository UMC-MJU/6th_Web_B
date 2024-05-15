// NowPlayingPage.jsx
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

const NowPlayingPage = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: {
            language: 'ko',
            page: '1'
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
          }
        });
        setNowPlayingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  return (
    <Container>
      {nowPlayingMovies.map((movie, index) => (
        <Poster
          key={index}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          overview={movie.overview}
          release_date={movie.release_date}
          original_title={movie.original_title}
          backdrop_path={movie.backdrop_path}
        />
      ))}
    </Container>
  );
};

export default NowPlayingPage;
