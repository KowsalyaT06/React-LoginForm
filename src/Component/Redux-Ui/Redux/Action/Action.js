import { ActionTypes } from "./Actiontype"

export const setProducts = (products)=>{
    return{
        type: ActionTypes.SET_PRODUCT,
        payload:products
    }
}

export const selectProducts = (products)=>{
    return{
        type: ActionTypes.SELECT_PRODUCT,
        payload:products
    }
}