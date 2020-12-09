import Link from "next/link"


const sectionStyle = {
  backgroundImage:
    'linear-gradient(90deg, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.1) 100%)',
}

const ProposalBanner = () => {
  return (
    <>
      <div
        className="bg-gray-400 bg-center bg-cover p-12"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.1) 100%), url('/images/bg-banner-noencontrado.jpg')" }}
      >
        <div className="container flex flex-col justify-center items-center mx-auto p-12 h-screen-5">
          <h2 className="text-4xl font-bold text-orange-400 mb-5">
            😢 ¿No encuentras un libro?
			</h2>
          <p className="text-2xl text-center w-2/3 text-gray-100">Puedes ayudar a la comunidad dando click al siguiente botón y rellenando un sencillo formulario para decirnos que libro falta</p>

          <Link href='/sugerir' >
            <a className="btn-secondary  mt-5 uppercase">Sugerir libro</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProposalBanner
