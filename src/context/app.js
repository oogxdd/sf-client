import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState(null)

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)

  const [showFAQ, setShowFAQ] = useState(false)

  const [showDonateModal, setShowDonateModal] = useState(false)

  return (
    <AppContext.Provider
      value={{
        selectedTrack,
        setSelectedTrack,

        showUploadModal,
        showLoginModal,
        showRegisterModal,
        showFAQ,
        showDonateModal,

        setShowUploadModal,
        setShowLoginModal,
        setShowRegisterModal,
        setShowFAQ,
        setShowDonateModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
