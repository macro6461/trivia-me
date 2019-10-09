import { call, put, takeLatest, all, delay } from "redux-saga/effects";

const watchers = [
    takeLatest("games/getGame", getGame),
    takeLatest("games/newGame", newGame),
    takeLatest("games/editGame", editGame),
    takeLatest("games/deleteGame", deleteGame),
];

function* getGame(action) {

    debugger

    const {games, id} = action.payload;

    var isGame = games.find((x)=>{return x.id === id});

    if (isGame){
        yield put({
            type: "games/getGame/success",
            payload: isGame
        });
    } else{
        yield put({
            type: "games/getGame/fail",
            payload: action.payload
        });
    }
}

function* newGame(action) {

    yield put({
        type: 'games/newGame/success',
        payload: action.payload
    });

    // yield put({
    //     type: 'games/newGame/fail',
    //     payload: action.payload
    // })
}

function* editGame(action) {

    yield put({
        type: 'games/editGame/success',
        payload: action.payload
    });

    // yield put({
    //     type: 'games/newGame/fail',
    //     payload: action.payload
    // })
}

function* deleteGame(action) {

    yield put({
        type: 'games/deleteGame/success',
        payload: action.payload
    });

    // yield put({
    //     type: 'games/deleteGame/fail',
    //     payload: action.payload
    // })
}

export default function*() {
    yield all(watchers);
}