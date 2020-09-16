import * as ActionType from '../constants/ActionTypes';

let initialState = [];

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_ALL:
            return state;    
        default:
            break;
    }

    return state;
};

export default myReducer;