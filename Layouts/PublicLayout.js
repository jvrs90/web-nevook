import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const PublicLayout = ({ children, bgColor }) => {

  return (
    <>
      <Navbar />
      <div className={`Layout container-full ${bgColor} `}>
        <div className="container mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PublicLayout
