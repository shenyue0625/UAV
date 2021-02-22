import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { login } from '../utils';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
//import axios from "axios";

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
