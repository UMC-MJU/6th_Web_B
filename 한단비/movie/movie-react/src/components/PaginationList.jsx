import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Movie from "./Movie";
import styled from "styled-components";
import Loading from "./Loading";
import { throttle } from "lodash";

export default function Pagination({
  apiUrl,
  isPagination = false,
  isInfiniteScroll = false,
}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const listRef = useRef(null);
  // const observerRef = useRef(null);

  //const searchParams = new URLSearchParams(location.search);
  //const currentPage = parseInt(searchParams.get("page")) || 1;
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || 1;
    setPage(page);
  }, [location.search]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // 로딩중
        const response = await fetch(`${apiUrl}&page=${page}`);
        const data = await response.json();
        setMovies((prevMovies) =>
          isPagination ? data.results : [...prevMovies, ...data.results]
        );
        setHasMoreResults(data.page < data.total_pages);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [apiUrl, page, isPagination]);

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
    navigate(`?page=${pageNum}`);
    //console.log(pageNum);
  };

  return (
    <OuterContainer>
        <MovieContainer>
          {movies.length > 0 ? (
            movies.map((item) => (
              <Movie
                key={item.id}
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
      {isPagination && (
        <PaginationList>
          <li>
            <PaginationLink
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </PaginationLink>
          </li>
          {Array.from(
            { length: Math.ceil(movies.length / 20) },
            (_, i) => i + 1
          ).map((pageNum) => (
            <li key={pageNum}>
              <PaginationLink key={pageNum}>{page}</PaginationLink>
            </li>
          ))}
          <li>
            <PaginationLink
              onClick={() => handlePageChange(page + 1)}
              className="next-page"
            >
              &gt;
            </PaginationLink>
          </li>
        </PaginationList>
      )}
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

const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2rem;
`;

const PaginationLink = styled.button`
  display: flex;
  padding: 8px 16px;
  text-decoration: none;
  color: white;
  border: none;
  background: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
