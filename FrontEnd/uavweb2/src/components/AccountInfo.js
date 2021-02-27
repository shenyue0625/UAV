import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Button, Descriptions, Divider, Form, message} from "antd";
import {Table, Tag, Space} from 'antd';
import {getTrackingDetails} from "../utils";
import {getAccountInfo} from "../../../uavweb/src/utils";

const {Column, ColumnGroup} = Table;

const columns = [
    {
        title: 'Sender',
        dataIndex: 'sender',
        key: 'sender',
    },
    {
        title: 'Sender Address',
        dataIndex: 'senderAddress',
        key: 'sender',
    },
    {
        title: 'Receiver',
        dataIndex: 'receiver',
        key: 'receiver',
    },
    {
        title: 'Receiver Address',
        dataIndex: 'receiverAddress',
        key: 'receiverAddress',
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        render: size => (
            <>
                {size.map(data => {
                    let color;
                    if (data === 'small') {
                        color = 'orange';
                    } else if(data === 'medium') {
                        color = 'red';
                    } else if (data === 'large') {
                        color = 'purple';
                    }
                    return (
                        <Tag color={color} key={data}>
                            {data.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        )
    },
    {
        title: 'Weight',
        dataIndex: 'weight',
        key: 'weight',
    },
    {
        title: 'Delivery',
        dataIndex: 'delivery',
        key: 'delivery',
        render: delivery => (
            <>
                {delivery.map(data => {
                    let color;
                    if (data === 'robot') {
                        color = 'volcano';
                    } else if(data === 'drone') {
                        color = 'blue';
                    }
                    return (
                        <Tag color={color} key={data}>
                            {data.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        )
    }
];

// const data = [
//     {
//         sender: 'John Brown',
//         senderAddress: 'New York No. 1 Lake Park',
//         receiver: 'Jim Green',
//         receiverAddress: 'London No. 1 Lake Park',
//         size: ['small'],
//         weight: '16lb',
//         delivery: ['drone']
//     },
//     {
//         sender: 'John Brown',
//         senderAddress: 'New York No. 1 Lake Park',
//         receiver: 'Jim Green',
//         receiverAddress: 'London No. 1 Lake Park',
//         size: ['medium'],
//         weight: '16lb',
//         delivery: ['drone']
//     },
//     {
//         sender: 'John Brown',
//         senderAddress: 'New York No. 1 Lake Park',
//         receiver: 'Jim Green',
//         receiverAddress: 'London No. 1 Lake Park',
//         size: ['large'],
//         weight: '16lb',
//         delivery: ['robot']
//     },
//     {
//         sender: 'John Brown',
//         senderAddress: 'New York No. 1 Lake Park',
//         receiver: 'Jim Green',
//         receiverAddress: 'London No. 1 Lake Park',
//         size: ['large'],
//         weight: '16lb',
//         delivery: ['drone']
//     },
//     {
//         sender: 'John Brown',
//         senderAddress: 'New York No. 1 Lake Park',
//         receiver: 'Jim Green',
//         receiverAddress: 'London No. 1 Lake Park',
//         size: ['small'],
//         weight: '16lb',
//         delivery: ['robot']
//     },
//
// ];


class AccountInfo extends React.Component {

    state = {
        accountInfo: {
            email: null,
            firstName: null,
            lastName: null,
            billingAddress: null,
            shippingAddress: null
        }
    };

    componentDidMount() {
        getAccountInfo()
            .then(data => {
                this.setState({
                    accountInfo: data
                });
                console.log('got account info');
                console.log(data);
            })
            .catch(err => {
                console.log('did not get account info');
                message.error(err.message);
            });
    };


    render() {
        return (
            <Row>
                <Col span={6}/>
                <Col span={12}>
                    <br/>
                    <Divider><h1>ACCOUNT INFO</h1></Divider>
                    <Descriptions title="Personal Info" bordered layout="vertical"
                                  labelStyle={{color: "red"}}
                                  column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}>
                        <Descriptions.Item label="First Name">{this.state.accountInfo.firstName}</Descriptions.Item>
                        <Descriptions.Item label="Last Name">{this.state.accountInfo.lastName}</Descriptions.Item>
                        <Descriptions.Item label="Email Address">{this.state.accountInfo.email}</Descriptions.Item>
                    </Descriptions>

                    <Divider/>

                    <Descriptions title="Address" bordered layout="vertical"
                                  column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}>
                        <Descriptions.Item label="Address 1">{this.state.accountInfo.shippingAddress.split(",")[0]}</Descriptions.Item>
                        <Descriptions.Item label="Address 2">{this.state.accountInfo.shippingAddress.split(",")[1]}</Descriptions.Item>
                        <Descriptions.Item label="City">{this.state.accountInfo.shippingAddress.split(",")[2]}</Descriptions.Item>
                    </Descriptions>

                    <Divider/>

                    <Descriptions title="Billing Address" bordered layout="vertical"
                                  column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}>
                        <Descriptions.Item label="Address 1">{this.state.accountInfo.billingAddress.split(",")[0]}</Descriptions.Item>
                        <Descriptions.Item label="Address 2">{this.state.accountInfo.billingAddress.split(",")[1]}</Descriptions.Item>
                        <Descriptions.Item label="City">{this.state.accountInfo.billingAddress.split(",")[2]}</Descriptions.Item>
                    </Descriptions>


                    <Divider><h1>SERVICES</h1></Divider>


                    <div className="App-accountInfo-send-button">
                        <nav>
                            <Link to='/ordering'>
                                <Button type="primary">
                                    <h1 className="App-accountInfo-send">Send a New Package</h1>
                                </Button>
                            </Link>
                        </nav>
                    </div>

                    <br/>
                    <Divider><h1>ORDER INFO</h1></Divider>

                    <Table columns={columns} dataSource={data} />

                    <br/><br/><br/><br/>
                </Col>
                <Col span={6}/>
            </Row>
        )
    }
}

export default AccountInfo;