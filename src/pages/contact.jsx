import { useEffect, useState } from "react"
import { ContactList } from "../cmps/contact-list"
import { ContactFilter } from "../cmps/contact-filter"
import { loadContacts, setFilterBy } from "../store/actions/contactActions"
import { useDispatch, useSelector } from "react-redux"





export const Contact = () => {

    const dispatch = useDispatch()
    const { contacts } = useSelector((storeState) => storeState.contactModule)
    const { filterBy } = useSelector((storeState) => storeState.contactModule)

    useEffect(() => {
        dispatch(loadContacts())
    }, [filterBy])

    const handleChange = async ({ target }) => {
        dispatch(setFilterBy(target.value))
    }




    return <div className="contact flex">
        <ContactFilter handleChange={handleChange} />
        <ContactList contacts={contacts} />
    </div>
}