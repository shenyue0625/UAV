import React from 'react';
import {Row, Col, Form, Input, Button, Checkbox, message} from 'antd';
import {login, getAccountInfo} from '../utils';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import axios from "axios";

import walle from "../assets/imgs/icon-robot.png";
import drone from "../assets/imgs/icon-drone.png";

const layout = {
    labelCol: {
        span: 9
    },
    wrapperCol: {
        span: 6,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 9,
        span: 16,
    },
};

class Login extends React.Component {

    onFinish = (data) => {
        // try to login 麻：修改了后端，现在不会收到一个redirect从而导致跨域问题了。
        login(data)
          .then((res) => {
              message.success(`Welcome back, ${res}`);
              // this.props.onSuccess();
          }).catch((err) => {
            message.error(err.message);
        })
    }

    render() {
        return (
          <>
            <div>
                <br/><br/><br/><br/>
                <Row>
                    <Col span={15} offset={9}>
                        <img src={walle} alt="robot" height={235}/>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <img src={drone} alt="robot" height={235}/>
                    </Col>
                </Row>
                <br/><br/><br/>
                <Row>
                    <Col span={6} offset={9} className="App-login">
                        <h1 style={{ fontSize: 24 }}>login to your account</h1>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>

                        <br/>
                        <Form
                            {...layout}
                            name="basic"
                            onFinish={this.onFinish}
                            initialValues={{
                                remember: true,
                            }}
                        >
                            <Form.Item {...layout}
                                       label="Username"
                                       name="username"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Please input your username!',
                                           },
                                       ]}
                            >
                                <Input prefix={<UserOutlined/>} placeholder="Username"/>
                            </Form.Item>

                            <Form.Item {...layout}
                                       label="Password"
                                       name="password"
                                       rules={[
                                           {
                                               required: true,
                                               message: 'Please input your password!',
                                           },
                                       ]}
                            >
                                <Input prefix={<LockOutlined/>} placeholder="Password"/>
                            </Form.Item>

                            <Form.Item {...tailLayout}
                                       name="remember"
                                       valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

                <br/><br/><br/><br/><br/>

            </div>

          <button onClick={getAccountInfo}>
            click me to get logged user info
          </button>
      </>
        );
    }
}

export default Login;
