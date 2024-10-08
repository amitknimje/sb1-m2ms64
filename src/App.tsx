import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import VideoPlayer from './pages/VideoPlayer'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import VideoUpload from './pages/VideoUpload'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upload" element={<VideoUpload />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App