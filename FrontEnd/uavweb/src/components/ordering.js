import React, { Component } from "react";
import {
  Form,
  Input,
  Select,
  Radio,
  Button,
  InputNumber,
  message,
  Checkbox,
} from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { makeAPayment } from "../utils";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class Ordering extends Component {
  onFinish = data => {
    makeAPayment(data)
      .then(() => {
        message.success("Order successfully submitted");
      })
      .catch(err => {
        message.error("submit failed!", err);
      });
  };

  // handleInputChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> CHECKOUT </h1>
        <br />
        <h2 style={{ textAlign: "center" }}>
          1. SHIPPING 2.BILLING 3.ORDER SUMMARY
        </h2>
        <br />

        <h2 size="defalt size">Shipping Information </h2>

        <Form
          {...formItemLayout}
          name="Ordering"
          onFinish={this.onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="receiverName"
            label="Receiver Name"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please input your receiver name!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="receiver name" />
          </Form.Item>
          <Form.Item
            name="senderAddress"
            label="Sender Address"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please input your Sender Address!",
              },
            ]}
          >
            <Input placeholder="Pattern: Address, City, State, Zip code" />
          </Form.Item>

          <Form.Item
            name="receiverAddress"
            label="Receiver Address"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please input your Receiver Address!",
              },
            ]}
          >
            <Input placeholder="Pattern: Address, City, State, Zip code" />
          </Form.Item>

          <Form.Item
            name="cardNumber"
            label="Card Number"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input placeholder="Credit Card/ Debit Card Number" />
          </Form.Item>

          <Form.Item
            name="discription"
            label="Item Discription"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input placeholder="Please discribe your product" />
          </Form.Item>

          <Form.Item
            label="Package Size"
            name="size"
            rules={[{ required: true, whitespace: true }]}
          >
            <Radio.Group>
              <Radio value="small">Small</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="large">Large</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Weight"
            rules={[{ required: true, whitespace: true }]}
          >
            <Form.Item name="weight" noStyle>
              <InputNumber min={0.1} max={20.0} step={0.5} defaultValue={0.1} />
            </Form.Item>
            <span className="package-weight"> lb </span>
          </Form.Item>

          <Form.Item
            label="Delivery Method "
            name="deliveryMethod"
            rules={[{ required: true, whitespace: true }]}
          >
            <Radio.Group>
              <Radio value="drone">Drone</Radio>
              <Radio value="machine">Machine</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="check-price">
              Check Shipping Price
            </Button>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="order-btn">
              Submit
            </Button>
          </Form.Item>

          {/* <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Please accept agreement"),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="register-btn">
              Submit
            </Button>
          </Form.Item>
          <Form.Item label="Required Mark" name="requiredMark">
            <Radio.Group>
              <Radio.Button value="optional">Optional</Radio.Button>
              <Radio.Button value={true}>Required</Radio.Button>
              <Radio.Button value={false}>Hidden</Radio.Button>
            </Radio.Group>
          </Form.Item> */}

          {/* <Input.Group compact>
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
          </p> */}
        </Form>
      </div>
    );
  }
}

export default Ordering;
