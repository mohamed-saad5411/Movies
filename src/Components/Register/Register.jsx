import React, { useEffect, useState } from 'react'
import styles from './Register.module.css'
import axios from 'axios'
import { BrowserRouter, Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

export default function Register() {
  
  const [isloading, setisloading] = useState(false)

  let navigate = useNavigate()

  async function handleRegister(values) {
    setisloading(true)
    let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values)
    if (data.message === 'success') {
      navigate('/signin')
      setisloading(false)
    }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    onSubmit: handleRegister
  })

  return (
    <>
      <section className='container bg-secondary p-5 w-50 my-5 rounded-3'>
        <p className='h3 text-center mb-4'>Register Now</p>
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-2">
            <label for="name" class="mb-1 form-label">User Name :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" class="form-control" id="name" value={formik.values.name} name='name' placeholder="Enter Your Name ...." />
          </div>

          <div class="mb-2">
            <label for="email" class="mb-1 form-label">User Email :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" class="form-control" id="email" value={formik.values.email} name='email' placeholder="name@example.com" />
          </div>

          <div class="mb-2">
            <label for="password" class="mb-1 form-label">User Password :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" class="form-control" id="password" value={formik.values.password} name='password' />
          </div>

          <div class="mb-2">
            <label for="rePassword" class="mb-1 form-label">Repassword :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" class="form-control" id="rePassword" value={formik.values.rePassword} name='rePassword' />
          </div>

          <div class="mb-2">
            <label for="phone" class="mb-1 form-label">Phone :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" class="form-control" id="phone" value={formik.values.phone} name='phone' />
          </div>

          {isloading == true ? <button className=' btn btn-success mt-2'><i class="fa-solid fa-spinner fa-spin"></i></button> : <button disabled={!(formik.dirty && formik.isValid)} type='submit' className='btn btn-success mt-2'>Register</button>}
        </form>

      </section>
    </>
  )

}
