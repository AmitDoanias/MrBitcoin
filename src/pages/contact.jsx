import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ContactList } from "../cmps/contact-list"
import { ContactFilter } from "../cmps/contact-filter"
import { loadContacts, setFilterBy, removeContact } from "../store/actions/contactActions"
import { ContactEdit } from "./contact-edit"
import { useState } from "react"


export const Contact = () => {
    const dispatch = useDispatch()
    const { contacts } = useSelector((storeState) => storeState.contactModule)
    const { filterBy } = useSelector((storeState) => storeState.contactModule)
    const [addContact, setAddContact] = useState(false)

    useEffect(() => {
        dispatch(loadContacts())
    }, [filterBy])

    const handleChange = async ({ target }) => {
        dispatch(setFilterBy(target.value))
    }


    return <div className="contact flex direction-column">
        <div className="contact-container flex gap25">
            <ContactFilter handleChange={handleChange} />
            <ContactList contacts={contacts} />
        </div>

        <div className="action-btn">
            <h3>Feel free to add someone new to your contacts!</h3>
            {/* <Link to='/contact/edit'><button className="add-btn">Add Contact</button></Link> */}
            <button onClick={() => setAddContact(!addContact)} className="add-btn">Add Contact</button>
        </div>
        {addContact && <ContactEdit />}

    </div>
}