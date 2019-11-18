import React from "react";
import Order from "./components/Order.js";

const Restaurant = () => {
  const orderType = "pizza";
  return (
    <div style={{ textAlign: "left", padding: "35px 20px" }}>
      <h3>Restaurant Orders</h3>

      <Order orderType={orderType} />
    </div>
  );
};

export default Restaurant;
