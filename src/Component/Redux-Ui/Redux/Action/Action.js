import { ActionTypes } from "./Actiontype"
import axios from "axios";
import Products from "../../Products/Products";
import { useEffect } from "react";
export const setProducts = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3006/products')
            .catch((error) => {
                console.log('error', error)
            })
        dispatch({
            type: ActionTypes.SET_PRODUCT,
            payload: response.data
        })
        console.log('res', response.data);
    }

}

export const addProducts = (data) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3006/products', data)
            .catch((error) => {
                console.log('error', error)
            })
        dispatch({
            type: ActionTypes.ADD_PRODUCT,
            payload: response.data
        })
        console.log('res', response.data);
    }
}

export const deleteProducts = (product) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3006/products/${product}`)
            .catch((error) => {
                console.log('error', error)
            })
        console.log('res', response.data);
    }

}


export const editProducts = (add,id) => {
    return async (dispatch) => {
        const response = await axios.put(`http://localhost:3006/products/${id}`,add)
            .catch((error) => {
                console.log('error', error)
            })
        dispatch({
            type: ActionTypes.EDIT_PRODUCT,
            payload: add
        })
        console.log('kfsdj',add);
    }
}
