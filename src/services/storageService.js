export const localStorageService = {
    saveToLStorage,
    loadFromLStorage
}

export const sessionStorageService = {
    saveToSessionStorage,
    loadFromSessiontorage
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