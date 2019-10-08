import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
// import { browserHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import games from './reducers/games.js';

import auth from './reducers/auth.js';
import Routes from './routes/index.js';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import store from '../src/config/store';
import * as serviceWorker from './serviceWorker';

var history = createBrowserHistory();

const browserHistory = syncHistoryWithStore(history, store);

ReactDOM.render(
    <div className="app-wrapper">
        <Provider store={store}>
            <Routes history={browserHistory} store={store}/>
        </Provider>
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
