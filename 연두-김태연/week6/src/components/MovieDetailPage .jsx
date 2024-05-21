import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  margin-top: 150px;
  color: #fff;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 20px;
  margin: 20px 100px;
`;

const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
`;

const Rating = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

const ReleaseDate = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Overview = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  text-overflow: ellipsis;
  padding-right: 50px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=ko-KR&api_key=46a397cf7e08676521ec72f5fa736dd3`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const starScore = () => {
    if (!movie) return null;
    const voteAverage = Math.round(movie.vote_average / 2);
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < voteAverage ? true : false);
    }
    return (
      <>
        {stars.map((isFilled, index) => (
          <FaStar
            key={index}
            size="14"
            color={isFilled ? "#ffc107" : "#e4e5e9"}
          />
        ))}
      </>
    );
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <ContentContainer>
        <Title>{movie.title}</Title>
        <Rating>평점 {starScore()}</Rating>
        <ReleaseDate>개봉일 {movie.release_date}</ReleaseDate>
        <Overview>
          {movie.overview ? (
            <>
              <span>줄거리</span>
              <br></br>
              <br></br>
              {movie.overview}
            </>
          ) : (
            'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'
          )}
        </Overview>
      </ContentContainer>
    </Container>
  );
}

export default MovieDetailPage;