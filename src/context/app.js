import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState(null)

  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(false)

  const [showFAQ, setShowFAQ] = useState(false)

  const [showDonateModal, setShowDonateModal] = useState(false)

  return (
    <AppContext.Provider
      value={{
        selectedTrack,
        setSelectedTrack,

        showUploadModal,
        showRegisterForm,
        showFAQ,
        showDonateModal,

        setShowUploadModal,
        setShowRegisterForm,
        setShowFAQ,
        setShowDonateModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
