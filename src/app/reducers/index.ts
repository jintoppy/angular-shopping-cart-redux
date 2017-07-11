import {combineReducers} from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import {cartreducer} from './cart.reducer';
import {catalogreducer} from './catalog.reducer';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';


const reducers = {
    catalog: catalogreducer,
    cart: cartreducer
};

const productionReducer: ActionReducer<object> = combineReducers(reducers);


export function AppReducer(state: any, action: any) {
  return productionReducer(state, action);
};