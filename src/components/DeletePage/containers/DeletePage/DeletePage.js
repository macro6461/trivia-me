import { connect } from "react-redux";
import { createAction } from "redux-actions";
import DeletePage from "../../components/DeletePage/DeletePage.js";


const mapDispatchToProps = dispatch => {
    return {
        toDelete(req) {
            const actionCreator = createAction(
                "auth/toDelete"
            );
            const action = actionCreator(req);
            dispatch(action);
        }
    }
};
export default connect(
    null,
    mapDispatchToProps
)(DeletePage);
