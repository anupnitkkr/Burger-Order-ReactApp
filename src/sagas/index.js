import { fork } from "redux-saga/effects";
import { mainSaga } from "./orderSaga";
import { homeSaga } from "./homePageSaga";

export default function* rootSaga() {
  yield [fork(mainSaga), fork(homeSaga)];
}
