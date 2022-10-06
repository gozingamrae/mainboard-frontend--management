import {createActions, handleActions} from "redux-actions";

const initialState = [];


export const GET_PRODUCTS ='product/GET_PRODUCTS';

const actions = createActions({
    [GET_PRODUCTS] : () => {}
});

const productReducer = handleActions({
    [GET_PRODUCTS] : (state, {payload}) =>{
        return payload;
    }
},initialState);

export default productReducer;