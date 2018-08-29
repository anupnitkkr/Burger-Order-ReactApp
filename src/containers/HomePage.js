import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import OrderList from "../../src/components/OrderList/index";
import OrderSummary from "../../src/components/OrderSummary/index";
import BurgerBuilder from "../../src/components/BurgerBuilder/index";
import Header from "../../src/components/Header/index";
import Loader from "../components/Loader/index";
import axios from "axios";
import * as orderActions from "../actions/orderActions";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: false
    };
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.orderNow = this.orderNow.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.continueOrder = this.continueOrder.bind(this);
  }
  componentDidMount() {
    if (Object.keys(this.props.ingredients).length == 0) {
      this.props.actions.fetchingIngredient();
    }
  }
  addIngredient(name) {
    this.props.actions.addIngredientActions(name);
    this.props.actions.addPriceActions(name, this.props.pricing[name]);
  }
  removeIngredient(name) {
    this.props.actions.removeIngredientActions(name);
    this.props.actions.removePriceActions(name, this.props.pricing[name]);
  }
  orderNow() {
    this.setState({ order: true });
  }
  cancelOrder() {
    this.setState({ order: false });
  }
  continueOrder() {
    this.props.history.push("/checkout");
  }
  render() {
    const newProps = { ...this.props, ...this.state };
    newProps.cancelOrder = this.cancelOrder;
    newProps.continueOrder = this.continueOrder;
    const info = this.props.loading ? (
      <Loader />
    ) : (
      <div className="Layout__Content">
        <OrderSummary {...newProps} />
        <BurgerBuilder ingredients={this.props.ingredients} />
        <OrderList
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          price={this.props.price}
          orderNow={this.orderNow}
          ingredients={this.props.ingredients}
        />
      </div>
    );

    return (
      <React.Fragment>
        <Header />
        {info}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    ingredients: state.ingredientsInfo.ingredients,
    pricing: state.ingredientsInfo.pricing,
    price: state.price,
    loading: state.loading > 0
  };
}
HomePage.propTypes = {
  ingredients: PropTypes.object.isRequired,
  pricing: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(orderActions, dispatch) };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
