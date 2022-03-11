import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Styles
import { MainNavContainer, ULBar, Li, BtnMobile } from './style'

export const NavBar = () => {
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
            <Li>Example 1</Li>
          </Link>
          <Li>Example 2</Li>
          <Li>Example 3</Li>
        </ULBar>
      )}
    </MainNavContainer>
  )
}
