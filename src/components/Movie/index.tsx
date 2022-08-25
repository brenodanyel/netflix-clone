import { IMovie } from '../../types/movie';

import style from './movie.module.scss';

type IMovieProps = {
  data: IMovie;
};

export function Movie({ data }: IMovieProps) {
  return (
    <div className={style.movie}>
      <img
        src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
        alt={data.original_name}
        className={style.thumbnail}
      />
    </div>
  );
}
