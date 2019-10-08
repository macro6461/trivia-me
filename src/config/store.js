import React from 'react';
import { routerReducer} from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import games from '../reducers/games.js';
import auth from '../reducers/auth.js';


import { sagaInitiator } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    games,
    auth,
    routing: routerReducer
});


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaInitiator(sagaMiddleware);

export default store;