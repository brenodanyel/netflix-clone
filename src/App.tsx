import React from 'react';
import { Header } from './components/Header';
import { CategoryList } from './components/CategoryList';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <CategoryList />
      <Footer />
    </>
  );
}
