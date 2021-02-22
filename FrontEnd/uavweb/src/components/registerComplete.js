import React from 'react';
import {
    Button,
} from 'antd';

class RegisterComplete extends React.component {

    render() {
        return(
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

