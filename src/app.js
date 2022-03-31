import { useContext, useState, useEffect } from 'react'
import { AppContext, AuthContext } from 'context'

import Tracks from 'components/tracks'
import FAQModal from 'components/faq/faq-modal'
import AuthModal from 'components/auth-modal'
import UploadModal from 'components/upload-modal'
import DonateModal from 'components/donate-modal'

export default () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Tracks />
      </div>
      <UploadButton />
      <UploadModal />
      <AuthModal />
      <FAQ />
      <FAQModal />
      <DonateModal />
    </>
  )
}

const UploadButton = () => {
  // const isLogged = true
  const { isLogged } = useContext(AppContext)
  const { setShowRegisterForm, setShowUploadModal } = useContext(AppContext)

  return (
    <div
      className="fixed bottom-8 right-8 px-6 py-3 rounded-full bg-gray-50 shadow text-sm font-regular text-gray-600 cursor-pointer hover:shadow-md transition-all"
      onClick={() => {
        if (isLogged) {
          setShowUploadModal(true)
        } else {
          setShowRegisterForm(true)
        }
      }}
    >
      Upload track
    </div>
  )
}
const FAQ = () => {
  const { setShowFAQ } = useContext(AppContext)
  return (
    <div
      className="flex justify-center items-center fixed bottom-8 left-8 px-3 py-3 rounded-full bg-gray-50 shadow text-sm font-regular text-gray-600 cursor-pointer hover:shadow-md transition-all"
      style={{
        width: 44,
        height: 44,
      }}
      onClick={() => setShowFAQ(true)}
    >
      ?
    </div>
  )
}
