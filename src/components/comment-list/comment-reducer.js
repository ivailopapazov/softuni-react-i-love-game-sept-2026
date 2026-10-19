export function commentReducer(state, action) {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.payload);
        default:
            return state;
    }
}
