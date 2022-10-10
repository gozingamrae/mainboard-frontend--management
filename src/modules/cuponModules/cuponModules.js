import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_CUPON = "cuponlist/GET_CUPON";

export const actions = createActions({
    [GET_CUPON]: () => {}
})

const cuponReducer = handleActions(
    {
        [GET_CUPON]: (state, {payload}) =>{
            return payload;
        }
    },
    initialState
);

export default cuponReducer;
