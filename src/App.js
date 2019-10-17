import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.js';
import './App.css';
import Routes from './routes/index.js';
import {connect} from "react-redux";
import { createAction } from "redux-actions";

class App extends React.Component {

    render(){

        return (
            <div className="App">
                <Header onLogout={this.props.onLogout}
                        user={this.props.user}
                        loggedIn={this.props.loggedIn}
                />
                <Routes/>
            </div>
      );
    }
}

const mapStateToProps = ({auth, games}) => {
    return{
        user: auth.user,
        loggedIn: auth.loggedIn
    }
};
const mapDispatchToProps = dispatch => {

    return {
        onLogout(req) {
            const actionCreator = createAction(
                "auth/logout"
            );
            const action = actionCreator(req);
            dispatch(action);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

