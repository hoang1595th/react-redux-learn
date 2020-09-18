import * as ActionType from '../constants/ActionTypes';
import _ from 'lodash';
import { closeForm } from '../actions';

let data = JSON.parse(localStorage.getItem('tasks'));//data: [{}], {id: unique, name, status}
let initialState = data ? data : [];

let s4 = () => {
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
}

let generateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let myReducer = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case ActionType.LIST_ALL:
            
            return state;    
        case ActionType.ADD_TASK:
            let task = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(task);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; 
        case ActionType.TOGGLE_STATUS_TASK:
            index = _.findIndex(state, (task) => {
                return task.id === action.taskId;
            })
            if(index > -1){
                let cloneTask = {...state[index]};
                cloneTask.status = !cloneTask.status;
                state[index] = cloneTask;
                localStorage.setItem('tasks', JSON.stringify(state));
                return [...state]; 
            }
            return state;
        case ActionType.DELETE_TASK:
            index = _.findIndex(state, (task) => {
                return task.id === action.taskId;
            })
            if(index > -1){
                state.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
                return [...state]; 
            }
            return state;
        case ActionType.UPDATE_TASK:
            console.log(action.task)
            index = _.findIndex(state, (task) => {
                return task.id === action.task.id;
            })
            if(index > -1){
                state[index] = action.task;
                localStorage.setItem('tasks', JSON.stringify(state));
                return [...state]; 
            }
            return state;
        default:
            break;
    }

    return state;
};

export default myReducer;