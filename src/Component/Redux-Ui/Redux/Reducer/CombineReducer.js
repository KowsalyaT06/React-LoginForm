import { combineReducers } from "redux";
import { ReducerProduct } from '../Reducer/ReducerProduct';

const reducers = combineReducers({
    allproducts:ReducerProduct,
})
export default reducers;