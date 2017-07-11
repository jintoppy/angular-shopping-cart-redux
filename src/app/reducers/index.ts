import {combineReducers} from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import {cartreducer} from './cart.reducer';
import {catalogreducer} from './catalog.reducer';
import { environment } from '../../environments/environment';

const reducers = {
    catalog: catalogreducer,
    cart: cartreducer
};

const productionReducer: ActionReducer<object> = combineReducers(reducers);


export function AppReducer(state: any, action: any) {
  return productionReducer(state, action);
};