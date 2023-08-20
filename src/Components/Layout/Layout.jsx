import React, { useEffect, useState } from 'react'
import styles from './Layout.module.css'
import axios from 'axios'
import { BrowserRouter, Link, Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({userToken , setuserToken}) {
  
  let navigate = useNavigate()

  function logOut() {
    localStorage.removeItem("userToken")
    setuserToken(null)
    navigate('/signin')
  }
  return (
    <>
      <Navbar logOut={logOut} userToken={userToken}/>
      <Outlet></Outlet>
      <Footer />
    </>
  )
}
