import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.js';
import './App.css';
import Routes from './routes/index.js';

class App extends React.Component {

    state = {
        loggedIn: true
    };

    render(){
        return (
            <div className="App">
                <Header/>
                <Routes/>
            </div>
      );
    }
}

export default App;

