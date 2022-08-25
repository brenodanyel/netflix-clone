import React from 'react';
import { Header } from './components/Header';
import { CategoryList } from './components/CategoryList';
import { Footer } from './components/Footer';
import { FeaturedMovie } from './components/FeaturedMovie';

export function App() {
  return (
    <>
      <Header />
      <FeaturedMovie />
      <CategoryList />
      <Footer />
    </>
  );
}
