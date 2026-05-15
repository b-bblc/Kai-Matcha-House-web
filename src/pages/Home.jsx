import Button from '../components/UI/Button'
import HeroVideoBackground from '../components/Home/HeroVideoBackground'
import logo from '../assets/logo.webp'
import ctaBackground from '../assets/photos/IMG_3060.jpg'

const heroGlassButtonClass =
  '!border-2 !border-cream-200/45 !bg-white/12 !text-cream-50 !shadow-lg !shadow-black/20 !backdrop-blur-xl hover:!border-cream-100/55 hover:!bg-white/22 hover:!text-cream-50 active:!bg-white/18'

export default function Home() {
  return (
    <div className="font-self-modern font-normal">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <HeroVideoBackground />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center drop-shadow-sm">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <img
              src={logo}
              alt="Kai Matcha House"
              className="w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-cream-50 mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Traditional Matcha
            <br />
            <span className="text-matcha-200">With A Modern Twist</span>
          </h1>

          <p className="text-xl md:text-2xl text-cream-100/95 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Matcha Cafe Based in Berlin
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button to="/menu" variant="outline" size="lg" className={`!font-normal ${heroGlassButtonClass}`}>
              Discover Our Menu
            </Button>
            <Button to="/shop" variant="outline" size="lg" className={`!font-normal ${heroGlassButtonClass}`}>
              Shop Matcha
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cream-200/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-matcha-900 mb-4">
              Why Kai Matcha House?
            </h2>
            <p className="text-matcha-600 max-w-2xl mx-auto">
              We bring the authentic Japanese tea experience to the heart of Berlin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
            {/* Feature 1 */}
            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg shadow-matcha-200/20 hover-lift">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-matcha-900 mb-3">Ceremonial Grade</h3>
              <p className="text-matcha-600">
                Our matcha is sourced directly from Kyoto, Japan — the finest ceremonial grade available.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg shadow-matcha-200/20 hover-lift">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-matcha-900 mb-3">Traditional Preparation</h3>
              <p className="text-matcha-600">
                Using authentic Chagama kettles and traditional techniques passed down through generations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-cream-50 rounded-2xl p-8 text-center shadow-lg shadow-matcha-200/20 hover-lift">
              <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-matcha-900 mb-3">Made with Love</h3>
              <p className="text-matcha-600">
                Every cup is crafted with care by our passionate team who deeply love Japanese tea culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 bg-matcha-700 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="absolute inset-0 bg-matcha-900/60" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-cream-50 mb-6">
            Visit Us in Prenzlauer Berg
          </h2>
          <p className="text-matcha-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience the perfect matcha in our cozy cafe, just right next to Mauerpark.
            We can't wait to welcome you.
          </p>
          <Button to="/cafe" variant="secondary" size="lg" className="!font-normal">
            Find Our Location
          </Button>
        </div>
      </section>
    </div>
  )
}

