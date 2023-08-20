import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import logoFooter from '../../Assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'


export default function Footer() {
  return (
    <>
    <div className='bg-dark py-5 mb-0 bottom-0 end-0 start-0 text-center'>
      <img src={logoFooter} className='logo-footer' alt="" />
      </div>    
    </>
  )
  
}
