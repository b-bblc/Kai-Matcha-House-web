import { useState } from 'react'
import Button from '../components/UI/Button'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Workshops',
    description: 'Learn the art of traditional matcha preparation in our hands-on workshops.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'B2B Wholesale Matcha Powder',
    description: 'Premium ceremonial grade matcha for cafes, restaurants, and retailers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: 'Catering + Events',
    description: 'Bring the Kai Matcha House experience to your next event or celebration.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-matcha-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-normal text-matcha-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-matcha-600 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch for workshops, wholesale inquiries, or events.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-matcha-200/20 hover-lift"
              >
                <div className="w-12 h-12 bg-matcha-100 rounded-xl flex items-center justify-center text-matcha-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-normal text-matcha-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-matcha-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-matcha-200/20">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-normal text-matcha-900 mb-8 text-center">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-normal text-matcha-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-matcha-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400 focus:border-transparent bg-cream-50 text-matcha-900 placeholder-matcha-400"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-normal text-matcha-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-matcha-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400 focus:border-transparent bg-cream-50 text-matcha-900 placeholder-matcha-400"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-normal text-matcha-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-matcha-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400 focus:border-transparent bg-cream-50 text-matcha-900 placeholder-matcha-400"
                        placeholder="+49 123 456 7890"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-normal text-matcha-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-matcha-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-matcha-400 focus:border-transparent bg-cream-50 text-matcha-900 placeholder-matcha-400 resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-normal text-matcha-900 mb-4">
                    Thank You!
                  </h2>
                  <p className="text-matcha-600 mb-8">
                    We've received your message and will get back to you soon.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-matcha-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-normal text-matcha-900 mb-2">Email Us</h3>
              <a href="mailto:info@kaimatchahouse.com" className="text-matcha-600 hover:text-matcha-800 transition-colors">
                info@kaimatchahouse.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-normal text-matcha-900 mb-2">Visit Us</h3>
              <p className="text-matcha-600">
                Eberswalder Strasse 2,<br />
                10435 Berlin, Germany
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

