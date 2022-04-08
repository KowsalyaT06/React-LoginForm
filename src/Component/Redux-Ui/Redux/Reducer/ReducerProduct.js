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

export const AddReducer=(state=intial,action) => {
    switch(action.type){
        case ActionTypes.ADD_PRODUCT:
            return {...state, products:action.payload};
            default:
                return state;
    }
}

export const DeleteReducer=(state=intial,action) => {
    switch(action.type){
        case ActionTypes.REMOVE_PRODUCT:
            return [state.filter(remove => remove.id !== action.payload.id)];
            default:
                return state;
    }
}

// export const editReducer=(state=intial,action) => {
//     switch(action.type){
//         case ActionTypes.EDIT_PRODUCT:
//             return {...state, products:action.payload};
//             default:
//                 return state;
//     }
// }
