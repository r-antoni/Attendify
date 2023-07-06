import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AuthLayout = () => {
  return (
    <div className="bg-[#EDF1F7]">
      <Navbar visibility="hidden" />
      <Outlet />
    </div>
  )
}

export default AuthLayout