import React from 'react'
import VideoCard from '../components/VideoCard'

const Explore: React.FC = () => {
  // Mock data for demonstration
  const videos = [
    { id: '5', title: 'Mountain Climbing Adventure', creator: 'AdventureSeeker', views: 750000, thumbnail: 'https://source.unsplash.com/random/800x450?mountain' },
    { id: '6', title: 'Deep Sea Exploration', creator: 'OceanExplorer', views: 1200000, thumbnail: 'https://source.unsplash.com/random/800x450?ocean' },
    { id: '7', title: 'Space Station Tour', creator: 'AstronautLife', views: 3000000, thumbnail: 'https://source.unsplash.com/random/800x450?space' },
    { id: '8', title: 'Wildlife Documentary', creator: 'NatureChannel', views: 500000, thumbnail: 'https://source.unsplash.com/random/800x450?wildlife' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore New Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default Explore