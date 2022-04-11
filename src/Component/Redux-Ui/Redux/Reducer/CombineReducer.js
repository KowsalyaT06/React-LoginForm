import { combineReducers } from "redux";
import { ReducerProduct, Multiproductreducer } from '../Reducer/ReducerProduct';


const reducers = combineReducers({
    allProducts:ReducerProduct,
    multiProducts:Multiproductreducer
})
export default reducers;