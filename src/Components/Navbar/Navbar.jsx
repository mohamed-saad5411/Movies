import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import axios from 'axios'
import { BrowserRouter, Link } from 'react-router-dom'
import logo from '../../Assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'


export default function Navbar({ userToken , logOut }) {
  return (
    <>
      <nav className="navbar py-0 navbar-expand-lg bg-body-tertiary">
        <div className="container p-2">
          <Link className="navbar-brand logo" to="/"><img src={logo} className='w-100' alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {userToken !== null ? <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="tv_shows">Tv Shows</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="people">People</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="details">Details</Link>
              </li>

            </ul> : null}

            {userToken == null ? <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="btn btn-success nav-link px-3" aria-current="page" to="signin">Signin <i class="fa-solid fa-right-to-bracket"></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-primary px-3" aria-current="page" to="register">Register <i class="fa-solid fa-id-card"></i></Link>
              </li>
            </ul> : <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span onClick={logOut} className="btn btn-outline-danger nav-link " aria-current="page">Logout <i><i class="fa-solid fa-right-from-bracket"></i></i></span>
              </li></ul>
            }

          </div>
        </div>
      </nav>
    </>
  )

}
