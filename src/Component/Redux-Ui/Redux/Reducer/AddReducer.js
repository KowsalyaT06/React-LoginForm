import { ActionTypes } from "../Action/Actiontype";

const intial ={
    products:[]
}

export const AddReducer=(state=intial,action) => {
    switch(action.type){
        case ActionTypes.ADD_PRODUCT:
            return {...state, products:action.payload};
            default:
                return state;
    }
}


