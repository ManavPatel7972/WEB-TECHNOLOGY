import React from 'react'

import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { ChapterDetailsNavbar } from '../components/ChapterDetailsNavbar'

export const ChapterDetailsLayOut = () => {
  return (
    <>
    <ChapterDetailsNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
