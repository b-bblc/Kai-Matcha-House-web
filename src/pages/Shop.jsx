import Button from '../components/UI/Button'

const products = [
  {
    id: 1,
    name: 'Matcha Powder',
    description: 'Ceremonial grade matcha from Kyoto, Japan. Perfect for traditional preparation or lattes.',
    price: 28,
    weight: '30g',
  },
  {
    id: 2,
    name: 'Matcha Whisk (Chasen)',
    description: 'Handcrafted bamboo whisk with 80 prongs for the perfect froth. Essential for traditional matcha preparation.',
    price: 18,
    material: 'Bamboo',
  },
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-matcha-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-matcha-900 mb-4">
            Shop
          </h1>
          <p className="text-lg text-matcha-600 max-w-2xl mx-auto">
            Bring the Kai Matcha House experience home with our premium matcha and traditional tools.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-matcha-200/20 hover-lift group"
              >
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-matcha-100 to-matcha-200 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 bg-matcha-300/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {product.id === 1 ? (
                      // Matcha powder icon
                      <svg className="w-16 h-16 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    ) : (
                      // Whisk icon
                      <svg className="w-16 h-16 text-matcha-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                      </svg>
                    )}
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-matcha-600 text-cream-50 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.weight || product.material}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-matcha-900 mb-3">
                    {product.name}
                  </h2>
                  <p className="text-matcha-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-matcha-800">
                      €{product.price}
                    </span>
                    <Button variant="primary">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-matcha-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-matcha-900 mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-matcha-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our matcha is carefully selected by tea experts and sourced directly from Kyoto, Japan. 
            We ensure every batch meets our high standards for color, taste, and texture.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-matcha-500 font-bold text-lg mb-2">100%</div>
              <div className="text-matcha-700 text-sm">Organic Matcha</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-matcha-500 font-bold text-lg mb-2">Kyoto</div>
              <div className="text-matcha-700 text-sm">Sourced from Japan</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-matcha-500 font-bold text-lg mb-2">Fresh</div>
              <div className="text-matcha-700 text-sm">Small Batch Imports</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

