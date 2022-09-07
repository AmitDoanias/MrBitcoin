
const initialState = {
    contacts: null,
    filterBy: '',
}

export function contactReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }

        default:
            return state
    }
}

