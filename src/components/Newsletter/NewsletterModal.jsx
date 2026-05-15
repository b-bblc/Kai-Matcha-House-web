import { useState } from 'react'

export default function NewsletterModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with Mailchimp
    // For now, we'll just show a success message
    setIsSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-matcha-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-cream-50 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-matcha-400 hover:text-matcha-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Icon */}
            <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Content */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-normal text-matcha-900 mb-2">
                Get 10% Off Your First Order
              </h2>
              <p className="text-matcha-600">
                Subscribe to our newsletter and receive exclusive offers, matcha recipes, and updates.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-matcha-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400 focus:border-transparent bg-white text-matcha-900 placeholder-matcha-400"
              />
              <button
                type="submit"
                className="w-full bg-matcha-600 text-cream-50 py-3 rounded-lg font-normal hover:bg-matcha-700 transition-colors duration-200"
              >
                Subscribe & Get 10% Off
              </button>
            </form>

            <p className="text-xs text-matcha-400 text-center mt-4">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-normal text-matcha-900 mb-2">
              Thank You!
            </h2>
            <p className="text-matcha-600">
              Check your email for your 10% discount code.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

