import { combineReducers } from 'redux';
import productReducer from './productModules/ProductModule';

const rootReducer = combineReducers({
    productReducer
});

export default rootReducer;
