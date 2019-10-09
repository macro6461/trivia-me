import React, {Component} from 'react';
import Games from '../../../Games/containers/Games.js';
import {Icon, Button, Tooltip} from 'antd';
import circle from "../../assets/purple_circle.png"
import './Account.css'

class Account extends Component{

    state = {
        showEditIcon: false
    };

    updateShowEditIconEnter = () => {
        this.setState({
            showEditIcon: true
        })
    };

    updateShowEditIconLeave = () => {
        setTimeout(()=>{
            this.setState({
                showEditIcon: false
            })
        }, 200)
    };


    render(){
        var {username, games, creditCards, profilePic} = this.props.user;
        return (
            <div>

                <h1>Account Details</h1>
                <div className="profilePicContainer" onMouseLeave={this.updateShowEditIconLeave} onMouseEnter={this.updateShowEditIconEnter}>
                    <Tooltip  placement='right' title="Change profile picture."><Button className='profilePicEditIcon' shape='circle' icon='edit' style={{display: this.state.showEditIcon ? 'block' : 'none'}}></Button></Tooltip>
                {profilePic
                    ?  <img className='profilePic' src={profilePic}/>
                    : <Icon className='profilePic' type='user'/>
                }
                </div>
                <h1>Username: {username}</h1>
                <Games/>
            </div>
        )
    }
};

export default Account;