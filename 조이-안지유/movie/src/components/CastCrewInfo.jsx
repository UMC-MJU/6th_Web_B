import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const CastCrewInfo = ({movieId}) => {
  const [castData, setCastData] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const params = useParams();
  console.log(movieId);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_KEY,
      }
    };
    // 왜 props로 받은 movieId는 오류뜨고 useParams로 추출한 id로 하면 오류가 안 뜨는 거지? console에 찍으면 똑같은디
    // -> 처음에 undefined라 그런듯 근데 왜 처음엔 undefined지?
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?language=ko-KR`, options)
      .then(response => {
        console.log(response);
        setCastData(response.data.cast);
        setCrewData(response.data.crew);
      })
      .catch(err => console.error(err));
  }, []);
  console.log(params.id);
  console.log(castData);
  console.log(crewData);
  return (
    <>
      {castData.map((cast, index) => (
        <div key={index}>
          <h2>{cast.original_name}</h2>
        </div>
      ))}
    </>
  );
};

export default CastCrewInfo;
