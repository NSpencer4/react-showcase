import { DefaultRootState } from 'react-redux';
import { PicklistData } from '@nspencer4/components';

export interface AppState extends DefaultRootState {
  selectedProducts: PicklistData[]
}
