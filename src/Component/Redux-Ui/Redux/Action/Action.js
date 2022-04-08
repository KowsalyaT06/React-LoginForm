import { ActionTypes } from "./Actiontype"
import axios from "axios";

//GET
export const setProducts = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3006/products')
            dispatch({
                type: ActionTypes.SET_PRODUCT,
                payload: response.data
            })
        }
        catch (error) {
            alert('error Page', error)
        }
        finally {
            console.log('Finally')
        }
    }
}

//POST
export const addProducts = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3006/products', data)
            dispatch({
                type: ActionTypes.ADD_PRODUCT,
                payload: response.data
            })
        }
        catch (error) {
            alert('error while Posting the Product', error)
        }
        finally {
            console.log('Finally')
        }
       
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


export const editProducts = (add, id) => {
    return async (dispatch) => {
        const response = await axios.put(`http://localhost:3006/products/${id}`, add)
            .catch((error) => {
                console.log('error', error)
            })
        console.log('Edit', add);
    }
}
