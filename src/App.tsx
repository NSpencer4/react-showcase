import ConfigContext from './context/ConfigContext';
import ConfigConstants from './constants/config.constants';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import React from 'react';

export const App = (): JSX.Element => {
  return (
    <div id="app-wrapper">
      <ConfigContext.Provider value={ConfigConstants.GLOBAL_CONFIG}>
        <Header/>
        <main>
        </main>
        <Footer/>
      </ConfigContext.Provider>
    </div>
  );
};
