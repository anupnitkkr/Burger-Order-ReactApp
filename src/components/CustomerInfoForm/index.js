import React from "react";
export default class CustomerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      pin: "",
      submit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let nextState = this.state;
    switch (target.type) {
      case "text":
        nextState.name = target.value;
        break;
      case "email":
        nextState.email = target.value;
        break;
      case "number":
        nextState.pin = target.value;
        break;
    }
    if (nextState.email && nextState.name && nextState.pin) {
      nextState.submit = true;
    }
    this.setState(nextState);
  }
  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.orderSubmit(this.state);
  }
  render() {
    let style = {
      display: "none"
    };
    if (this.props.customerInfo) {
      style = {};
    }
    return (
      <div className="ContactData__ContactData" style={style}>
        <div>
          <input
            required=""
            type="text"
            className="form-control mt-2 mb-1"
            aria-describedby="emailHelp"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            className="form-control mt-2 mb-1"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="number"
            className="form-control mb-1"
            placeholder="Pincode"
            onChange={this.handleChange}
          />
          <button
            disabled={!this.state.submit && "disabled"}
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
