import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import * as type from "../actions/actionType";

export const homeSaga = function*() {
  yield takeLatest(type.FETCHING_INGREDIENTS, orderSage);
};

function fetchIngredients() {
  return axios({
    method: "get",
    url: "https://burger-api.firebaseio.com/ingredients.json"
  });
}

function* orderSage() {
  try {
    yield put({
      type: type.AJAX_START
    });
    const response = yield call(fetchIngredients);
    let pricing = response.data;
    let ingredients = {};
    Object.keys(response.data).map(key => {
      return (ingredients[key] = 0);
    });
    let payload = { ingredients, pricing };
    yield put({ type: type.FETCH_INGREDIENTS_ACTIONS_SUCCESS, payload });
    yield put({
      type: type.AJAX_COMPLETE,
      payload: response.data
    });
  } catch (oError) {
    console.log("api call fails");
  }
}
