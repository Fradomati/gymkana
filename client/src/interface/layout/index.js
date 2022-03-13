import React, { useContext } from 'react'

// Styles
import {
  GlobalContainer,
  MainContentContainer,
  ContentContainer,
} from './style'

// NavBar
import { NavBar } from '../navbar/index'
import { NavBarLogout } from '../navbar-logout/index'

// Footer
import { Footer } from '../footer/index'

// Context - ¿User Logged?
import { UserSessionContext } from '../../../lib/Authentication/withAuthentication'

export const Layout = ({ children }) => {
  const [userLoaded, setUserLoaded] = useContext(UserSessionContext)

  // INTRODUCIR AQUÍ LA DIFERENCIACIÓN ENTRE USUARIO LOGGED O LOGOUT . DOS PANTALLAS, UNA CON EL MENÚ A LA DERECHA O SIN MENÚ

  return (
    <GlobalContainer>
      {userLoaded && <NavBar />}
      {!userLoaded && <NavBarLogout />}
      <MainContentContainer>
        <ContentContainer>{children}</ContentContainer>
      </MainContentContainer>
      <Footer />
    </GlobalContainer>
  )
}
