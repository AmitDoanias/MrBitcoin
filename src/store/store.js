import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { contactReducer } from './reducers/contactReducer'

const rootReducer = combineReducers({
    contactModule: contactReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))