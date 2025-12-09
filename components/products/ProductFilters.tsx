'use client';

import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface ProductFiltersProps {
  onSearchChange: (search: string) => void;
  onCategoriesChange: (categories: string[]) => void;
  selectedCategories: string[];
  searchTerm: string;
}

const ProductFilters = ({ 
  onSearchChange, 
  onCategoriesChange, 
  selectedCategories, 
  searchTerm 
}: ProductFiltersProps) => {
  const categories = [
    'Corporate & Office Supplies',
    'Medical Supplies & PPE',
    'Restaurant & Catering Supplies',
    'Cleaning Products',
    'Construction & Maintenance'
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      onCategoriesChange([...selectedCategories, category]);
    } else {
      onCategoriesChange(selectedCategories.filter(c => c !== category));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
      <div className="flex items-center mb-6">
        <FunnelIcon className="h-5 w-5 text-primary-blue mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Products
        </label>
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Categories
        </label>
        <div className="grid grid-cols-1 gap-2  overflow-y-auto">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer p-2 hover:bg-white rounded transition-colors">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => handleCategoryChange(category, e.target.checked)}
                className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700 hover:text-primary-blue">
                {category}
              </span>
            </label>
          ))}
        </div>
        {selectedCategories.length > 0 && (
          <div className="mt-2 text-xs text-gray-500">
            {selectedCategories.length} categor{selectedCategories.length === 1 ? 'y' : 'ies'} selected
          </div>
        )}
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          onSearchChange('');
          onCategoriesChange([]);
        }}
        className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default ProductFilters;
