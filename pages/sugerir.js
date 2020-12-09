import Link from 'next/link'
import EmailIcon from "../components/Icons/generic/EmailIcon";
import LockIcon from "../components/Icons/generic/LockIcon";
import ArrowRight from "../components/Icons/generic/ArrowRight";
import UserPlus from '../components/Icons/generic/UserPlus';
import Alert from '../components/UI/Alert/Alert'
import PublicLayout from '../Layouts/PublicLayout';
import Heading from '../components/UI/Heading/Heading';

const ProponerLibro = () => {
  return (
    <>
      <PublicLayout bgColor="bg-gray-300">
        <section>
          <div className="container w-1/2  mx-auto Sugerir__container py-12">
            <Heading as="h1" className="h1 mb-5 text-center" >¿No es has encontrado un libro?</Heading>
            <p className="text-center mb-10 text-gray-700">Vemos que no has encontrado un libro. Puedes ayudarnos rellenando el formulario de abajo</p>
            <div className="flex flex-col bg-white p-10 rounded shadow-xl">
              <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
                <span>Google</span>
              </button>
              <div className="relative mt-10 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">o</span>
                </div>
              </div>
              <div className="mt-10">

                <form>

                  <div className="flex flex-col mb-6">
                    <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Título</label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <EmailIcon />
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                        placeholder="Título"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Autor:</label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span>
                          <LockIcon />
                        </span>
                      </div>

                      <input
                        type="password"
                        name="password"
                        className={`text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400`}
                        placeholder="Autor"

                      />
                    </div>
                  </div>


                  <div className="flex flex-col mb-6">
                    <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Género:</label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span>
                          <LockIcon />
                        </span>
                      </div>

                      <input
                        type="password"
                        name="password"
                        className={`text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400`}
                        placeholder="Género"

                      />
                    </div>
                  </div>


                  <div className="flex flex-col mb-6">
                    <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">URL de la portada:</label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <span>
                          <LockIcon />
                        </span>
                      </div>

                      <input
                        type="password"
                        name="password"
                        className={`text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400`}
                        placeholder="URL de la portada"
                      />
                    </div>
                  </div>

                  <div className="flex w-full">
                    <button
                      type="submit"
                      className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 uppercase">Enviar sugerencia</span>
                      <span>
                        <ArrowRight />
                      </span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>


      </PublicLayout>

    </>
  )
}

export default ProponerLibro
