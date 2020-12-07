import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { useModal } from '../../lib/hooks/useModal'
import AuthContext from '../../lib/context/AuthContext'

import styles from './Navbar.module.css'

const Navbar = () => {
  const [isModalOpenedRegister, setIsModalOpenedRegister, toggleModalRegister] = useModal();
  const [isModalOpenedLogin, setIsModalOpenedLogin, toggleModalLogin] = useModal();
  const [isAuth, setIsAuth] = useState(false)
  const { auth } = useContext(AuthContext)

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

              {auth === {}
                ?
                <>
                  <div>
                    <p>{auth}</p>
                  </div>
                </>
                :
                <>
                  <li><Link href="/login" >Iniciar sesión</Link></li>
                  <li>
                    <Link href="/registro" >
                      <a className='block w-max btn-secondary'>Registro</a>
                    </Link>
                  </li>
                </>
              }

            </ul>
          </div>
        </div>
      </nav>

      {/* TODO: Borrar */}
      {/* <Modal
        isOpen={isModalOpenedLogin}
        title='Inicar sesión'
        handleClose={() => setIsModalOpenedLogin(!isModalOpenedLogin)}
      >
        <Signin />
      </Modal>

      <Modal
        isOpen={isModalOpenedRegister}
        title='Registro'
        handleClose={() => setIsModalOpenedRegister(!isModalOpenedRegister)}
      >
        <Signup />
      </Modal> */}

    </>
  )
}



export default Navbar
