import { connect } from "react-redux";
import { createAction } from "redux-actions";
import Trivia from "./../components/Trivia/Trivia.js";

const mapStateToProps = ({auth, games}) => {
    debugger
    return{
        game: games.game
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGame(req) {
            const actionCreator = createAction(
                "games/getGame"
            );
            const action = actionCreator(req);
            dispatch(action);
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trivia);


