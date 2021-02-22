import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


class Login extends React.Component  {

    render() {
        const
            layout = {
                labelCol: {
                    span: 8,
                },
                wrapperCol: {
                    span: 16,
                },
            };
        const
            tailLayout = {
                wrapperCol: {
                    offset: 8,
                    span: 16,
                },
            };

        return (
            <div className="login-form">
                <div className="title">
                    <h1 style={{ textAlign: 'center' }}> ANYWHERE IN SAN FRANCISCO </h1>
                </div>
                <br />
                <Form
                    {...layout}
                    name="basic"
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
                        <Input/>
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
                        <Input.Password/>
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
