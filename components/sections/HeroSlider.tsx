'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [realIndex, setRealIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  const slides = [
    {
      id: 1,
      title: "Cleaning Products",
      subtitle: "Professional Cleaning Solutions for Every Need",
      description: "Industrial and commercial cleaning solutions including disinfectants, sanitizing wipes, and professional-grade cleaners for all surfaces and environments.",
      backgroundImage: "/images/slider/bottles-with-detergent-cleaning-supplies-blue-space-text.jpg",
      thumbnailImage: "/images/slider/bottles-with-detergent-cleaning-supplies-blue-space-text.jpg",
      buttonText: "View Cleaning Products"
    },
    {
      id: 2,
      title: "Construction & Maintenance",
      subtitle: "Professional Tools & Safety Equipment",
      description: "Comprehensive range of construction tools, safety equipment, and maintenance supplies designed to meet demanding industrial requirements.",
      backgroundImage: "/images/slider/top-view-steel-hammer-with-other-construction-elements-tools.jpg",
      thumbnailImage: "/images/slider/top-view-steel-hammer-with-other-construction-elements-tools.jpg",
      buttonText: "Browse Construction & Maintenance"
    },
    {
      id: 3,
      title: "Corporate & Office Supplies",
      subtitle: "Complete Office Solutions",
      description: "Professional-grade office supplies including printer cartridges, paper, stationery, and equipment to support your business operations.",
      backgroundImage: "/images/slider/desk-arrangement-with-laptop-notebooks.jpg",
      thumbnailImage: "/images/slider/desk-arrangement-with-laptop-notebooks.jpg",
      buttonText: "Browse Corporate & Office Supplies"
    },
    {
      id: 4,
      title: "Medical Supplies & PPE",
      subtitle: "Healthcare & Safety Equipment",
      description: "High-quality medical supplies and personal protective equipment including disposable gloves, surgical masks, and medical devices for healthcare facilities.",
      backgroundImage: "/images/slider/a2febbb8c29cae9617056e08d9030046f22cc9d4.png",
      thumbnailImage: "/images/slider/a2febbb8c29cae9617056e08d9030046f22cc9d4.png",
      buttonText: "View Medical Supplies & PPE"
    },
    {
      id: 5,
      title: "Restaurant & Catering Supplies",
      subtitle: "Professional Kitchen & Food Service Solutions",
      description: "Complete range of restaurant and catering supplies including food packaging, kitchen equipment, and professional-grade supplies for the food service industry.",
      backgroundImage: "/images/slider/assortment-antiques-market-objects.jpg",
      thumbnailImage: "/images/slider/assortment-antiques-market-objects.jpg",
      buttonText: "Browse Restaurant & Catering Supplies"
    }
  ];

  const handleThumbnailClick = (index: number) => {
    setActiveSlide(index);
    setRealIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[800px] overflow-hidden">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={false}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Initialize the real index
          setRealIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          setRealIndex(swiper.realIndex);
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          setRealIndex(swiper.realIndex);
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.82), rgba(255,255,255,0)), url(${slide.backgroundImage})`
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                    {/* Main Content - Left Column */}
                    <div className="lg:col-span-8 text-white text-center lg:text-left">
                      <p className="text-sm sm:text-base lg:text-[20px] font-semibold text-white mb-2">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold mb-4 lg:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base lg:text-[19px] mb-6 lg:mb-8 text-gray-200 leading-relaxed">
                        {slide.description}
                      </p>
                      <Link 
                        href={`/products?category=${encodeURIComponent(slide.title)}`}
                        className="inline-block bg-primary-blue hover:bg-primary-dark text-white px-4 sm:px-6 lg:px-[13px] py-2 sm:py-3 lg:py-[10px] rounded-full font-medium text-sm sm:text-base lg:text-md transition-all duration-300 transform hover:scale-105"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>

                    {/* Thumbnail Navigation - Right Column */}
                    <div className="lg:col-span-4 hidden lg:flex justify-end items-center h-full">
                      <div className="flex flex-col space-y-4">
                        {slides.map((slideItem, index) => (
                          <button
                            key={slideItem.id}
                            onClick={() => handleThumbnailClick(index)}
                            className={`relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                              realIndex === index 
                                ? 'ring-4 ring-white shadow-lg scale-105'
                                : 'ring-2 ring-transparent hover:ring-white/50'
                            }`}
                          >
                            <Image
                              src={slideItem.thumbnailImage}
                              alt={`Slide ${index + 1}`}
                              width={140}
                              height={140}
                              className="w-[150px] lg:w-[207px] h-[80px] lg:h-[106px] object-cover"
                            />
                            {realIndex === index && (
                              <div className="absolute inset-0 bg-primary-blue/30 flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                                </div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>



      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"></div>
      
      {/* Custom Styles */}
      <style jsx>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }
      `}</style>


    </section>
  );
};

export default HeroSlider;
