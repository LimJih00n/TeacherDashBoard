export const plusStr = () => ({ type: 'PLUS', str: 'helloWorld' });
const initState = {
    str: 'Not'
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'PLUS':
            return { str: state.str + action.str}
        default:
            return state;
    }
}
export default reducer