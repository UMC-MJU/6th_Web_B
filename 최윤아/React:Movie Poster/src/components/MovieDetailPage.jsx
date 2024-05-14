import { useParams, useNavigate, useLocation } from 'react-router-dom';

function MovieDetailPage() {
  const { movieName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const movieData = { vote_average: 7.7, overview: "Great movie about racing." };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return '⭐️'.repeat(fullStars);
  };

  return (
    <div>
      <h1>{decodeURIComponent(movieName)}</h1>
      <p>Rating: {renderStars(movieData.vote_average)}</p>
      <p>{movieData.overview || "줄거리가 없습니다."}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default MovieDetailPage;
