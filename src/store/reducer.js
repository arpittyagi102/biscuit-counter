const initialstate = 0;

const reducer = (state = initialstate, action) => {
    if (action.type === 'adding')
        return (state + action.number);
    else if (action.type === 'removing')
        return (state - action.number);
    else
        return state;
}
export default reducer;