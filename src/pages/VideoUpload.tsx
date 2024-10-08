import React, { useState } from 'react'
import { Upload } from 'lucide-react'

const VideoUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError('Please select a file to upload')
      return
    }

    setUploading(true)
    setError(null)

    const formData = new FormData()
    formData.append('video', file)
    formData.append('title', title)
    formData.append('description', description)

    try {
      console.log('Attempting to upload video...')
      const response = await fetch('http://localhost:5000/api/videos', {
        method: 'POST',
        body: formData,
      })

      console.log('Response status:', response.status)
      const responseText = await response.text()
      console.log('Response text:', responseText)

      if (response.ok) {
        const result = JSON.parse(responseText)
        console.log('Upload successful:', result)
        alert('Video uploaded successfully!')
        setFile(null)
        setTitle('')
        setDescription('')
      } else {
        throw new Error(responseText || 'Upload failed')
      }
    } catch (error) {
      console.error('Error uploading video:', error)
      setError(`Failed to upload video: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Upload Video</h1>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
            id="video-upload"
          />
          <label htmlFor="video-upload" className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-1 text-sm text-gray-600">
              {file ? file.name : 'Click to upload or drag and drop'}
            </p>
          </label>
        </div>
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Video Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
    </div>
  )
}

export default VideoUpload