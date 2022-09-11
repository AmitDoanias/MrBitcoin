import { localStorageService } from "./storageService"
import { utilService } from "./utilService"


export const contactService = {
    query,
    getContactById,
    getEmptyContact,
    saveContact,
    removeContact,
    getNextContactId
}

const STORAGE_KEY = 'contactDB'

// function query(filterBy = null) {
//     let contacts = localStorageService.loadFromLStorage(API_KEY)
//     if (!contacts || !contacts.length) {
//         contacts = _createContacts()
//         localStorageService.saveToLStorage(API_KEY, contacts)
//     }
//     if (filterBy) {
//         const regEx = new RegExp(filterBy, 'i')
//         contacts = contacts.filter(contact => regEx.test(contact.name) || contact.phone.includes(+filterBy))
//     }
//     return Promise.resolve(contacts)
// }

async function query(filterBy = null) {
    let contacts = await localStorageService.query(STORAGE_KEY)

    let contactsToDisplay = contacts
    if (!contacts || !contacts.length) {
        contacts = _createContacts()
        localStorageService.saveToLStorage(STORAGE_KEY, contacts)
    }
    if (filterBy) {
        const regEx = new RegExp(filterBy, 'i')
        contactsToDisplay = contacts.filter(contact => regEx.test(contact.name) || contact.phone.includes(+filterBy))
    }
    return Promise.resolve(contactsToDisplay)
}

// async function getContactById(id) {
//     const contacts = await query()
//     return new Promise((resolve, reject) => {
//         console.log('contacts', contacts)
//         const contact = contacts.find(contact => contact._id === id)
//         contact ? resolve(contact) : reject(`Contact id ${id} not found! `)
//     })
// }

async function getContactById(contactId) {
    return localStorageService.get(STORAGE_KEY, contactId)
}

async function saveContact(contactToSave) {
    return localStorageService.put(STORAGE_KEY, contactToSave)
}

async function removeContact(contactId) {
    return localStorageService.remove(STORAGE_KEY, contactId)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

async function getNextContactId(id) {
    const contacts = await query()
    const contactIdx = contacts.findIndex(contact => contact._id === id)
    const nextIdx = contactIdx + 1 > contacts.length ? 0 : contactIdx + 1
    return contacts[nextIdx]._id
}

function _createContacts() {
    return [
        {
            _id: utilService.makeId(),
            name: "Ochoa Hyde",
            email: "ochoahyde@gmail.com",
            phone: "+9725555555",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Eliyahooo",
            email: "Eliyahooo@gmail.com",
            phone: "+9724444444",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Hallie Mclean",
            email: "halliemclean@renovize.com",
            phone: "+1 (948) 464-2888",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Parsons Norris",
            email: "parsonsnorris@renovize.com",
            phone: "+1 (958) 502-3495",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Dominique Soto",
            email: "Dominiquesoto@renovize.com",
            phone: "+1 (807) 551-3258",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Floyd Rutledge",
            email: "floydrutledge@renovize.com",
            phone: "+1 (807) 597-3629",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Rachel Lowe",
            email: "Rachellowe@renovize.com",
            phone: "+1 (959) 525-2529",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Grace James",
            email: "gracejames@renovize.com",
            phone: "+1 (911) 475-2312",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Tanner Gates",
            email: "tannergates@renovize.com",
            phone: "+1 (978) 591-2291",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        },
        {
            _id: utilService.makeId(),
            name: "Lilly Conner",
            email: "Lillyconner@renovize.com",
            phone: "+1 (842) 587-3812",
            imgUrl: `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
        }
    ]
}