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
  margin-top: 150px;
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

const LowerSection = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreditsTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`;

const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const CreditsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CreditItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

const CreditImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CreditName = styled.p`
  font-size: 16px;
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
      <UpperSection>
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
                <br />
                <br />
                {movie.overview}
              </>
            ) : (
              'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.'
            )}
          </Overview>
        </ContentContainer>
      </UpperSection>
      <LowerSection>
        <CreditsTitle>출연진 및 제작진</CreditsTitle>
        <CreditsContainer>
          <CreditsList>
            {credits && credits.cast.map((castMember) => (
              <CreditItem key={castMember.cast_id}>
                <CreditImage
                  src={castMember.profile_path ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}` : NO_image}
                  alt={castMember.name}
                />
                <CreditName>{castMember.name}</CreditName>
              </CreditItem>
            ))}
          </CreditsList>
        </CreditsContainer>
      </LowerSection>
    </Container>
  );
}

export default MovieDetailPage;
