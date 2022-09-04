import { Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'


export function App() {
  return <div className="app main-layout">
    <AppHeader />
    <main>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </main>
  </div>
}


