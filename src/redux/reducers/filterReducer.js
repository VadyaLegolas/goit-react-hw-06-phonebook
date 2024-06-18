export const filterReducer =(state = '', action) => {
    switch (action.type) {
        case 'FILTER_CONTACTS':
            return action.payload.value
        default:
            return state
    }
}