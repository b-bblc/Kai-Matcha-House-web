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
              matcha from Kyoto, prepared in a traditional way.
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
              <li>Eberswalder Strasse 2,</li>
              <li>10435 Berlin, Germany</li>
              <li className="pt-2">
                <a href="mailto:info@kaimatchahouse.com" className="hover:text-cream-50 transition-colors">
                  info@kaimatchahouse.com
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
              <svg className="h-5 w-auto" viewBox="9.5 17 28.5 13.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m21.983 18.259l-4.896 11.482l-.846-11.482l-4.895 11.482l-.846-11.482m13.798 11.483c-1.585 0-2.644-1.286-2.364-2.871l.329-1.866c.28-1.586 1.791-2.871 3.377-2.871h0c1.585 0 2.644 1.285 2.364 2.87l-.329 1.867c-.28 1.585-1.791 2.87-3.377 2.87m7.747-11.482l-1.772 10.047c-.14.793.39 1.436 1.182 1.436h.431m4.524-9.976l-1.505 8.54c-.14.793.39 1.435 1.182 1.435h.43m-2.031-7.607H37.5"/>
              </svg>
            </a>
            <a
              href="https://www.ubereats.com/store/kai-matcha-house/j_UL1J98UI6oHcITW_rwaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-400 hover:text-cream-50 transition-colors"
              aria-label="Order on Uber Eats"
            >
              <svg className="h-5 w-auto" viewBox="10.5 12 26.5 23.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M11.5 34.768h4.685m-4.685-9.37h4.685M11.5 30.083h3.054M11.5 25.398v9.37"/>
                <path d="M34.158 18.737a2.34 2.34 0 0 1 2.342-2.343h0m-2.342 0v6.208m-3.521 11.642c.428.36.89.524 1.927.524h.525a1.55 1.55 0 0 0 1.549-1.552h0a1.55 1.55 0 0 0-1.549-1.552h-1.05a1.55 1.55 0 0 1-1.55-1.552h0a1.55 1.55 0 0 1 1.55-1.551h.525c1.037 0 1.499.164 1.926.523m-3.073-7.664a2.34 2.34 0 0 1-2.036 1.182h0a2.34 2.34 0 0 1-2.342-2.343v-1.522a2.34 2.34 0 0 1 2.342-2.343h0a2.34 2.34 0 0 1 2.343 2.343v.761h-4.685m-.401 7.13v6.969c0 .646.524 1.17 1.171 1.17h.351m-2.752-6.206h2.46m-4.923 3.865a2.34 2.34 0 0 1-2.343 2.342h0a2.34 2.34 0 0 1-2.342-2.343v-1.522a2.34 2.34 0 0 1 2.342-2.342h0a2.34 2.34 0 0 1 2.343 2.342m0 3.865v-6.207M11.5 13.232v6.266a3.104 3.104 0 0 0 6.207 0v-6.266m2.412 5.505a2.34 2.34 0 0 1 2.342-2.343h0a2.34 2.34 0 0 1 2.343 2.343v1.522a2.34 2.34 0 0 1-2.343 2.343h0a2.34 2.34 0 0 1-2.342-2.343m0 2.343v-9.37"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

