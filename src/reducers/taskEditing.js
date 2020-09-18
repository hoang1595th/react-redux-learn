import * as ActionType from '../constants/ActionTypes';
import _ from 'lodash';

let initialState = {
    id: '',
    name: '',
    status: true
};

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.OPEN_TASK_TO_UPDATE:
            state = action.task; 
            //console.log(action.task)
            break;
        case ActionType.OPEN_TASK_TO_CREATE:
            state = initialState; 
        default:
            break;
    }

    return state;
};

export default myReducer;