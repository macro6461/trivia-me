import { connect } from "react-redux";
import { createAction } from "redux-actions";
import AccountProfile from "../../components/AccountProfile/AccountProfile.js";

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
        editUserProfile(req) {
            const actionCreator = createAction(
                "auth/editUserProfile"
            );
            const action = actionCreator(req);
            dispatch(action);
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountProfile);
