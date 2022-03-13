import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Styles
import { MainNavContainer, ULBar, Li, BtnMobile } from '../navbar/style'
import { LiGames } from '../../components/LFG/style'

export const NavBarLogout = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const mobileNav = () => {
    setMobileMenu(!mobileMenu)
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)
  }, [])

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
          <Link to="/login">
            <Li>Entrar</Li>
          </Link>
          <Link to="/signup">
            <Li>Registrar</Li>
          </Link>
        </ULBar>
      )}
    </MainNavContainer>
  )
}
