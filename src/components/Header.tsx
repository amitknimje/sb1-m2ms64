import React from 'react'
import { Link } from 'react-router-dom'
import { Search, User, Bell, Menu, Upload } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">SocialVid</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-2 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Link to="/upload" className="text-gray-600 hover:text-blue-600">
            <Upload size={24} />
          </Link>
          <Link to="/profile/user" className="text-gray-600 hover:text-blue-600">
            <User size={24} />
          </Link>
          <button className="text-gray-600 hover:text-blue-600">
            <Bell size={24} />
          </button>
          <button className="text-gray-600 hover:text-blue-600 md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header