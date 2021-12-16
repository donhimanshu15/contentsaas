import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageAbout from './components/PageAbout'
import PageContacts from './components/PageContacts'
import PagePricing from './components/PagePricing'
import Profile from './components/Profile'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/about'>
          <PageAbout />
        </Route>
        <Route exact path='/contacts'>
          <PageContacts />
        </Route>
        <Route exact path='/pricing'>
          <PagePricing />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
