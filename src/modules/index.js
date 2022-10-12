import { combineReducers } from 'redux';
import productReducer from './productModules/ProductModule';
import  orderReducer from "./orderModules/orderModule";
import  orderSearchReducer from "./orderModules/orderSearchModule";


const rootReducer = combineReducers({
    orderReducer,
    productReducer,
    orderSearchReducer,
});

export default rootReducer;
