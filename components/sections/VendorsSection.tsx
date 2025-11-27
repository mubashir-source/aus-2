const VendorsSection = () => {
  const vendors = [
    {
      name: "TechCorp Solutions",
      category: "Technology",
      description: "Leading provider of IT solutions and computer hardware.",
      rating: 4.9,
      yearsPartnership: 8
    },
    {
      name: "Industrial Pro",
      category: "Industrial Equipment",
      description: "Specialized in heavy machinery and industrial tools.",
      rating: 4.8,
      yearsPartnership: 6
    },
    {
      name: "MedSupply Plus",
      category: "Medical Supplies",
      description: "Trusted supplier of medical equipment and consumables.",
      rating: 4.9,
      yearsPartnership: 5
    },
    {
      name: "Office Essentials",
      category: "Office Supplies",
      description: "Complete office supply solutions for businesses.",
      rating: 4.7,
      yearsPartnership: 10
    },
    {
      name: "BuildMaster",
      category: "Construction",
      description: "Quality construction materials and building supplies.",
      rating: 4.8,
      yearsPartnership: 7
    },
    {
      name: "CleanPro Services",
      category: "Cleaning Supplies",
      description: "Professional cleaning products and equipment.",
      rating: 4.6,
      yearsPartnership: 4
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "All vendors are thoroughly vetted for quality standards"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Competitive Pricing",
      description: "Best market rates through our vendor partnerships"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Efficient supply chain for quick product delivery"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Reliable Support",
      description: "Dedicated support from our vendor network"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Vendors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with industry-leading vendors to ensure you receive 
            the highest quality products and services at competitive prices.
          </p>
        </div>

        {/* Vendor Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Vendors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Vendor Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {vendor.name}
                    </h4>
                    <span className="text-sm text-blue-600 font-medium">
                      {vendor.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600">{vendor.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {vendor.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Partnership: {vendor.yearsPartnership} years</span>
                  <span className="text-green-600 font-medium">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Become a Vendor Partner
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our network of trusted vendors and expand your business reach. 
            We're always looking for reliable partners who share our commitment to quality and excellence.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Apply to Become a Vendor
          </button>
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;
