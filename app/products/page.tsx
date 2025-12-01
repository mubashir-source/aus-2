import ProductsSection from "../../components/sections/ProductsSection";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function Products() {
  const breadcrumbItems = [
    { label: 'Products' }
  ];
  const featuredProducts = [
    {
      name: "Professional Office Chair",
      category: "Office Supplies",
      price: "$299.99",
      image: "🪑",
      description: "Ergonomic office chair with lumbar support and adjustable height."
    },
    {
      name: "Industrial Safety Helmet",
      category: "Industrial Equipment",
      price: "$49.99",
      image: "⛑️",
      description: "OSHA compliant safety helmet with adjustable suspension system."
    },
    {
      name: "Digital Blood Pressure Monitor",
      category: "Medical Supplies",
      price: "$89.99",
      image: "🩺",
      description: "Automatic digital blood pressure monitor with memory function."
    },
    {
      name: "Power Drill Set",
      category: "Construction Materials",
      price: "$159.99",
      image: "🔧",
      description: "Cordless power drill with multiple bits and carrying case."
    },
    {
      name: "Laptop Computer",
      category: "Technology Solutions",
      price: "$899.99",
      image: "💻",
      description: "Business laptop with Intel i5 processor and 8GB RAM."
    },
    {
      name: "Industrial Vacuum Cleaner",
      category: "Cleaning Supplies",
      price: "$399.99",
      image: "🧹",
      description: "Heavy-duty vacuum cleaner for commercial and industrial use."
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} className="text-white/80" />
          </div>
          
          {/* Header Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Discover our comprehensive range of high-quality products designed to meet all your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <ProductsSection />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Popular items from our extensive catalog</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-6xl text-center mb-4">{product.image}</div>
                  <div className="text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Search & Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find What You Need</h2>
              <p className="text-gray-600">Can't find what you're looking for? Let us help you find the perfect product.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>Office Supplies</option>
                  <option>Industrial Equipment</option>
                  <option>Medical Supplies</option>
                  <option>Construction Materials</option>
                  <option>Technology Solutions</option>
                  <option>Cleaning Supplies</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
                <input
                  type="text"
                  placeholder="Enter product name or keyword..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Search Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We specialize in providing custom solutions tailored to your specific requirements. 
            Contact us to discuss your unique needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Request Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
}
