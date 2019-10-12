import React from 'react';
import {Card, Input, Form, Button, Icon} from 'antd'
import UserForm from '../LoginSignUpForm/LoginSignUpForm';
import '../LoginSignUp.css'

const Login = (props) =>{

    const handleSubmit = () =>{
        console.log('logging in')
    };

    return (
        <div>
            <UserForm
                submitText='Sign In'
                handleSubmit={handleSubmit}
            />
        </div>
    )
};

export default Login;