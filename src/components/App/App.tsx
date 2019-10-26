import React from 'react'
import logo from '../../assets/images/logo.svg'
import styles from './App.module.scss'

import { Home, About, Dashboard } from 'views'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App: React.FC = () => {
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ]

  return (
    <div className={styles.module}>
      <Router>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>

        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {routes.map(({ name, path }) => (
              <li className={styles['nav__list-item']} key={name}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
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
