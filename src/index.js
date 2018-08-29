import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, BrowserRouter } from "react-router-dom";
import App from "./routes";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import registerServiceWorker from "./serviceWorker";
import sagas from "./sagas";
const store = configureStore();
store.runSaga(sagas);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
render(app, document.getElementById("root"));
registerServiceWorker();
