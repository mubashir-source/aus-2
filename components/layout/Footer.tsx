import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuMail, LuMapPinned } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 d:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
<Image src="/logo03.png" alt="Logo" width={100} height={100} unoptimized quality={100} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Alpha Universal Supplies is a trusted wholesale distributor providing 
              high-quality products and exceptional service to businesses across 
              multiple industries and corporate organizations.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-blue transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-blue transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal-notice" className="text-gray-300 hover:text-primary-blue transition-colors text-sm">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-primary-blue transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-300 hover:text-primary-blue transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              {/* Customer Support */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
<LuMapPinned className="w-5 h-5 text-primary-blue" />
                </div>
                <div>
                  <h5 className="text-white font-medium text-[14px] mb-1">Address</h5>
                  <span className="text-white font-semibold text-[16px]">15500 Voss Rd Suite 240</span>
                </div>
              </div>

              {/* Drop Us an Email */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <LuMail className="w-5 h-5 text-primary-blue" />
                </div>
                <div>
                  <h5 className="text-white font-medium text-[14px] mb-1">Drop Us an Email</h5>
                  <span className="text-white font-semibold text-[16px]">info@aus.com</span>
                </div>
              </div>

              {/* Toll Free */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-white font-medium text-[14px] mb-1">Customer Service</h5>
                  <span className="text-white font-semibold text-[16px]">+1 56569 54698</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              Copyright © 2025. All Rights Reserved. <Link href="#" className="text-white hover:underline">Alpha Universal Supplies</Link>
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="social-icon-link w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primary-blue transition-all duration-300">
                <FaFacebook className="w-4 h-4 text-primary-blue transition-all duration-300" />
              </a>
              <a href="#" className="social-icon-link w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primary-blue transition-all duration-300">
                <FaInstagram className="w-4 h-4 text-primary-blue transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
