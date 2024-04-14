import React from 'react';
import "../styles/movieinfo.css";

const MovieInfo = (props) => {
  const title = props.title;
  const overview = props.info;
  return (
    <div className="movieInfoContainer">
      <div className="title">
        {title}
      </div>
      <div className="overview">
        {overview}
      </div>
    </div>
  );
};

export default MovieInfo;
