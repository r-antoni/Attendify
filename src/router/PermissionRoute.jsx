import Cookies from 'js-cookie'
import React from 'react'

export const PermissionRoute = ({roleRequired}) => {
  const roleAssigned = Cookies.get("role")
  return (
    <div></div>
  )
}
