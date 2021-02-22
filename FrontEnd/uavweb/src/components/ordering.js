import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Input,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader,
} from "antd";

const { Option } = Select;
const options = [
  { value: "CA", lable: "CA" },
  { value: "United States", lable: "United States" },
];

class Ordering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      address1: null,
      address2: null,
      city: null,
      state: "CA",
      country: "United States",
      zipCode: null,
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log("Final data is", data);
  };

  handleInputChange = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { firstName, lastName, address1, address2, city } = this.state;

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
              <Option value="United States" onClick={this.handleInputChange}>
                United States
              </Option>
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
            <button>Payment</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Ordering;
