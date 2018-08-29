//import { ADD_INCREDIENT, REMOVE_INCREDIENT } from "./../actions/actionType";
import intialState from "../store/initialState";
export default function orderReducer(state = intialState.home, action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.name]: state.ingredients[action.name] + 1
        }
      };
      break;
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.name]: state.ingredients[action.name] - 1
        }
      };
      break;
    case "FETCH_INGREDIENTS_ACTIONS_SUCCESS":
      return action.payload;
      break;
    case "FETCHING_INGREDIENTS":
      return state;
      break;
    default:
      return state;
  }
}
