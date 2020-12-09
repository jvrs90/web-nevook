
import PublicLayout from "../Layouts/PublicLayout"
import Signin from "../components/Signin/Signin"
import Heading from '../components/UI/Heading/Heading'
import Head from '../components/generic/Head'

const login = () => {
  return (
    <>
      <Head
        title='Iniciar sesión | Nevook'
        description='Inicia sesión en Nevook. La red social creada para los que disfrutan de la lectura'
        url={'http//localhost:3000/login'}
      />
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
