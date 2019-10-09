import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.js';
import LoginSignUp from './components/LoginSignUp/LoginSignUp.js'
import './App.css';
import Games from "./components/Games/containers/Games";
import Account from "./components/Account/Account";
import NotFound from './components/NotFound/NotFound.js';
import Home from './components/Home/Home.js';
import {createAction} from "redux-actions";
import Trivia from './components/Trivia/containers/Trivia.js';
import {connect} from "react-redux";

class App extends React.Component {

    state = {
        loggedIn: true
    }

    // componentDidMount = ()=>{
    //     debugger
    //     if (!this.props.user){
    //         window.location.href = '/login'
    //     } else {
    //         this.setState({
    //             loggedIn: true
    //         })
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     // only update chart if the data has changed
    //     if (prevProps.user !== this.props.user) {
    //         debugger
    //         this.setState({
    //             loggedIn: this.props.user ? true : false
    //         })
    //     }
    //   }

    render(){
        return (
            <div className="App">
                <Header loggedIn={this.state.loggedIn} user={this.props.user}/>
                {/* <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/games" component={Games}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/games/:id" render={({match})=>{
                        this.props.getGame({id: parseInt(match.params.id), games: this.props.games});
                        return <Trivia/>
                    }}/>
                    <Route exact path='/login' component={LoginSignUp}/>
                    <Route component={NotFound} />

                </Switch> */}
            </div>
            // <div className="App">
            //     <Header/>
            //     <Switch>
            //         <Route path="/">
            //             <Route exact path="/" component={Home}/>
            //             <Route path="games" render={({match})=>{
            //                 debugger
            //                 checkRedirect(match, Games)
            //             }}/>
            //             <Route path="account" render={({match})=>{
            //                 debugger
            //                 checkRedirect(match, Account)
            //             }}/>
            //             <Route path="games/:id" render={({match})=>{
            //                 props.getGame({id: parseInt(match.params.id), games: props.games});
            //                 return <Trivia/>
            //             }}/>
            //             <Route path='/404' component={NotFound} />
            //         </Route>
            //     </Switch>
            // </div>
    
      );
    }
}

const mapStateToProps = ({games, auth}) => {
    return{
        user: auth.user,
        games: games.games
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGame(obj) {
            const actionCreator = createAction(
                "games/getGame"
            );
            const action = actionCreator(obj);
            dispatch(action);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
