import React, {useState} from 'react';
import "../styles/movies.css";
import MovieInfo from "./MovieInfo.jsx";

const Movies = (props) => {
  const {original_title, overview, poster_path, vote_average} = props.data;
  console.log(props.data);

  const [isHover, setIsHover] = useState(false);
  const openInfo = () => {
    setIsHover(true);
  }
  const closeInfo = () => {
    setIsHover(false);
  }

  return (
    <div className="movie" onMouseEnter={openInfo} onMouseLeave={closeInfo}>
      {/*  마우스커서를 위로 가져다댔을때 영화 상세설명이 뜨도록  */}
      {isHover && <MovieInfo title={original_title} info={overview}/>}
      <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
      <div className="movieBasic">
        <p className="movieTitle">{original_title}</p>
        <p className="movieTitle">{vote_average}</p>
      </div>

    </div>
  );
};

export default Movies;
