import Link from 'next/link';
import Breadcrumb from "../../../components/ui/Breadcrumb";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: 'Products', href: '/products' },
    { label: 'Product Details' }
  ];

  // All products data (in real app, this would be fetched from API)
  const allProducts = [
    {
      id: 1,
      name: "Professional Office Chair",
      category: "Corporate & Office Supplies",
      image: "🪑",
      description: "Ergonomic office chair with lumbar support, adjustable height, and premium leather upholstery. Perfect for long work sessions."
    },
    {
      id: 2,
      name: "Industrial Safety Helmet",
      category: "Construction & Maintenance",
      image: "⛑️",
      description: "OSHA compliant safety helmet with adjustable suspension system, ventilation, and high-impact resistance."
    },
    {
      id: 3,
      name: "Digital Blood Pressure Monitor",
      category: "Medical Supplies & PPE",
      image: "🩺",
      description: "Automatic digital blood pressure monitor with memory function, large display, and WHO classification indicator."
    },
    {
      id: 9,
      name: "Executive Desk Set",
      category: "Corporate & Office Supplies",
      image: "🗃️",
      description: "Premium executive desk with built-in storage, cable management, and matching accessories for professional offices."
    },
    {
      id: 15,
      name: "Conference Table",
      category: "Corporate & Office Supplies",
      image: "🪑",
      description: "Large conference table with integrated power outlets and cable management for modern meeting rooms."
    },
    {
      id: 21,
      name: "Filing Cabinet",
      category: "Corporate & Office Supplies",
      image: "🗄️",
      description: "4-drawer locking filing cabinet with full-extension slides and anti-tip mechanism."
    }
  ];

  // Find current product (in real app, this would be fetched by ID)
  const baseProduct = allProducts.find(p => p.id === parseInt(params.id));
  
  // Default product with full details (in real app, this would come from API)
  const product = {
    id: parseInt(params.id),
    name: baseProduct?.name || "Professional Office Chair",
    category: baseProduct?.category || "Corporate & Office Supplies",
    image: baseProduct?.image || "🪑",
    description: baseProduct?.description || "Ergonomic office chair with lumbar support, adjustable height, and premium leather upholstery. Perfect for long work sessions with maximum comfort and support.",
    features: [
      "Ergonomic lumbar support",
      "Adjustable height mechanism",
      "Premium leather upholstery",
      "360-degree swivel",
      "Smooth-rolling casters",
      "Weight capacity: 300 lbs"
    ],
    specifications: {
      "Dimensions": "26\" W x 28\" D x 42-46\" H",
      "Weight": "45 lbs",
      "Material": "Leather, Steel, Plastic",
      "Color": "Black"
    }
  };

  // Get related products from the same category
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Show up to 4 related products

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              {product.category}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg flex items-center justify-center p-16">
              <div className="text-9xl">{product.image}</div>
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block bg-primary-blue/10 text-primary-blue text-sm px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="/vendor-registration"
                  className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold text-center"
                >
                  Vendor Registration
                </Link>
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-semibold text-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Vendor Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Vendor Registration Required
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        To purchase products, you must first register as a vendor. This ensures we can provide you with the best pricing and service for your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specifications</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Products</h2>
              <p className="text-xl text-gray-600">
                More products from {product.category}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                    <div className="text-4xl">{relatedProduct.image}</div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <span className="inline-block bg-primary-blue/10 text-primary-blue text-xs px-2 py-1 rounded-full mb-2">
                      {relatedProduct.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    
                    {/* Action */}
                    <div className="flex justify-end">
                      <Link 
                        href={`/products/${relatedProduct.id}`}
                        className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 inline-block text-center text-sm"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Products Link */}
            <div className="text-center mt-8">
              <Link 
                href="/products"
                className="inline-flex items-center text-primary-blue hover:text-primary-dark font-medium"
              >
                View All Products
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
