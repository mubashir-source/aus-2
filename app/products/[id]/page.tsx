'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from "../../../components/ui/Breadcrumb";
import Image from 'next/image';

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const [selectedType, setSelectedType] = useState<string>('');
  const [currentImage, setCurrentImage] = useState<string>('');
  
  const breadcrumbItems = [
    { label: 'Products', href: '/products' },
    { label: 'Product Details' }
  ];

  // All products data (in real app, this would be fetched from API)
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
      description: "Automatic digital blood pressure monitor with memory function, large display, and WHO classification indicator.",
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

  // Find current product (in real app, this would be fetched by ID)
  const productId = parseInt(id);
  const baseProduct = allProducts.find(p => p.id === productId);
  
  // If product not found, show the first product as fallback
  const selectedProduct = baseProduct || allProducts[0];
  
  // Get product-specific features and specifications
  const getProductDetails = (product: any) => {
    switch (product.id) {
      case 1: // Disinfectants liquid
        return {
          features: [
            "EPA approved formula",
            "Kills 99.9% of germs and bacteria",
            "Safe for multiple surfaces",
            "Quick-drying formula",
            "Pleasant lemon fragrance",
            "Hospital-grade disinfection"
          ],
          specifications: {
            "Volume": "1 Liter",
            "Active Ingredients": "70% Isopropyl Alcohol",
            "Surface Types": "Hard surfaces, glass, metal",
            "Drying Time": "30 seconds",
            "Fragrance": "Lemon Fresh",
            "Certification": "EPA Registered"
          }
        };
      case 2: // Sanitizing wipes
        return {
          features: [
            "Pre-moistened for convenience",
            "Kills 99.9% of germs in 15 seconds",
            "Alcohol-free formula",
            "Safe for electronics",
            "Resealable packaging",
            "Lint-free material"
          ],
          specifications: {
            "Count": "80 wipes per pack",
            "Size": "7\" x 8\" per wipe",
            "Active Ingredient": "Benzalkonium Chloride",
            "Fragrance": "Fresh Clean",
            "Packaging": "Resealable flip-top",
            "Shelf Life": "2 years"
          }
        };
      case 3: // Safety Gloves
        return {
          features: [
            "Cut-resistant Level A4 protection",
            "Superior grip in wet conditions",
            "Breathable back-of-hand design",
            "Touchscreen compatible fingertips",
            "Machine washable",
            "ANSI/ISEA 105 certified"
          ],
          specifications: {
            "Material": "HPPE with nitrile coating",
            "Cut Level": "ANSI A4",
            "Sizes": "S, M, L, XL, XXL",
            "Color": "Gray with black coating",
            "Certification": "ANSI/ISEA 105",
            "Gauge": "13-gauge knit"
          }
        };
      case 4: // Safety Helmets
        return {
          features: [
            "Type I Class E electrical protection",
            "Reverse donning capability",
            "6-point suspension system",
            "Accessory slots for attachments",
            "UV-resistant shell material",
            "Meets ANSI Z89.1 standards"
          ],
          specifications: {
            "Material": "High-density polyethylene",
            "Weight": "14 oz",
            "Electrical Class": "Class E (20,000V)",
            "Shell Colors": "White, Yellow, Orange, Blue",
            "Suspension": "6-point ratchet",
            "Standards": "ANSI Z89.1-2014"
          }
        };
      case 5: // Printer Cartridges
        return {
          features: [
            "High-yield capacity (500+ pages)",
            "Fade-resistant pigment ink",
            "Compatible with major brands",
            "Chip-enabled for accurate levels",
            "ISO 9001 certified manufacturing",
            "100% satisfaction guarantee"
          ],
          specifications: {
            "Page Yield": "Black: 550 pages, Color: 300 pages",
            "Ink Type": "Pigment-based",
            "Compatibility": "HP, Canon, Epson, Brother",
            "Shelf Life": "24 months unopened",
            "Operating Temperature": "15°C to 35°C",
            "Warranty": "12 months"
          }
        };
      case 6: // Printer Paper
        return {
          features: [
            "99.99% jam-free guarantee",
            "Acid-free for archival quality",
            "Optimized for inkjet & laser",
            "FSC certified sustainable sourcing",
            "Ultra-smooth surface finish",
            "Static-free performance"
          ],
          specifications: {
            "Weight": "20 lb (75 gsm)",
            "Size": "8.5\" x 11\" (Letter)",
            "Brightness": "96 bright",
            "Opacity": "94%",
            "Sheets per Ream": "500 sheets",
            "Case Quantity": "10 reams"
          }
        };
      case 7: // Disposable Gloves
        return {
          features: [
            "Powder-free and latex-free",
            "Textured fingertips for grip",
            "Ambidextrous design",
            "Chemical resistant",
            "FDA approved for food contact",
            "Beaded cuff prevents rollback"
          ],
          specifications: {
            "Material": "100% Nitrile rubber",
            "Thickness": "4.0 mil fingertips, 3.5 mil palm",
            "Length": "9.5 inches",
            "Sizes": "XS, S, M, L, XL",
            "Color": "Blue",
            "Packaging": "100 gloves per box"
          }
        };
      case 8: // Surgical Masks
        return {
          features: [
            "3-layer filtration system",
            "BFE ≥95% bacterial filtration",
            "Fluid-resistant outer layer",
            "Soft non-woven inner layer",
            "Adjustable nose bridge",
            "Latex-free ear loops"
          ],
          specifications: {
            "Filtration Efficiency": "≥95% BFE, ≥95% PFE",
            "Material": "Non-woven polypropylene",
            "Size": "17.5cm x 9.5cm",
            "Color": "Blue with white inner",
            "Packaging": "50 masks per box",
            "Standards": "ASTM F2100 Level 1"
          }
        };
      case 9: // Foil & Plastic Wrap
        return {
          features: [
            "Heavy-duty 18\" width",
            "Superior cling technology",
            "Microwave and freezer safe",
            "Easy-tear perforated edge",
            "BPA-free plastic formula",
            "Recyclable aluminum foil"
          ],
          specifications: {
            "Foil Thickness": "0.7 mil heavy duty",
            "Plastic Thickness": "0.5 mil cling wrap",
            "Width": "18 inches",
            "Length": "Foil: 500 ft, Plastic: 2000 ft",
            "Temperature Range": "-40°F to 400°F",
            "Food Safe": "FDA approved"
          }
        };
      case 10: // To-go boxes, paper bags
        return {
          features: [
            "Leak-resistant design",
            "Microwave and freezer safe",
            "Compostable and biodegradable",
            "Grease-resistant coating",
            "Stackable for easy storage",
            "Multiple size options"
          ],
          specifications: {
            "Material": "Kraft paperboard with PLA lining",
            "Sizes": "16oz, 26oz, 32oz containers",
            "Bag Sizes": "#2, #4, #6, #8",
            "Color": "Natural kraft brown",
            "Temperature Rating": "Up to 220°F",
            "Certification": "BPI Compostable"
          }
        };
      default:
        return {
          features: [
            "High-quality construction",
            "Professional grade",
            "Reliable performance",
            "Cost-effective",
            "Easy to use",
            "Durable materials"
          ],
          specifications: {
            "Quality": "Premium grade",
            "Warranty": "Standard warranty",
            "Usage": "Professional/Commercial",
            "Certification": "Industry standard"
          }
        };
    }
  };

  const productDetails = getProductDetails(selectedProduct);
  
  // Complete product with dynamic details
  const product = {
    ...selectedProduct,
    features: productDetails.features,
    specifications: productDetails.specifications
  };

  // Initialize selected type and current image
  useEffect(() => {
    if (product.types && product.types.length > 0) {
      setSelectedType(product.types[0].name);
      setCurrentImage(product.types[0].image);
    } else {
      setCurrentImage(product.image);
    }
  }, [product.id]); // Only re-run when product ID changes, not when product object changes

  // Handle type selection
  const handleTypeChange = (typeName: string) => {
    setSelectedType(typeName);
    const selectedTypeData = product.types?.find(type => type.name === typeName);
    if (selectedTypeData) {
      setCurrentImage(selectedTypeData.image);
    }
  };

  // Get current type description
  const getCurrentTypeDescription = () => {
    if (product.types && selectedType) {
      const currentType = product.types.find(type => type.name === selectedType);
      return currentType?.description || product.description;
    }
    return product.description;
  };

  // Get related products from the same category
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Show up to 4 related products

  return (
    <div>
      {/* Page Header */}
      <section className="bg-linear-to-r from-primary-blue to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} className="text-white/80" />
          </div>
          
          {/* Header Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              {product.category}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              {currentImage && (currentImage.startsWith('/') || currentImage.startsWith('http')) ? (
                <Image 
                  key={currentImage} // Force re-render when image changes
                  src={currentImage} 
                  alt={`${product.name}${selectedType ? ` - ${selectedType}` : ''}`} 
                  unoptimized 
                  quality={100} 
                  width={500} 
                  height={400} 
                  className="w-full rounded-lg sticky top-35" 
                />
              ) : (
                <div className="text-9xl text-gray-400">{currentImage || product.image}</div>
              )}
            </div>
            

            {/* Product Info */}
            <div>
              <span className="inline-block bg-primary-blue/10 text-primary-blue text-sm px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>

              {/* Type Selection Buttons */}
              {product.types && product.types.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {product.types.map((type) => (
                      <button
                        key={type.name}
                        onClick={() => handleTypeChange(type.name)}
                        className={`relative group overflow-hidden rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                          selectedType === type.name
                            ? 'border-primary-blue ring-2 ring-primary-blue/20 shadow-lg'
                            : 'border-gray-200 hover:border-primary-blue/50'
                        }`}
                      >
                        {/* Background Image */}
                        <div 
                          className="h-20 sm:h-24 bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${type.image})`
                          }}
                        />
                        
                        {/* Type Name Overlay - Shows on Hover */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white font-medium text-sm text-center px-2">
                            {type.name}
                          </span>
                        </div>
                        
                        {/* Selected Indicator */}
                        {selectedType === type.name && (
                          <div className="absolute top-2 right-2">
                            <div className="w-5 h-5 bg-primary-blue rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        )}
                        
                        {/* Bottom Label - Always Visible */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-1">
                          <span className="text-xs font-medium text-gray-800 block text-center truncate">
                            {type.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {getCurrentTypeDescription()}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="/vendor-registration"
                  className="bg-primary-blue text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-semibold text-center"
                >
                  Vendor Registration
                </Link>
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-semibold text-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Vendor Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Vendor Registration Required
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        To purchase products, you must first register as a vendor. This ensures we can provide you with the best pricing and service for your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specifications</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Products</h2>
              <p className="text-xl text-gray-600">
                More products from {product.category}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    {relatedProduct.image.startsWith('/') || relatedProduct.image.startsWith('http') ? (
                      <Image 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        unoptimized 
                        quality={100} 
                        width={300} 
                        height={200} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="text-6xl text-gray-400">{relatedProduct.image}</div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <span className="inline-block bg-primary-blue/10 text-primary-blue text-xs px-2 py-1 rounded-full mb-2">
                      {relatedProduct.category}
                    </span> 
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    
                    {/* Action */}
                    <div className="flex justify-end">
                      <Link 
                        href={`/products/${relatedProduct.id}`}
                        className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 inline-block text-center text-sm"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
