import { call, put, takeLatest, all, delay } from "redux-saga/effects";

const watchers = [
    takeLatest("auth/signIn", signIn),
    takeLatest("auth/signUp", signUp),
    takeLatest("auth/logout", logout),
    takeLatest("auth/getUserDetails", getUserDetails),
    takeLatest("auth/editUserProfile", editUserProfile ),
    takeLatest("auth/deleteUserProfile", deleteUserProfile ),
    takeLatest("auth/toDelete", toDelete ),
];

function* signIn(action) {

    yield put({
        type: 'auth/signIn/success',
        payload: action.payload.creds
    });

    window.location.href = '/';
}

function* signUp(action) {
    yield put({
        type: 'auth/signUp/success',
        payload: action.payload.creds
    });

    window.location.href = '/';
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

    window.location.href = '/login';
}

function* editUserProfile(action) {
    yield put({
        type: 'auth/editUserProfile/success',
        payload: action.payload
    });
}

function* deleteUserProfile(action) {
    yield put({
        type: 'auth/deleteUserProfile/success',
        payload: null
    });

    // window.location.href = '/login';
}


function* toDelete(action) {
    yield put({
        type: 'auth/toDelete/success',
        payload: null
    });
}


export default function*() {
    yield all(watchers);
}