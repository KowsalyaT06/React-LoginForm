import { ActionTypes } from "./Actiontype"

export const setProducts = (products)=>{
    return{
        type: ActionTypes.SET_PRODUCT,
        payload:products
    }
}

export const addProducts = (products)=>{
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload:products
    }
}