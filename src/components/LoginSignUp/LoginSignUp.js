import React, {Component} from 'react';
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';


class LoginSignUp extends Component{

    state = {
        view: false,
    };

    changeState = () =>{
        this.setState({
          view: !this.state.view
        })
    };

    render(){

        var text = this.state.view
            ? <p onClick={this.changeState} style={{cursor: 'pointer'}}>New to triviaME? <strong style={{textDecoration: 'underline'}}>Create an account.</strong></p>
            : <p onClick={this.changeState} style={{cursor: 'pointer'}}>Have an account? <strong style={{textDecoration: 'underline'}}>Sign In.</strong></p>;

        var title = this.state.view
            ? 'Login to triviaME'
            : 'Join triviaME';

        return (
            <div className='login-container'>
                <h1>{title}</h1>
                {this.state.view
                    ? <Login/>
                    : <SignUp/>
                }
                <br/>
                {text}
            </div>
        )
    }
};

export default LoginSignUp;