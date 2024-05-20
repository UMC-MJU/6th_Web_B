import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Movies from "./Movies.jsx";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const fetchMovies = () => {
    setLoading(true);
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
        setLoading(false);
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
        {loading ? <p>데이터를 받아오는 중...</p> : (movies.map((data, index) => (
          <Movies data={data} key={index}/>
        )))}
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
  background: orange;
  position: absolute;
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
  //background-color: rgb(33, 35, 72);
  position: relative;
  background: #61dafb;

`
