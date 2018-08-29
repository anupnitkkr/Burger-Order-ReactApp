import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import * as type from "../actions/actionType";

export const mainSaga = function*() {
  yield takeLatest(type.FETCHING_ORDER, orderSage);
};

function fetchAllOrders() {
  return axios({
    method: "get",
    url: "https://burger-api.firebaseio.com/orders.json"
  });
}

function* orderSage() {
  try {
    yield put({
      type: type.AJAX_START
    });
    const response = yield call(fetchAllOrders);
    yield put({
      type: type.FETCH_ORDERS_SUCCESS,
      payload: response.data
    });
    yield put({
      type: type.AJAX_COMPLETE,
      payload: response.data
    });
  } catch (oError) {
    console.log("api call fails");
  }
}
