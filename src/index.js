import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import games from './reducers/games.js';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { sagaInitiator } from '../src/config/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(games, applyMiddleware(sagaMiddleware));

sagaInitiator(sagaMiddleware);

ReactDOM.render(<div className="app-wrapper">
    <Provider store={store}><Router><App /></Router></Provider></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
