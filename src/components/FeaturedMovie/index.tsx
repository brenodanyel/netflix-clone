import React from 'react';
import { ITvMovie } from '../../types/movie';
import { getFeaturedMovie } from '../../services/the_movie_db';

import style from './featured_movie.module.scss';

export function FeaturedMovie() {
  const [movie, setMovie] = React.useState<ITvMovie | null>(null);

  React.useEffect(() => {
    const findFeaturedMovie = async () => {
      const chosen = await getFeaturedMovie();
      setMovie(chosen);
    };

    findFeaturedMovie();
  }, []);

  if (!movie) {
    return null;
  }

  return (
    <div
      className={style.featured_movie_container}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      <div className={style.gradient_vertical}>
        <div className={style.gradient_horizontal}>

          <div className={style.featured_movie}>
            <h1 className={style.title}>{movie.name}</h1>
            <div className={style.info_container}>
              <span className={style.green}>{movie.vote_average.toFixed(1)} pontos</span>
              <span>{new Date(movie.first_air_date).getFullYear()}</span>
              <span>
                {movie.number_of_seasons}
                {' '}
                {
                  movie.number_of_seasons > 1
                    ? 'temporadas'
                    : 'temporada'
                }
              </span>
            </div>
            <p className={style.description}>{movie.overview}</p>
            <div className={style.buttons_container}>
              <button className={`${style.button} ${style.assistir}`}>Assistir</button>
              <button className={`${style.button} ${style.minha_lista}`}>Minha Lista</button>
            </div>
            <p className={style.genres}>
              Gêneros:
              {' '}
              {
                movie.genres.map((genre) => genre.name).join(', ')
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
