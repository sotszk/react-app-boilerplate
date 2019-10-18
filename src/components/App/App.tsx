import React from 'react'
import logo from '../../assets/images/logo.svg'
import styles from './App.module.css'

import { Home, About, Dashboard } from 'views'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className={styles.module}>
      <Router>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
