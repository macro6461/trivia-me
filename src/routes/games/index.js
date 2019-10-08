import store from '../../config/store';

const getGame = (nextState, replace, callback) => {
    var userGames = store.getState().auth.user.games;
    if (userGames.includes(nextState.match.params.id)){
        return <Trivia/>
    } else {
        return <Redirect to="/403" componen t/>
    }
};

export { getGame };