import React from "react";
import PropTypes from "prop-types";
import { Router, Route, Redirect  } from "react-router";

import App from "../App.js";
import Home from "../components/Home/Home";
import Games from "../components/Games/containers/Games";
import LoginSignUp from "../components/LoginSignUp/LoginSignUp";
import NotFound from "../components/NotFound/NotFound";
import Account from "../components/Account/Account";
import Trivia from "../components/Trivia/Trivia";
import store from '../config/store';

const getGame = (nextState, replace, callback) => {
    var userGames = store.getState().auth.user.games;
    if (userGames.includes(parseInt(nextState.match.params.id))){
        return <Trivia/>
    } else {
        return <Redirect to="/403"/>
    }
};

const Routes = ({ history, store }) => {

    return (
        <Router history={history} store={store}>
            <Route path="/" component={App}>
                <Route exact path="/401" component={NotFound} />
                <Route exact path="/403" component={NotFound} />
                <Route exact path="/404" component={NotFound} />
                <Route exact path="/440" component={NotFound} />
                <Route exact path="/500" component={NotFound} />
                <Route exact path="/" component={Home}/>
                <Route exact path="/games" component={Games}/>
                <Route path="/account" component={Account}/>
                <Route path="/games/:id" render={getGame}/>
                <Route path='/login' component={LoginSignUp}/>
            </Route>
        </Router>
    );
};

Routes.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Routes;
