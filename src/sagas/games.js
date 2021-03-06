import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import requester from '../services/requester.js'

const watchers = [
    takeLatest("games/getGames", getGames),
    takeLatest("games/getGame", getGame),
    takeLatest("games/newGame", newGame),
    takeLatest("games/editGame", editGame),
    takeLatest("games/deleteGame", deleteGame),
    takeLatest("auth/updateUserGames", updateUserGames),
];


function* getGames(action) {

    const returnObject = yield call(requester, `http://localhost:4000/games`, {
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json'
        }
    });

    console.log(returnObject)

};

function* getGame(action) {

    const {games, id} = action.payload;

    var isGame = games.find((x)=>{return x.id === id});

    // const returnObject = yield call(requester, {
    //     `/games/${}`,
    //     method: "GET",
    //     body: action.payload
    // });

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

    yield put({
        type: 'auth/updateUserGames',
        payload: action.payload.id
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

function* updateUserGames(action) {

    yield put({
        type: 'auth/updateUserGames/success',
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