import axios from "axios";
import * as type from "./actionType";
export function ComleteAjaxCall(payload) {
  return { type: type.AJAX_COMPLETE, payload };
}

export function startAjaxCall() {
  return { type: type.AJAX_START };
}
