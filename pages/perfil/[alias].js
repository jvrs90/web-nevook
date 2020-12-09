import Heading from "../../components/UI/Heading/Heading"
import AuthContext from '../../lib/context/AuthContext'
import Head from "../../components/generic/Head"
import PrivateLayout from '../../Layouts/PrivateLayout'
import { useContext } from "react"
import UserProfile from "../../components/UserProfile.js/UserProfile"

//TODO: HACER PÁGINA PRIVADA
const AliasUserProfile = () => {
  const { auth, setAuth } = useContext(AuthContext)

  return (
    <>
      <PrivateLayout>
        <Heading as='h1'>{auth.username}</Heading>
        <UserProfile />
      </PrivateLayout>
    </>
  )
}

export default AliasUserProfile
