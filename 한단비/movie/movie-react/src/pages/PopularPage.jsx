import React from 'react'
import MovieList from '../components/MovieList';
import { DetailContainer } from './MovieDetailPage';

export default function PopularPage() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=8ef789919cffed29e0e0fac9a90d79bc';
    return (
        <DetailContainer>
          <MovieList apiUrl={apiUrl} isPagination={true}/>
        </DetailContainer>
      );
}
