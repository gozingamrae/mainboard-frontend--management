import { combineReducers } from "redux";
import {
  deliveryReducer,
  deliveryTargetReducer,
} from "./deliveryModules/deliveryModule";
import orderReducer from "./orderModules/orderModule";

const rootReducer = combineReducers({
  orderReducer,
  deliveryReducer,
  deliveryTargetReducer,
});

export default rootReducer;
