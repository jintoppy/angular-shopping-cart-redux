import {combineReducers} from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import {cartreducer} from './cart.reducer';
import {catalogreducer} from './catalog.reducer';

const reducers = {
    catalog: catalogreducer,
    cart: cartreducer
};

const myreducer: ActionReducer<object> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
  return myreducer(state, action);
};