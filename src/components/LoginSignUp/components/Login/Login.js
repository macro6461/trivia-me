import React from 'react';
import UserForm from '../LoginSignUpForm/LoginSignUpForm';
import '../../LoginSignUp.css'

const Login = (props) =>{

    const handleSubmit = (values) =>{
        debugger
        props.onSubmit({creds: values, history: props.history})
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