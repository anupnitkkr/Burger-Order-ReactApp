import axios from "axios";
import * as type from "./actionType";
export { startAjaxCall, ComleteAjaxCall } from "./ajaxCalls";
export function orderNowActionSuccess(payload) {
  return { type: type.FETCH_ORDERS_SUCCESS, payload };
}
export function getAllOrders() {
  return { type: type.FETCHING_ORDER };
}
