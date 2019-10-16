import React, {Component} from 'react';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/SignUp.js';


class LoginSignUp extends Component{

    state = {
        view: true,
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
                    ? <Login fields={['username', 'password']} onSubmit={this.props.signIn} history={this.props.history}/>
                    : <SignUp fields={['username', 'password', 'email']} onSubmit={this.props.signUp} history={this.props.history}/>
                }
                <br/>
                {text}
            </div>
        )
    }
};

export default LoginSignUp;