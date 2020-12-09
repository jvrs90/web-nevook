import Link from 'next/link'
import { useModal } from '../../lib/hooks/useModal'
import Modal from '../Modal/Modal'
import Register from '../Signup/Signup'

const Jumbotron = () => {

  return (
    <>
      <header>
        <div className="w-full bg-cover bg-center" style={{ height: '32rem', backgroundImage: "url('/images/jbt-container.jpg')" }}>
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="">
              <h2 className='text-5xl font-bold text-gray-100 mb-5'> Únete a nuestra comunidad </h2>
              <h2 className="h2 text-white"> Próximamente: </h2>
              <ul className='text-white text-2xl'>
                <li> 📚 Crea tu biblioteca y ordénala con estantes personalizados.</li>
                <li> 💻 Accede a nuestro chat.</li>
                <li> ✅ Y participa en retos mensuales</li>
              </ul>

              <Link href="/registro" >
                <a className='block w-max btn-secondary mt-5'>Registrarme a Nevook</a>
              </Link>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Jumbotron
