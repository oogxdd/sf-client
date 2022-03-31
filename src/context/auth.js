import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
