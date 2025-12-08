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
      name: "Professional Office Chair",
      category: "Corporate & Office Supplies",
      image: "🪑",
      description: "Ergonomic office chair with lumbar support, adjustable height, and premium leather upholstery. Perfect for long work sessions."
    },
    {
      id: 2,
      name: "Industrial Safety Helmet",
      category: "Construction & Maintenance",
      image: "⛑️",
      description: "OSHA compliant safety helmet with adjustable suspension system, ventilation, and high-impact resistance."
    },
    {
      id: 3,
      name: "Digital Blood Pressure Monitor",
      category: "Medical Supplies & PPE",
      image: "🩺",
      description: "Automatic digital blood pressure monitor with memory function, large display, and WHO classification indicator."
    },
    {
      id: 4,
      name: "Power Drill Set",
      category: "Construction & Maintenance",
      image: "🔧",
      description: "Cordless power drill with multiple bits, carrying case, and long-lasting battery. Ideal for professional use."
    },
    {
      id: 5,
      name: "Business Laptop Computer",
      category: "Technology Solutions",
      image: "💻",
      description: "High-performance business laptop with Intel i5 processor, 8GB RAM, 256GB SSD, and 14-inch display."
    },
    {
      id: 6,
      name: "Industrial Vacuum Cleaner",
      category: "Cleaning Products",
      image: "🧹",
      description: "Heavy-duty vacuum cleaner for commercial and industrial use with powerful suction and large capacity."
    },
    {
      id: 7,
      name: "Stainless Steel Kitchen Equipment",
      category: "Restaurant & Catering Supplies",
      image: "🍳",
      description: "Professional-grade stainless steel kitchen equipment set including prep tables, storage, and cooking surfaces."
    },
    {
      id: 8,
      name: "N95 Respirator Masks (Box of 50)",
      category: "Medical Supplies & PPE",
      image: "😷",
      description: "NIOSH-approved N95 respirator masks providing 95% filtration efficiency. Box of 50 masks."
    },
    {
      id: 9,
      name: "Executive Desk Set",
      category: "Corporate & Office Supplies",
      image: "🗃️",
      description: "Premium executive desk with built-in storage, cable management, and matching accessories for professional offices."
    },
    {
      id: 10,
      name: "Industrial Floor Scrubber",
      category: "Cleaning Products",
      image: "🧽",
      description: "Commercial floor scrubber with rotating brushes and water recovery system for large area cleaning."
    },
    {
      id: 11,
      name: "Surgical Gloves (Box of 100)",
      category: "Medical Supplies & PPE",
      image: "🧤",
      description: "Sterile latex-free surgical gloves with textured grip. Powder-free and suitable for medical procedures."
    },
    {
      id: 12,
      name: "Concrete Mixer",
      category: "Construction & Maintenance",
      image: "🏗️",
      description: "Portable concrete mixer with electric motor, ideal for small to medium construction projects."
    },
    {
      id: 13,
      name: "Server Rack Cabinet",
      category: "Technology Solutions",
      image: "🖥️",
      description: "42U server rack cabinet with ventilation, cable management, and locking front and rear doors."
    },
    {
      id: 14,
      name: "Commercial Refrigerator",
      category: "Restaurant & Catering Supplies",
      image: "❄️",
      description: "Stainless steel commercial refrigerator with glass doors, LED lighting, and digital temperature control."
    },
    {
      id: 15,
      name: "Conference Table",
      category: "Corporate & Office Supplies",
      image: "🪑",
      description: "Large conference table with integrated power outlets and cable management for modern meeting rooms."
    },
    {
      id: 16,
      name: "Pressure Washer",
      category: "Cleaning Products",
      image: "💦",
      description: "High-pressure washer with adjustable nozzles and detergent tank for industrial cleaning applications."
    },
    {
      id: 17,
      name: "Defibrillator Unit",
      category: "Medical Supplies & PPE",
      image: "⚡",
      description: "Automated external defibrillator with voice prompts and LCD display for emergency medical response."
    },
    {
      id: 18,
      name: "Scaffolding System",
      category: "Construction & Maintenance",
      image: "🏗️",
      description: "Modular aluminum scaffolding system with safety rails and platform decks for construction work."
    },
    {
      id: 19,
      name: "Network Switch",
      category: "Technology Solutions",
      image: "🔌",
      description: "24-port managed network switch with PoE+ support and advanced security features."
    },
    {
      id: 20,
      name: "Commercial Oven",
      category: "Restaurant & Catering Supplies",
      image: "🔥",
      description: "Double-deck convection oven with steam injection and programmable controls for professional kitchens."
    },
    {
      id: 21,
      name: "Filing Cabinet",
      category: "Corporate & Office Supplies",
      image: "🗄️",
      description: "4-drawer locking filing cabinet with full-extension slides and anti-tip mechanism."
    },
    {
      id: 22,
      name: "Floor Buffer",
      category: "Cleaning Products",
      image: "✨",
      description: "High-speed floor buffer with variable speed control and interchangeable pads for floor maintenance."
    },
    {
      id: 23,
      name: "Oxygen Concentrator",
      category: "Medical Supplies & PPE",
      image: "🫁",
      description: "Portable oxygen concentrator with battery backup and continuous flow capability for patient care."
    },
    {
      id: 24,
      name: "Welding Equipment",
      category: "Construction & Maintenance",
      image: "🔥",
      description: "Professional MIG welding machine with digital display and multiple welding modes for metal fabrication."
    },
    {
      id: 25,
      name: "Projector System",
      category: "Technology Solutions",
      image: "📽️",
      description: "4K laser projector with wireless connectivity and ceiling mount for conference rooms and presentations."
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
