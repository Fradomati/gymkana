import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { logoutFN } from '../../services/Auth_Service'

// Styles
import { MainNavContainer, ULBar, Li, BtnMobile } from './style'

// User Session
import { UserSessionContext } from '../../../lib/Authentication/withAuthentication'

export const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [userLoaded, setUserLoaded] = useContext(UserSessionContext)

  const mobileNav = () => {
    setMobileMenu(!mobileMenu)
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
  }, [])

  const logout = async () => {
    await logoutFN()
    setUserLoaded(false)
  }

  return (
    <MainNavContainer>
      {screenWidth <= 500 && !mobileMenu && (
        <BtnMobile onClick={mobileNav}>|||</BtnMobile>
      )}
      {screenWidth <= 500 && mobileMenu && (
        <BtnMobile onClick={mobileNav}>X</BtnMobile>
      )}
      {(mobileMenu || screenWidth > 500) && (
        <ULBar>
          <Link to="/">
            <Li>Inicio</Li>
          </Link>
          <Li>Example 2</Li>
          <Li onClick={logout}>Salir -></Li>
        </ULBar>
      )}
    </MainNavContainer>
  )
}
