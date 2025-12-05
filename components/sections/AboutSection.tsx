import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Where Quality Meets Convenience, and Every Business Is Served With Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6">
            At Alpha Universal Supplies (AUS), we are committed to creating a smooth and reliable purchasing experience for every business. Whether you are a restaurant, salon, corporate office, hotel, construction firm, retailer, or medical facility, we make sure you always get the high-quality products you need — on time, at competitive prices, and with a service experience that feels personal.
            </p>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 lg:p-4 shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base lg:text-[18px] font-semibold text-gray-900 mb-1">Lorem Ipsum</h3>
                  <p className="text-gray-600 text-xs lg:text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 lg:p-4 shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base lg:text-[18px] font-semibold text-gray-900 mb-1">Lorem Ipsum</h3>
                  <p className="text-gray-600 text-xs lg:text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 lg:p-4 shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base lg:text-[18px] font-semibold text-gray-900 mb-1">Lorem Ipsum</h3>
                  <p className="text-gray-600 text-xs lg:text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <Image src="/about-image.png" alt="About Image" width={500} height={500} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
