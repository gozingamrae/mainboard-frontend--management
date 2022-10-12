import { combineReducers } from 'redux';
import  orderReducer from "./orderModules/orderModule";
import  cuponReducer from "./cuponModules/cuponModules";
import cuponInsertReducer from './cuponModules/cuponinsertModules';

const rootReducer = combineReducers({
    orderReducer ,
    cuponReducer,
    cuponInsertReducer
});

export default rootReducer;
