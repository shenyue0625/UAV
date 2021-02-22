import { Button } from 'antd';
import React from 'react';

class RegisterComplete extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'left' }}> Dear UAV </h1>
                <br />
                <h1 style={{ textAlign: 'center' }}> Congratulations! You've registered an account!</h1>
                <br />
                <Button>Login to your account</Button>
            </div>
        );
    }
}

export default RegisterComplete;

