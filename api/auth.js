import axios from 'axios'
import { setJwtCookie } from '../lib/utils/jwt.ts'
import Router from 'next/router'

const baseUrl = process.env.API_URL

export const login = async (data) => {
  await axios.post(`${baseUrl}/auth/signin`, data, {
    body: {
      email: data.email,
      password: data.password
    }
  })
    .then(res => {
      setJwtCookie(res.data.accessToken)
      Router.push('/')
      localStorage.setItem('utn', res.data.accessToken)
      // document.cookie = `accessToken=${res.data.accessToken};expires=${311040000}`
    })
    .catch(error => {
      console.log('>>> from axios', error.response)
      return error.response
    })
}

export const register = async (data) => {
  await axios.post(`${baseUrl}/auth/signup`, data, {
    body: {
      username: data.username,
      email: data.email,
      alias: data.alias,
      password: data.password,
    }
  })
    .then(res => {
      console.log(res)
      return res
    })
    .catch(error => {
      console.log(error)
      return error
    })
}