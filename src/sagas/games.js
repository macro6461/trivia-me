import { call, put, takeLatest, all, delay } from "redux-saga/effects";

const watchers = [
    takeLatest("games/getGame", getGame),
    takeLatest("games/deleteGame", deleteGame),
];

function* getGame(action) {
    yield put({
        type: "games/getGame",
        payload: action.payload
    });
}

function* deleteGame(action) {
    yield put({
        type: "games/deleteGame",
        payload: action.payload
    });
}

export default function*() {
    yield all(watchers);
}