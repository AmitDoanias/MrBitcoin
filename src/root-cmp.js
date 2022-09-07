import { Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'
import { Contact } from './pages/contact'
import { ContactDetails } from './pages/contact-details'


export function App() {
  return <div className="app main-layout">
    <AppHeader />
    <main>
      <Switch>
        <Route path='/contact/:id' component={ContactDetails} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={HomePage} />
      </Switch>
    </main>
  </div>
}


