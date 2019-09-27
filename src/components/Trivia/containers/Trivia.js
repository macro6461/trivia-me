import { connect } from "react-redux";
import { createAction } from "redux-actions";
import Trivia from "./../components/Trivia/Trivia.js";

const mapStateToProps = (state) => {
    return{
        game: state.game
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


