import { ActionTypes } from './Actiontype';
import axios from 'axios';
//GET
export const setProducts = () => {
  return async (dispatch) => {
    let response;
    try {
      response = await axios.get('http://localhost:3006/products');
    } catch (error) {
      alert('error Page', error);
    } finally {
      if (response.data) {
        dispatch({
          type: ActionTypes.SET_PRODUCT,
          payload: response.data
        });
      } else {
        console.log('finally');
      }
    }
  };
};
//POST
export const addProducts = (data) => {
  return async (dispatch) => {
    await axios
      .post('http://localhost:3006/products', data)
      .then((res) => {
        dispatch({
          type: ActionTypes.ADD_PRODUCT,
          payload: res.data
        });
      })
      .catch((error) => {
        console.log('error while Posting the Product', error);
      });
  };
};
export const deleteProducts = (product) => {
  return async () => {
    const response = await axios
      .delete(`http://localhost:3006/products/${product}`)
      .catch((error) => {
        console.log('error', error);
      });
    console.log('res', response.data);
  };
};
export const editProducts = (add, id) => {
  return async () => {
    const response = await axios.put(`http://localhost:3006/products/${id}`, add).catch((error) => {
      console.log('error', error);
    });
    console.log('Edit', add);
    console.log('Edits', response);
  };
};
