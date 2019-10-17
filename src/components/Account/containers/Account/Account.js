import { connect } from "react-redux";
import { createAction } from "redux-actions";
import Account from "../../components/Account/Account.js";

const mapStateToProps = ({auth, games}) => {
    var gameLoading = games.loading

    var games = games.games.filter((game)=>{
        return game.owner === auth.user.id
    })

    return{
        user: auth.user,
        games,
        authLoading: auth.loading,
        gameLoading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // getGame(req) {
        //     const actionCreator = createAction(
        //         "games/getGame"
        //     );
        //     const action = actionCreator(req);
        //     dispatch(action);
        // }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);
