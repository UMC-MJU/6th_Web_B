import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

  /* 스크롤바 */
  ::-webkit-scrollbar {
    width: 10px;
    background: #FFCC33; 
  }
  /* 스크롤바 외부막대 */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  /* 스크롤바 막대 */
  ::-webkit-scrollbar-thumb {
    background: #FFCC33; 
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* 이거 안해주면 스타일 적용이 안되는데... Firefox에서 스타일 적용이 보일 수 있도록 한다고 한다...*/
  scrollbar-width: thin;
  scrollbar-color: #FFCC33 transparent;
  
`;

const MovieItem = styled.div`
  position: relative;
  color: #fff;
`;

const MovieImage = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const MovieTitle = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 16px;
`;

function MainPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchKeyword) {
      fetchMovies(searchKeyword);
    }
  }, [searchKeyword]);

  const fetchMovies = async (keyword) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=46a397cf7e08676521ec72f5fa736dd3&query=${keyword}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <GlobalStyle />
      <MainPageContainer>
        <WelcomeMessage>환영합니다</WelcomeMessage>
      </MainPageContainer>
      <LowerSection>
        <Text>Find your movies !</Text>
        <SearchInput
          type="text"
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
        <MovieGrid>
          {searchResults.map((movie, index) => (
            <MovieItem key={index}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieItem>
          ))}
        </MovieGrid>
      </LowerSection>
    </div>
  );
}

export default MainPage;