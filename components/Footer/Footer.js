import Link from 'next/link'
import FacebookIcon from '../Icons/social/FacebookIcon'
import InstagramIcon from '../Icons/social/InstagramIcon'
import TwitterIcon from '../Icons/social/TwitterIcon'


const Footer = () => {
  return (
    <>
      <footer className="bg-blue-500 py-8 ">
        <div className="container mx-auto grid grid-cols-3">
          <div className="footer__logo--img sm:w-1/1 text-white h2">Nevook</div>
          <div className="footer__links sm:w-1/1 flex flex-wrap items-center justify-center">
            <Link href="/registro">
              <a className="btn-secondary w-full block text-center" >Quiero registrarme</a>
            </Link>
            <ul className="flex intems-center justify-center mt-5">
              <li className="mx-2 text-xs text-white hover:text-orange-500">  <Link href={'/legal/cookies'} > Políticas de cookes </Link>  </li>
              <li className="mx-2 text-xs text-white hover:text-orange-500">  <Link href={'/legal/privacidad'} > Políticas de privacidad </Link>  </li>
              <li className="mx-2 text-xs text-white hover:text-orange-500">  <Link href={'/legal/terminos'} > Términos y condiciones </Link>  </li>
              <li className="mx-2 text-xs text-white hover:text-orange-500">  <Link href={'/contacto'} > Contacto </Link>  </li>
            </ul>
          </div>
          <div className="footer__rrss sm:w-1/1">
            <ul className="flex intems-center justify-end">
              <li className="mx-2 text-white text-3xl">
                <a href='https://www.facebook.com/Nevook-108529347222668' rel="noopener noreferrer" target='_blank' >
                  <FacebookIcon width={35} fill='#fff' />
                </a>
              </li>
              <li className="mx-2 text-white text-3xl">
                <a href='https://www.instagram.com/nevookapp/' rel="noopener noreferrer" target='_blank' >
                  <InstagramIcon width={35} fill='#fff' />
                </a>
              </li>
              <li className="mx-2 text-white text-3xl">
                <a href='https://twitter.com/nevook' rel="noopener noreferrer" target='_blank' >
                  <TwitterIcon width={35} fill='#fff' />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__copy container mx-auto text-gray-300 text-xs flex justify-center mt-5">
          Nevook 📚 &copy; - Todos los derechos reservados
        </div>


      </footer>
    </>
  )
}

export default Footer
