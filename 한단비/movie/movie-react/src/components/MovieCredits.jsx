import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MovieCredits = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState({ cast: [], crew: [] });

  useEffect(() => {
    const fetchCredit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWY3ODk5MTljZmZlZDI5ZTBlMGZhYzlhOTBkNzliYyIsInN1YiI6IjY2MWNiMDcwNjBjNTFkMDE4NjRlNzEyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RDERgMt1Hwrb7hjKzyNo9ShZrwQmnkBNc04Jpp69aQQ",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      fetchCredit
    )
      .then((response) => response.json())
      .then((response) => {
        setCredits(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Container>
      <Title>출연진 및 제작진</Title>
      <ProfileContainer>
        {credits.cast.map((person) => (
          <ProfileWrapper key={person.id}>
            <Photo>
              <img
                src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                alt={person.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Photo>
            <PersonName>{person.name}</PersonName>
            <Role>{person.character}</Role>
          </ProfileWrapper>
        ))}
        {credits.crew.map((person) => (
          <ProfileWrapper key={person.id}>
            <Photo>
              <img
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"
                }
                alt={person.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Photo>
            <PersonName>{person.name}</PersonName>
            <Role>{person.job}</Role>
          </ProfileWrapper>
        ))}
      </ProfileContainer>
    </Container>
  );
};

export default MovieCredits;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(33, 35, 72);
  gap: 20px;
`;

const ProfileContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProfileWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

const Photo = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  color: white;
  font-size: 25px;
  font-weight: 700;
  margin-top: 30px;
`;

const PersonName = styled.h1`
  color: white;
  font-size: 14px;
`;

const Role = styled.h1`
  color: white;
  font-size: 12px;
`;
