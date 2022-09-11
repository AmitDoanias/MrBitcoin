
import { useSelector } from "react-redux"

export const ContactFilter = ({ handleChange }) => {

    const { filterBy } = useSelector((storeState) => storeState.contactModule)


    return <div className="contact-filter flex-basis50">

        <div className="title">
            <h1><span>Filter your friends </span>by <br></br> their names or phone numbers</h1>
        </div>
        <div className="line"></div>
        <div className="input-container">
            <p>Don't stay with any open checks...</p>
            <input onChange={handleChange} className="search-input" type="text" placeholder="Search by name and phone number" value={filterBy} id="search" />
            <label htmlFor="search" className="input-label"></label>
        </div>

    </div>
}