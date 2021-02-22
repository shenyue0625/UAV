import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { login } from '../utils';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from "axios";

const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

class Login extends React.Component  {

    onFinish = (data) => {
        login(data)
            .then((data) => {
                message.success(`Welcome back, ${data.name}`);
                this.props.onSuccess();
            }).catch((err) => {
            message.error(err.message);
        })
    }

    //  onFinish = values => {
    //     // step1: collect data
    //     console.log('Received values of form: ', values);
    //     const { username, password } = values;
    //
    //     const opt = {
    //         method: "POST",
    //         url: `/api/login`,
    //         data: {
    //             username: username,
    //             password: password
    //         },
    //         headers: { "Content-TYpe": "application/json" }
    //     };
    //
    //     // step2: make request
    //     axios(opt)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 message.success("Login succeed!");
    //             }
    //         })
    //         .catch(err => {
    //             console.error("login failed: ", err.message);
    //             message.error("Login failed!");
    //         })
    // };

    render() {
        return (
            <div className="login-form">
                <div className="title">
                    <h1 style={{ textAlign: 'center' }}> ANYWHERE IN SAN FRANCISCO </h1>
                </div>
                <br />
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.onFinish}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input prefix={<LockOutlined />} placeholder="Password"/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;
