'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products / Categories', href: '/products' },
    { name: 'Vendors', href: '/vendor-registration' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-100 py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Logo centered on mobile */}
            <div className="flex justify-center py-2">
              <Link href="/">
                <Image 
                  src="/logo02.png" 
                  alt="logo" 
                  width={100} 
                  height={100} 
                  className="w-20 h-20 object-contain"
                />
              </Link>
            </div>
            {/* Contact info and buttons below logo on mobile */}
            <div className="flex flex-col space-y-2 pb-2 hidden lg:flex">
              <div className="flex flex-col items-center space-y-1 text-primary-dark">
                <div className="flex items-center">
                  <AiFillPhone className="w-4 h-4 mr-1" />
                  <span className="text-primary-dark text-xs">Toll Free : +1 56565 56594</span>
                </div>
                <div className="flex items-center">
                  <AiFillMail className="w-4 h-4 mr-1" />
                  <span className="text-primary-dark text-xs">Email : info@example.com</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2 px-4">
                <button className="bg-primary-blue hover:bg-primary-dark text-white px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200">
                  Request a Quote
                </button>
                <button className="bg-primary-dark hover:bg-primary-blue text-white px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center justify-center">
                  <AiFillLock className="w-4 h-4 mr-1" />
                  Vendor Registration
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center py-2 text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-primary-dark">
              <div className="flex items-center">
          <AiFillPhone className="w-4 h-4 mr-1" />
                <span className="text-primary-dark">Toll Free : +1 56565 56594</span>
              </div>
              <div className="flex items-center">
               <AiFillMail className="w-4 h-4 mr-1" />
                <span className="text-primary-dark">Email : info@example.com</span>
              </div>
            </div>
            
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="/logo02.png" 
                  alt="logo" 
                  width={100} 
                  height={100} 
                  className="w-35 object-contain"
                />
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/contact" className="bg-primary-blue hover:bg-primary-dark text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200">
                Request a Quote
              </Link>
              <Link
                href="/vendor-registration"
                className="bg-primary-dark hover:bg-primary-blue text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <AiFillLock className="w-4 h-4 mr-1" />
                Vendor Registration
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2">

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary-dark px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-blue">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Action Buttons */}
              <div className="pt-4 pb-3 border-t border-primary-blue">
                <Link href="/contact" className="w-full bg-white hover:bg-primary-dark hover:text-white text-primary-blue px-4 py-2 rounded text-sm font-medium mb-2 transition-colors duration-200 block text-center">
                  Request a Quote
                </Link>
                <Link 
                  href="/vendor-registration"
                  className="w-full bg-primary-dark hover:bg-white text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200 block text-center"
                >
                  Vendor Registration
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
