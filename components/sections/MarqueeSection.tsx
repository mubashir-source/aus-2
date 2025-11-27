'use client';

const MarqueeSection = () => {
  const marqueeItems = [
    "Specialized Itineraries",
    "Comprehensive Planning", 
    "Expert Guidance",
    "Local Experience",
    "Customer Support",
    "Sustainability Efforts",
    "Multiple Regions"
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-primary-blue overflow-hidden" style={{ transform: 'skewY(-1deg)' }}>
      <div className="relative">
        {/* Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of items */}
          {marqueeItems.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center mx-4 sm:mx-6 lg:mx-8">
              <span className="text-white text-sm sm:text-base lg:text-[20px] font-bold">
                {item}
              </span>
              <span className="text-white text-sm sm:text-base lg:text-[20px] mx-4 sm:mx-6 lg:mx-8">★</span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {marqueeItems.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center mx-1">
              <span className="text-white text-sm sm:text-base lg:text-[20px] font-bold">
                {item}
              </span>
              <span className="text-white text-sm sm:text-base lg:text-[20px] mx-4 sm:mx-6 lg:mx-8">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
