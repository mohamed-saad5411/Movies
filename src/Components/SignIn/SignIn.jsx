import React, { useEffect, useState } from 'react'
import styles from './SignIn.module.css'
import axios from 'axios'
import { BrowserRouter, Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

export default function SignIn({decodingToken}) {

  const [isloading, setisloading] = useState(false)

  let navigate = useNavigate()

  async function handleLogin(values) {
    setisloading(true)
    let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values)
    localStorage.setItem("userToken" , data.token)
    if (data.message === 'success') {
      decodingToken()
      navigate('/movies')
      setisloading(false)
    }
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin
  })

  return (
    <>
      <section className='container bg-secondary p-5 w-50 my-5 rounded-3'>
        <p className='h3 text-center mb-4'>Login Now</p>
        <form onSubmit={formik.handleSubmit}>

          <div class="mb-2">
            <label for="email" class="mb-1 form-label">User Email :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" class="form-control" id="email" value={formik.values.email} name='email' placeholder="name@example.com" />
          </div>

          <div class="mb-2">
            <label for="password" class="mb-1 form-label">User Password :</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" class="form-control" id="password" value={formik.values.password} name='password' />
          </div>

          {isloading == true ? <button className=' btn btn-success mt-2'><i class="fa-solid fa-spinner fa-spin"></i></button> : <button disabled={!(formik.dirty && formik.isValid)} type='submit' className='btn btn-success mt-2'>Login</button>}
        </form>

      </section>
    </>
  )

}
