import React, {useState} from 'react';
import "../styles/movies.css";
import MovieInfo from "./MovieInfo.jsx";

const Movies = (props) => {
  const {original_title, overview, poster_path, vote_average} = props.data;
  const [isHover, setIsHover] = useState(false);
  const openInfo = () => {
    setIsHover(true);
  }
  const closeInfo = () => {
    setIsHover(false);
  }

  return (
    <div className="movie" onMouseEnter={openInfo} onMouseLeave={closeInfo}>
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
