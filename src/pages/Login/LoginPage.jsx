import React from 'react'
import LoginForm from '../../components/LoginForm'
import LoginText from '../../components/LoginText'

const Login = () => {
  return (
    <div className='flex justify-between'>
      <LoginText />
      <LoginForm />
    </div>
  )
}

export default Login