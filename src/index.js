import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
// import { browserHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App.js'

import './index.css';
import store from '../src/config/store';
import * as serviceWorker from './serviceWorker';

var history = createBrowserHistory();

const browserHistory = syncHistoryWithStore(history, store);

ReactDOM.render(
    <div className="app-wrapper">
        <Provider store={store}>
            <Router history={browserHistory} store={store}>
                <App/>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root'));

serviceWorker.unregister();
