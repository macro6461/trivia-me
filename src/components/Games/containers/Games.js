import { connect } from "react-redux";
import { createAction } from "redux-actions";
import Games from "./../components/Games/Games.js";

const mapStateToProps = ( {games, auth} ) => {
    return{
        games: games.games
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        newGame(game) {


            
            const actionCreator = createAction(
                "games/newGame"
            );
            const action = actionCreator(game);
            dispatch(action);
        },
        editGame(game) {
            const actionCreator = createAction(
                "games/editGame"
            );
            const action = actionCreator(game);
            dispatch(action);
        },
        deleteGame(id) {
            const actionCreator = createAction(
                "games/deleteGame"
            );
            const action = actionCreator(id);
            dispatch(action);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Games);