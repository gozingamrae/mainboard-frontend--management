import { createActions, handleActions } from "redux-actions";

const initialState = [

    {
        memberId : '',
        description: ''
    }
]

export const INPUT_INFO = "blacklist/INPUT_INFO"

export const blacklistReducer = handleActions(
    {
        [INPUT_INFO]: (state, { payload }) => {
            state[0][(payload.name)] = payload.value;
            return{
                ...state
            }
        }
    },
    initialState
);

export default blacklistReducer;