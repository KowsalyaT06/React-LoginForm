import { applyMiddleware, createStore } from "redux";
import reducers from '../Reducer/CombineReducer';
import ThunkMiddleware from "redux-thunk";

const middleware=[ThunkMiddleware]
const Store = createStore(reducers,(applyMiddleware(...middleware)));

export default Store