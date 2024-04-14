import React from 'react';
import Movies from "../components/Movies.jsx";
import "../styles/movies.css";

const Main = (props) => {
  const moviesData = props.data.results;
  return (
    <div className="movieContainer">
      {moviesData.map((data, index) => (
        <Movies data={data} key={index}/>
      ))}
    </div>
  );
};

export default Main
