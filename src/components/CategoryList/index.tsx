import React from 'react';
import { getHomeItems } from '../../services/the_movie_db';
import { ICategory } from '../../types/category';
import { Category } from '../Category';

import style from './category_list.module.scss';

export function CategoryList() {
  const [categories, setCategories] = React.useState<ICategory[]>([]);

  React.useEffect(() => {
    const loadCategories = async () => {
      const result = await getHomeItems();
      setCategories(result);
    };

    loadCategories();
  }, []);

  return (
    <div className={style.category_list}>
      {
        categories.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            movies={category.items.results}
          />
        ))
      }
    </div>
  );
}
