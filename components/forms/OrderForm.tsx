'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface OrderFormProps {
  onSubmit: (orderData: any) => void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [productQuantities, setProductQuantities] = useState<{ [key: number]: number }>({});
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    company: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
    email: ''
  });

  // Categories data
  const categories = [
    'Corporate & Office Supplies',
    'Medical Supplies & PPE',
    'Restaurant & Catering Supplies',
    'Cleaning Products',
    'Construction & Maintenance',
    'Industrial Equipment',
    'Technology Solutions'
  ];

  // Products data
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Professional Office Chair",
      category: "Corporate & Office Supplies",
      image: "🪑",
      description: "Ergonomic office chair with lumbar support"
    },
    {
      id: 2,
      name: "Industrial Safety Helmet",
      category: "Construction & Maintenance",
      image: "⛑️",
      description: "OSHA compliant safety helmet"
    },
    {
      id: 3,
      name: "Digital Blood Pressure Monitor",
      category: "Medical Supplies & PPE",
      image: "🩺",
      description: "Automatic digital blood pressure monitor"
    },
    {
      id: 4,
      name: "Power Drill Set",
      category: "Construction & Maintenance",
      image: "🔧",
      description: "Cordless power drill with multiple bits"
    },
    {
      id: 5,
      name: "Business Laptop Computer",
      category: "Technology Solutions",
      image: "💻",
      description: "High-performance business laptop"
    },
    {
      id: 6,
      name: "Industrial Vacuum Cleaner",
      category: "Cleaning Products",
      image: "🧹",
      description: "Heavy-duty vacuum cleaner"
    },
    {
      id: 7,
      name: "Stainless Steel Kitchen Equipment",
      category: "Restaurant & Catering Supplies",
      image: "🍳",
      description: "Professional-grade kitchen equipment"
    },
    {
      id: 8,
      name: "N95 Respirator Masks (Box of 50)",
      category: "Medical Supplies & PPE",
      image: "😷",
      description: "NIOSH-approved N95 respirator masks"
    }
  ];

  // Filter products based on selected categories
  const availableProducts = selectedCategories.length > 0 
    ? allProducts.filter(product => selectedCategories.includes(product.category))
    : [];

  // Handle category selection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      // Clear selected products if categories change
      if (newCategories.length !== prev.length) {
        setSelectedProducts([]);
        setProductQuantities({});
      }
      
      return newCategories;
    });
  };

  // Handle product selection
  const handleProductToggle = (productId: number) => {
    setSelectedProducts(prev => {
      const newProducts = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      
      // Initialize quantity for newly selected products
      if (!prev.includes(productId)) {
        setProductQuantities(prevQty => ({
          ...prevQty,
          [productId]: 1
        }));
      } else {
        // Remove quantity for deselected products
        setProductQuantities(prevQty => {
          const newQty = { ...prevQty };
          delete newQty[productId];
          return newQty;
        });
      }
      
      return newProducts;
    });
  };

  // Handle quantity change
  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity > 0) {
      setProductQuantities(prev => ({
        ...prev,
        [productId]: quantity
      }));
    }
  };

  // Handle shipping address change
  const handleAddressChange = (field: string, value: string) => {
    setShippingAddress(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      categories: selectedCategories,
      products: selectedProducts.map(id => ({
        ...allProducts.find(p => p.id === id),
        quantity: productQuantities[id] || 1
      })),
      shippingAddress,
      totalItems: Object.values(productQuantities).reduce((sum, qty) => sum + qty, 0)
    };
    
    onSubmit(orderData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      {/* Categories Selection */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Categories</h3>
        <p className="text-gray-600 mb-6">Choose one or more categories for your order</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryToggle(category)}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedCategories.includes(category)
                  ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-primary-blue/50 hover:bg-primary-blue/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{category}</span>
                {selectedCategories.includes(category) && (
                  <div className="w-5 h-5 bg-primary-blue rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {selectedCategories.length > 0 && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-medium">
              ✓ {selectedCategories.length} categor{selectedCategories.length === 1 ? 'y' : 'ies'} selected
            </p>
          </div>
        )}
      </div>

      {/* Products Selection */}
      {selectedCategories.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Products</h3>
          <p className="text-gray-600 mb-6">Choose products from your selected categories</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableProducts.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => handleProductToggle(product.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  selectedProducts.includes(product.id)
                    ? 'border-primary-blue bg-primary-blue/10'
                    : 'border-gray-200 bg-white hover:border-primary-blue/50 hover:bg-primary-blue/5'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{product.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`font-medium ${
                          selectedProducts.includes(product.id) ? 'text-primary-blue' : 'text-gray-900'
                        }`}>
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                      </div>
                      {selectedProducts.includes(product.id) && (
                        <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {selectedProducts.length > 0 && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 font-medium">
                ✓ {selectedProducts.length} product{selectedProducts.length === 1 ? '' : 's'} selected
              </p>
            </div>
          )}
        </div>
      )}

      {/* Product Quantities */}
      {selectedProducts.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Quantities</h3>
          <div className="space-y-4">
            {selectedProducts.map((productId) => {
              const product = allProducts.find(p => p.id === productId);
              if (!product) return null;
              
              return (
                <div key={productId} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center flex-1">
                    <span className="text-3xl mr-4">{product.image}</span>
                    <div>
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={productQuantities[productId] || 1}
                      onChange={(e) => handleQuantityChange(productId, parseInt(e.target.value))}
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Shipping Address */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              required
              value={shippingAddress.fullName}
              onChange={(e) => handleAddressChange('fullName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              value={shippingAddress.company}
              onChange={(e) => handleAddressChange('company', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1 *</label>
            <input
              type="text"
              required
              value={shippingAddress.addressLine1}
              onChange={(e) => handleAddressChange('addressLine1', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
            <input
              type="text"
              value={shippingAddress.addressLine2}
              onChange={(e) => handleAddressChange('addressLine2', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
            <input
              type="text"
              required
              value={shippingAddress.city}
              onChange={(e) => handleAddressChange('city', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State/Province *</label>
            <input
              type="text"
              required
              value={shippingAddress.state}
              onChange={(e) => handleAddressChange('state', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code *</label>
            <input
              type="text"
              required
              value={shippingAddress.zipCode}
              onChange={(e) => handleAddressChange('zipCode', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
            <select
              required
              value={shippingAddress.country}
              onChange={(e) => handleAddressChange('country', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="JP">Japan</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              value={shippingAddress.phone}
              onChange={(e) => handleAddressChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              required
              value={shippingAddress.email}
              onChange={(e) => handleAddressChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={selectedProducts.length === 0 || !shippingAddress.fullName}
          className="bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Place Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
