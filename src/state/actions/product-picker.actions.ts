import { Dispatch } from '@reduxjs/toolkit';
import { PicklistData } from '@nspencer4/components';

export const updateSelectedProducts = (picklistData: PicklistData[]) => {
  return (dispatch: Dispatch): void => {
    dispatch({
      type: 'update-selected-products',
      payload: { selectedProducts: picklistData }
    });
  };
};
