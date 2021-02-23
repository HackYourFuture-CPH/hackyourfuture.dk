import React, { useState } from 'react'
import SideDrawer from './navbar/side-drawer/side-drawer'
import HamburgerIcon from './navbar/hamburger-icon'
import Navbar from './navbar/navbar'
import styles from './header.scss'
import Logo from './logo/logo'

export default () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
  const closeDrawer = () => setIsSideDrawerOpen(false)
  return (
    <header>
      <style jsx>{styles}</style>
      {/*<Toolbar  />*/}
      <HamburgerIcon
        drawerClickHandler={() => setIsSideDrawerOpen(!isSideDrawerOpen)}
      />
      <Logo />
      <Navbar />
      <SideDrawer onGoBackClick={() => closeDrawer()} show={isSideDrawerOpen} />
      {isSideDrawerOpen && (
        <div className='backdrop' onClick={() => closeDrawer()} />
      )}
    </header>
  )
}
