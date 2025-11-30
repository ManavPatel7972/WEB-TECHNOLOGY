import React from 'react'
import { VersesNavbar } from '../components/VersesNavbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const VersesLayout = () => {

  return (
    <>
    <VersesNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
