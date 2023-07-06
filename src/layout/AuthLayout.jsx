import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AuthLayout = () => {
  return (
    <div className="bg-[#EDF1F7]">
      <Navbar visibility="hidden" />
      <div className='flex justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout