//import { ADD_INCREDIENT, REMOVE_INCREDIENT } from "./../actions/actionType";
export default function orderReducer(state = 0, action) {
  switch (action.type) {
    case "ADD_PRICE":
      return state + action.price;
      break;
    case "REMOVE_PRICE":
      return state - action.price;
      break;
    default:
      return state;
  }
}
