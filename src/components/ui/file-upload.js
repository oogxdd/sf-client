import { useState } from 'react'

export default ({ onGetName, focusNext = () => {}, onChange = () => {} }) => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [name, setName] = useState(undefined)
  const [status, setStatus] = useState('')

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    const image = e.target.files[0]
    setImage(img)
    setName(e.target.files[0].name)
    onGetName(e.target.files[0].name)

    let formData = new FormData()
    formData.append('file', image)
    console.log(formData)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/files`, {
      method: 'POST',
      body: formData,
    })
      .then((r) => r.json())
      .then((json) => {
        console.log(json.path)
        onChange(json.path)
      })
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Audio
      </label>
      <div className="mt-1 relative">
        <label
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-block cursor-pointer"
          htmlFor="audioFile"
          tabindex={0}
        >
          Select
        </label>
        <span className="ml-2 text-sm font-medium text-gray-700">{name}</span>

        <input
          className="hidden"
          type="file"
          id="audioFile"
          onChange={handleFileChange}
          accept="audio/*"
        />
      </div>
    </div>
  )
}
