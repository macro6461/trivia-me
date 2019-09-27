import { connect } from "react-redux";
import { createAction } from "redux-actions";
import Games from "./../components/Games/Games.js";

const mapStateToProps = ( state ) => {
    return{
        games: state.games
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
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

