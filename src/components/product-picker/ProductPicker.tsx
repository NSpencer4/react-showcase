import React from 'react';
import { Picklist, PicklistData, PicklistVariant } from '@nspencer4/components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppState } from '../../state/store/store.types';
import * as ActionCreators from '../../state/actions/product-picker.actions';

export const ProductPicker = (): JSX.Element => {
  const state: PicklistData[] = useSelector((appState: AppState) => appState.selectedProducts);
  const dispatch = useDispatch();
  const { updateSelectedProducts } = bindActionCreators(ActionCreators, dispatch);
  const mockData: PicklistData[] = [
    { id: 'Advil', name: '$5.49' },
    { id: 'Tylenol Cold + Flu', name: '$6.99' },
    { id: 'Motrin', name: '$7.00' },
    { id: 'Claritin', name: '$4.99' },
    { id: 'Flonase', name: '$23.38' }
  ];

  const callback = (items: PicklistData[]) => {
    updateSelectedProducts(items);
  };

  return (
    <div className="row align-items-center">
      <pre>{JSON.stringify(state)}</pre>
      <Picklist
        variant={PicklistVariant.Primary} selectablesContainerHeaderText="Selectables" selectedContainerHeaderText="Selected"
        selectedContainerPlaceholderText="Select a Product" sortList={true} picklistItems={mockData}
        selectedItemsCallback={callback}/>
    </div>
  );
};
