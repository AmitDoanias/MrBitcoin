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

export function saveContact(contact) {
    return async (dispatch) => {
        try {
            const actionType = (contact._id) ? 'UPDATE_CONTACT' : 'ADD_CONTACT'
            const savedContact = await contactService.saveContact(contact)
            dispatch({ type: actionType, contact: savedContact })

        } catch (err) {
            console.log('Cannot save contact', err)
        }
    }
}

export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            await contactService.removeContact(contactId)
            dispatch({ type: 'REMOVE_CONTACT', contactId })
        } catch (err) {
            console.log(`Cannot Delete ${contactId}`)
        }
    }
}
