import React from 'react';
import { Timeline, Descriptions } from 'antd';
import { useState } from 'react';
import TextArea from "antd/es/input/TextArea";

class Tracking extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}> Tracking Number </h1>
                <br></br>
                <h2 style={{ textAlign: 'center' }}> 31415 92687 93846 26433 83</h2>
                <br></br>
                <br></br>
                <Timeline>
                    <Timeline.Item label="02/20/2021, 7:38 a.m. " color="green">Delivery Order been placed</Timeline.Item>
                    <Timeline.Item label="02/20/2021, 8:20 a.m. " color="green">Robot/Drone successfully picked up package</Timeline.Item>
                    <Timeline.Item label="02/20/2021, 9:13 a.m. " color="green">Package delivering </Timeline.Item>
                    <Timeline.Item label="02/20/2021, 9:34 a.m. " color="red">Heavy traffic, package may delay </Timeline.Item>
                    <Timeline.Item label="   " color="gray"></Timeline.Item>
                    <Timeline.Item label="ETS delivered time: 02/20/2021, 1:32 p.m." color="gray"></Timeline.Item>
                </Timeline>
                <br></br>
                <Descriptions
                    title="Delivery Details"
                    bordered
                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                    <Descriptions.Item label="From">Rd.xx, No. 7,  yy city</Descriptions.Item>
                    <Descriptions.Item label="To">Rd.zzz, No. 201,  yy city</Descriptions.Item>
                    <Descriptions.Item label="Receiver Name">Anna Shen</Descriptions.Item>
                    <Descriptions.Item label="Delivery method">Drone</Descriptions.Item>
                    <Descriptions.Item label="Size">Medium</Descriptions.Item>
                    <Descriptions.Item label="Weight">3.8 lb</Descriptions.Item>
                    <Descriptions.Item label="Description">An ipad pro</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default Tracking;