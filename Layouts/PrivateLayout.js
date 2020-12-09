import React from 'react'
import Footer from '../components/Footer/Footer'
import NavbarLogged from '../components/NavbarLogged/NavbarLogged'

const PublicLayout = ({ children, bgColor }) => {

  return (
    <>
      <NavbarLogged />
      <div className={`Layout container-full ${bgColor} `}>
        <div className="container mx-auto">
          <small className="text-sm font-bold text-gray-400">Rutal privada</small>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PublicLayout