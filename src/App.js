import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.js';
import LoginSignUp from './components/LoginSignUp/LoginSignUp.js'
import './App.css';
import Games from "./components/Games/containers/Games";
import Account from "./components/Account/Account";
import NotFound from './components/NotFound/NotFound.js';
import Home from './components/Home/Home.js';
import {createAction} from "redux-actions";
import Trivia from './components/Trivia/containers/Trivia.js';
import {connect} from "react-redux";

function App(props) {

    var loggedIn = true;

    return (
        <div className="App">
            <Header loggedIn={loggedIn}/>
            {loggedIn
                ? null
                : <LoginSignUp/>
            }
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/games" component={Games}/>
                <Route path="/account" component={Account}/>
                <Route path="/games/:id" render={({match})=>{
                    props.getGame({id: parseInt(match.params.id), games: props.games});
                    return <Trivia/>
                }}/>
                <Route component={NotFound} />
            </Switch>
        </div>

  );
}

const mapStateToProps = state =>{
    return{
        games: state.games
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGame(obj) {
            const actionCreator = createAction(
                "games/getGame"
            );
            const action = actionCreator(obj);
            dispatch(action);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
