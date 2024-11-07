// Beacuse we want header and footer to be the samne at all pages

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />  {/* Whenever we give such Outlet, then we can change that part only, so here at all places header and footer are gonna remain same, and things at the place of Outlet could change */}
    <Footer />
    </>
  )
}

export default Layout
