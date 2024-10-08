import React from 'react'
import { useParams } from 'react-router-dom'

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile: {username}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-lg mb-4">This is a placeholder for the user profile page. In a full implementation, this page would display:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>User's profile picture and bio</li>
          <li>User's uploaded videos</li>
          <li>User's playlists</li>
          <li>User's statistics (subscribers, total views, etc.)</li>
          <li>User's recent activity</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile