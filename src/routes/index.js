import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch  } from "react-router-dom";
import Home from "../components/Home/Home";
import Games from "../components/Games/containers/Games";
import LoginSignUp from "../components/LoginSignUp/containers/LoginSignUp";
import NotFound from "../components/NotFound/NotFound";

import {initUser} from "./auth";
import {getGame} from "./games";
import store from '../config/store';

const PrivateRoute = ({ component: Component, ...rest }) => {
    //check if user is logged in. If not, redirect to login/signup.
    var isLoggedIn = store.getState().auth.loggedIn;
    return <Route {...rest} render={
        (props) => {
            if (isLoggedIn) {
                if (!rest.component && rest.render) {
                    return rest.render(rest.computedMatch)
                } else {
                    return <Component {...props}/>
                }
            } else {
                return <Redirect to='/login'/>
            }
        }
    } />
};

const Routes = ({ history, store }) => {

    return (
                <Switch>
                    <PrivateRoute exact path="/" component={Home} history={history}/>
                    <PrivateRoute exact path="/games" history={history} component={Games} />
                    <PrivateRoute exact path="/account" history={history} render={initUser}/>
                    <PrivateRoute path="/games/:id" history={history} render={getGame} />
                    <Route path="/login" history={history} component={LoginSignUp} />
                    <Route exact path="/401" history={history} component={NotFound} />
                    <Route exact path="/403" history={history} component={NotFound} />
                    <Route exact path="/404" history={history} component={NotFound} />
                    <Route exact path="/440" history={history} component={NotFound} />
                    <Route exact path="/500" history={history} component={NotFound} />
                    <Redirect to='404' />
                </Switch>
    );
};

Routes.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Routes;
