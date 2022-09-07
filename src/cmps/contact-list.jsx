import { ContactPreview } from "./contact-preview"


export const ContactList = ({ contacts }) => {

    if (!contacts) return <div>Loading..</div>
    return <div className="contact-list flex direction-column flex-basis50">
        {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)}
    </div>
}