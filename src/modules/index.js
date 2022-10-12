import { combineReducers } from 'redux';
import productReducer from './productModules/ProductModule';
import  orderReducer from "./orderModules/orderModule";
import  cuponReducer from "./cuponModules/cuponModules";
import cuponInsertReducer from './cuponModules/cuponinsertModules';

const rootReducer = combineReducers({

    cuponReducer,
    cuponInsertReducer,
    orderReducer,
    productReducer
});

export default rootReducer;
