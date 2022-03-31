import { useState } from 'react'

export default ({ onGetName, focusNext = () => {} }) => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [name, setName] = useState(undefined)
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:4000/files', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
    // let formData = new FormData()
    // formData.append('file', image.data)
    console.log(e)
    console.log(e.target.files[0].name)
    setName(e.target.files[0].name)
    onGetName(e.target.files[0].name)
    focusNext()
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
  return (
    <div className="App">
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width="100" height="100" />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  )
}
