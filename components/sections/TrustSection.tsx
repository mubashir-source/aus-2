"use client";
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import { FaPlayCircle } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: 57,
      suffix: "+",
      label: "Industries Served",
      color: "text-primary-dark"
    },
    {
      number: 7098,
      suffix: "+",
      label: "Completed Bulk Orders",
      color: "text-primary-dark"
    },
    {
      number: 67,
      suffix: "+",
      label: "Verified Vendors",
      color: "text-primary-dark"
    }
  ];

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter components
  const AnimatedCounter = ({ value, suffix, suffixColor = "text-primary-blue" }: { value: number; suffix: string; suffixColor?: string }) => {
    const count = useCounter(value);
    return (
      <span>
        {count}
        <span className={suffixColor}>{suffix}</span>
      </span>
    );
  };

  const features = [
    {
      icon: (
        <div className="w-8 h-6 bg-primary-blue rounded-full flex items-center justify-center">
          <svg className="w-6 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      title: "Convenient Locations",
      description: "We have strategically placed locations for efficient delivery and seamless ordering experience."
    },
    {
      icon: (
        <div className="w-8 h-6 bg-primary-blue rounded-full flex items-center justify-center">
          <svg className="w-6 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      title: "Customer-Centric Service",
      description: "We focus on building long-term relationships through exceptional customer service."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Images */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            {/* Main Image - Vertical Portrait */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] w-[250px] sm:h-[350px] sm:w-[280px] lg:h-[414px] lg:w-[340px]">
              <Image
                src="/corporateofficesupplies/corporateofficesupplies.png"
                alt="Business team"
                width={320}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlapping Image - Vertical */}
            <div className="absolute -bottom-20 sm:-bottom-32 lg:-bottom-40 -left-4 sm:-left-6 lg:-left-[-30px] w-[250px] h-[280px] sm:w-[280px] sm:h-[320px] lg:w-[340px] lg:h-[392px] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/restaurantcateringsupplies/restaurantcateringsupplies.png"
                alt="Business meeting"
                width={150}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            
              {/* Stats Badge - Next to Second Image */}
              <div className="absolute -bottom-2 sm:-bottom-4 right-20 sm:right-32 lg:right-40 bg-primary-blue text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-center shadow-lg">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold">
                  <AnimatedCounter value={100} suffix="+" suffixColor="text-white" />
                </span>
                <span className="text-xs text-center leading-tight">Happy<br/>Clients</span>
              </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4 lg:mb-6">
              <span className="text-primary-blue text-sm lg:text-[16px] font-medium flex items-center gap-2 bg-primary-blue/50 px-2 py-1 rounded-full">
                <GoDotFill className="text-lg lg:text-xl" /> Get to know about Us
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black mb-4 lg:mb-6 leading-tight">
              High-Quality Wholesale Supplies That Businesses Trust
            </h2>
            <p className="text-gray-600 text-sm lg:text-[16px] mb-6 lg:mb-8 leading-relaxed">
              Alpha Universal Supplies (AUS) has been serving businesses for over a decade. Our expertise 
              lies in offering consistent quality, fast delivery, and a seamless ordering experience. Every 
              month, we deliver thousands of bulk orders to offices, restaurants, medical facilities, 
              construction sites, and retail outlets.
            </p>

            {/* Features */}
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8 flex flex-col lg:flex-row gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 lg:space-x-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-base lg:text-[18px] font-semibold text-primary-dark mb-1 lg:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-[14px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
              <button className="bg-primary-dark hover:bg-primary-blue text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-colors duration-300 text-sm lg:text-base">
                Get Started
              </button>
              <button className="hover:border-primary-blue text-primary-dark hover:text-primary-blue px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center bg-white text-sm lg:text-base">
<FaPlayCircle className="text-primary-blue text-base lg:text-[18px] mr-2" />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 lg:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-3 lg:p-5 flex flex-col items-center justify-center rounded-lg">
                  <div className={`text-2xl lg:text-4xl font-bold ${stat.color} mb-1`}>
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 text-xs lg:text-[12px]">
                    {stat.label}
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

export default TrustSection;
