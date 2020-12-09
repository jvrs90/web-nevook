import { useState } from 'react'

const UserProfile = () => {
  const [textButton, setTextButton] = useState('Siguiendo');


  const handleChangeText = () => {
    if (textButton === 'Siguiendo') {
      setTextButton('Dejar de seguir');
    } else {
      setTextButton('Siguiendo');
    }
  }

  const isUser = false;
  const isFollowing = true;
  const isVerified = true;

  return (
    <>
      <div className="CUA  bg-gray-100">
        <div className="CUA__container container mx-auto grid grid-cols-2  py-24">
          <div className="CUA__profile border-r-2 mr-5 pr-5">
            <div className="CUA__profile-avatar">
              <figure>
                <img className="rounded-full" src='https://via.placeholder.com/150x150' alt='User avavar' />
              </figure>
              {
                isUser &&
                <p className="mt-5"><a href="#" className="text-blue-500 hover:text-blue-600 font-bold">Editar perfil</a></p>
              }
            </div>

            <div className="CUA__profile-username ml-5">
              <h2 className="text-blue-500 text-2xl font-bold flex">Jose Vte
							{
                  isVerified &&
                  <figure>
                    <img className="ml-1" width={15} src='https://via.placeholder.com/15x15' alt="verified" />
                  </figure>
                }

              </h2>
              <span className="text-gray-700 text-md font-bold">@josevte</span>
              <p>Desarrollador y diseñador web.</p>
              <p className="mt-5">
                <a className="text-blue-500 hover:text-blue-600 font-bold" href="https://josevte.com" rel="noopener noreferrer" target="_blank">https://josevte.com</a>
              </p>
              {
                !isUser ?
                  isFollowing ? <button type="button" className="mt-3" onMouseEnter={handleChangeText} onMouseLeave={handleChangeText} bgColor="blue" color="text-white"> <span>{textButton}</span></button>
                    :
                    <button className="bg-orange-500 hover:bg-orange-600 text-white uppercase font-bold p-2 rounded w-full mt-3">Seguir</button>
                  : null
              }
            </div>
          </div>
          <div className="CUA__profile-data">
            <div className="CUA__profile-score">
              <div className="CUA__profile--data text-gray-500 text-md">

                <div className="CUA__profile-stats">
                  <div className="CUA__profile--stats-lists">
                    <span className="text-blue-500 font-bold text-2xl mr-2">4</span>
									listas
									</div>
                  <div className="CUA__profile--stats-favs">
                    <span className="text-blue-500 font-bold text-2xl mr-2">264</span>
									libros favoritos
									</div>
                  <div className="CUA__profile--stats-reviews">
                    <span className="text-blue-500 font-bold text-2xl mr-2">35</span>
									reseñas
									</div>
                  <div className="CUA__profile--stats-goals">
                    <span className="text-blue-500 font-bold text-2xl mr-2">3</span>
									objetivos cumplidos
									</div>
                </div>

                <div className="CUA__profile-stats-social">
                  <div className="CUA__profile--stats-social">
                    <span className="text-blue-500 font-bold text-md mr-2">1.634</span>
									seguidores
									</div>
                  <div className="CUA__profile--stats-social">
                    <span className="text-blue-500 font-bold text-md mr-2">281</span>
									seguidos
									</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {
          isUser &&

          <div className="CUA__navbar-actions bg-white w-full shadow-lg py-2">
            <div className="CUA__navbar-actions--container container mx-auto py-2 flex justify-end">
              <ul className="flex">
                <li className="mr-3 text-blue-500">
                  <a className="hover:underline" href="#">

                    listas

                  </a>
                </li>
                <li className="mr-3 text-blue-500">
                  <a className="hover:underline" href="#">

                    favoritos

                  </a>
                </li>
                <li className="mr-3 text-blue-500">
                  <a className="hover:underline" href="#">

                    busqueda

                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
        <div className="CUA__lists-content bg-white py-6">
          <div className="CUA__lists-container container mx-auto">
            <div className="CUA__lists-container--title flex justify-between">
              <h2 className="text-3xl font-bold text-blue-500">Mis listas</h2>
              {/* <button className="rounded-full text-white bg-orange-500 p-3">+</button> */}
            </div>

            {/* <ListOnCard
              isPublic={true}
              listTitle='Otoño'
              className="shadow"
            >
              <BooksGrid grid={false} limit={10} page={1} />
            </ListOnCard>

            <ListOnCard
              isPublic={true}
              listTitle='Harry Potter'
            >
              <BooksGrid grid={false} limit={10} page={1} />
            </ListOnCard>

            <ListOnCard
              isPublic={false}
              listTitle='Para Alba with'
            >
              <BooksGrid grid={false} limit={10} page={1} />
            </ListOnCard>
            <ListOnCard
              isPublic={false}
              listTitle='Libros que me quiero leer antes de 2021'
            >
              <BooksGrid grid={false} limit={10} page={1} />
            </ListOnCard> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
