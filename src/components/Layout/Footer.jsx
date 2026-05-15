import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-matcha-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-normal text-cream-50 mb-4">
              Kai Matcha House
            </h3>
            <p className="text-cream-300 leading-relaxed max-w-md">
              Traditional Matcha With A Modern Twist. Experience ceremonial grade 
              matcha from Kyoto, prepared in the most traditional way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-cream-50 font-normal mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-cream-300 hover:text-cream-50 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cafe" className="text-cream-300 hover:text-cream-50 transition-colors">
                  Visit Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream-300 hover:text-cream-50 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-300 hover:text-cream-50 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-cream-50 font-normal mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-cream-300">
              <li>Prenzlauer Berg</li>
              <li>Berlin, Germany</li>
              <li className="pt-2">
                <a href="mailto:hello@kaimatchahouse.com" className="hover:text-cream-50 transition-colors">
                  hello@kaimatchahouse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-matcha-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-400 text-sm">
            © {new Date().getFullYear()} Kai Matcha House. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/kaimatchahouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-400 hover:text-cream-50 transition-colors"
              aria-label="Instagram — @kaimatchahouse"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://wolt.com/en/deu/berlin/restaurant/kai-matcha-house-berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-400 hover:text-cream-50 transition-colors"
              aria-label="Order on Wolt"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M4.516 4.509c0-1.115.907-2.021 2.021-2.021h2.551v17.024H6.537a2.021 2.021 0 0 1-2.021-2.021V4.509zm9.945 0c0-1.115.907-2.021 2.021-2.021h2.551v17.024h-2.551a2.021 2.021 0 0 1-2.021-2.021V4.509z"/>
              </svg>
            </a>
            <a
              href="https://www.ubereats.com/store/kai-matcha-house/j_UL1J98UI6oHcITW_rwaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-400 hover:text-cream-50 transition-colors"
              aria-label="Order on Uber Eats"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M0 6.75C0 3.02 3.02 0 6.75 0h10.5C20.98 0 24 3.02 24 6.75v10.5c0 3.73-3.02 6.75-6.75 6.75H6.75C3.02 24 0 20.98 0 17.25V6.75zm12.1 8.89c1.5 0 2.73-1.19 2.73-2.66 0-1.47-1.23-2.66-2.73-2.66-1.5 0-2.73 1.19-2.73 2.66 0 1.47 1.23 2.66 2.73 2.66zm-6.52-6.4h2.14v8.26H5.58V9.24z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

