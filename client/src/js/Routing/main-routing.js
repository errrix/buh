import React, {Fragment} from 'react';
import Header from "../components/header";
import pageNotFound from "../pages/404";
import Footer from "../components/footer";
import Homepage from "../pages/homepage/homepage";
import LoginPopup from '../components/popup/loginPopup'

import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './../modules/scrollToTop';
import CSSTransitionGroup from "react-addons-css-transition-group"
import AppPage from "../pages/apppage/apppage";
import AddNewCostsPopup from "../components/popup/addNewCosts"
import EditCategoriesPopup from "../components/popup/editCategories"
import EditTypesPopup from "../components/popup/editTypes";

class MainRouting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        // this.closeResendPopup = this.closeResendPopup.bind(this);
    }

    componentDidMount() {
        console.log('routing start');
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Fragment>
                            <CSSTransitionGroup transitionName="logn-popup"
                                                transitionEnter={true}
                                                transitionEnterTimeout={300}
                                                transitionLeave={true}
                                                transitionLeaveTimeout={300}
                                                component={React.Fragment}>
                                {this.props.show_add_new_cost_popup ? (<AddNewCostsPopup/>) : (false)}
                                {this.props.show_edit_categories_popup ? (<EditCategoriesPopup/>) : (false)}
                                {this.props.show_edit_types_popup ? (<EditTypesPopup/>) : (false)}
                            </CSSTransitionGroup>
                            <Route path="/" component={Header}/>
                            <Switch>
                                <Route exact path="/" component={Homepage}/>
                                <Route exact path="/app" component={AppPage}/>
                                <Route component={pageNotFound}/>
                            </Switch>
                            <Route path="/" component={Footer}/>
                        </Fragment>
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        show_add_new_cost_popup: store.show_add_new_cost_popup,
        show_edit_categories_popup: store.show_edit_categories_popup,
        show_edit_types_popup: store.show_edit_types_popup,

    }
};

const mapDispatchToProps = dispatch => ({
    // addUserId: string => dispatch(addUserId(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainRouting);

