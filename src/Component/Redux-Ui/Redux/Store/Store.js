import { applyMiddleware, createStore } from 'redux';
import CombineReducer from '../Reducer/CombineReducer';
import ThunkMiddleware from 'redux-thunk';

const middleware = [ThunkMiddleware];
const Store = createStore(CombineReducer, applyMiddleware(...middleware));

export default Store;
