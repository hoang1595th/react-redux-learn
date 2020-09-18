import * as ActionType from '../constants/ActionTypes';

let initialState = false;

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.TOGGLE_FORM:
            return !state;    
        case ActionType.OPEN_FORM: 
            return true;    
        case ActionType.CLOSE_FORM:
            return false;    
        default:
            break;
    }

    return state;
};

export default myReducer;