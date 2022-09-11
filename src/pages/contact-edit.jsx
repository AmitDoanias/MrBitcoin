import { contactService } from "../services/contactService"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { saveContact } from "../store/actions/contactActions"


export const ContactEdit = () => {

    const [contact, setContact] = useState()
    const dispatch = useDispatch()
    const history = useHistory()

    const { id } = useParams()


    useEffect(() => {
        loadContact()
    }, [])

    const loadContact = async () => {
        const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
        setContact(contact)
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setContact((prevState) => ({ ...prevState, [field]: value }))
    }

    const onSaveContact = async (ev) => {
        ev.preventDefault()
        await dispatch(saveContact(contact))
        onGoBack()
    }

    const onGoBack = () => {
        history.push('/contact')
    }

    // console.log('contact', contact)
    if (!contact) return <div>Loading...</div>
    return <div className="contact-edit">

        {id && <React.Fragment>
            <h3>{contact.name}</h3>
            <button className="btn-back" onClick={onGoBack}>Back</button>
        </React.Fragment>}


        <div className="contact-info">
            {/* {id && <img src={contact.imgUrl} alt="contact-img" />} */}

            <form onSubmit={onSaveContact}>
                <label htmlFor="name">
                    <input onChange={handleChange} type="text" value={contact?.name} name="name" id="name" placeholder="Adi Atar" />
                </label>
                <label htmlFor="email">
                    <input onChange={handleChange} type="email" value={contact?.email} name="email" id="email" placeholder="Adiatar@gmail.com" />
                </label>
                <label htmlFor="phone">
                    <input onChange={handleChange} type="tel" value={contact?.phone} name="phone" id="phone" placeholder="+972542381925" />
                </label>
                <button className="btn-save">Save</button>
            </form>
        </div>
    </div>
}