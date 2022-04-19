import { ActionTypes } from "./Actiontype"
import axios from "axios";

//GET
export const setMultiProducts = () => {
    return async (dispatch) => {
        let response;
        try {
            response = await axios.get('http://localhost:3007/Multiproducts')
            dispatch({
                type: ActionTypes.SET_MULTIPRODUCT,
                payload: response.data
            })
            console.log(response, 'response')
        }
        catch (error) {
            alert('error Page', error)
        }
        finally {
            console.log('finally')
        }
    }
}


//POST
export const addMultiProducts = (dataMulti) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3007/Multiproducts', dataMulti)
            dispatch({
                type: ActionTypes.ADD_MULTIPRODUCT,
                payload: response.dataMulti
            })
            dispatch(setMultiProducts())
        }
        catch (error) {
            console.log('error while Posting the Product', error)
        }
        finally {
            console.log('Finally')
        }

    }
}

//delete
export const deleteMultiProducts = (Multiproduct) => {
    return async () => {
        let response = await axios.delete(`http://localhost:3007/Multiproducts/${Multiproduct}`)
            .catch((error) => {
                console.log('error', error)
            })
        console.log('res', response.data);
    }

}

//Edit
export const editMultiProducts = (addMulti, id) => {
    return async () => {
        const response = await axios.put(`http://localhost:3007/Multiproducts/${id}`, addMulti)
            .catch((error) => {
                console.log('error', error)
            })
        console.log('EditMulti', addMulti);
        console.log('EditMultiii', response);
    }
}
