import { Button } from 'antd';
import React from 'react';

class RegisterComplete extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}> Dear UAV </h1>
                <br />
                <h2 style={{ textAlign: 'center' }}> Congratulations! You've registered an account!</h2>
                <br />
                <Button style = {{align: 'center'}}>Login to your account</Button>
            </div>
        );
    }
}

export default RegisterComplete;

