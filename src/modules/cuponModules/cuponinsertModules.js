import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const INSERT_CUPONS = "cupons/INSERT_CUPONS";

export const actions = createActions({
    [INSERT_CUPONS]: () => {}
})

const cuponInsertReducer = handleActions(
    {
        [INSERT_CUPONS]: (state, {payload}) =>{
            return payload;
        }
    },
    initialState
);

export default cuponInsertReducer;
