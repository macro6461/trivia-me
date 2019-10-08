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
    }
}, {
    loading: false,
    user: {
        id: 4,
        username: 'mattcee',
        games: [1, 2], //TWO GAME IDS
        creditCards: []
    }
});


export default auth;