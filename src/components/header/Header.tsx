import React from 'react';
// import { useSelector } from 'react-redux';
// import { AppState } from '../../state/store/store.types';
// import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  // const state = useSelector((appState: AppState) => appState.selectedProducts);

  return (
    <header className="row align-items-center">
      <div className="col-12">
        <h1>Sandbox</h1>
      </div>
      {/*<pre>{JSON.stringify(state)}</pre>*/}
    </header>
  );
};
