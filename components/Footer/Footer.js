import Link from 'next/link'


const Footer = () => {
  return (
    <>
      <footer className="Footer container-full bg-blue-500">
        <div className="Footer__container flex justify-between items-center">
          <h3 className="h3 text-white p-5" >Nevook</h3>
          <div className="Footer__legal-links">
            <ul className='flex text-white'>
              <li className="mx-1"><Link href='/legal/privacidad'>Políticas de privacidad</Link></li>
              <li className="mx-1"><Link href='/legal/cookies'>Políticas de cookies</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
