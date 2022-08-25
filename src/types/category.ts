import { IMovie } from './movie';

export type ICategory = {
  title: string;
  items: {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
  };
};
