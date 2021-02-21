import React from "react";
import { getTrackingDetails } from "./utils";
import Tracking from "./components/tracking";
import "./App.css";
import { Layout, Menu, message } from "antd";

import Ordering from "./components/ordering";

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    orderId: "12345",
    senderAddress: "Rd.xx, No. 7,  yy city",
    receiverAddress: "Rd.zzz, No. 201,  yy city",
    receiverName: "John Smith",
    cardNumber: "756488521123",
    size: "medium",
    weight: "0.8",
    description: "an iPad Pro",
    deliveryMethod: "drone",
    fee: "205",
    status: "ongoing",
  };

  trackingOnClick = orderId => {
    getTrackingDetails(orderId)
      .then(data => {
        this.setState({
          senderAddress: data,
          receiverAddress: data,
          receiverName: data,
          cardNumber: data,
          size: data,
          weight: data,
          description: data,
          deliveryMethod: data,
          fee: data,
          status: data,
        });
      })
      .catch(err => {
        message.error(err.message);
      });
  };

  render = () => (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Ordering</Menu.Item>
          <Menu.Item key="2">Tracking</Menu.Item>
          <Menu.Item key="3">Register</Menu.Item>
          <Menu.Item key="4">Log in</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout-background" style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Tracking
            orderId={this.state.orderId}
            //trackingOnClick={this.trackingOnClick}
          ></Tracking>
        </div>
        <div>
          <Ordering></Ordering>
        </div>
      </Content>
      <Footer className="site-layout-footer" style={{ textAlign: "center" }}>
        AutoExpress ©2021{" "}
      </Footer>
    </Layout>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
