import React from 'react';
import {Card, Input, Form, Button, Icon} from 'antd'
import '../../LoginSignUp.css'
import UserForm from '../LoginSignUpForm/LoginSignUpForm';

const SignUp = (props) => {

    const handleSubmit = (values) =>{
        props.onSubmit({creds: values})
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