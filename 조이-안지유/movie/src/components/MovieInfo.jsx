import React from 'react';
import "../styles/movieinfo.css";

const MovieInfo = (props) => {
  console.log(props);
  const title = props.title;
  const overview = props.info;
  console.log(overview);
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
