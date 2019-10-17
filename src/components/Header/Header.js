import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {Icon} from 'antd';



export default class Header extends Component{

    state = {
        showMenu: false
    };

    onShowMenu = () =>{
        this.setState({
            showMenu: !this.state.showMenu
        })
    };

    onMouseLeave = () =>{
        this.setState({
            showMenu: false
        })
    };

    onLogOut = () =>{
        this.props.onLogout({id: this.props.user.id})
    };

    render(){
        return (
            <div className='head-container'>
            <div className="header">
                <h1><Link to="/" className="link">triviaME</Link></h1>
                {this.props.loggedIn
                    ? <div onMouseLeave={this.onMouseLeave}
                           onClick={this.onShowMenu}
                           // style={{height: this.showMenu ? 150 : 'auto'}}
                    >
                        <div className="user-details">
                            <Icon type="user" className="user-icon"/>
                            <p style={{marginBottom: 0}}>{this.props.user.username}</p>
                            {this.state.showMenu
                                ? <div className="user-menu">
                                    <ul>
                                        <Link to="/games" className="link"><li>My Games</li></Link>
                                        <Link to="/account" className="link"><li>Account Details</li></Link>
                                        <li onClick={this.onLogOut}>Sign Out</li>
                                    </ul>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                    : null
                }
            </div>
            </div>
        )
    }
};
