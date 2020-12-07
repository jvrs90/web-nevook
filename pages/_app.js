import { useState } from 'react'
import AuthContext from '../lib/context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState({})
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp
