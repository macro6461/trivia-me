import {handleActions} from 'redux-actions';
import { notification} from "antd";

const auth = handleActions({
    ['auth/login'](state, action) {
        return {...state, loading: true}
    },
    ['auth/login/success'](state, action) {
        
    },
    ['auth/login/fail'](state, action) {

    },
    ['auth/logout'](state, action) {
        return {...state, loading: true}
    },
    ['auth/logout/success'](state, action) {
        return {...state, loading: false, user: null}
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
    loggedIn: true,
    user: {
        id: 4,
        username: 'mattcee',
        games: [1, 2], //TWO GAME IDS
        creditCards: []
    }
});


export default auth;