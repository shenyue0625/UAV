import React, {Component} from 'react';
import { message } from 'antd';
import {Redirect, Switch, Route} from "react-router-dom";
import Home from './home';
import Login from './login';
import Register from './register';
import Tracking from './tracking';

class Main extends React.Component{
        //const isLoggedIn = props;

    // const showLogin = () => {
    //     // case1: already logged in --> home
    //     // case2: hasn't logged in --> login
    //     return isLoggedIn
    //         ?
    //         <Redirect to="/home"/>
    //         :
    //         <Login handleLoggedIn={handleLoggedIn}/>
    // }

    // showHome = () => {
    //     // case1: already logged in --> home
    //     // case2: hasn't logged in --> login
    //     return isLoggedIn
    //         ?
    //         <Home/>
    //         :
    //         <Redirect to="/login"/>
    // }


    render() {
        return (
            // Route负责路由切换
            <div className="main">
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/tracking?orderId=%20" component={{Tracking}}/>
                    <Route path="/" component={Login}/>//home page should list home page
                </Switch>
            </div>
        );
    }
}

export default Main;
