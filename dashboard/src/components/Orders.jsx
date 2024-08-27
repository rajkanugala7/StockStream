import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders ms-5">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <button className="btn btn-primary">Get started</button>
        
      </div>
    </div>
  );
};

export default Orders;