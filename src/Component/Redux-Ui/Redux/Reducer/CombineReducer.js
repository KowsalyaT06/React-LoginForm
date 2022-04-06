import { combineReducers } from "redux";
import { ReducerProduct } from '../Reducer/ReducerProduct';
import { AddReducer } from "./AddReducer";

const reducers = combineReducers({
    allProducts:ReducerProduct,
    AddProducts:AddReducer,

})
export default reducers;