import { createStore } from 'redux';
import {sort, status} from './actions/index';
import myReducer from './reducers/index';

// create store from reducer
const store = createStore(myReducer);
// declare action
let action = status();
// send action to reducer
store.dispatch(action);
// declare action
let actionSort = sort({
        by: 'name',
        value: -1
    });
// send action to reducer
store.dispatch(actionSort);

console.log(store.getState());