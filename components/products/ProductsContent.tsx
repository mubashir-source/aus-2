'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Decode the category parameter and set it as selected
      const decodedCategory = decodeURIComponent(categoryParam);
      setSelectedCategories([decodedCategory]);
    }
  }, [searchParams]);

  // Sample products data - catalog information only
  const allProducts = [
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
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left Sidebar - Filters */}
      <div className="lg:col-span-1">
        <ProductFilters
          onSearchChange={setSearchTerm}
          onCategoriesChange={setSelectedCategories}
          selectedCategories={selectedCategories}
          searchTerm={searchTerm}
        />
      </div>

      {/* Right Side - Product Grid */}
      <div className="lg:col-span-3">
        <ProductGrid
          products={allProducts}
          searchTerm={searchTerm}
          selectedCategories={selectedCategories}
        />
      </div>
    </div>
  );
}
