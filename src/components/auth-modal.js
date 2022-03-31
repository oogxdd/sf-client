import { Dialog } from '@headlessui/react'
import { useContext } from 'react'
import { AppContext } from 'context'
import { useMutation } from 'urql'
import { useForm } from 'react-hook-form'
import gql from 'graphql-tag'
import countries from 'data/countries'

import Field from 'components/ui/field'
import Modal from 'components/ui/modal'
import Select from 'components/ui/select'

const SignupMutation = gql`
  mutation (
    $country: String
    $email: String!
    $nickname: String!
    $password: String!
  ) {
    signup(
      country: $country
      email: $email
      nickname: $nickname
      password: $password
    ) {
      token
      user {
        id
      }
    }
  }
`

export default function AuthModal() {
  const { showRegisterForm, setShowRegisterForm, setShowUploadModal } =
    useContext(AppContext)

  const [, signup] = useMutation(SignupMutation)
  const {
    register,
    handleSubmit,
    control,
    // watch,
    // formState: { errors },
  } = useForm()

  // console.log(watch('nickname')) // watch input value by passing the name of it

  const onSubmit = (data) => {
    console.log(data)

    signup(data).then((result) => {
      console.log(result)
      setShowRegisterForm(false)
      setShowUploadModal(true)
      // The result is almost identical to `updateTodoResult` with the exception
      // of `result.fetching` not being set.
      // It is an OperationResult.
    })
  }

  const signIn = () => {
    const variables = {
      email: 'rormchik@gmail.com',
      nickname: 'rrom',
      password: '1223456',
      country: 'UA',
    }

    signup(variables).then((result) => {
      console.log(result)
      setShowRegisterForm(false)
      setShowUploadModal(true)
      // The result is almost identical to `updateTodoResult` with the exception
      // of `result.fetching` not being set.
      // It is an OperationResult.
    })
  }

  // {errors.nickname && <p>{errors.nickname.message}</p>}
  // {errors.email && <p>{errors.email.message}</p>}
  return (
    <Modal
      show={showRegisterForm}
      hide={() => setShowRegisterForm(false)}
      style={{ minHeight: 500 }}
    >
      <Dialog.Title
        as="h1"
        className="text-xl font-medium leading-6 text-gray-900 mb-6"
      >
        Sign up
      </Dialog.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="nickname"
          label="Username"
          placeholder=""
          register={register}
        />
        <Field
          name="email"
          label="Email"
          placeholder=""
          type="email"
          hint="Make sure you are using real email. We will contact you regarding the payment"
          register={register}
        />
        <Field
          name="password"
          label="Password"
          placeholder=""
          type="password"
          register={register}
        />
        <Select
          name="country"
          label="Country"
          hint="Let the world know where you're coming from"
          options={countries.map((country) => ({
            value: country.code,
            label: `${country.emoji} ${country.name}`,
          }))}
          control={control}
        />
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="mt-8 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          // onClick={signIn}
          // onClick={handleSubmit(onSubmit)}
        >
          Continue
        </button>
        <button
          type="submit"
          className="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-500 bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Already have an account? Sign in
        </button>
      </form>
      {/* <Field label="Country" placeholder="" /> */}
    </Modal>
  )
}
