import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'

interface Video {
  id: string;
  title: string;
  description: string;
  filename: string;
  uploadDate: string;
}

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/videos')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setVideos(data)
      } catch (error) {
        console.error('Error fetching videos:', error)
        setError('Failed to load videos. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return <div className="text-center mt-8">Loading videos...</div>
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Recent Videos</h1>
      {videos.length === 0 ? (
        <p className="text-center text-gray-600">No videos available. Be the first to upload!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={{
                id: video.id,
                title: video.title,
                creator: 'Unknown',
                views: 0,
                thumbnail: `http://localhost:5000/uploads/${video.filename}`
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home