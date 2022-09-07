import { Link } from "react-router-dom"

export const ContactPreview = ({ contact }) => {
    return <div className="contact-preview flex align-center">

        <Link to={`/contact/${contact._id}`}><div className="contact-img">
            <img src={contact.imgUrl} alt="contact-img" />
        </div></Link>

        <div className="contact-details">
            <h4>{contact.name}</h4>
            <p>{contact.email}</p>
        </div>
    </div>
}