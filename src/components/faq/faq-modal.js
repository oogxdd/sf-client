import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext, useRef } from 'react'
import { AppContext } from 'context'

import EnFaq from './en'
import RuFaq from './ru'
import UaFaq from './ua'

export default function FAQ() {
  const { showFAQ, setShowFAQ } = useContext(AppContext)
  const buttonRef = useRef()
  const [lang, setLang] = useState('en')

  function closeModal() {
    setShowFAQ(false)
  }

  function openModal() {
    setShowFAQ(true)
  }

  return (
    <Transition appear show={showFAQ} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
        initialFocus={buttonRef}
      >
        <div className="min-h-screen px-4 text-center" id="modal">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200 bg-gray-900"
            enterFrom="opacity-0"
            enterTo="opacity-60"
            entered="bg-gray-900 opacity-60"
            leave="ease-in duration-200 bg-gray-900"
            leaveFrom="opacity-60"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 " />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
            ref={buttonRef}
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {lang === 'en' && (
                <EnFaq closeModal={closeModal} setLang={setLang} lang={lang} />
              )}
              {lang === 'ru' && (
                <RuFaq closeModal={closeModal} setLang={setLang} lang={lang} />
              )}
              {lang === 'ua' && (
                <UaFaq closeModal={closeModal} setLang={setLang} lang={lang} />
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
