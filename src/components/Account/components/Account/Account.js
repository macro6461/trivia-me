import React, {Component} from 'react';
import Games from '../../../Games/containers/Games.js';
import AccountProfile from '../../containers/AccountProfile/AccountProfile.js';
import AccountSettings from '../../containers/AccountSettings/AccountSettings.js';
import {Icon, Button, Tooltip, Tabs} from 'antd';
import './Account.css'

const { TabPane } = Tabs;

class Account extends Component{

    state = {
        showEditIcon: false,
        mobile: false
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

    checkMobile = () =>{
        var windowWidth = window.innerWidth;
        if (!this.state.mobile && windowWidth <= 700){
            this.setState({
                mobile: true
            })
        } else if (this.state.mobile && windowWidth > 700){
            this.setState({
                mobile: false
            })
        }
    };

    componentDidMount = () =>{
      window.addEventListener('resize', this.checkMobile);
      this.checkMobile()
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
                <h1>{username}</h1>
                <div style={{display: 'block', margin: 'auto'}}>
                    <Tabs type="card" tabBarStyle={{borderBottom: 'none'}}>
                        {/*<TabPane tab={!this.state.mobile ? <p><Icon type='user'/>Profile</p> : <Icon type='user' style={{marginRight: 0}}/>} key="1">*/}
                            {/*<AccountProfile/>*/}
                        {/*</TabPane>*/}
                    <TabPane tab={!this.state.mobile ? <p><Icon type='build'/>My Games</p> : <Icon type='build' style={{marginRight: 0}}/>} key="1">
                        <Games/>
                    </TabPane>
                    <TabPane tab={!this.state.mobile ? <p><Icon type='bar-chart'/>Player Stats</p> : <Icon type='bar-chart' style={{marginRight: 0}}/>} key="2">
                        <p>Statistics</p>
                    </TabPane>
                        <TabPane tab={!this.state.mobile ? <p><Icon type='setting'/>Settings</p> : <Icon type='setting' style={{marginRight: 0}}/>}  key="3">
                            <AccountSettings/>
                        </TabPane>
                </Tabs>
                </div>
            </div>
        )
    }
};

export default Account;