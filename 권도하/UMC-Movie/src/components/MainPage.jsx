import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import Poster from './Poster';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: rgba(33, 35, 80, 1);
  }
  h1, h2 {
    color: white;
  }
`;

const MainPageContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const FindContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 50px;
  height: auto;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(33, 35, 80, 1);
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 50px;
`;

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: #ffd700;
  justify-content: center;
  margin-left: 20px;
  `;

const PostContainer = styled.div`
  margin-top: 40px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
  max-height: 60vh;

   &::-webkit-scrollbar {
    width: 10px; 
    background-color: transparent;
  }

   &::-webkit-scrollbar-thumb {
    background-color: #d1b815; 
    border-radius: 5px;
  }

   &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        handleSearch(searchTerm);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = async (query) => {
    if (!query) return; 
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          query: query,
          language: 'ko',
          page: '1'
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
      });
      setSearchMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <GlobalStyle />
      <MainPageContainer>
        <h2>환영합니다</h2>
      </MainPageContainer>
      <FindContainer>
        <h1> 📽️ Find your movies !</h1>
        <SearchWrapper>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={handleInputChange} />
          <SearchButton >🔍</SearchButton>
        </SearchWrapper>
        <PostContainer>
          {searchMovies.map((movie, index) => (
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
        </PostContainer>
      </FindContainer>
    </div>
  );
}

export default MainPage;
