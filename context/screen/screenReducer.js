export const CHANGE_SCREEN = 'CHANGE_SCREEN';


export const screenReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return {
                ...state,
                screenId: action.payload
            }
        default:
            return state;
    }
}