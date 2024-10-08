import React from 'react'
import { Link } from 'react-router-dom'
import { Play, ThumbsUp, MessageCircle } from 'lucide-react'

interface VideoCardProps {
  video: {
    id: string
    title: string
    creator: string
    views: number
    thumbnail: string
  }
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/video/${video.id}`}>
        <div className="relative">
          <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            <Play size={12} className="inline mr-1" />
            {video.views.toLocaleString()} views
          </div>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{video.creator}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <ThumbsUp size={16} className="mr-1" />
            10K
          </span>
          <span className="flex items-center">
            <MessageCircle size={16} className="mr-1" />
            500
          </span>
        </div>
      </div>
    </div>
  )
}

export default VideoCard