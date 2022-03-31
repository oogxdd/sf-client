import { useContext, useState, useEffect } from 'react'
import { AppContext, AuthContext } from 'context'

import Tracks from 'components/tracks'
import FAQModal from 'components/faq/faq-modal'
import AuthModal from 'components/auth-modal'
import LoginModal from 'components/auth/sign-in'
import UploadModal from 'components/upload-modal'
import DonateModal from 'components/donate-modal'

export default () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <div className="flex flex-col items-center">
        <Tracks />
      </div>
      <UploadButton />
      <UploadModal />
      <AuthModal />
      <LoginModal />
      <FAQ />
      <FAQModal />
      <DonateModal />
      {user && (
        <span className="fixed bottom-8 right-44 px-6 py-3 text-sm over:underline text-gray-800 hover:bg-gray-50 cursor-default">
          {user.nickname}
        </span>
      )}
    </>
  )
}

const UploadButton = () => {
  const { setShowRegisterModal, setShowUploadModal } = useContext(AppContext)
  const { isLogged } = useContext(AuthContext)

  return (
    <div
      className="fixed bottom-8 right-8 px-6 py-3 rounded-full bg-gray-50 shadow text-sm font-regular text-gray-600 cursor-pointer hover:shadow-md transition-all"
      onClick={() => {
        // if (true) {
        if (isLogged) {
          setShowUploadModal(true)
        } else {
          setShowRegisterModal(true)
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
