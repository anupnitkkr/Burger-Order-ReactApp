import React, { PropTypes } from "react";
import { bindActionCreators } from "redux";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BurgerBuilder from "../../src/components/BurgerBuilder/index";
import Header from "../../src/components/Header/index";
import CustomerInfoForm from "../components/CustomerInfoForm/index";
import * as checkout from "../actions/checkoutActions";
class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerInfo: false
    };
    this.continueOrder = this.continueOrder.bind(this);
    this.orderNow = this.orderNow.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
  }
  continueOrder() {
    if (this.props.price) {
      this.setState({ customerInfo: true });
    }
  }
  cancelOrder() {
    this.props.history.push("/");
  }
  orderNow(data) {
    let order = {
      order: this.props.ingredients,
      price: this.props.price,
      customer: data
    };
    axios
      .post("https://burger-api.firebaseio.com/orders.json", order)
      .then(response => {
        this.props.history.push("/orders");
      });
  }
  render() {
    const newProps = { ...this.props, ...this.state };
    //newProps.cancelOrder = this.cancelOrder;
    newProps.continueOrder = this.continueOrder;
    newProps.orderSubmit = this.orderNow;
    return (
      <div className="Layout__Content">
        <div className="Checkout__Checkout">
          <div className="CheckoutSummary__CheckoutSummary">
            <h3>
              <strong>Your order : </strong>
            </h3>
            <BurgerBuilder {...newProps} />
            <p>
              <strong>Total Price: {this.props.price}</strong>
            </p>
            <p>Continue to checkout ?</p>
            <button
              className="btn btn-success mr-3"
              onClick={this.continueOrder}
            >
              CONTINUE
            </button>
            <button className="btn btn-danger" onClick={this.cancelOrder}>
              CANCEL
            </button>
          </div>
          <CustomerInfoForm {...newProps} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    ingredients: state.ingredientsInfo.ingredients,
    pricing: state.ingredientsInfo.pricing,
    price: state.price
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(checkout, dispatch) };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CheckoutPage)
);
