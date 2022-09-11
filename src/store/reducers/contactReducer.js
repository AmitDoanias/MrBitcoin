
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
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            }
        default:
            return state
    }
}

