// initial state
let initialState = false;
// declare reducer
let myReducer = (state = initialState, action) =>{
    if(action.type === 'TOGGLE_STATUS'){
        state = !state;
        return state;
    }

    return state;
}

export default myReducer;