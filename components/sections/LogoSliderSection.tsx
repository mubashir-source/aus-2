"use client";

import Image from "next/image";

const LogoSliderSection = () => {
  const logos = [
    { id: 1, name: "Memberstack", image: "/logocontainer.png" },
    { id: 2, name: "SEMRUSH", image: "/logocontainer.png" },
    { id: 3, name: "payhere", image: "/logocontainer.png" },
    { id: 4, name: "penpencil", image: "/logocontainer.png" },
    { id: 5, name: "headspace", image: "/logocontainer.png" },
    { id: 6, name: "scopic", image: "/logocontainer.png" },
    { id: 7, name: "LiveChat", image: "/logocontainer.png" },
  ];

  return (
    <section className="bg-primary-blue py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Text */}
        <div className="text-white text-sm sm:text-base lg:text-[18px] font-medium whitespace-nowrap mb-4">
          500+ Clients Around the Globe
        </div>
        <div className="flex items-center justify-between">
          {/* Logo Slider */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-logo-scroll whitespace-nowrap">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center mx-3 sm:mx-4 lg:mx-6 shrink-0"
                >
                  <div className="px-2 sm:px-3 lg:px-4 py-2 flex items-center justify-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] h-8 sm:h-10 lg:h-12">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={80}
                      height={32}
                      className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center mx-3 sm:mx-4 lg:mx-6 shrink-0"
                >
                  <div className="px-2 sm:px-3 lg:px-4 py-2 flex items-center justify-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] h-8 sm:h-10 lg:h-12">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={80}
                      height={32}
                      className="max-h-6 sm:max-h-7 lg:max-h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSliderSection;
