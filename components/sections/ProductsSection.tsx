import Link from 'next/link';

const ProductsSection = () => {
  const productCategories = [
    {
      title: "Office Supplies",
      description: "Complete range of office essentials including stationery, furniture, and equipment.",
      image: "/corporateofficesupplies/corporateofficesupplies.png",
      items: ["Stationery", "Office Furniture", "Electronics", "Printing Supplies"]
    },
    {
      title: "Industrial Equipment",
      description: "Heavy-duty industrial equipment and machinery for various industrial applications.",
      image: "/restaurantcateringsupplies/restaurantcateringsupplies.png",
      items: ["Machinery", "Tools", "Safety Equipment", "Maintenance Supplies"]
    },
    {
      title: "Medical Supplies",
      description: "High-quality medical equipment and supplies for healthcare facilities.",
      image: "/medicalsupplies/medicalsupplies.png",
      items: ["Medical Devices", "Consumables", "Safety Gear", "Laboratory Equipment"]
    },
    {
      title: "Construction Materials",
      description: "Durable construction materials and tools for building and infrastructure projects.",
      image: "/constructionmaintenance/constructionmaintenance.png",
      items: ["Building Materials", "Construction Tools", "Safety Equipment", "Hardware"]
    },
    {
      title: "Technology Solutions",
      description: "Latest technology products including computers, networking, and software solutions.",
      image: "/cleaningproducts/cleaningproducts.png",
      items: ["Computers", "Networking", "Software", "Accessories"]
    },
    {
      title: "Cleaning Supplies",
      description: "Professional cleaning products and equipment for commercial and industrial use.",
      image: "/cleaningproducts/cleaningproducts.png",
      items: ["Cleaning Chemicals", "Equipment", "Janitorial Supplies", "Maintenance Tools"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of products across multiple categories 
            to meet all your business and operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Link
              key={index}
              href={`/products?category=${encodeURIComponent(category.title)}`}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{category.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
