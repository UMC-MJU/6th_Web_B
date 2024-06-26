import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const CastCrewInfo = () => {
  const [castData, setCastData] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY,
      }
    };
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?language=ko-KR`, options)
      .then(response => {
        setCastData(response.data.cast);
        setCrewData(response.data.crew);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <PeopleTitle>출연진 및 제작진</PeopleTitle>
      <PeopleContainer>
        {castData.map((cast, index) => (
          <PersonProfile key={index}>
            {cast.profile_path ? (<ProfileImg src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>)
              : <ProfileImg
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s`}/>}
            <PersonInfo>{cast.original_name}</PersonInfo>
            <PersonInfo>{cast.known_for_department}</PersonInfo>
          </PersonProfile>
        ))};

        {crewData.map((crew, index) => (
          <PersonProfile key={index}>
            {crew.profile_path ? (<ProfileImg src={`https://image.tmdb.org/t/p/w500/${crew.profile_path}`}/>)
              : <ProfileImg
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s`}/>}
            <PersonInfo>{crew.original_name}</PersonInfo>
            <PersonInfo>{crew.known_for_department}</PersonInfo>
          </PersonProfile>
        ))};
      </PeopleContainer>
    </Container>
  );
};

export default CastCrewInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(27, 36, 76);
`

const PeopleTitle = styled.h1`
  color: white;
  font-size: 24px;
  margin-top: 50px;
`

const PeopleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  flex-wrap: wrap;
  gap: 10px;
`

const PersonProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 0;

`

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
`

const PersonInfo = styled.p`
  color: white;
  font-size: 11px;
  margin: 2px 0;
  max-width: 80px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
