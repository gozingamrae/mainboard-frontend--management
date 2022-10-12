import { createActions, handleActions } from 'redux-actions';

const initialState = {coupon: []};

export const GET_CUPONS = "cupons/GET_CUPONS";

export const actions = createActions({
    [GET_CUPONS]: () => {}
})

const cuponReducer = handleActions(
    {
        [GET_CUPONS]: (state, {payload : coupon}) =>{

            // console.log(payload)
            // state.coupon = payload;
            // console.log(state)
            // return state;

            return {
                ...state,
                coupon
            }
        }
    },
    initialState
);

export default cuponReducer;
