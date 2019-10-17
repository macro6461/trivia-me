import React from 'react';
import {Form, Card, Input, Icon, Button, Popconfirm} from 'antd';
import AccountProfile from '../../containers/AccountProfile/AccountProfile.js';

const AccountSettings = (props) =>{

    var {id, username, password, email} = props.user;

    const onSubmit = (e) =>{
        e.preventDefault();
        var values = props.form.getFieldsValue();
        values['id'] = id;
        props.editUserProfile(values);
    };

    return (
        <div style={{maxWidth: 1000, display: 'block', margin: 'auto', textAlign: 'center'}}>
            <Card>

                <h1>Account Settings</h1>
                <AccountProfile/>
                <Popconfirm
                    title="Are you sure you want to permanently delete your profile?"
                    onConfirm={()=>{props.deleteUserProfile(props.user)}}
                    okText="Yes"
                    cancelText="No"
                    overlayStyle={{width: 200}}
                >
                <Button type='danger' style={{marginTop: 20}}>Delete Account</Button>
                </Popconfirm>

            </Card>
        </div>
    )
};

export default AccountSettings;