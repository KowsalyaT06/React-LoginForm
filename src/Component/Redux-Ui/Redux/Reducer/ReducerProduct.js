import { ActionTypes } from "../Action/Actiontype";

const intial ={
    products:[{
        id:1,
        nam:'Kowsi'
    }]
}

export const ReducerProduct=(state,action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCT:
            return state;
            default:
                return state;
    }
}