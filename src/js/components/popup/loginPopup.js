import React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {BrowserRouter} from 'react-router';



class LoginPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        // this.resendToken = this.resendToken.bind(this);
    }


    render() {
        return (
            <div className="popup"

            >
            </div>

        )
    }
};

const mapStateToProps = (store) => {
    return {
        // user_id: store.user_id
    }
};

const mapDispatchToProps = dispatch => ({
    // addUserId: string => dispatch(addUserId(string)),
    // addUserRole: array => dispatch(addUserRole(array)),
    // addUserInfo: object => dispatch(addUserInfo(object)),
    // changePopup: boolean => dispatch(changePopup(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
