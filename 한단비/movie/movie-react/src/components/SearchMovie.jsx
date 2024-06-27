import React, { useState, useEffect, useCallback } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import debounce from "lodash/debounce";

// 요청 시 query string와 함께 보내면 TMDB 측에서 가장 근접한 검색 결과를 제공해준다
const SearchMovie = () => {
  // 검색어를 위한 상태
  const [query, setQuery] = useState("");
  // 영화 데이터 상태
  const [movies, setMovies] = useState([]);
  // 영화 검색 시, 로딩 상태
  const [loading, setLoading] = useState(false);

  // 검색어 업데이트 함수
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //api
  const MovieApi = (searchQuery) => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer process.env.REACT_APP_TOKEN",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchQuery
      )}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results); // 검색된 영화 데이터를 설정
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const debouncedFetch = useCallback(
    debounce((query) => {
      MovieApi(query);
    }, 500),
    []
  );

  useEffect(() => {
    if (query.trim() !== "") {
      debouncedFetch(query);
    }
  }, [query, debouncedFetch]);

  // 검색 버튼 클릭 핸들러
  const handleSearchClick = () => {
    if (query.trim() !== "") {
      MovieApi(query); // 사용자가 버튼을 클릭했을 때 검색 실행
    }
  };

  return (
    <Container>
      <InputContainer>
        <SearchInput value={query} onChange={handleInputChange}></SearchInput>
        <SearchIcon onClick={handleSearchClick}>🔍</SearchIcon>
      </InputContainer>
      <MovieContainer>
        {loading ? (<Text>영화 데이터를 받아오는 중입니다.</Text>) :
          (movies.map((props) => (
            <Movie
              key={props.id}
              title={props.title}
              poster_path={props.poster_path}
              vote_average={props.vote_average}
              overview={props.overview}
              release_date={props.release_date}
            />
          )))
        }
      </MovieContainer>
    </Container>
  );
};

export default SearchMovie;

const InputContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SearchInput = styled.input`
  width: 40%;
  height: 25px;
  border-radius: 25px;
  border: none;
  padding: 10px;
`;

const SearchIcon = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fec623;
  border: none;
  border-radius: 30px;
`;
const MovieContainer = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background-color: rgb(33, 35, 72);
  padding: 10px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 20px;
  weight: 700;
  color: white;
  display: flex;
  align-items: center;
`;
