import React from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      pizza: 0
    };
  }
  addOrder = () => {
    console.log(this.state.order);
    this.setState({
      order: this.state.order + 1
    });
    console.log(this.state.order);
  };
  render() {
    return (
      <div className="order">
        {/* <Clock /> */}
        <h3>
          {" "}
          {this.props.orderType}:{this.state.order}
        </h3>
        {/* <button onClick={this.addOrder}>Order</button> */}
        <RestaurantButton onClick={this.addOrder} />
      </div>
    );
  }
}
export default Order;
