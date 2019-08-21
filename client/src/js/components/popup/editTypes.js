import React from "react";
import {changeStateEditTypesPopupAction} from "../../actions";
import {connect} from "react-redux";


class EditTypesPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        // this.StateValue = this.StateValue.bind(this);
    }


    // StateValue(e) {
    //     const {name, value} = e.target;
    //     this.setState({[name]: value});
    // }


    render() {
        return (
            <div className="popup">
                <div className="popup-wrapper">
                    <h3>
                        Типы расходов
                    </h3>

                    <button className="popup-wrapper__close" onClick={() => {
                        this.props.changeStateEditTypesPopupAction(false)
                    }}/>
                </div>

            </div>

        )
    }
};

const mapStateToProps = (store) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    changeStateEditTypesPopupAction: object => dispatch(changeStateEditTypesPopupAction(object)),

});

export default connect(mapStateToProps, mapDispatchToProps)(EditTypesPopup);
