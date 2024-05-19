import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import Movies from "./Movies.jsx";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const fetchMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY
      }
    };
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=ko-KR&page=1`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovies(response.results);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <SearchBox>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchBtn onClick={fetchMovies}><p>🔍</p></SearchBtn>
      </SearchBox>
      <MovieContainer>
        {movies.map((data, index) => (
          <Movies data={data} key={index}/>
        ))}
      </MovieContainer>
    </>
  );
};

export default SearchMovies;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  gap: 20px;
`

const SearchInput = styled.input`
  width: 370px;
  height: 35px;
  border-radius: 20px;
  border: none;
`

const SearchBtn = styled.button`
  width: 27px;
  height: 27px;
  border-radius: 30px;
  background-color: gold;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`
