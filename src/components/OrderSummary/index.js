import React from "react";
import { withRouter } from "react-router-dom";
const List = props => {
  let items = [];
  let styleName = {
    textdDecoration: "uppercase"
  };
  Object.keys(props.ingredients).map((key, index) => {
    let count = props.ingredients[key];
    items.push(
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={styleName}
        key={index}
      >
        {key}
        <span className="badge badge-primary badge-pill">{count}</span>
      </li>
    );
  });
  return items;
  // });
};

const orderSummary = props => {
  let state = props;
  let style = {
    transform: "translate(0px)",
    opacity: 0
  };
  if (state.order) {
    style.opacity = 1;
  }
  return (
    <div className="Modal__Modal -a" style={style}>
      <h4>Your order summay is : </h4>
      <ul className="list-group mt-1 mb-1">
        <List ingredients={state.ingredients} />
      </ul>
      <p>
        <strong>Total Price : {state.price}</strong>
      </p>
      <p>Continue to checkout ?</p>
      <button className="btn btn-success mr-3" onClick={props.continueOrder}>
        CONTINUE
      </button>
      <button className="btn btn-danger" onClick={props.cancelOrder}>
        CANCEL
      </button>
    </div>
  );
};
export default orderSummary;
