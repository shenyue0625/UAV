import React from 'react';
import {Row, Col, Divider, Timeline, Descriptions, message, Menu, Form, Input, Button} from 'antd';
import {getTrackingDetails} from "../utils";
import {Link} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";

const layout = {
    wrapperCol: {
        offset: 8,
        span: 8
    }
};

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
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
class Tracking extends React.Component {
    state = {
        loggedIn: false,
        trackingInfo: {
            orderId: "1234999995",
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
            time: 1613923236000,
            station: null
        }
    };

    onFinish = (orderId) => {
        getTrackingDetails(orderId)
            .then(data => {
                this.setState({
                    trackingInfo : data
                });
                console.log('got tracking info')
            })
            .catch(err => {
                console.log('did not get tracking info');
                message.error(err.message);
            });
    };

    // componentDidMount = () => {
    //     getTrackingDetails(orderId)
    //         .then(data => {
    //             this.setState({
    //                 trackingInfo : data
    //             });
    //             console.log('got tracking info')
    //         })
    //         .catch(err => {
    //             console.log('did not get tracking info');
    //             message.error(err.message);
    //         });
    // }


    render() {
        return (
            <div>
                <Row>
                    <Col offset={6} span={12}>

                        <br/><br/>
                        <Divider><h1> TRACKING A PACKAGE </h1></Divider>
                        <br/><br/>

                            <Form
                                {...(formItemLayout)}
                                name="tracking"
                                onFinish={this.onFinish}
                                scrollToFirstError
                            >

                                <Form.Item
                                    name="lastName"
                                    label="Order Id: "
                                    rules={[{required: true, whitespace: true, message: 'Please input Order Id!'}]}
                                >
                                    <Input  placeholder="Tracking number"/>
                                </Form.Item>

                                <Form.Item {...(tailFormItemLayout)}>
                                    <Button type="primary" htmlType="submit" className="register-btn">
                                        Next
                                    </Button>
                                </Form.Item>
                            </Form>
                    </Col>
                </Row>
                        <br></br>

                        <h2 style={{textAlign: 'center'}}> {this.state.orderId}</h2>
                        <br/><br/>
                        <br/><br/>
                        <Timeline>
                            <Timeline.Item label="02/20/2021, 7:38 a.m. timestamp" color="green">Delivery Order been
                                placed</Timeline.Item>
                            <Timeline.Item label="Data = new Date()" color="green">Waiting to be picked up</Timeline.Item>
                            <Timeline.Item label="02/20/2021, 9:13 a.m. " color="grey">Package
                                delivering </Timeline.Item>
                            <Timeline.Item label="ETS delivered time: 02/20/2021, 1:32 p.m." color="grey">Arrived </Timeline.Item>
                        </Timeline>
                        <br/><br/>

                        <Descriptions
                            title="Delivery Details"
                            bordered
                            column={{xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1}}
                        >
                            <Descriptions.Item label="From">{this.state.trackingInfo.senderAddress}</Descriptions.Item>
                            <Descriptions.Item label="To">{this.state.trackingInfo.receiverAddress}</Descriptions.Item>
                            <Descriptions.Item label="Receiver Name">{this.state.trackingInfo.receiverName}</Descriptions.Item>
                            <Descriptions.Item label="Delivery method">{this.state.trackingInfo.deliveryMethod}</Descriptions.Item>
                            <Descriptions.Item label="Size">{this.state.trackingInfo.size}</Descriptions.Item>
                            <Descriptions.Item label="Weight">{this.state.trackingInfo.weight}</Descriptions.Item>
                            <Descriptions.Item label="Description">{this.state.trackingInfo.description}</Descriptions.Item>
                            <Descriptions.Item label="Station">{this.state.trackingInfo.station}</Descriptions.Item>
                        </Descriptions>

                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
        );
    }
}

export default Tracking;