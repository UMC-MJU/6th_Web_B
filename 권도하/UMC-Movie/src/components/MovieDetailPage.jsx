// MovieDetailPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  position: relative;
  padding-left: 200px;
  padding-right: 10px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const ContentContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 0 200px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  font-size: 24px;
  margin-left: 5px;
`;

function MovieDetailPage() {
  const location = useLocation();
  const { original_title, poster_path, vote_average, overview, release_date, backdrop_path } = location.state;
  const vote_ave = Math.floor(vote_average);
  const stars = Array.from({ length: vote_ave }, (_, index) => index);

  return (
    <Container>
      <BackgroundContainer>
        <BackgroundImage src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={original_title} />
      </BackgroundContainer>
      <ImageContainer>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
      </ImageContainer>
      <ContentContainer>
        <h2>{original_title}</h2>
        <RatingContainer>
        <h2>평점</h2>
          {stars.map((_, index) => (
            <Star key={index}>⭐️</Star>
          ))}
        </RatingContainer>
        <h3>개봉일 {release_date}</h3>
        <h3>줄거리</h3>
        <p>{overview}</p>
      </ContentContainer>
    </Container>
  );
}

export default MovieDetailPage;
