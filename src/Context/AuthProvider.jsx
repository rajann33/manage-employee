import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'
 
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
 const [userData, setuserData] = useState([])
 
useEffect(() => {
   const {employees}=getLocalStorage()
 setuserData(employees)
}, [])

  return (
    <AuthContext.Provider value={[userData , setuserData]}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
