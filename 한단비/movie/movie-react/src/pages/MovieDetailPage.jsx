import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import  {IMG_BASE_URL} from '../components/Movie';

export default function MovieDetailPage() {

    const {title} = useParams(); // url로 넘겨준 영화 이름
    const {state} = useLocation(); // navigate hook을 통해 넘겨준 props 
    console.log(title);
    console.log(state);

  return (
    <div className='detail-container'>
        <div className='detail-wrap'>
          <img
          style={{width: '300px', height: '450px'}}
          src={IMG_BASE_URL + state.poster_path}
          alt={title}/>
          <div>
            <div style={{ fontSize: "32px" }}>{title}</div>
            <div>{state.overview}</div>
          </div>
        </div>
    </div>
  )
}