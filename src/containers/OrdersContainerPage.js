import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BurgerBuilder from "../../src/components/BurgerBuilder/index";
import Loader from "../components/Loader/index";
import Header from "../../src/components/Header/index";
import CustomerInfoForm from "../components/CustomerInfoForm/index";
import * as ordersDetailsActions from "../actions/ordersDetailsActions";
class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.getAllOrders();
  }

  render() {
    const newProps = { ...this.props, ...this.state };

    const info = this.props.loading ? (
      <Loader />
    ) : (
      <div className="Layout__Content">
        <div className="Orders__Orders">
          <div className="OrderItem__Order">
            {Object.keys(this.props.orders).map((key, index) => {
              let order = this.props.orders[key];
              return (
                <a
                  className="list-group-item list-group-item-action flex-column align-items-start mb-2 "
                  style={{
                    display: "inline-block",
                    paddingBottom: "0"
                  }}
                  key={index}
                >
                  <div className="d-flex w-100 justify-content-between mb-2">
                    <h4 className="mb-1">Order Number : {index + 1}</h4>
                  </div>
                  {Object.keys(order.order).map(ingredient => {
                    let classNam = "";
                    switch (ingredient) {
                      case "Meat":
                        classNam = "btn  mb-2 mr-2 btn-secondary";
                        break;
                      case "Cheese":
                        classNam = "btn  mb-2 mr-2 btn-danger";
                        break;
                      case "Bacon":
                        classNam = "btn  mb-2 mr-2 btn-success";
                        break;
                      default:
                        classNam = "btn  mb-2 mr-2 btn-warning";
                    }

                    return (
                      <button
                        type="button"
                        className={classNam}
                        key={ingredient}
                      >
                        {ingredient}
                        <span className="badge badge-light">
                          {order.order[ingredient]}
                        </span>
                      </button>
                    );
                  })}
                  <p>
                    Total Price:<strong>{order.price} INR</strong>
                  </p>
                </a>
              );
            })}
          </div>
        </div>
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
OrdersPage.propTypes = {
  orders: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    orders: state.orders,
    loading: state.loading > 0
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ordersDetailsActions, dispatch) };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrdersPage)
);
