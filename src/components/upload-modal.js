import { Dialog } from '@headlessui/react'
import { useContext, useState, useRef } from 'react'
import { AppContext } from 'context'
import { useMutation } from 'urql'
import { useForm } from 'react-hook-form'
import gql from 'graphql-tag'

import Field from 'components/ui/field'
import Modal from 'components/ui/modal'
import Select from 'components/ui/select'

import FileUpload from 'components/ui/file-upload'

const UploadSongMutation = gql`
  mutation (
    $title: String!
    $url: String!
    $sum: String!
    $timeToComplete: String!
    $cover: String
  ) {
    createSong(
      title: $title
      url: $url
      sum: $sum
      timeToComplete: $timeToComplete
      cover: $cover
    ) {
      id
    }
  }
`

export default function UploadModal() {
  const [name, setName] = useState('')
  const [audio, setAudio] = useState(undefined)
  const [cover, setCover] = useState(undefined)

  const { showUploadModal, setShowUploadModal } = useContext(AppContext)
  const [, uploadSong] = useMutation(UploadSongMutation)
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    uploadSong({
      ...data,
      url: audio,
      cover,
      timeToComplete: data.timeToComplete.value,
    }).then((result) => {
      if (result.data) {
        setShowUploadModal(false)
        reset()
      }
    })
  }

  return (
    <Modal show={showUploadModal} hide={() => setShowUploadModal(false)}>
      <Dialog.Title
        as="h1"
        className="text-xl font-medium leading-6 text-gray-900 mb-6"
      >
        Upload audio
      </Dialog.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FileUpload
          onGetName={(name) =>
            setValue('title', name.split('.').slice(0, -1).join())
          }
          value={audio}
          onChange={(value) => setAudio(value)}
        />
        <Field
          name="title"
          label="Title"
          placeholder=""
          onChange={(e) => setName(e.target.value)}
          register={register}
        />
        <Field
          name="sum"
          label="Sum"
          placeholder=""
          type="number"
          leading="$"
          addon="USD"
          register={register}
          placeholder="10-1000"
        />
        <Select
          name="timeToComplete"
          label="Time to complete"
          placeholder=""
          type="text"
          hint="How much time do you need to finish the track? After community had fundraised the needed sum, you will have this much time to upload the result"
          register={register}
          options={[
            { value: '1 day', label: '1 day' },
            { value: '3 days', label: '3 days' },
            { value: '1 week', label: '1 week' },
            { value: '2 weeks', label: '2 weeks' },
            { value: '1 month', label: '1 month' },
            { value: '3 months', label: '3 months' },
            { value: '1 year', label: '1 year' },
          ]}
          control={control}
        />
        <CoverField
          value={cover}
          onChange={(value) => setCover(value)}
          label="Cover"
          // register={register}
        />
        <button
          type="submit"
          className="mt-8 mb-0 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
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
}) => {
  const [preview, setPreview] = useState(undefined)

  const handleFileChange = (e) => {
    const image = e.target.files[0]

    console.log(URL.createObjectURL(image))
    setPreview(URL.createObjectURL(image))

    let formData = new FormData()
    formData.append('file', image)
    console.log(formData)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/files`, {
      method: 'POST',
      body: formData,
    })
      .then((r) => r.json())
      .then((json) => {
        onChange(json.path)
      })
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative">
        <div className="flex items-center">
          <span
            className={`h-16 w-16 rounded-full overflow-hidden bg-gray-100 ${
              !!preview ? 'rotating-cover' : ''
            }`}
            style={
              !!preview
                ? {
                    backgroundImage: `url("${preview}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#F5F5F5',
                  }
                : {
                    backgroundImage: `url("/audio-pic.png")`,
                    backgroundSize: '91%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#F5F5F5',
                  }
            }
          ></span>
          <input
            className="hidden"
            type="file"
            id="coverFile"
            onChange={handleFileChange}
            accept="image/*"
          />
          <label
            className="ml-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            htmlFor="coverFile"
          >
            Change
          </label>
        </div>
      </div>
    </div>
  )
}

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
