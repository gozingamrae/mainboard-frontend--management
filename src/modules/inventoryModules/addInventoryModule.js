import {createActions, handleActions} from "redux-actions";

const initialState = {};


export const GET_PRODUCTS ='inventory/GET_PRODUCTS';
export const GET_PRODUCT ='inventory/GET_PRODUCT';
export const GET_INVENTORYS ='inventory/GET_INVENTORYS';
const actions = createActions({
    [GET_PRODUCTS] : () => {},
    [GET_PRODUCT] : () => {},
    [GET_INVENTORYS] : () => {}
});

const addInventoryReducer = handleActions({
    [GET_PRODUCTS] : (state, {payload}) =>{
        return payload;
    },[GET_PRODUCT] : (state, {payload}) =>{
        return payload;
    },[GET_INVENTORYS] : (state, {payload}) =>{
        return payload;
    }
},initialState);

export default addInventoryReducer;