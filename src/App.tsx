import React from 'react';
import { ProductPicker } from './components/product-picker/ProductPicker';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export const App = (): JSX.Element => {
  return (
    <div id="app-wrapper">
        <Header/>
        <main>
          <ProductPicker/>
        </main>
        <Footer/>
    </div>
  );
};
