import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
const categories = [
  {
    id: 1,
    title: "Corporate & Office Supplies",
    description: "Complete range of office essentials and corporate supplies",
    image: "/corporateofficesupplies/corporateofficesupplies.png",
    items: ["Stationery", "Office Furniture", "Electronics"],
  },
  {
    id: 2,
    title: "Medical Supplies & PPE",
    description: "Essential medical equipment and personal protective equipment",
    image: "/medicalsupplies/medicalsupplies.png",
    items: ["PPE Equipment", "Medical Devices", "Healthcare Supplies"],
  },
  {
    id: 3,
    title: "Restaurant & Catering Supplies",
    description: "Professional kitchen equipment and catering essentials",
    image: "/restaurantcateringsupplies/restaurantcateringsupplies.png",
    items: ["Kitchen Equipment", "Catering Supplies", "Food Service"],
  },
  {
    id: 4,
    title: "Cleaning Products",
    description: "Industrial and commercial cleaning solutions",
    image: "/cleaningproducts/cleaningproducts.png",
    items: ["Industrial Cleaners", "Janitorial Supplies", "Sanitizers"],
  },
  {
    id: 5,
    title: "Construction & Maintenance",
    description: "Tools and materials for construction and maintenance projects",
    image: "/constructionmaintenance/constructionmaintenance.png",
    items: ["Construction Tools", "Safety Equipment", "Maintenance Supplies"],
  },
];
const AboutCat = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 gap-6 lg:gap-0">
          <div>
            <div className="flex items-center mb-2 ">
              <span className="text-primary-blue text-sm lg:text-[16px] font-medium flex items-center gap-2 bg-primary-blue/50 px-2 py-1 rounded-full">
                {" "}
                <GoDotFill className="text-lg lg:text-xl" /> Featured Categories
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-4">
              Supplying Every Industry with Excellence
            </h2>
            <p className="text-gray-600 text-sm lg:text-[16px] max-w-3xl">
              From healthcare - construction firms and offices to medical
              facilities - we connect businesses with the products they need to
              operate efficiently, cost-effectively and successfully.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary-blue hover:bg-primary-dark text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base">
              View All Categories
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform h-48 sm:h-56 lg:h-64 group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Hover Arrow Link - Right Side */}
              <div className="absolute right-2 sm:right-4 bottom-4 sm:bottom-7 transform -translate-y-1/2 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <div className="bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-primary-blue p-2 sm:p-3 rounded-full transition-all duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white w-[90%]">
                <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold mb-1 sm:mb-2 leading-tight">
                  {category.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-[14px] opacity-90">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutCat;
