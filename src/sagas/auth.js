import { call, put, takeLatest, all, delay } from "redux-saga/effects";

const watchers = [
    takeLatest("auth/logout", logout)
];

function* logout(action) {
    yield put({
        type: 'auth/logout/success',
        payload: action.payload
    });
}

export default function*() {
    yield all(watchers);
}