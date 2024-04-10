import React from "react";
import { useState } from "react";
// 이미지 받아오기
// base_url, filr_size => /configuration API 호출하여 검색
// file_path => 특정 미디어 개체에서 가져오려는 파일 경로

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const Movie = ({ title, poster_path, vote_average, id, overview}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="movie-container"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <img src={IMG_BASE_URL + poster_path} alt="영화 포스터" />
            <div className="movie-info">
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                    <p>{id}</p>
                </div>
            {isHover && (
                <div className="movie-detail">
                    <h4>{title}</h4>
                    <p>{overview}</p>
                </div>
            )}
        </div>
    );
}

export default Movie;
//alt :
// key는 prop으로 보낼 수 없기에 같은 값을 지닌 다른 이름을 사용해야 함 !! => id로 사용함.