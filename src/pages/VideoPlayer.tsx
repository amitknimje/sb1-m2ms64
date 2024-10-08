import React from 'react'
import { useParams } from 'react-router-dom'
import { ThumbsUp, ThumbsDown, Share2, MessageCircle } from 'lucide-react'

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Mock data for demonstration
  const video = {
    title: 'Amazing Sunset Timelapse',
    creator: 'NatureLover',
    views: 1000000,
    likes: 50000,
    dislikes: 1000,
    description: 'Experience the beauty of a sunset in this breathtaking timelapse video. Shot over the course of several hours, this video captures the changing colors and atmosphere as day turns to night.',
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black aspect-video mb-4">
        {/* Placeholder for video player */}
        <div className="w-full h-full flex items-center justify-center text-white">
          Video Player Placeholder (ID: {id})
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg">{video.creator}</p>
          <p className="text-sm text-gray-600">{video.views.toLocaleString()} views</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <ThumbsUp />
            <span>{video.likes.toLocaleString()}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600">
            <ThumbsDown />
            <span>{video.dislikes.toLocaleString()}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
            <Share2 />
            <span>Share</span>
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p>{video.description}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Comments</h2>
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Comment
          </button>
        </div>
        {/* Placeholder for comments list */}
        <div className="text-gray-500 text-center">
          <MessageCircle className="mx-auto mb-2" size={24} />
          <p>No comments yet. Be the first to comment!</p>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer