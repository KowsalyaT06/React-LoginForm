import { ActionTypes } from "../Action/Actiontype";

const intial ={
    products:[]
}

export const ReducerProduct=(state=intial,action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCT:
            return {...state, products:action.payload};
            default:
                return state;
    }
}

