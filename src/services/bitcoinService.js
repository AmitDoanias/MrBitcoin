import axios from 'axios'
import { localStorageService } from './storageService'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getAvgBlockSize,
    getTradeVolume,
}


async function getRate(value) {
    const rateFromStorage = localStorageService.loadFromLStorage('rate')
    if (rateFromStorage) return rateFromStorage
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${value}`)
    localStorageService.saveToLStorage('rate', res.data)
    return res.data
}

async function getMarketPrice() {
    return await _getCharts('market-price')
}

async function getAvgBlockSize() {
    return await _getCharts('avg-block-size')
}

async function getTradeVolume() {
    return await _getCharts('trade-volume')
}

async function _getCharts(chart) {
    const chartFromStroage = localStorageService.loadFromLStorage(chart)
    if (chartFromStroage) return chartFromStroage
    const res = await axios.get(`https://api.blockchain.info/charts/${chart}?timespan=5months&format=json&cors=true`)
    localStorageService.saveToLStorage(chart, res.data)
    return res.data
}



