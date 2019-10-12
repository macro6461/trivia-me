import React from 'react';
import {Card, Input, Form, Button, Icon} from 'antd'
import '../LoginSignUp.css'

const LoginSignUpForm = (props) =>{

   const handleSubmit = () =>{

        var values = props.form.getFieldsValue();

        // props.handleSubmit

    };


    const hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    };

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const emailError = isFieldTouched('email') && getFieldError('email');

    return (
        <div className='login'>
            <Card>
                <Form layout="inline" >
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    {props.submitText.toLowerCase().includes('create')
                    ? <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input valid email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="email"
                                    placeholder="email address"
                                />,
                            )}
                        </Form.Item>
                        : null
                    }
                    <Form.Item>
                        <Button type="primary" disabled={hasErrors(getFieldsError())} onClick={handleSubmit}>
                            {props.submitText}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
};

const UserForm = Form.create()(LoginSignUpForm);

export default UserForm;