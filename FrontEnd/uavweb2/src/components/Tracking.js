import React from 'react';
import {Row, Col, Divider, Timeline, Descriptions, message, Menu} from 'antd';
import {getTrackingDetails} from "../utils";
import {Link} from "react-router-dom";


class Tracking extends React.Component {
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


    render() {
        return (
            // <Content className="site-layout-background" style={{padding: "0 50px"}}>
            //     <div className="site-layout-content">
            //         <Tracking
            //             orderId={this.state.orderId}
            //             //trackingOnClick={this.trackingOnClick}
            //         ></Tracking>
            //     </div>
            //     <div>
            //         <Ordering></Ordering>
            //     </div>
            // </Content>

            <div>
                <Row>
                    <Col offset={6} span={12}>

                        <br/><br/>
                        <Divider><h1> TRACKING A PACKAGE </h1></Divider>
                        <br/><br/>
                        <h2 style={{textAlign: 'center'}}> 31415 92687 93846 26433 83</h2>
                        <br/><br/>
                        <br/><br/>
                        <Timeline>
                            <Timeline.Item label="02/20/2021, 7:38 a.m. " color="green">Delivery Order been
                                placed</Timeline.Item>
                            <Timeline.Item label="02/20/2021, 8:20 a.m. " color="green">Robot/Drone successfully picked
                                up package</Timeline.Item>
                            <Timeline.Item label="02/20/2021, 9:13 a.m. " color="green">Package
                                delivering </Timeline.Item>
                            <Timeline.Item label="02/20/2021, 9:34 a.m. " color="red">Heavy traffic, package may
                                delay </Timeline.Item>
                            <Timeline.Item label="   " color="gray"/>
                            <Timeline.Item label="ETS delivered time: 02/20/2021, 1:32 p.m." color="gray"/>
                        </Timeline>

                        <br/><br/>

                        <Descriptions
                            title="Delivery Details"
                            bordered
                            column={{xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1}}
                        >
                            <Descriptions.Item label="From">Rd.xx, No. 7, yy city</Descriptions.Item>
                            <Descriptions.Item label="To">Rd.zzz, No. 201, yy city</Descriptions.Item>
                            <Descriptions.Item label="Receiver Name">Anna Shen</Descriptions.Item>
                            <Descriptions.Item label="Delivery method">Drone</Descriptions.Item>
                            <Descriptions.Item label="Size">Medium</Descriptions.Item>
                            <Descriptions.Item label="Weight">3.8 lb</Descriptions.Item>
                            <Descriptions.Item label="Description">An ipad pro</Descriptions.Item>
                        </Descriptions>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Tracking;