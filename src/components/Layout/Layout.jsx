import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import NewsletterModal from '../Newsletter/NewsletterModal'
import { useOverlayScrollbar } from '../../hooks/useOverlayScrollbar'

export default function Layout({ children }) {
  const [showNewsletter, setShowNewsletter] = useState(false)

  useOverlayScrollbar()

  useEffect(() => {
    // Check if user has already seen the newsletter modal
    const hasSeenNewsletter = localStorage.getItem('kai_newsletter_seen')
    
    if (!hasSeenNewsletter) {
      // Show newsletter after 3 seconds
      const timer = setTimeout(() => {
        setShowNewsletter(true)
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleCloseNewsletter = () => {
    setShowNewsletter(false)
    localStorage.setItem('kai_newsletter_seen', 'true')
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      
      {showNewsletter && (
        <NewsletterModal onClose={handleCloseNewsletter} />
      )}
    </div>
  )
}

