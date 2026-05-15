import Button from '../components/UI/Button'
import ourTeamPhoto from '../assets/photos/IMG_1958.jpg'

export default function About() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-matcha-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-normal text-matcha-900 mb-4">
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
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl shadow-matcha-200/30 order-2 lg:order-1">
              <img
                src={ourTeamPhoto}
                alt="Preparing ceremonial matcha at Kai Matcha House"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Story Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-normal text-matcha-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-matcha-700 leading-relaxed">
                <p>
                  Kai Matcha House was founded in 2024 by Kaito Vezzoli, who grew up in
                  Europe with a deep appreciation for his Japanese heritage. His interest
                  in Japanese culture was nurtured from a young age, especially through the
                  tradition of tea.
                </p>
                <p>
                  His mother, Noriko Vezzoli, a tea expert, shared her passion for tea with
                  him, which greatly influenced his love for it.
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
              <h2 className="text-3xl md:text-4xl font-normal text-matcha-900 mb-6">
                Our Matcha
              </h2>
              <div className="space-y-4 text-matcha-700 leading-relaxed">
                <p>
                  Our Matcha has been selected by tea experts and is a ceremonial Matcha from
                  Kyoto, Japan. We prepare our matcha in the most traditional way, using Chagama
                  (茶釜, &ldquo;tea kettle&rdquo;).
                </p>
                <p>
                  Kama (釜) is a Japanese term referring to the metal pot or kettle used in the
                  Japanese tea ceremony. Kama are made of cast iron, and are used to heat the water
                  used to make tea.
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
                <p className="text-matcha-700 font-normal">Ceremonial Matcha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-matcha-200/20 text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-matcha-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-matcha-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              Keep the authenticity, culture and quality of matcha alive through the motto:
            </p>
            <blockquote className="text-xl md:text-2xl text-matcha-800 font-normal not-italic border-l-4 border-matcha-400 pl-6 py-1 text-left max-w-xl mx-auto">
              &ldquo;Traditional with a modern twist&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-normal text-matcha-900 text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-matcha-900 mb-3">Authenticity</h3>
              <p className="text-matcha-600 leading-relaxed">
                Through our motto: &ldquo;Traditional with a modern twist&rdquo;, we want to keep
                matcha making as authentic as possible, giving it a modern twist.
              </p>
            </div>

            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-matcha-900 mb-3">Quality</h3>
              <p className="text-matcha-600 leading-relaxed">
                We value quality. We collaborate with local farmers in Japan who have been making
                matcha for centuries, and keep traditions, culture and quality of matcha alive.
              </p>
            </div>

            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-matcha-900 mb-3">Community</h3>
              <p className="text-matcha-600 leading-relaxed">
                Building a community of matcha enthusiasts, organizing popups and events for people
                to experience real matcha in Berlin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-matcha-900 mb-4">
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
