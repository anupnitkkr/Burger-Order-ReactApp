//import { ADD_INCREDIENT, REMOVE_INCREDIENT } from "./../actions/actionType";
import intialState from "../store/initialState";
export default function orderReducer(state = 0, action) {
  switch (action.type) {
    case "AJAX_START":
      return state + 1;
      break;
    case "AJAX_COMPLETE":
      return state - 1;
    default:
      return state;
  }
}
