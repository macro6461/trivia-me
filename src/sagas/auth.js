import { call, put, takeLatest, all, delay } from "redux-saga/effects";

const watchers = [
    takeLatest("auth/signIn", signIn),
    takeLatest("auth/signUp", signUp),
    takeLatest("auth/logout", logout),
    takeLatest("auth/getUserDetails", getUserDetails)
];

function* signIn(action) {

    yield put({
        type: 'auth/signIn/success',
        payload: action.payload.creds
    });

    //pass history along with action.payload

    action.payload.history.push('/')
}

function* signUp(action) {
    yield put({
        type: 'auth/signUp/success',
        payload: action.payload.creds
    });

    //passed history along with action.payload
    action.payload.history.push('/')
}


function* getUserDetails(action) {
    yield put({
        type: 'auth/getUserDetails/success',
        payload: action.payload
    });
}

function* logout(action) {
    yield put({
        type: 'auth/logout/success',
        payload: action.payload
    });

    action.payload.history.push('/login')

}

export default function*() {
    yield all(watchers);
}