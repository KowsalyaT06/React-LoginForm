import { combineReducers } from "redux";
import { ReducerProduct, Multiproductreducer } from './ReducerProduct';


const Combinereducer = combineReducers({
    allProducts:ReducerProduct,
    multiProducts:Multiproductreducer
})
export default Combinereducer;