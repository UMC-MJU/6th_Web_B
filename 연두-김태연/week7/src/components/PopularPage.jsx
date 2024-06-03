import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from '../Loading'; 
import '../App.css'; 

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '46a397cf7e08676521ec72f5fa736dd3',
              page: currentPage, 
            },
          }
        );
        setMovieData(response.data.results);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, [currentPage]); 

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container">
      {loading ? ( 
        <Loading />
      ) : (
        <>
          {movieData.map((movie) => (
            <div className="poster" key={movie.id}> 
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="overview"> 
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          ))}
        </>
      )}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp; {currentPage}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button onClick={handleNextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
  
};

export default PopularPage;
