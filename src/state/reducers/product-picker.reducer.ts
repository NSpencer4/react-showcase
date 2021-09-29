import { PicklistData } from '@nspencer4/components';

const initialState: { selectedProducts: PicklistData[] } = {
  selectedProducts: []
};

type ProductPickerReducerAction = {
  type: 'update-selected-products',
  payload: { selectedProducts: PicklistData[] },
};

export const ProductPickerReducer = (state: { selectedProducts: PicklistData[] } = initialState,
  action: ProductPickerReducerAction): PicklistData[] => {
  if (action.type === 'update-selected-products') {
    return action.payload.selectedProducts;
  }
  return state.selectedProducts;
};
