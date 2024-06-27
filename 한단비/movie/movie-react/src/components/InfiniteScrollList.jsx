import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Movie from "./Movie";
import styled from "styled-components";
import Loading from "./Loading";
import { throttle } from "lodash";

export default function InfiniteScrollList({
  apiUrl,
}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const [loading, setLoading] = useState(false);
  const parentContainerRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // 로딩중
        const response = await fetch(`${apiUrl}&page=${page}`);
        const data = await response.json();
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setHasMoreResults(data.page < data.total_pages);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [apiUrl, page]);

  useEffect(() => {
    const handleScroll = () => {
      const container = parentContainerRef.current;
      if (
        container.scrollHeight - container.scrollTop <=
          container.clientHeight &&
        hasMoreResults &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const container = parentContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [hasMoreResults, loading]);

  return (
    <OuterContainer ref={parentContainerRef}>
      <MovieContainer>
        {movies.length > 0 ? (
          movies.map((item) => (
            <Movie
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
              release_date={item.release_date}
            />
          ))
        ) : (
          <p>영화 로딩 중..</p>
        )}
      </MovieContainer>
      {loading && <Loading />}
    </OuterContainer>
  );
}

const MovieContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
