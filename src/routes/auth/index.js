import React from "react";
import store from '../../config/store';
import Account from "../../components/Account/Account";


const initUser = (nextState, replace, callback) => {
    var user = store.getState().auth.user;
    store.dispatch({
        type: 'auth/getUserDetails',
        payload: user
    });
    return <Account/>
};

export { initUser };