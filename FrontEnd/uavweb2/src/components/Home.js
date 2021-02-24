import React, {Component} from 'react';
import {Row, Col, Divider, message} from 'antd';
import background from "../assets/imgs/background_small.jpg";
import loc from "../assets/imgs/location.png";
import tracking from "../assets/imgs/tracking.png";
import shipping from "../assets/imgs/shipping.png";
import {Form, Input, Button} from 'antd';


import {Link} from 'react-router-dom';
import {register, getTrackingDetails} from "../utils";

const layout = {
    wrapperCol: {
        offset: 8,
        span: 8
    }
};

const tailLayout = {
    wrapperCol: {
        offset: 10
    }
};

class Home extends Component {

    onFinish = (orderId) => {
        getTrackingDetails(orderId)
            .then(data => {
                this.setState({
                    trackingInfo : data
                });
                console.log('got tracking info')
            }).catch((err) => {
                console.log('fail to get fetch tracking information');
            message.error(err.message);
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24} className="App-home-main">
                        <img className="App-home-background" src={background} alt="This is Drone."/>
                        <div className="App-home-container">
                            <h1 className="App-home-title">ANYWHERE</h1>
                            <h1 className="App-home-title">SAN FRANCISCO</h1>
                            <div>
                                <div className="App-home-boxes">
                                    <nav>
                                        <Link to="ordering">
                                            <img className="App-home-boxes-logo" src={shipping} alt="shipping"
                                                 height={100}/>
                                            <h3 className="App-home-boxes-name">Rate & Ship</h3>
                                        </Link>
                                    </nav>
                                </div>

                                <div className="App-home-boxes"
                                     style={{width: 205, height: 205, backgroundColor: "grey"}}>
                                    <nav>
                                        <Link to="tracking" >
                                            <img className="App-home-boxes-logo" src={tracking} alt="tracking"
                                                 height={100}/>
                                            <h3 className="App-home-boxes-name">Tracking</h3>
                                        </Link>
                                    </nav>
                                </div>

                                <div className="App-home-boxes">
                                    <nav>
                                        <Link to="ordering">
                                            <img className="App-home-boxes-logo" src={loc} alt="location" height={100}/>
                                            <h3 className="App-home-boxes-name">Location</h3>
                                        </Link>
                                    </nav>

                                </div>
                            </div>

                            <br/>

                            <div>
                                <div>
                                    <Form onFinish={this.onFinish}>
                                        <Form.Item {...layout}>
                                            <Input style={{display: "inline-block"}}
                                                   placeholder="Your Tracking Number"/>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button style={{display: "inline-block"}} type="primary" htmlType="submit">
                                                TRACK
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={6}/>
                    <Col span={12} className="App-home-intro">
                        <Divider><h1>Introduction</h1></Divider>
                        <p>
                            We are committed to providing service of the highest quality, paying particular attention to
                            working efficiently while keeping the lines of communication with our clients clear and
                            consider.
                        </p>
                        <p>
                            Our mission is simple: provide smarter transportation with fewer process. To connect people
                            and provide high quality services in a timely manner. Our team caters to each project’s
                            specific needs to ensure excellence. We hope you’ll find what you’re looking for. For more
                            information or genral inquires, feel free to get in touch today.
                        </p>
                    </Col>
                    <Col span={6}/>
                </Row>

                <div style={{textAlign: 'center'}}>
                    <Link to="accountInfo">
                        Account Info
                    </Link>
                </div>

            </div>
        );
    }
}

export default Home;