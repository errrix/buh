import React from "react";
import {connect} from "react-redux";
import {
    changeStateAddNewCostPopupAction,
    changeStateEditCategoriesPopupAction,
    changeStateEditTypesPopupAction
} from "../actions";

class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show_settings: false
        };

        this.showSettings = this.showSettings.bind(this);


    }

    showSettings() {
        this.setState({show_settings: !this.state.show_settings})
    }

    render() {
        return (
            <div className="main-sidebar">
                <ul>
                    <li>
                        <button onClick={() => {
                            this.props.changeStateAddNewCostPopupAction(true)
                        }}>Добавить новый расход
                        </button>
                    </li>

                    <li>
                        <button onClick={this.showSettings}>Настройки</button>
                    </li>
                    {this.state.show_settings ? (
                        <React.Fragment>
                            <li>
                                <button onClick={() => {
                                    this.props.changeStateEditCategoriesPopupAction(true)
                                }}>Редактировать список категорий
                                </button>
                            </li>

                            <li>
                                <button onClick={() => {
                                    this.props.changeStateEditTypesPopupAction(true)
                                }}>Редактировать список типов
                                </button>
                            </li>
                        </React.Fragment>

                    ) : false}

                </ul>
            </div>

        )
    }
};

const mapStateToProps = (store) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    changeStateAddNewCostPopupAction: boolean => dispatch(changeStateAddNewCostPopupAction(boolean)),
    changeStateEditCategoriesPopupAction: boolean => dispatch(changeStateEditCategoriesPopupAction(boolean)),
    changeStateEditTypesPopupAction: boolean => dispatch(changeStateEditTypesPopupAction(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);