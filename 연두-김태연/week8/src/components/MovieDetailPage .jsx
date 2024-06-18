import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import NO_image from "../assets/NO_IMAGE.png";

const Container = styled.div`
  color: #fff;
  padding: 20px;
`;

const UpperSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 50px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const CreditsTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
`;

const CreditsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const CreditItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 10px;
`;

const CreditImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CreditName = styled.p`
  font-size: 14px;
  text-align: center;
`;

const defaultProfileImage = 'https://via.placeholder.com/150x225?text=No+Image';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

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

    const fetchCredits = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=46a397cf7e08676521ec72f5fa736dd3`
        );
        setCredits(response.data);
      } catch (error) {
        console.error('Error fetching credits:', error);
      }
    };

    fetchMovie();
    fetchCredits();
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
            size="18"
            color={isFilled ? "#ffc107" : "#e4e5e9"}
            style={{ margin: '0 2px' }}
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
      <UpperSection>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          onError={(e) => {
            e.target.src = NO_image; // 이미지 로드 실패 시 대체 이미지로 처리
          }}
        />
        <ContentContainer>
          <Title>{movie.title}</Title>
          <Rating>평점: {starScore()}</Rating>
          <ReleaseDate>개봉일: {movie.release_date}</ReleaseDate>
          <Overview>
            {movie.overview ? (
              <>
                <strong>줄거리:</strong> {movie.overview}
              </>
            ) : (
              'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'
            )}
          </Overview>
        </ContentContainer>
      </UpperSection>
      <CreditsTitle>출연진 및 제작진</CreditsTitle>
      <CreditsContainer>
        {credits && credits.cast.map((castMember) => (
          <CreditItem key={castMember.cast_id}>
            <CreditImage
              src={castMember.profile_path ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}` : defaultProfileImage}
              alt={castMember.name}
              onError={(e) => {
                e.target.src = defaultProfileImage; // 이미지 로드 실패 시 대체 이미지로 처리
              }}
            />
            <CreditName>{castMember.name}</CreditName>
          </CreditItem>
        ))}
      </CreditsContainer>
    </Container>
  );
}

export default MovieDetailPage;
