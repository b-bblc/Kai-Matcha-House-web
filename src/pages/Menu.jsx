const menuCategories = [
  {
    name: 'Matcha Classics',
    items: [
      { name: 'Traditional Matcha', description: 'Ceremonial grade matcha whisked to perfection', price: 4.50 },
      { name: 'Matcha Latte', description: 'Smooth matcha with your choice of milk', price: 5.00 },
      { name: 'Iced Matcha Latte', description: 'Refreshing cold matcha with milk over ice', price: 5.50 },
      { name: 'Matcha Espresso', description: 'Double shot matcha for the true enthusiast', price: 5.00 },
    ]
  },
  {
    name: 'Specialty Drinks',
    items: [
      { name: 'Matcha Yuzu', description: 'Matcha infused with citrusy yuzu', price: 6.00 },
      { name: 'Hojicha Latte', description: 'Roasted green tea with creamy milk', price: 5.00 },
      { name: 'Matcha Affogato', description: 'Matcha poured over vanilla ice cream', price: 6.50 },
      { name: 'Golden Matcha', description: 'Matcha with turmeric and honey', price: 5.50 },
    ]
  },
  {
    name: 'Food',
    items: [
      { name: 'Matcha Mochi', description: 'Soft rice cake filled with matcha cream', price: 4.00 },
      { name: 'Matcha Cheesecake', description: 'Rich and creamy Japanese-style cheesecake', price: 5.50 },
      { name: 'Onigiri', description: 'Traditional rice ball with various fillings', price: 3.50 },
      { name: 'Taiyaki', description: 'Fish-shaped cake with red bean filling', price: 4.00 },
    ]
  },
  {
    name: 'Extras',
    items: [
      { name: 'Oat Milk', description: 'Add creamy oat milk', price: 0.50 },
      { name: 'Almond Milk', description: 'Add nutty almond milk', price: 0.50 },
      { name: 'Extra Shot', description: 'Double the matcha', price: 1.50 },
      { name: 'Sweetener', description: 'Honey or agave', price: 0.30 },
    ]
  },
]

async function downloadMenuPdf() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const marginX = 56
  const bottomLimit = pageHeight - 56
  let y = 72

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.text('Kai Matcha House', pageWidth / 2, y, { align: 'center' })
  y += 24
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(110)
  doc.text('Menu', pageWidth / 2, y, { align: 'center' })
  doc.setTextColor(0)
  y += 32

  menuCategories.forEach((category) => {
    if (y > bottomLimit - 60) {
      doc.addPage()
      y = 72
    }

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(14)
    doc.text(category.name.toUpperCase(), marginX, y)
    y += 6
    doc.setDrawColor(180)
    doc.line(marginX, y, pageWidth - marginX, y)
    y += 18

    category.items.forEach((item) => {
      if (y > bottomLimit) {
        doc.addPage()
        y = 72
      }

      const priceText = `€${item.price.toFixed(2)}`
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.text(item.name, marginX, y)
      doc.text(priceText, pageWidth - marginX, y, { align: 'right' })

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      doc.setTextColor(110)
      const descLines = doc.splitTextToSize(item.description, pageWidth - marginX * 2 - 60)
      doc.text(descLines, marginX, y + 14)
      doc.setTextColor(0)
      y += 14 + descLines.length * 12 + 8
    })

    y += 12
  })

  doc.save('kai-matcha-house-menu.pdf')
}

export default function Menu() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-matcha-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-normal text-matcha-900 mb-4">
            Discover The Menu
          </h1>
          <p className="text-lg text-matcha-600 max-w-2xl mx-auto">
            Explore our selection of traditional and modern matcha creations
          </p>
          <button
            type="button"
            onClick={downloadMenuPdf}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-matcha-700 px-6 py-3 text-cream-50 font-normal shadow-md shadow-matcha-200/40 hover:bg-matcha-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Download menu (PDF)
          </button>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-16 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-matcha-200 flex-grow" />
                <h2 className="text-2xl md:text-3xl font-normal text-matcha-800 text-center px-4">
                  {category.name}
                </h2>
                <div className="h-px bg-matcha-200 flex-grow" />
              </div>

              {/* Menu Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div 
                    key={item.name}
                    className="bg-white rounded-xl p-6 shadow-md shadow-matcha-100/30 hover-lift"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-normal text-matcha-900">
                        {item.name}
                      </h3>
                      <span className="text-lg font-normal text-matcha-600 ml-4">
                        €{item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-matcha-500 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-matcha-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-normal text-matcha-900 mb-3">
              Dietary Information
            </h3>
            <p className="text-matcha-600 mb-4">
              All our matcha drinks can be made with oat, almond, or soy milk. 
              Please inform our staff of any allergies or dietary requirements.
            </p>
            <p className="text-sm text-matcha-400">
              Prices may vary. Menu items are subject to availability.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Element */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-matcha-600 to-matcha-700 rounded-2xl p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-cream-50 mb-4">
              All Matcha Prepared Traditionally
            </h2>
            <p className="text-matcha-100 max-w-2xl mx-auto">
              We use Chagama (茶釜) — traditional Japanese cast iron kettles — 
              to heat water for the most authentic matcha experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

