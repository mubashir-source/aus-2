import { GoDotFill } from "react-icons/go";

const Howitsection = () => {
  const services = [
    {
      number: "01",
      icon: (
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="text-primary-blue group-hover:text-primary-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </div>
      ),
      title: "Wide Product Range",
      description: "At Alpha Universal Supplies, we don't just provide products — we deliver reliability, efficiency, and long-term business value."
    },
    {
      number: "02",
      icon: (
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="text-primary-blue group-hover:text-primary-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      ),
      title: "Verified Vendors",
      description: "Whether you run a restaurant, a construction company, a hospital, or a corporate office — we've got you covered."
    },
    {
      number: "03",
      icon: (
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <svg className="text-primary-blue group-hover:text-primary-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
      ),
      title: "Easy Vendor Registration",
      description: "We work only with pre-approved and verified suppliers to ensure every product meets professional quality standards."
    }
  ];

  return (
    <section className="py-16 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid with Header */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Header Section */}
          <div className="lg:col-span-1 mb-6 lg:mb-0 flex items-start flex-col justify-center">
            <div className="flex items-center mb-2">
              <span className="text-white text-sm lg:text-[16px] font-medium flex items-center gap-2 bg-primary-blue/50 px-2 py-1 rounded-full">
                <GoDotFill className="text-lg lg:text-xl" /> How It Works
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-white mb-4">
            Here’s a simple breakdown of how our services work
            </h2>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="animated-border-content relative overflow-hidden h-full flex flex-col">
                {/* White content area */}
                <div className="bg-white p-4 sm:p-5 lg:p-6 flex-1 flex items-start flex-col justify-center">
                  {/* Number in top-right corner */}
                  <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4">
                    <span 
                      className="text-3xl sm:text-4xl lg:text-6xl font-bold" 
                      style={{
                        WebkitTextStroke: '1px var(--primary-dark)',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                      }}
                    >
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 lg:mb-6">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold text-gray-900 mb-2 lg:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-[16px] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitsection;
