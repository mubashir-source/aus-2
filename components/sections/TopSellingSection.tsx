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
import Link from 'next/link';

const TopSellingSection = () => {
  const swiperRef = useRef<SwiperType>(null);

  const products = [
    {
      id: 1,
      name: "Disinfectants liquid",
      category: "Cleaning Products",
      image: "/cleaningproducts/disinfectantsliquid/disinfectantsliquid1.jpg",
      description: "Disinfectants liquid is a liquid that is used to disinfect surfaces and objects. It is used to kill bacteria and viruses.",
    },
    {
      id: 2,
      name: "Sanitizing wipes",
      category: "Cleaning Products",
      image: "/cleaningproducts/sanitizingwipes/sanitizingwipes1.png",
      description: "Sanitizing wipes are a type of cleaning product that is used to disinfect surfaces and objects. It is used to kill bacteria and viruses."
    },
    {
      id: 3,
      name: "Safety Gloves",
      category: "Construction & Maintenance",
      image: "/constructionmaintenance/safetygloves/safetygloves1.jpg",
      description: "Automatic digital blood pressure monitor with memory function, large display, and WHO classification indicator."
    },
    {
      id: 4,
      name: "Safety Helmets",
      category: "Construction & Maintenance",
      image: "/constructionmaintenance/safetyhelmets/safetyhelmets1.jpg",
      description: "Cordless power drill with multiple bits, carrying case, and long-lasting battery. Ideal for professional use."
    },
    {
      id: 5,
      name: "Printer Cartridges",
      category: "Corporate & Office Supplies",
      image: "/corporateofficesupplies/printercartridges/printercartridges.jpg",
      description: "High-performance business laptop with Intel i5 processor, 8GB RAM, 256GB SSD, and 14-inch display."
    },
    {
      id: 6,
      name: "Printer Paper",
      category: "Corporate & Office Supplies",
      image: "/corporateofficesupplies/printerpaper/printerpaper.png",
      description: "Printer paper is a type of paper that is used to print on. It is used to print on paper."
    },
    {
      id: 7,
      name: "Disposable Gloves",
      category: "Medical Supplies & PPE",
      image: "/medicalsupplies/disposablegloves/nitrile.png",
      description: "Disposable gloves are a type of glove that is used to protect the hands from bacteria and viruses. It is used to protect the hands from bacteria and viruses.",
      types: [
        {
          name: "Nitrile",
          image: "/medicalsupplies/disposablegloves/nitrile.png",
          description: "Powder-free nitrile gloves, latex-free"
        },
        {
          name: "Vinyl",
          image: "/medicalsupplies/disposablegloves/vinyl.png",
          description: "Cost-effective vinyl gloves for light-duty use"
        },
        {
          name: "Rubber",
          image: "/medicalsupplies/disposablegloves/rubber.png",
          description: "Rubber gloves for light-duty use"
        }
      ]
    },
    {
      id: 8,
      name: "Surgical Masks",
      category: "Medical Supplies & PPE",
      image: "/medicalsupplies/surgicalmasks.png",
      description: "Surgical masks are a type of mask that is used to protect the face and nose from bacteria and viruses. It is used to protect the face and nose from bacteria and viruses."
    },
    {
      id: 9,
      name: "Foil & Plastic Wrap",
      category: "Restaurant & Catering Supplies",
      image: "/restaurantcateringsupplies/foilandplasticwrap/foilandplasticwrap1.png",
      description: "Foil and plastic wrap are a type of packaging that is used to wrap food and other items. It is used to wrap food and other items."
    },
    {
      id: 10,
      name: "To-go boxes, paper bags",
      category: "Restaurant & Catering Supplies",
      image: "/restaurantcateringsupplies/togoboxes/togoboxes1.jpg",
      description: "To-go boxes and paper bags are a type of packaging that is used to wrap food and other items. It is used to wrap food and other items."
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
            <Link href="/products" className="bg-primary-dark hover:bg-primary-blue text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base">
              View All Products
            </Link>
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
                      alt={product.name}
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
                      {product.name}
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
