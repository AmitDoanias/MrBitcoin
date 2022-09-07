import { contactService } from "../../services/contactService"


export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().contactModule
            const contacts = await contactService.query(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER', filterBy })
        } catch (err) {
            console.log('err:', err)
        }
    }
}