import { createActions, handleActions } from 'redux-actions';

const initialState = []

export const GET_MEMBERS = 'member/GET_MEMBERS';
export const GET_BLACKLIST = 'member/GET_BLACKLIST';
export const GET_SEARCH = 'member/GET_SEARCH';
export const POST_BLACKLIST = 'member/POST_BLACKLIST';

const actions = createActions({
    [GET_MEMBERS]: () => {},
    [GET_BLACKLIST]: () => {},
    [POST_BLACKLIST]: () => {},
    [GET_SEARCH]: () => {}
});
export const memberAPIReducer = handleActions(
    {
        [GET_MEMBERS]: (state, { payload }) => {
            
            return payload;
        },
        [GET_BLACKLIST]: (state, { payload }) => {
            
            return payload;
        },
        [POST_BLACKLIST]: (state, { payload }) => {
            
            return payload;
        },
        [GET_SEARCH]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default memberAPIReducer;