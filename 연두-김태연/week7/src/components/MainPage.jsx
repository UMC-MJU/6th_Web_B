import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading2 from '../Loading2';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #232F54;
    font-family: Arial, sans-serif;
  }
`;

const MainPageContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f031a;
`;

const WelcomeMessage = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

const LowerSection = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Text = styled.h1`
  color: #fff;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #333;
  border-radius: 50px;
  width: 310px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px auto;
  width: 80%;
  max-height: 60vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    background: #FFCC33;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #FFCC33;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: #FFCC33 transparent;
`;

const MovieItem = styled.div`
  position: relative;
  color: #fff;
  background-color: #05072c;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

const MovieImage = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const Overview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: opacity 0.5s ease;
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0;

  ${MovieItem}:hover & {
    display: flex;
    opacity: 1;
  }
`;

const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  h2 {
    font-size: 16px;
    margin: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: #fff;
  }

  span {
    font-size: 16px;
    margin-left: 10px;
    color: #FFCC33;
    margin: 10px;
    text-decoration: none;
  }
`;

const StarScore = ({ voteAverage }) => {
  const starCount = Math.round(voteAverage / 2);
  return (
    <>
      {[...Array(5)].map((star, index) => (
        <FaStar
          key={index}
          size="14"
          color={index < starCount ? "#ffc107" : "#e4e5e9"}
        />
      ))}
    </>
  );
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function MainPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchKeyword) {
      setIsLoading(true); 
      fetchMovies(searchKeyword);
    }
  }, [searchKeyword]);

  const fetchMovies = async (keyword) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=46a397cf7e08676521ec72f5fa736dd3&query=${keyword}`
      );
      setSearchResults(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setIsLoading(false);
    }
  };

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchKeyword(value);
  };

  const debouncedHandleSearchInputChange = debounce(handleSearchInputChange, 500);

  const handleMovieClick = (movieId) => {
    setIsDetailLoading(true);
    setTimeout(() => {
      setIsDetailLoading(false);
      navigate(`/movie/${movieId}`);
    }, 500); 
  };

  return (
    <div>
      <GlobalStyle />
      {isDetailLoading && <Loading2 />}
      <MainPageContainer>
        <WelcomeMessage>환영합니다</WelcomeMessage>
      </MainPageContainer>
      <LowerSection>
        <Text>Find your movies!</Text>
        <SearchInput type="text" onChange={debouncedHandleSearchInputChange} />
        {isLoading ? (
          <div></div> //수정
        ) : (
          <MovieGrid>
            {searchResults.map((movie) => (
              <MovieItem key={movie.id}>
                <div
                  onClick={() => handleMovieClick(movie.id)}
                  >
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieHeader>
                    <h2>{movie.title}</h2>
                    <span>
                      <StarScore voteAverage={movie.vote_average} />
                    </span>
                  </MovieHeader>
                  <Overview className="overview">
                    <p>{movie.overview}</p>
                  </Overview>
                </div>
              </MovieItem>
            ))}
          </MovieGrid>
        )}
      </LowerSection>
    </div>
  );
}

export default MainPage;