import {handleActions} from 'redux-actions';
import { notification} from "antd";

const auth = handleActions({
    ['auth/signIn'](state, action) {
        return {...state, loading: true}
    },
    ['auth/signIn/success'](state, action) {
        // var user = action.payload;
        var user = state.user;
        return {...state, loggedIn: !state.loggedIn, loading: false, user}
    },
    ['auth/signIn/fail'](state, action) {
        return {...state, loggedIn: false, loading: false}
    },
    ['auth/logout'](state, action) {
        return {...state, loading: true}
    },
    ['auth/logout/success'](state, action) {
        return {...state, loading: false, user: null, loggedIn: false}
    },
    ['auth/logout/fail'](state, action) {
        notification.error({
            message: 'Unable to logout.'
        })
        return {...state, loading: false}
    },
    ['auth/getUserDetails'](state, action) {
        return {...state, loading: true}
    },
    ['auth/getUserDetails/success'](state, action) {
        return {...state, loading: false, user: action.payload}
    },
    ['auth/getUserDetails/fail'](state, action) {
        notification.error({
            message: 'Unable to access user details.'
        });
        return {...state, loading: false}
    },
    ['auth/updateUserGames'](state, action) {
        return {...state, loading: true}
    },
    ['auth/updateUserGames/success'](state, action) {

        var user = state.user;
        var games = user.games;
        games.push(action.payload);

        user.games = games;


        return {...state, user, loading: false}
    },

}, {
    loading: false,
    loggedIn: false,
    user: {
        id: 4,
        username: 'mattcee',
        games: [1, 2], //TWO GAME IDS
        creditCards: []
    }
});


export default auth;