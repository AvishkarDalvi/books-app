import React, { Fragment } from 'react'
import classes from './Header.module.css'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className={classes.nav}>
          <h2>
            <Link to='/'>Bookie</Link>
          </h2>
          <ul>
            <li>
              <NavLink to='/login' activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeClassName='active'>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section></section>
    </Fragment>
  )
}

export default Header
