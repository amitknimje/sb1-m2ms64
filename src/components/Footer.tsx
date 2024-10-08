import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">SocialVid is an enhanced social media platform for video sharing and content creation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-300">Home</Link></li>
              <li><Link to="/explore" className="text-sm hover:text-blue-300">Explore</Link></li>
              <li><Link to="/upload" className="text-sm hover:text-blue-300">Upload</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm hover:text-blue-300">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link to="/copyright" className="text-sm hover:text-blue-300">Copyright</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-300">Facebook</a></li>
              <li><a href="#" className="text-sm hover:text-blue-300">Twitter</a></li>
              <li><a href="#" className="text-sm hover:text-blue-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; 2024 SocialVid. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer