import { createStore } from "redux";
import reducers from '../Reducer/CombineReducer';

const Store = createStore(reducers,{});

export default Store