import React from 'react';
import {Form, Card, Input, Icon, Button} from 'antd';

const AccountProfile = (props) =>{

    var {id, username, password, email} = props.user;
    const { getFieldDecorator } = props.form;

    const onSubmit = (e) =>{
        e.preventDefault();
        var values = props.form.getFieldsValue();
        values['id'] = id;
        props.editUserProfile(values);
    };

    return (
        <div style={{maxWidth: 1000, display: 'block', margin: 'auto'}}>
            <Card title="Username and Email">
                <Form layout="inline" style={{textAlign: 'left', display: 'block', margin: 'auto', width: 460}} onSubmit={onSubmit}>
                    <Form.Item label="Username" style={{width: 100 + '%'}}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username.' }],
                            initialValue: username
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                style={{width: 290}}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="Email Address" style={{width: 100 + '%'}}>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input email.' }],
                            initialValue: email
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                style={{width: 290}}
                            />,
                        )}
                    </Form.Item>
                    {/*<Form.Item >*/}
                        {/*{getFieldDecorator('password', {*/}
                            {/*rules: [{ required: true, message: 'Please input your Password.' }],*/}
                        {/*})(*/}
                            {/*<Input*/}
                                {/*prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/}
                                {/*type="password"*/}
                                {/*placeholder="Password"*/}
                            {/*/>,*/}
                        {/*)}*/}
                    {/*</Form.Item>*/}
                    <Button type="primary" htmlType="submit" style={{display: 'block', margin: 'auto',
                        marginTop: 20}}>
                        Update Profile
                    </Button>
                </Form>
            </Card>
        </div>
    )
};

const AccountProfileForm = Form.create()(AccountProfile);

export default AccountProfileForm;