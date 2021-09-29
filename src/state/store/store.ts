import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { appReducers } from '../reducers';
import thunk from 'redux-thunk';

export const store = createStore(
  appReducers,
  {},
  applyMiddleware(thunk)
);
