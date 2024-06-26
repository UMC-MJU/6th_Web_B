import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import Movies from "../components/Movies.jsx";
import Pagination from "../components/Pagination.jsx";

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = (page) => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: {language: 'ko-KR', page},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setMovieData(response.data.results)
        setTotalPages(response.data.total_pages);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  console.log(totalPages);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const onPageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
    console.log("페이지 이동!");
  };


  return (
    <PopularContainer>
      <MovieContainer>
        {movieData.map((data, index) => (
          <Movies data={data} key={index}/>
        ))}
      </MovieContainer>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
    </PopularContainer>

  );
};

export default PopularPage;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(33, 35, 72);
  padding: 0 5px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  border: none;
`

const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
`
