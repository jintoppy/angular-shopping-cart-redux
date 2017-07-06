import {combineReducers} from '@ngrx/store';
import {cartreducer} from './cart.reducer';
import {catalogreducer} from './catalog.reducer';

export const AppReducer = combineReducers({
    catalog: catalogreducer,
    cart: cartreducer
});

