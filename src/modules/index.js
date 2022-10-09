import { combineReducers } from 'redux';
import productReducer from './productModules/ProductModule';
import  orderReducer from "./orderModules/orderModule";

const rootReducer = combineReducers({
    orderReducer,
    productReducer
});

export default rootReducer;
