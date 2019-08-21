const initialState = {
    // user_id: '',
    // user_roles: [],
    // user_info: {
    //     first_name: '',
    //     last_name: '',
    //     email: '',
    //     phone: ''
    // },
    user_costs_current_month: [],
    show_add_new_cost_popup: false,
    show_edit_categories_popup: false,
    show_edit_types_popup: false,
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        // case 'addUserId' :
        //     return {...state, user_id: action.payload};
        //
        // case 'addUserInfo' :
        //     return {...state, user_info: action.payload};
        //
        // case 'addUserCards' :
        //     return {...state, user_cards: action.payload};
        //
        // case 'addUserRole' :
        //     return {...state, user_roles: action.payload};
        //
        case 'changeStateAddNewCostPopup' :
            return {...state, show_add_new_cost_popup: action.payload};

        case 'changeStateEditCategoriesPopup' :
            return {...state, show_edit_categories_popup: action.payload};

        case 'changeStateEditTypesPopup' :
            return {...state, show_edit_types_popup: action.payload};

        case 'addNewCostToCurrentMonth' :
            return {...state, user_costs_current_month: action.payload};

        default:
            return state;
    }
};

export default reduser;