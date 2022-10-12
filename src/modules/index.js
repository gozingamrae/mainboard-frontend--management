import { combineReducers } from 'redux';
import productReducer from './productModules/ProductModule';
import  orderReducer from "./orderModules/orderModule";
import addInventoryReducer from './inventoryModules/addInventoryModule';
const rootReducer = combineReducers({
    orderReducer,
    productReducer,
    addInventoryReducer
});

export default rootReducer;
