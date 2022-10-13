import {createActions, handleActions} from "redux-actions";

const initialState = {};


export const GET_PRODUCTS ='inventory/GET_PRODUCTS';
export const GET_PRODUCT ='inventory/GET_PRODUCT';

const actions = createActions({
    [GET_PRODUCTS] : () => {},
    [GET_PRODUCT] : () => {}
});

const addInventoryReducer = handleActions({
    [GET_PRODUCTS] : (state, {payload}) =>{
        return payload;
    },[GET_PRODUCT] : (state, {payload}) =>{
        return payload;
    }
},initialState);

export default addInventoryReducer;