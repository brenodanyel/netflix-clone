import axios from 'axios';

const { VITE_THE_MOVIE_DB_API_KEY = "" } = import.meta.env;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: VITE_THE_MOVIE_DB_API_KEY,
    language: 'pt-BR',
  }
});

export default instance;
