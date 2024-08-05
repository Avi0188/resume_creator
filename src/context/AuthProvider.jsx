import React, { createContext, useState } from 'react'


export const AuthContext= createContext()
const AuthProvider = ({children}) => {
  const [auth, setAuth]=useState({
    token:null,
    userId:null,
    username:null
  })
  const login=(data)=>{
setAuth({
  token:data.token,
userId:data.userId,
username:data.username
})
  }

  const logout = () => {
    setAuth({
      token: null,
      userId: null,
      username: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout,setAuth }}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider
