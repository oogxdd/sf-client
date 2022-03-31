import { Dialog } from '@headlessui/react'
import { useState, useContext } from 'react'
import { AppContext, AuthContext } from 'context'
import { useMutation } from 'urql'
import { useForm } from 'react-hook-form'
import gql from 'graphql-tag'
import countries from 'data/countries'

import Field from 'components/ui/field'
import Modal from 'components/ui/modal'
import Select from 'components/ui/select'

const SignupMutation = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        nickname
      }
    }
  }
`

export default function LoginModal() {
  const {
    showLoginModal,
    setShowLoginModal,
    setShowUploadModal,
    setShowRegisterModal,
  } = useContext(AppContext)
  const { setLogged, setUser } = useContext(AuthContext)

  const [, login] = useMutation(SignupMutation)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    login(data).then(({ data }) => {
      // set login state
      window.localStorage.setItem('jwt', data.login.token)
      window.localStorage.setItem('user', JSON.stringify(data.login.user))
      setUser(data.login.user)
      setLogged(true)

      // proceed to upload track screen
      setShowLoginModal(false)
      setShowUploadModal(true)
    })
  }

  return (
    <Modal
      show={showLoginModal}
      hide={() => setShowLoginModal(false)}
      // style={{ minHeight: 500 }}
    >
      <Dialog.Title
        as="h1"
        className="text-xl font-medium leading-6 text-gray-900 mb-6"
      >
        Sign In
      </Dialog.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="email"
          label="Email"
          placeholder=""
          type="email"
          hint="Make sure you are using real email. We will contact you regarding the payment"
          register={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Field
          name="password"
          label="Password"
          placeholder=""
          type="password"
          register={register}
        />
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="mt-8 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
        <button
          type="submit"
          className="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow"
          onClick={() => {
            setShowRegisterModal(true)
            setShowLoginModal(false)
          }}
        >
          Back to Signup
        </button>
        <div className="mt-8 mb-4 py-3 flex items-center justify-center">
          <a
            className="w-full text-sm text-gray-500 text-center hover:underline hover:text-gray-700 cursor-pointer"
            href="mailto:hi@soundfuck.com"
          >
            Forgot password
          </a>
        </div>
      </form>
      {/* <Field label="Country" placeholder="" /> */}
    </Modal>
  )
}
