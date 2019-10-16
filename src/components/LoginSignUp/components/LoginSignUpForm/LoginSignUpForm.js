import React from 'react';
import {Card, Input, Form, Button, Icon} from 'antd'
import '../../LoginSignUp.css'

const LoginSignUpForm = (props) =>{

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, getFieldsValue } = props.form;

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const emailError = getFieldError('email');

    var isEmpty = !Object.keys(getFieldsValue()).length || Object.values(getFieldsValue()).some((x)=>{
        return !x || x.length <= 0
    });

    const checkEmailFormat = (x) =>{
        //email validator
        if (!x.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return false
        } else {
            return true
        }
    };

   const handleSubmit = () => {

       props.form.validateFields((error, values) => {
           if (!error) {
               if (props.submitText.toLowerCase().includes('create') && !checkEmailFormat(values.email)){
                   props.form.setFields({
                       email: {
                           value: values.email,
                           errors: [new Error('email format invalid')],
                       },
                   });
               } else {
                   props.handleSubmit(values);
               }
           } else {
               console.log('error', error, values);
           }
       });
    };


    const hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    };

    return (
        <div className='login'>
            <Card>
                <Form layout="inline" >
                    <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username.' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password.' }],
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
                                rules: [{ required: true, message: 'Please input email.' }],
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
                        <Button type="primary" disabled={hasErrors(getFieldsError()) || isEmpty} onClick={handleSubmit}>
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