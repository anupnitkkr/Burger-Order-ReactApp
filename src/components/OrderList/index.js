import React from "react";
import PropTypes from "prop-types";
export default class OrderList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="BurgerControls__BurgerControls">
        <p>
          <strong> Price: {this.props.price} </strong>
        </p>
        {Object.keys(this.props.ingredients).map((ingredient, index) => {
          return (
            <div
              className="BurgerControl__BurgerControl"
              key={ingredient + index}
            >
              <div className="row">
                <div className="BurgerControlItem__IngredientName">
                  {ingredient}
                </div>
                <div className="BurgerControlItem__ActionButtons">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.props.addIngredient(ingredient)}
                  >
                    Add
                  </button>
                  <button
                    disabled={
                      this.props.ingredients[ingredient] == 0 && "disabled"
                    }
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.removeIngredient(ingredient)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button
          disabled={this.props.price == 0 && "disabled"}
          className="btn btn-primary"
          onClick={this.props.orderNow}
        >
          ORDER NOW
        </button>
      </div>
    );
  }
}
