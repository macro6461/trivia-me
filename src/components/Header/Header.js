import { connect } from "react-redux";
import { createAction } from "redux-actions";
import Header from "./components/Header.js";

const mapStateToProps = ({auth, games}) => {
    return{
        games: games.games,
        game: games.game,
        user: auth.user
    }
};
const mapDispatchToProps = dispatch => {

    return {
        getGame(userId) {
            const actionCreator = createAction(
                "auth/logout"
            );
            const action = actionCreator(userId);
            dispatch(action);
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);


