import { connect } from "react-redux";
import { createAction } from "redux-actions";
import LoginSignUp from "../LoginSignUp.js";

const mapStateToProps = ({auth}) => {
    return{
        auth: auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signIn(req) {
            const actionCreator = createAction(
                "auth/signIn"
            );
            const action = actionCreator(req);
            dispatch(action);
        },
        signUp(req) {
            const actionCreator = createAction(
                "auth/signUp"
            );
            const action = actionCreator(req);
            dispatch(action);
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginSignUp);


