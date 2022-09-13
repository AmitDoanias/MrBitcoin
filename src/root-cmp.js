import { Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'
import { Contact } from './pages/contact'
import { ContactDetails } from './pages/contact-details'
import { ContactEdit } from './pages/contact-edit'
import { Statitics } from './pages/statitics'
import { UserMsg } from './cmps/user-msg'


export function App() {
  return <div className="app main-layout">
    <AppHeader />
    <main>
      <Switch>
        <Route path='/contact/edit/:id?' component={ContactEdit} />
        <Route path='/contact/:id' component={ContactDetails} />
        <Route path='/statitics' component={Statitics} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={HomePage} />
      </Switch>
      <UserMsg />
    </main>
  </div>
}


