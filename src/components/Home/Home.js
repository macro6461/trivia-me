import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component{

    render(){
        return (
            <div className="home">
                <h1>Welcome to TRIVIAme!</h1>
                <Link to="/games">Play Now</Link>
            </div>
        )
    }
};

export default Home;