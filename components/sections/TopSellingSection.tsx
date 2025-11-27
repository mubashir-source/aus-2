'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import { CiReceipt } from "react-icons/ci";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopSellingSection = () => {
  const swiperRef = useRef<SwiperType>(null);

  const products = [
    {
      id: 1,
      title: "Majestic Office Bundle",
      category: "Office Supplies",
      description: "Bulk office stationery, paper supplies, printers, markers, and furniture add-ons.",
      image: "/corporateofficesupplies/corporateofficesupplies.png",
    },
    {
      id: 2,
      title: "Restaurant Essentials Kit",
      category: "Food Service",
      description: "Bulk office stationery, paper supplies, printers, markers, and furniture add-ons.",
      image: "/restaurantcateringsupplies/restaurantcateringsupplies.png",
    },
    {
      id: 3,
      title: "Construction Safety Pack",
      category: "Safety Equipment",
      description: "Bulk office stationery, paper supplies, printers, markers, and furniture add-ons.",
      image: "/constructionmaintenance/constructionmaintenance.png",
    },
    {
      id: 4,
      title: "Premium Salon Starter Pack",
      category: "Salon Supplies",
      description: "Bulk office stationery, paper supplies, printers, markers, and furniture add-ons.",
      image: "/medicalsupplies/medicalsupplies.png",
    },
    {
      id: 5,
      title: "Medical Equipment Bundle",
      category: "Healthcare",
      description: "Essential medical supplies and equipment for healthcare facilities.",
      image: "/cleaningproducts/cleaningproducts.png",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 gap-6 lg:gap-0">
          <div>
            <div className="flex items-center mb-2">
              <span className="text-primary-blue text-sm lg:text-[16px] font-medium flex items-center gap-2 bg-primary-blue/50 px-2 py-1 rounded-full">
                <GoDotFill className="text-lg lg:text-xl" /> Popular Wholesale Bundles
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-black mb-4">
              Top Selling Products
            </h2>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary-dark hover:bg-primary-blue text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base">
              View All Categories
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={false}
            pagination={{
              clickable: true,
              el: '.products-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 lg:p-6">
                    {/* Category Badge */}
                    <div className="flex items-center mb-2 lg:mb-3">
                      <CiReceipt className="text-primary-blue text-sm lg:text-[14px] mr-2" />
                      <span className="text-xs lg:text-[14px] text-primary-dark font-medium">{product.category}</span>
                    </div>
                    
                    <h3 className="text-sm sm:text-base lg:text-[18px] font-bold text-gray-900 mb-2 lg:mb-3 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-[14px] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Pagination */}
        <div className="products-pagination flex justify-center mt-8"></div>

        {/* Mobile CTA */}
        <div className="md:hidden text-center mt-8">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingSection;
