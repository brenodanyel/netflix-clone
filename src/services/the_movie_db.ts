import { ICategory } from '../types/category';
import { ITvMovie } from '../types/movie';
import api from './api';
import { movies, movie } from './mock';

const getList = async (url: string) => {
  const { data } = await api.get(url);
  return data;
};

const getRandomArrayItem = <T>(items: T[]) => {
  const item = items[Math.floor(Math.random() * items.length)];
  return item;
};

const getMovieInfo = (movieId: number, type: string) => {
  return getList(`/${type}/${movieId}`);
};

export const getHomeItems = async (): Promise<ICategory[]> => {
  try {
    const result = [
      {
        title: "Originais Netflix",
        items: await getList("/discover/tv?with_network=213"),
      },
      {
        title: "Recomendados para você",
        items: await getList("/trending/all/week"),
      },
      {
        title: "Em alta",
        items: await getList("/movie/top_rated"),
      },
      {
        title: "Aventura",
        items: await getList("/discover/movie?with_genres=12"),
      },
      {
        title: "Comédia",
        items: await getList("/discover/movie?with_genres=35"),
      },
      {
        title: "Família",
        items: await getList("/discover/movie?with_genres=10751"),
      },
      {
        title: "Romance",
        items: await getList("/discover/movie?with_genres=10749"),
      },
      {
        title: "Documentário",
        items: await getList("/discover/movie?with_genres=99"),
      },
    ];
    return result;
  } catch (e) {
    return movies as unknown as ICategory[];
  }
};

export const getFeaturedMovie = async (): Promise<ITvMovie> => {
  try {
    const items = await getHomeItems();
    const category = getRandomArrayItem(items);
    const chosen = getRandomArrayItem(category.items.results);
    const movie = await getMovieInfo(chosen.id, 'tv');
    return movie;
  } catch (e) {
    return movie as unknown as ITvMovie;
  };
};
