import axios from 'axios';

const API_KEY = 'b30af1340e3f532f74ce0bf477b37093'; // TMDb에서 받은 API 키
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US'
  }
});

export const fetchMovies = async (category) => {
  const { data } = await tmdbApi.get(`/movie/${category}`);
  return data.results;
};

export const fetchMovieById = async (id) => {
  const { data } = await tmdbApi.get(`/movie/${id}`);
  return data;
};
