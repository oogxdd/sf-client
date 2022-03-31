import { Dialog } from '@headlessui/react'
import { useContext, useState, useRef } from 'react'
import { AppContext } from 'context'
import { useMutation } from 'urql'
import gql from 'graphql-tag'

import Field from 'components/ui/field'
import Modal from 'components/ui/modal'
import Select from 'components/ui/select'

import FileUpload from 'components/ui/file-upload'

const CreateUser = gql`
  mutation (
    $country: String
    $email: String!
    $nickname: String!
    $password: String!
  ) {
    createOneUser(
      data: {
        country: $country
        email: $email
        nickname: $nickname
        password: $password
      }
    ) {
      id
    }
  }
`

export default function AuthModal() {
  const [name, setName] = useState('')
  const { showUploadModal, setShowUploadModal } = useContext(AppContext)
  const titleRef = useRef()

  const [updateTodoResult, updateTodo] = useMutation(CreateUser)

  const uploadSong = () => {
    setShowUploadModal(false)
    // const variables = {
    //   email: 'rormchik@gmail.com',
    //   nickname: 'rrom',
    //   password: '1223456',
    //   country: 'UA',
    // }

    // updateTodo(variables).then((result) => {
    //   console.log(result)
    //   // The result is almost identical to `updateTodoResult` with the exception
    //   // of `result.fetching` not being set.
    //   // It is an OperationResult.
    // })
  }

  return (
    <Modal show={showUploadModal} hide={() => setShowUploadModal(false)}>
      <Dialog.Title
        as="h1"
        className="text-xl font-medium leading-6 text-gray-900 mb-6"
      >
        Upload audio
      </Dialog.Title>
      <FileUpload
        onGetName={(name) => setName(name.split('.').slice(0, -1).join())}
      />
      <Field label="Title" placeholder="" value={name} ref={titleRef} />
      <Field label="Sum" placeholder="" type="number" leading="$" addon="USD" />
      <Field
        label="Time to complete"
        placeholder=""
        type="text"
        hint="How much time do you need to finish the track? After community had fundraised the needed sum, you will have this much time to upload the result"
      />
      <CoverField label="Cover" />
      <button
        type="submit"
        className="mt-8 mb-0 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={uploadSong}
      >
        Submit
      </button>
    </Modal>
  )
}

const CoverField = ({
  label = 'Label',
  placeholder = 'Placeholder',
  hint,
  value,
  onChange = () => {},
  type = 'text',
  leading,
  addon,
}) => (
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1 relative">
      <div className="flex items-center">
        <span
          className="h-16 w-16 rounded-full overflow-hidden bg-gray-100"
          style={{
            backgroundImage: `url("/audio.png")`,
            // backgroundSize: 'contain',
            backgroundSize: '91%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',

            backgroundColor: '#F5F5F5',
          }}
        ></span>
        <button
          type="button"
          className="ml-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Change
        </button>
      </div>
    </div>
  </div>
)

// <div className="mb-4">
//   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//     {label}
//   </label>
//   <div className="mt-1 relative">
//     <div className="w-full flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//       <div className="space-y-1 text-center">
//         <div className="flex text-sm text-gray-600">
//           <label
//             htmlFor="file-upload"
//             className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//           >
//             <span>Upload file</span>
//             <input
//               id="file-upload"
//               name="file-upload"
//               type="file"
//               className="sr-only"
//             />
//           </label>
//           <p className="pl-1">or drag and drop</p>
//         </div>
//         <p className="text-xs text-gray-500">mp3, wav, flac</p>
//       </div>
//     </div>
//   </div>
// </div>
