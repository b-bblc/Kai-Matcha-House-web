import Button from '../components/UI/Button'

export default function About() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-matcha-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-matcha-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-matcha-600 max-w-2xl mx-auto">
            Who We Are
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-square bg-gradient-to-br from-matcha-100 to-matcha-200 rounded-2xl flex items-center justify-center shadow-xl shadow-matcha-200/30 order-2 lg:order-1">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-matcha-300/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-matcha-600 font-medium">Our Team</p>
              </div>
            </div>

            {/* Story Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-matcha-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-matcha-700 leading-relaxed">
                <p>
                  ###
                </p>
                <p>
                  ###
                </p>
                <p>
                  ###
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Matcha */}
      <section className="py-16 bg-matcha-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-matcha-900 mb-6">
                Our Matcha
              </h2>
              <div className="space-y-4 text-matcha-700 leading-relaxed">
                <p>
                  ###
                </p>
                <p>
                  ###
                </p>
                <p className="font-semibold text-matcha-800">
                  ###
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-square bg-gradient-to-br from-matcha-200 to-matcha-300 rounded-2xl flex items-center justify-center shadow-xl shadow-matcha-300/30">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-matcha-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-matcha-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <p className="text-matcha-700 font-medium">Ceremonial Matcha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-matcha-200/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-matcha-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-matcha-700 leading-relaxed mb-8">
              ###
            </p>
            <p className="text-lg text-matcha-700 leading-relaxed">
              ###
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-matcha-900 text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-matcha-900 mb-3">Authenticity</h3>
              <p className="text-matcha-600">
                ###
              </p>
            </div>

            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-matcha-900 mb-3">Quality</h3>
              <p className="text-matcha-600">
                ###
              </p>
            </div>

            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-matcha-900 mb-3">Community</h3>
              <p className="text-matcha-600">
                ###
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-matcha-900 mb-4">
            Come Experience It Yourself
          </h2>
          <p className="text-matcha-600 mb-8 max-w-2xl mx-auto">
            Visit our cafe in Prenzlauer Berg and let us share our passion for matcha with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/cafe">
              Find Our Location
            </Button>
            <Button to="/contact" variant="outline">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
