import Head from 'next/head'
import PublicLayout from "../Layouts/PublicLayout"
import Signin from "../components/Signin/Signin"
import Heading from '../components/UI/Heading/Heading'

const login = () => {
  return (
    <>
      <Head>
        <title>Iniciar sesión | Nevook</title>
      </Head>
      <PublicLayout className="bg-orange-500" bgColor="bg-orange-500">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="shadow-lg rounded w-1/2 p-10 bg-white">
            <Heading as="h1" className="text-center h1"> Iniciar sesión en Nevook</Heading>
            <Signin />
          </div>
        </div>

      </PublicLayout>
    </>
  )
}

export default login
