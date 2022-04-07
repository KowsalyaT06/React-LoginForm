import { combineReducers } from "redux";
import { ReducerProduct, AddReducer,DeleteReducer,editReducer } from '../Reducer/ReducerProduct';


const reducers = combineReducers({
    allProducts:ReducerProduct,
    AddProducts:AddReducer,
    DeleteReducer:DeleteReducer,
    editReducer:editReducer
})
export default reducers;