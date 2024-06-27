import React from "react";
import MovieList from "../components/MovieList";
import { DetailContainer } from "./MovieDetailPage";
import InfiniteScrollList from "../components/InfiniteScrollList";

export default function NowPlayingPage() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&api_key=8ef789919cffed29e0e0fac9a90d79bc";
  return (
    <div>
      <DetailContainer>
        <InfiniteScrollList apiUrl={apiUrl} isInfiniteScroll={true}/>
      </DetailContainer>
    </div>
  );
}
