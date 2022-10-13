import {createActions, handleActions} from "redux-actions";

const initialState = {};


export const GET_PRODUCTS ='productExample/GET_PRODUCTS';
export const GET_PRODUCT ='productExample/GET_PRODUCT';
export const SEARCH_PRODUCT ='productExample/SEARCH_PRODUCT';
export const DETAIL_PRODUCT ='productExample/DETAIL_PRODUCT';
export const POST_PRODUCT ='productExample/POST_PRODUCT';

const actions = createActions({
    [GET_PRODUCTS] : () => {},
    [GET_PRODUCT] : () => {},
    [SEARCH_PRODUCT] : () => {},
    [DETAIL_PRODUCT] : () => {},
    [POST_PRODUCT] : () => {},
});

 const productExampleReducer = handleActions({
    [GET_PRODUCTS] : (state, {payload}) =>{
        return payload;
    },
    [GET_PRODUCT] : (state, {payload}) =>{
        return payload;
    },
    [SEARCH_PRODUCT]: (state, { payload }) => {
        return payload;
    },
    [DETAIL_PRODUCT]: (state, { payload }) => {
        return payload;
    },
    [POST_PRODUCT]: (state, { payload }) => {
        return payload;
    }        
},initialState);

export default productExampleReducer;