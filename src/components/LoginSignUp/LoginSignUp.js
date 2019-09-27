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

        var text = this.state.view ? "Create Account" : "Sign In";

        return (
            <div>
                <h1>Login Or Sign Up</h1>
                <p onClick={this.changeState}>{text}</p>
                    {this.state.view
                        ? <Login/>
                        : <SignUp/>
                    }
            </div>
        )
    }
};

export default LoginSignUp;