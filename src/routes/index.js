import React from "react";
import PropTypes from "prop-types";
import { Router, Route, Redirect, Switch  } from "react-router";

import App from "../App.js";
import Home from "../components/Home/Home";
import Games from "../components/Games/containers/Games";
import LoginSignUp from "../components/LoginSignUp/LoginSignUp";
import NotFound from "../components/NotFound/NotFound";
import Account from "../components/Account/Account";
import Trivia from "../components/Trivia/containers/Trivia.js";
import store from '../config/store';

const getGame = (nextState, replace, callback) => {
    var userGames = store.getState().auth.user.games;
    if (userGames.includes(parseInt(nextState.match.params.id))){
        var games = store.getState().games.games;
        var id = parseInt(nextState.match.params.id);
        store.dispatch({
            type: 'games/getGame',
            payload: {games, id}
        });
        return <Trivia/>
    } else {
        return <Redirect to="/403"/>
    }
};

const accountDetails = () =>{
    var user = store.getState().auth.user;
    store.dispatch({
        type: 'auth/getUserDetails',
        payload: user
    });
    return <Account/>
};

const Routes = ({ history, store }) => {

    return (
        <Router history={history} store={store}>
                <Route path="/" component={App}/>
                <Route exact path="/" component={Home} />
                <Route exact path="/401" component={NotFound} />
                <Route exact path="/403" component={NotFound} />
                <Route exact path="/404" component={NotFound} />
                <Route exact path="/440" component={NotFound} />
                <Route exact path="/500" component={NotFound} />
                <Route exact path="/404" component={NotFound} />
                <Route exact path="/games" component={Games} />
                <Route exact path="/account" render={accountDetails}/>
                <Route path="/games/:id" render={getGame} />
                <Route path="/login" component={LoginSignUp} />
                {/*<Route component={NotFound} />*/}
        </Router>
    );
};

Routes.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Routes;
