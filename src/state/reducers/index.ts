import { combineReducers } from '@reduxjs/toolkit';
import { ProductPickerReducer } from './product-picker.reducer';

export const appReducers = combineReducers({
  selectedProducts: ProductPickerReducer
});
