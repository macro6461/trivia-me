import React from 'react';
import Trivia from "../../components/Trivia/containers/Trivia.js";
import { Route, Redirect, Switch  } from "react-router-dom";
import store from '../../config/store';

const getGame = (nextState, replace, callback) => {

    var match = nextState.match ? nextState.match : nextState;

    var userGames = store.getState().auth.user.games;
    if (userGames.includes(parseInt(match.params.id))){
        var games = store.getState().games.games;
        var id = parseInt(match.params.id);
        store.dispatch({
            type: 'games/getGame',
            payload: {games, id}
        });
        return <Trivia/>
    } else {
        return <Redirect to="/403"/>
    }
};

export { getGame };