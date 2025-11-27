import VendorsSection from "../../components/sections/VendorsSection";

export default function Vendors() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vendors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our trusted network of vendor partners who help us deliver quality products and exceptional service.
          </p>
        </div>
      </section>

      {/* Vendors Content */}
      <VendorsSection />

      {/* Vendor Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vendor Requirements</h2>
            <p className="text-xl text-gray-600">What we look for in our vendor partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Standards",
                description: "All products must meet our strict quality standards and industry certifications.",
                icon: "✅"
              },
              {
                title: "Reliable Supply Chain",
                description: "Consistent inventory levels and reliable delivery schedules are essential.",
                icon: "🚚"
              },
              {
                title: "Competitive Pricing",
                description: "Fair and competitive pricing that provides value to our customers.",
                icon: "💰"
              },
              {
                title: "Customer Support",
                description: "Responsive customer service and technical support capabilities.",
                icon: "📞"
              },
              {
                title: "Compliance",
                description: "Full compliance with industry regulations and safety standards.",
                icon: "📋"
              },
              {
                title: "Innovation",
                description: "Commitment to innovation and continuous product improvement.",
                icon: "🔬"
              }
            ].map((requirement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{requirement.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{requirement.title}</h3>
                <p className="text-gray-600">{requirement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">How to become a vendor partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Complete our vendor application form with your company details and product information."
              },
              {
                step: "2",
                title: "Initial Review",
                description: "Our team reviews your application and conducts initial qualification assessment."
              },
              {
                step: "3",
                title: "Evaluation",
                description: "Detailed evaluation of your products, services, and business capabilities."
              },
              {
                step: "4",
                title: "Partnership",
                description: "Upon approval, we establish a formal partnership agreement and begin collaboration."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Application Form */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vendor Application Form</h2>
              <p className="text-gray-600">Interested in becoming a vendor partner? Fill out the form below to get started.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Primary contact name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contact@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Categories *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select primary category</option>
                  <option>Office Supplies</option>
                  <option>Industrial Equipment</option>
                  <option>Medical Supplies</option>
                  <option>Construction Materials</option>
                  <option>Technology Solutions</option>
                  <option>Cleaning Supplies</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Description *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your company, products, and services..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years in Business *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select years in business</option>
                  <option>Less than 1 year</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5-10 years</option>
                  <option>More than 10 years</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
