const INITIAL_STATE = {
    showMensager: false
}

export default function mensagerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_MENSAGER':
            return { ...state, showMensager: true }
        case 'HIDE_MENSAGER':
            return { ...state, showMensager: false }
        default:
            return state
    }
}