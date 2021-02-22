import React from 'react';
import {Form, Input, Select, Button, message, Checkbox} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {login, register} from '../utils';

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


class Register extends React.Component{

    onFinish = (data) => {
        register(data)
            .then(() => {
                message.success(`Successfully signed up`);
            }).catch((err) => {
            message.error(err.message);
        })
    }

    render() {
        return (
            <Form
                {...(formItemLayout)}
                name="register"
                onFinish={this.onFinish}
                scrollToFirstError
            >

                <Form.Item
                    name="Lastname"
                    label="Last name"
                    rules={[{ required: true, whitespace: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Lastname" />
                </Form.Item>

                <Form.Item
                    name="Firstname"
                    label="First name"

                    rules={[{ required: true, whitespace: true, message: 'Please input your Username!'  }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Firstname" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="email"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password"/>
                </Form.Item>

                {/*<Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password"/>
                </Form.Item>*/}

                <Form.Item
                    name="shippingAddress"
                    label="Shipping Address"

                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input placeholder="Pattern: Address, City, State, Zip code"/>
                </Form.Item>

                <Form.Item
                    name="billingAddress"
                    label="Billing Address"

                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input placeholder="Pattern: Address, City, State, Zip code"/>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('Please accept agreement'),
                        },
                    ]}
                    {...(tailFormItemLayout)}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item {...(tailFormItemLayout)}>
                    <Button type="primary" htmlType="submit" className="register-btn" >
                        Next
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Register;

