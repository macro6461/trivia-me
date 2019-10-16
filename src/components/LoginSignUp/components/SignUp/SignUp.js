import React from 'react';
import {Card, Input, Form, Button, Icon} from 'antd'
import '../../LoginSignUp.css'
import UserForm from '../LoginSignUpForm/LoginSignUpForm';

const SignUp = (props) => {

    const handleSubmit = () =>{
        console.log('signing up')
    };

    return (
        <div >
            <UserForm
                submitText='Create Account'
                handleSubmit={handleSubmit}
            />
        </div>
    )
};

export default SignUp;