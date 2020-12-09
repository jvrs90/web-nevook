import Head from '../components/generic/Head'
import PublicLayout from "../Layouts/PublicLayout"
import Heading from '../components/UI/Heading/Heading'
import Signup from '../components/Signup/Signup'

const registro = () => {
  return (
    <>
      <Head
        title='Registro | Nevook'
        description='Regístrate ahora en Nevook y disfruta de mucho contenido creado especialmente para lectores'
        url={'http//localhost:3000/registro'}
      />
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
