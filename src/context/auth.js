import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    window.localStorage.user ? JSON.parse(window.localStorage.user) : undefined,
  )
  const [isLogged, setLogged] = useState(!!user)
  console.log(isLogged)

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setLogged,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
