import React from 'react';
import UserForm from '../LoginSignUpForm/LoginSignUpForm';
import '../../LoginSignUp.css'

const Login = (props) =>{

    const handleSubmit = (values) =>{
        props.onSubmit({creds: values})
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