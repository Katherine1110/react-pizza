import { createStore, combineReducers } from 'redux';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers(filtersReducer, pizzasReducer, cartReducer);
const store = createStore(rootReducer);

export default store;
