import React, {Component} from 'react';
import title from "../assets/imgs/title.PNG";
import loginLogo from "../assets/imgs/login-logo.png";
import {Row, Col, Menu, Button} from 'antd';
import {Link} from "react-router-dom";
import {logout} from "../utils"


class Top extends Component {
    state = {
        current: 'shipping',
        loggedIn: false
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    handleLoginClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
            loggedIn: true
        });
    };

    signoutOnClick = () => {
      this.setState({  //然后前端state更改一下
                        loggedIn: false
                    })
      logout().then(r => console.log(r));
    }

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



                <Col>

                </Col>

                <Col span={4} className="App-top-nav">
                    { //如果用户login成功，则页面<Col>中只显示一个logout按键
                        this.state.loggedIn ?
                            <Button shape="round" onClick={this.signoutOnClick}>
                                Logout</Button> : //如果用户login暂时不成功，持续显示login按键
                            (
                                <>
                                    <Menu onClick={this.handleLoginClick} selectedKeys={[this.current]} defaultSelectedKeys={[this.current]}
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
                                </>
                            )
                    }

                </Col>

            </Row>
        )
    }
}

export default Top;
