'use client';

import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      {/* Home Icon */}
      <Link 
        href="/" 
        className="text-white hover:text-white transition-colors duration-200"
        aria-label="Home"
      >
        <HomeIcon className="w-4 h-4" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          
          {item.href && index < items.length - 1 ? (
            <Link 
              href={item.href}
              className="text-white hover:text-white transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-semibold">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
