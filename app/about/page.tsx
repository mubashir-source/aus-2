import AboutSection from "../../components/sections/AboutSection";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function About() {
  const breadcrumbItems = [
    { label: 'About Us' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Learn more about Alpha Universal Supplies and our commitment to excellence in providing quality products and services.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <AboutSection />

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center">
                To provide exceptional supply chain solutions that empower businesses to achieve their goals through 
                reliable products, competitive pricing, and outstanding customer service. We strive to be the trusted 
                partner that businesses can depend on for all their supply needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center">
                To become the leading supply solutions provider, recognized for innovation, reliability, and excellence. 
                We envision a future where businesses of all sizes have access to the products and services they need 
                to thrive in an ever-evolving marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
                icon: "🤝"
              },
              {
                title: "Quality",
                description: "We are committed to providing only the highest quality products and services to our clients.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description: "We continuously seek new and better ways to serve our customers and improve our offerings.",
                icon: "💡"
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from product selection to customer service.",
                icon: "🏆"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
