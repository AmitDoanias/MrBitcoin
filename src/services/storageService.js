import { utilService } from "./utilService"

export const localStorageService = {
    query,
    get,
    put,
    remove,
    // post,
    saveToLStorage,
    loadFromLStorage
}

export const sessionStorageService = {
    saveToSessionStorage,
    loadFromSessiontorage
}

function query(entityType, delay = 200) {
    var entites = JSON.parse(localStorage.getItem(entityType) || [])
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entites)
        }, delay)
    })
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entites => entites.find(entity => entity._id === entityId))
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entites => {
            if (updatedEntity._id) {
                const idx = entites.findIndex(entity => entity._id === updatedEntity._id)
                entites.splice(idx, 1, updatedEntity)
            } else {
                console.log('inside the else put Service')
                updatedEntity._id = utilService.makeId()
                updatedEntity.imgUrl = `https://xsgames.co/randomusers/assets/avatars/${Math.random() > 0.5 ? 'male' : 'female'}/${utilService.getRandomIntInclusive(1, 78)}.jpg`
                entites.push(updatedEntity)
            }
            saveToLStorage(entityType, entites)
            console.log('updatedEntity', updatedEntity)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entites => {
            const idx = entites.findIndex(entity => entity._id === entityId)
            entites.splice(idx, 1)
            saveToLStorage(entityType, entites)
        })
}

function saveToLStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromLStorage(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
}

function saveToSessionStorage(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
}

function loadFromSessiontorage(key) {
    const val = sessionStorage.getItem(val)
    return JSON.parse(val)
}