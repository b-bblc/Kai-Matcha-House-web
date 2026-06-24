import Button from '../components/UI/Button'
import cafeBanner from '../assets/photos/IMG_8492.png'

const cafeAddress = 'Eberswalder Strasse 2, 10435 Berlin, Germany'
const mapsQuery = encodeURIComponent(cafeAddress)
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`

export default function Cafe() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-matcha-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-matcha-900 mb-4">
            Visit Our Cafe
          </h1>
          <p className="text-lg text-matcha-600 max-w-2xl mx-auto">
            We are happy to welcome you in our store in Prenzlauer Berg, just right next to Mauerpark.
          </p>
        </div>
      </section>

      {/* Map & Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-matcha-200/30">
              <iframe
                title="Kai Matcha House on Google Maps"
                src={mapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-matcha-200/20">
                <h2 className="text-2xl font-bold text-matcha-900 mb-6">
                  Location & Hours
                </h2>

                {/* Address */}
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-matcha-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-matcha-900 mb-1">Address</h3>
                      <p className="text-matcha-600">
                        Eberswalder Strasse 2<br />
                        10435 Berlin, Germany
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-matcha-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-matcha-900 mb-1">Opening Hours</h3>
                      <div className="text-matcha-600 space-y-1">
                        <p>Monday - Friday: 8:00 - 18:00</p>
                        <p>Saturday: 9:00 - 19:00</p>
                        <p>Sunday: 10:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-matcha-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-matcha-900 mb-1">Contact</h3>
                      <a href="mailto:info@kaimatchahouse.com" className="text-matcha-600 hover:text-matcha-800 transition-colors">
                        info@kaimatchahouse.com
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16 bg-matcha-900 bg-cover bg-center"
        style={{ backgroundImage: `url(${cafeBanner})` }}
      >
        <div className="absolute inset-0 bg-matcha-900/60" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cream-50 mb-4">
            Can't Visit? Shop Online
          </h2>
          <p className="text-cream-100 mb-8 max-w-2xl mx-auto">
            Bring the Kai Matcha House experience to your home with our premium matcha powder and traditional tools.
          </p>
          <Button to="/shop">
            Visit Our Shop
          </Button>
        </div>
      </section>
    </div>
  )
}

