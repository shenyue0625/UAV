import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Select, Button, message } from "antd";
import { makeAPayment } from "../utils";
import ButtonGroup from "antd/lib/button/button-group";

const { Option } = Select;

class Ordering extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: null,
  //     lastName: null,
  //     address1: null,
  //     address2: null,
  //     city: null,
  //     state: "CA",
  //     country: "United States",
  //     zipcode: null,

  //     receiverFirstName: null,
  //     receiverLastName: null,
  //     receiverAddress1: null,
  //     receiverAddress2: null,
  //     receiverCity: null,
  //     receiverState: null,
  //     receiverCountry: null,
  //     receiverZipcode: null,
  //     size: null,
  //   };
  // }

  handleSubmit = data => {
    makeAPayment(data)
      .then()
      .catch(err => {
        console.error("submit failed ", err.message);
        message.error("submit failed!");
      });
  };

  
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> CHECKOUT </h1>
        <br></br>
        <h2 style={{ textAlign: "center" }}>
          1. SHIPPING---------------- 2.BILLING------------------ 3.ORDER
          SUMMARY-------------------
        </h2>

        <h3 size="defalt size">From Address </h3>
        <br />

        <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
          <Input.Group compact>
            <Input
              prefix={"First Name*"}
              name="firstName"
              onChange={this.handleInputChange}
              style={{ width: "50%" }}
              placeholder="Your First Name"
            />
            <Input
              prefix={"Last Name*"}
              name="lastName"
              onChange={this.handleInputChange}
              style={{ width: "50%" }}
              placeholder="Your Last Name"
            />
          </Input.Group>
          <br />
          <Input.Group compact>
            <Input
              prefix={"Address1*"}
              name="address1"
              onChange={this.handleInputChange}
              placeholder="Street Number, street Name"
            />

            <Input
              prefix={"Address2*"}
              name="address2"
              onChange={this.handleInputChange}
              placeholder="Apartment number,suite number or company name"
            />
          </Input.Group>
          <br />
          <Input.Group compact>
            <Input
              prefix={"City"}
              name="city"
              style={{ width: "80%" }}
              onChange={this.handleInputChange}
              placeholder="Street Number, street Name"
            />
            <Select
              defaultValue="CA"
              style={{ width: "5%" }}
              onChange={this.handleInputChange}
            >
              <Option value="CA">CA</Option>
            </Select>
            <Select style={{ width: "15%" }} name="state">
              <Option value="United States">United States</Option>
            </Select>
          </Input.Group>
          <Input
            prefix={"Zip Code"}
            name="zipCode"
            onChange={this.handleInputChange}
            style={{ width: "30%" }}
            placeholder="within Great San Fransisco Area"
          />

          <p>
            <button>Review</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Ordering;
