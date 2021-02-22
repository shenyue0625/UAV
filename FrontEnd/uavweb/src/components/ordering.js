import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Input } from "antd";

class Ordering extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> CHECKOUT </h1>
        <br></br>
        <h2 style={{ textAlign: "center" }}>
          1. SHIPPING---------------- 2.BILLING------------------ 3.ORDER
          SUMMARY-------------------
        </h2>
        <h1>
          <br />
          <br />
          <h2>From Address </h2>
          <Input
            prefix="First Name"
            style={{ width: "50%" }}
            size="default size"
            placeholder="First Name"
          />
          <Input
            prefix="Last Name"
            style={{ width: "50%" }}
            size="default size"
            placeholder="Last Name"
          />

          <br />
          <br />
          <Input
            style={{ width: "35%" }}
            size="default size"
            placeholder="Name"
          />
          <Input
            style={{ width: "65%" }}
            size="default size"
            placeholder="Name"
          />
          <br />
          <br />
          <Input size="default size" placeholder="Name" />
        </h1>
      </div>
    );
  }
}

export default Ordering;
