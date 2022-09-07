import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/scss/main.scss'
import { App } from './root-cmp'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

)
