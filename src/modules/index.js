import { combineReducers } from 'redux';
import productReducer from './productModules/ProductModule';
import  orderReducer from "./orderModules/orderModule";
import addInventoryReducer from './inventoryModules/addInventoryModule';
import  orderSearchReducer from "./orderModules/orderSearchModule";
import  cuponReducer from "./cuponModules/cuponModules";
import cuponInsertReducer from './cuponModules/cuponinsertModules';
import memberAPIReducer from './memberModules/memberAPIModule';
import blacklistReducer from './memberModules/blacklistModule';
import productExampleReducer from './productModules/ProductExampleModule';
import inventoryReducer from './inventoryModules/addInventoryModule';
const rootReducer = combineReducers({

    cuponReducer,
    cuponInsertReducer,
    orderReducer,
    productReducer,
    addInventoryReducer,
    memberAPIReducer,
    blacklistReducer,
    orderSearchReducer,
    productExampleReducer,
    inventoryReducer
});

export default rootReducer;
