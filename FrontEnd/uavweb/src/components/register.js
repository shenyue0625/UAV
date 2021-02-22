import React from 'react';
import { Form, Input, Select, Button } from 'antd';


function Register(props) {
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
    const [form] = Form.useForm();
        return (
            <Form
                {...(formItemLayout)}
                form={form}
                name="register"
                scrollToFirstError
            >

                <Form.Item
                    name="Lastname"
                    label="Lastname"

                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Firstname"
                    label="Firstname"

                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input />
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
                    <Input />
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
                    <Input.Password />
                </Form.Item>

                <Form.Item
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
                    <Input.Password />
                </Form.Item>

                <Form.Item {...(tailFormItemLayout)}>
                    <Button type="primary" >
                        Next
                    </Button>
                </Form.Item>
            </Form>
        );
    }

export default Register;

