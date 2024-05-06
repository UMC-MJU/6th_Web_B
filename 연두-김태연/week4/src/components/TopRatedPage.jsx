import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'; 
import Loading from '../Loading'; 


const TopRatedPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setTimeout(async () => {
          const response = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated',
            {
              params: {
                api_key: '46a397cf7e08676521ec72f5fa736dd3'
              }
            }
          );
          setMovieData(response.data.results);
          setLoading(false); // -> 데이터 가져오기 완료 후 로딩 상태 변경
        }, 500); // 로딩 시간이 넘 짧아서 확인할 수 없어 0.5초로 지연시켜 확인한다.
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        setLoading(false); // 에러 발생 시 로딩 상태 변경
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? ( // 로딩 중일 때 
        <Loading />
      ) : (
        movieData.map(movie => (
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
        ))
      )}
    </div>
  );
}

export default TopRatedPage;