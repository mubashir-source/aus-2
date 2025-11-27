'use client';

import { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, hospitality, construction, corporate offices, educational institutions, and many more. Our diverse product catalog ensures we can meet the unique needs of various business sectors."
    },
    {
      question: "Do you provide custom bundles?",
      answer: "Yes, we offer custom bundle solutions tailored to your specific business needs. Our team works closely with you to create cost-effective packages that include all the products you require for your operations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, bank transfers, purchase orders, and net payment terms for qualified businesses. Our flexible payment options make it easy for businesses of all sizes to work with us."
    },
    {
      question: "Can we return items?",
      answer: "Yes, we have a comprehensive return policy for defective or incorrect items. Returns must be initiated within 30 days of delivery, and items must be in their original condition. Please contact our customer service team to process any returns."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary based on your location and order size. Standard delivery typically takes 3-7 business days, while expedited shipping options are available for urgent orders. We'll provide tracking information once your order ships."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Header Content */}
          <div className="flex items-start flex-col gap-4 justify-center order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-primary-dark mb-4 lg:mb-6 leading-tight">
              Lorem Ipsum Is Simply<br /> <Image src="/restaurantcateringsupplies/restaurantcateringsupplies.png" width={40} height={40} alt="Arrow Right" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-30 lg:h-10 rounded-full inline-block mx-2 object-cover" /> <span className="text-primary-blue">Dummy</span> Text Of
            </h2>
            
            {/* Feature List */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 lg:p-4 shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base lg:text-[18px] font-semibold text-gray-900 mb-1">Lorem Ipsum</h3>
                  <p className="text-gray-600 text-xs lg:text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 lg:p-4 shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base lg:text-[18px] font-semibold text-gray-900 mb-1">Lorem Ipsum</h3>
                  <p className="text-gray-600 text-xs lg:text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white rounded-lg p-3 lg:p-4 shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary-blue rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base lg:text-[18px] font-semibold text-gray-900 mb-1">Lorem Ipsum</h3>
                  <p className="text-gray-600 text-xs lg:text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="order-1 lg:order-2">
          <div className="flex items-center gap-2 mb-4">
              <span className="text-primary-blue text-sm lg:text-[16px] font-medium flex items-center gap-2 bg-primary-blue/50 px-2 py-1 rounded-full">
                <GoDotFill className="text-lg lg:text-xl" /> Frequently Asked Questions
              </span>
            </div>
            <div className="">
              <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-primary-dark mb-2">
                Try Relaxing Accommodations.
              </h3>

              <div className="space-y-2 lg:space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className={`${openFAQ === index ? 'bg-white rounded-lg p-3 lg:p-4 shadow-sm' : 'border-b border-gray-200 p-3 lg:p-4'}`}>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                    >
                      <span className={`text-sm sm:text-base lg:text-[18px] font-semibold ${openFAQ === index ? 'text-primary-blue' : 'text-gray-900'}`}>
                        {faq.question}
                      </span>
                      <span className="text-primary-blue text-lg lg:text-xl font-bold">
                        {openFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFAQ === index && (
                      <div className="mt-3 pt-3 border-t border-gray-100 text-gray-600 text-xs lg:text-[14px] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
