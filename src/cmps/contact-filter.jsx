
import { useSelector } from "react-redux"

export const ContactFilter = ({ handleChange }) => {

    const { filterBy } = useSelector((storeState) => storeState.contactModule)


    return <div className="contact-filter flex-basis50">
        <div>
            <h1><span>Filter your friends </span>by <br></br> their names or phone numbers</h1>
        </div>

        <input onChange={handleChange} className="search-input" type="text" placeholder="Search by name and phone number" value={filterBy} />

    </div>
}