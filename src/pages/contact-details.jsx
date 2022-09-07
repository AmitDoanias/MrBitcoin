import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { contactService } from "../services/contactService"


export const ContactDetails = () => {

    const { id } = useParams()
    const [contact, setContact] = useState()

    useEffect(() => {
        loadContact()
    }, [])

    const loadContact = async () => {
        // const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        const contact = await contactService.getContactById(id)
        console.log('contact from details', contact)
        setContact(contact)
    }

    if (!contact) return <div>Loading..</div>
    return <div className="contact-details">

        <div className="card">
            <div className="display-picture">
                <img src={contact.imgUrl} alt="contact-img" />
            </div>
            <div className="banner">
                <button className="btn-back">Back</button>
            </div>
            <div className="content">
                <h1>{contact.name}</h1>
                <h4>{contact.email}</h4>

                <button className="btn-edit">Edit {contact.name}</button>
            </div>
        </div>



    </div>
}