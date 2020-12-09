import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import AuthContext from '../../lib/context/AuthContext'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className="Navbar bg-blue-500 text-white flex justify-between items-center py-2 px-5">
        <div className="Navbar__logo">
          <h1 className="h1 text-white" >Nevook</h1>
        </div>
        <div className={styles['Navbar__menu-container']}>
          <div className="Navbar__menu">
            <ul className="flex items-center">
              <li className="mr-10"><Link href='/'>Inicio</Link></li>
              <li><Link href="/login" >Iniciar sesión</Link></li>
              <li>
                <Link href="/registro" >
                  <a className='inline-block w-max btn-secondary'>Registro</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar
