import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Modal({ show, hide, children, style = {} }) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={hide}
      >
        <div className="min-h-screen px-4 text-center">
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
            <div
              className="inline-block w-full max-w-xl p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              style={style}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
