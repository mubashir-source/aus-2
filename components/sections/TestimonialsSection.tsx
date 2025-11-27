'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [currentTheme, setCurrentTheme] = useState('theme1');

  // Theme to SVG mapping
  const themeSvgs = {
    theme1: '/circle-gradient-purple.svg',
    theme2: '/circle-gradient-red.svg', 
    theme3: '/circle-gradient-blue.svg'
  };

  // Detect theme changes
  useEffect(() => {
    const detectTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'theme1';
      setCurrentTheme(theme);
    };

    // Initial detection
    detectTheme();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          detectTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "AUS made our office restocking process so simple. Products are always delivered on time. Great quality and very fair wholesale prices. Products are always delivered on time. Great quality and very fair wholesale prices.",
      author: "Rahul Mehrotra",
      position: "Operations",
      avatar: "/images/slider/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
    },
    {
      id: 2,
      rating: 5,
      text: "Excellent service and quality products. The team is very professional and always delivers on time. We've been using their services for over 2 years now.",
      author: "Sarah Johnson",
      position: "Procurement Manager",
      avatar: "/images/slider/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
    },
    {
      id: 3,
      rating: 4,
      text: "Outstanding wholesale supplier with competitive prices and reliable delivery. Their customer service is exceptional and they always go above and beyond.",
      author: "Michael Chen",
      position: "Business Owner",
      avatar: "/images/slider/a2febbb8c29cae9617056e08d9030046f22cc9d4.png"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-primary-blue' : 'text-transparent'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="pt-16 pb-0 bg-blue-50 relative overflow-hidden">
      {/* Background Decorative Circle */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            {/* SVG Background */}
            <div className="absolute -inset-8 sm:-inset-12 lg:-inset-16 z-0 opacity-30">
              <Image
                src={themeSvgs[currentTheme as keyof typeof themeSvgs]}
                alt="Background decoration"
                width={573}
                height={486}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 z-10">
              <Image
                src="/happy-couple-tourist-hand-pointing-copy-space-with-baggage-going-travel-holidays.png"
                alt="Business professionals"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-blue text-sm lg:text-[16px] font-medium flex items-center gap-2 bg-primary-blue/50 px-2 py-1 rounded-full">
                  <GoDotFill className="text-lg lg:text-xl" /> Testimonials
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black mb-4 leading-tight">
                What Our Clients Says
              </h2>
            </div>

            {/* Testimonials Slider */}
            <div className="relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="pb-12"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="">
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-sm  text-primary-dark">({testimonial.rating})</span>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-sm lg:text-[16px] leading-relaxed mb-4 lg:mb-6">
                        {testimonial.text}
                      </p>

                      {/* Author */}
                      <div className="flex items-center bg-white p-3 lg:p-4 rounded-full w-fit">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden mr-3 lg:mr-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm lg:text-[16px] font-semibold text-gray-900">
                            {testimonial.author}
                          </h4>
                          <p className="text-xs lg:text-[14px] text-gray-600">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className="testimonials-pagination flex justify-center mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
