// initial state
let initialState = {
    by: 'name',
    value: 1//1 tang, -1 giam
}
// declare reducer
let myReducera = (state = initialState, action) =>{
    if(action.type === 'SORT_Z_A'){
        state = {
            by: action.sort.by,
            value: action.sort.value
        }
        return state;
    }

    return state;
}

export default myReducera;