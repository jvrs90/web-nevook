import Head from 'next/head'
import PublicLayout from "../Layouts/PublicLayout"
import Heading from '../components/UI/Heading/Heading'
import Signup from '../components/Signup/Signup'

const registro = () => {
  return (
    <>
      <Head>
        <title>Registrarse | Nevook</title>
      </Head>
      <PublicLayout className="bg-orange-500" bgColor="bg-orange-500">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="shadow-lg rounded w-1/2 p-10 bg-white">
            <Heading as="h1" className="text-center h1"> Registrarse en Nevook</Heading>
            <Signup />
          </div>
        </div>
      </PublicLayout>
    </>
  )
}

export default registro
