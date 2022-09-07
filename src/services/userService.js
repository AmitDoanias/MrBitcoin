import { sessionStorageService } from "./storageService"

export const userService = {
    getUser
}

const gUsers = []
const STORAGE_KEY = 'usersDB'

function getUser() {
    // const users = sessionStorageService.loadFromSessiontorage('STORAGE_KEY')
    // if (users) {
    //     return users[0]
    // } else return null
    return {
        name: "Amit Doanias",
        coins: 100,
        movies: []
    }
}