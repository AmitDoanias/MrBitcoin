import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory, useParams, Link } from "react-router-dom"
import { contactService } from "../services/contactService"
import { removeContact } from "../store/actions/contactActions"
import { ContactEdit } from "./contact-edit"




export const ContactDetails = () => {

    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const [contact, setContact] = useState()
    const [editContact, setEditContact] = useState(false)

    useEffect(() => {
        loadContact()
        return () => {
        }
    }, [id])

    const loadContact = async () => {
        const contact = await contactService.getContactById(id)
        setContact(contact)
    }

    const onGoBack = () => {
        history.push('/contact')
    }

    const onRemoveContact = (contactId) => {
        console.log('contactId', contactId)
        dispatch(removeContact(contactId))
        onGoBack()
    }

    const onNextContact = async () => {
        const nextContact = await contactService.getNextContactId(id)
        console.log('contact', nextContact)
        loadContact(nextContact)
    }

    if (!contact) return <div>Loading..</div>
    return <div className="contact-details">

        <div className="card">
            <div className="display-picture">
                <img src={contact.imgUrl} alt="contact-img" />
            </div>
            <div className="banner flex space-between align-center">
                <div>
                    <button onClick={onGoBack} className="btn-back">Back</button>
                    {/* <button onClick={onNextContact} className="btn-back" >Next</button> */}
                    {/* <Link to={`/contact/${contact._id}`} ></Link> */}
                </div>
                <div>
                    <button onClick={() => onRemoveContact(contact._id)} className="btn-delete">Delete Contact</button>
                    {/* <button onClick={() => setEditContact(!editContact)} className="btn-edit">Edit {contact.name}</button> */}
                </div>
            </div>
            <div className="content flex direction-column space-between">
                <h1>{contact.name}</h1>
                <h4>{contact.phone}</h4>
                <h4>{contact.email}</h4>

                <div className="btn-container">
                    <Link to={`/contact/edit/${contact._id}`}><button className="btn-edit">Edit {contact.name}</button></Link>
                </div>

            </div>


            {/* {editContact && <ContactEdit contactId={contact._id} />} */}
        </div>



    </div>
}