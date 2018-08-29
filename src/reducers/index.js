import { combineReducers } from "redux";
import ingredientsInfo from "./orderReducer";
import price from "./priceReducer";
import orders from "./ordersDetailReducer";
import loading from "./ajaxCallReducer";

const rootReducer = combineReducers({
  ingredientsInfo,
  price,
  orders,
  loading
});
export default rootReducer;
