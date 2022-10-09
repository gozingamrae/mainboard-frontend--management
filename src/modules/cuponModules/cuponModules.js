import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const INSERT_CUPON = "cuponlist/INSERT_CUPON";

export const actions = createActions({
    [INSERT_CUPON]: () => {}
})

const cuponReducer = handleActions(
    {
        [INSERT_CUPON]: (state, {payload}) =>{
            return payload;
        }
    },
    initialState
);

export default cuponReducer;
