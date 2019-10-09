import { call, put, takeLatest, all, delay } from "redux-saga/effects";

const watchers = [
    takeLatest("auth/logout", logout),
    takeLatest("auth/getUserDetails", getUserDetails)
];

function* getUserDetails(action) {
    debugger
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
}

export default function*() {
    yield all(watchers);
}