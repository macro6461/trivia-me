import { connect } from "react-redux";
import { createAction } from "redux-actions";
import AccountSettings from "../../components/AccountSettings/AccountSettings.js";

const mapStateToProps = ({auth, games}) => {

    var games = games.games.filter((game)=>{
        return game.owner === auth.user.id
    });

    return{
        user: auth.user,
        games
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUserProfile(req) {
            const actionCreator = createAction(
                "auth/deleteUserProfile"
            );
            const action = actionCreator(req);
            dispatch(action);
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountSettings);
