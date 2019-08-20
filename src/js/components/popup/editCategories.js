import React from "react";
import {changeStateEditCategoriesPopupAction} from "../../actions";
import {connect} from "react-redux";


class EditCategoriesPopup extends React.Component {

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
                        Категории
                    </h3>

                    <button className="popup-wrapper__close" onClick={() => {
                        this.props.changeStateEditCategoriesPopupAction(false)
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
    changeStateEditCategoriesPopupAction: object => dispatch(changeStateEditCategoriesPopupAction(object)),

});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoriesPopup);
