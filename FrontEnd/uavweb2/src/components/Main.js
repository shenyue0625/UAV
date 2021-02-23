import React, {Component} from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Register2 from './Register2';
import RegisterComplete from './RegisterComplete';
import AccountInfo from './AccountInfo';
import Ordering from './Ordering';
import Tracking from './Tracking';
import ContactUs from './ContactUs';


class Main extends React.Component{
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />}>Home</Route>
                <Route path="/login" element={<Login />}>Login</Route>
                <Route path="/register" element={<Register />}>Register</Route>
                <Route path="/register2" element={<Register2 />}>Register2</Route>
                <Route path="/register/complete" element={<RegisterComplete />}>RegisterComplete</Route>
                <Route path="/accountInfo" element={<AccountInfo />}>AccountInfo</Route>
                <Route path="/ordering" element={<Ordering />}>Ordering</Route>
                <Route path="/tracking" element={<Tracking />}>Tracking</Route>
                <Route path="/contactus" element={<ContactUs />}>ContactUs</Route>
            </Routes>
        )
    }
}

export default Main;