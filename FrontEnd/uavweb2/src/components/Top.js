import React, {Component} from 'react';
import title from "../assets/imgs/title.PNG";
import loginLogo from "../assets/imgs/login-logo.png";
import {Row, Col, Menu} from 'antd';
import {Link} from "react-router-dom";


class Top extends Component {
    state = {
        current: 'shipping',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        return (
            <Row className="App-top">
                <Col span={4} className="App-top-logo">
                    <nav>
                        <Link to="/">
                            <img src={title} alt="title-logo" className="App-top-title-logo"/>
                        </Link>
                    </nav>

                </Col>

                <Col span={4} className="App-top-nav">

                </Col>

                <Col span={4} className="App-top-nav">
                    <Menu onClick={this.handleClick} selectedKeys={[this.current]} defaultSelectedKeys={[this.current]}
                          mode="horizontal"
                          theme="dark"
                          className="App-top-font">
                        <Menu.Item key="shipping">
                            <Link to="ordering">
                                <h3 className="App-top-font">Shipping</h3>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>

                <Col span={4} className="App-top-nav">
                    <Menu onClick={this.handleClick} selectedKeys={[this.current]} defaultSelectedKeys={[this.current]}
                          mode="horizontal"
                          theme="dark"
                          className="App-top-font">
                        <Menu.Item key="tracking">
                            <nav>
                                <Link to="tracking">
                                    <h3 className="App-top-font">Tracking</h3>
                                </Link>
                            </nav>
                        </Menu.Item>
                    </Menu>
                </Col>

                <Col span={4} className="App-top-nav">
                    <Menu onClick={this.handleClick} selectedKeys={[this.current]} defaultSelectedKeys={[this.current]}
                          mode="horizontal"
                          theme="dark"
                          className="App-top-font">
                        <Menu.Item key="register">
                            <nav>
                                <Link to="register">
                                    <h3 className="App-top-font">Register</h3>
                                </Link>
                            </nav>
                        </Menu.Item>
                    </Menu>
                </Col>

                <Col span={4} className="App-top-nav">
                    <Menu onClick={this.handleClick} selectedKeys={[this.current]} defaultSelectedKeys={[this.current]}
                          mode="horizontal"
                          theme="dark"
                          className="App-top-font">
                        <Menu.Item key="login">
                            <nav>
                                <Link to="login">
                                    <h3 className="App-top-font">Login &nbsp;</h3>
                                    <img className="App-top-login-logo" src={loginLogo} alt="login-logo"/>
                                </Link>
                            </nav>
                        </Menu.Item>
                    </Menu>
                </Col>

            </Row>
        )
    }
}

export default Top;
