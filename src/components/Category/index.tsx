import React from 'react';
import { Movie } from '../Movie';
import { IMovie } from '../../types/movie';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import style from './category.module.scss';

type CategoryProps = {
  title: string,
  movies: IMovie[];
};

export function Category({ title, movies }: CategoryProps) {
  useScrollReveal();

  const movieWidth = 150;
  const listWidth = movies.length * movieWidth;

  const [scrollX, setScrollX] = React.useState(-movieWidth * 2);

  const handleArrowClick = (direction: string) => {
    const screenWidth = window.innerWidth;
    const speed = screenWidth < 768 ? 2 : 5;

    direction == 'left'
      ? setScrollX((x) => Math.min(0, x + movieWidth * speed))
      : setScrollX((x) => Math.max(screenWidth - listWidth, x - movieWidth * speed));

  };

  return (
    <div className={`${style.category} delayMediumReveal intervalCardReveal`}>
      <span className={style.title}>{title}</span>
      <div className={style.movies_container}>
        <div className={style.movies_wrapper} style={{ marginLeft: scrollX, width: listWidth }}>
          {
            movies.map((movie) => <Movie key={movie.id} data={movie} />)
          }
          <button
            onClick={() => handleArrowClick('left')}
            className={`${style.arrow} ${style.left}`}>
            {"<"}
          </button>
          <button
            onClick={() => handleArrowClick('right')}
            className={`${style.arrow} ${style.right}`}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
