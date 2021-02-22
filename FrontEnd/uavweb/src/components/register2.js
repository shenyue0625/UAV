import React from 'react';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
} from 'antd';

class Register2 extends React.component {

    render() {
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


        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{width: 70}}>
                    <Option value="86">+86</Option>
                    <Option value="87">+1</Option>
                </Select>
            </Form.Item>
        );

        return (
            <Form
                {...(formItemLayout)}
                form={this.form}
                name="register"
                scrollToFirstError
            >
                <Form.Item
                    name="Address1"
                    label="Address1"

                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Address2"
                    label="Address2"

                    rules={[{ required: false, whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="City"
                    label="City"

                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                //need to do some check here
                <Form.Item
                    name="Zipcode"
                    label="Zipcode"

                    rules={[{ required: true, whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
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
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Register2;