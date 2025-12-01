'use client';

import { 
  CheckBadgeIcon, 
  TruckIcon, 
  CurrencyDollarIcon, 
  PhoneIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const VendorRequirements = () => {
  const requirements = [
    {
      icon: CheckBadgeIcon,
      title: "Quality Standards",
      description: "All products must meet our strict quality standards and industry certifications.",
      details: [
        "ISO 9001 certification preferred",
        "Product quality documentation",
        "Regular quality audits",
        "Defect rate below 0.5%"
      ]
    },
    {
      icon: TruckIcon,
      title: "Reliable Supply Chain",
      description: "Consistent inventory levels and reliable delivery schedules are essential.",
      details: [
        "99% on-time delivery rate",
        "Real-time inventory tracking",
        "Multiple distribution centers",
        "Backup supplier arrangements"
      ]
    },
    {
      icon: CurrencyDollarIcon,
      title: "Competitive Pricing",
      description: "Fair and competitive pricing that provides value to our customers.",
      details: [
        "Market-competitive rates",
        "Volume discount structures",
        "Transparent pricing models",
        "Annual price reviews"
      ]
    },
    {
      icon: PhoneIcon,
      title: "Customer Support",
      description: "Responsive customer service and technical support capabilities.",
      details: [
        "24/7 customer support",
        "Technical assistance available",
        "Dedicated account managers",
        "Multi-channel support options"
      ]
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Compliance",
      description: "Full compliance with industry regulations and safety standards.",
      details: [
        "OSHA compliance",
        "Environmental certifications",
        "Industry-specific regulations",
        "Regular compliance audits"
      ]
    },
    {
      icon: BeakerIcon,
      title: "Innovation",
      description: "Commitment to innovation and continuous product improvement.",
      details: [
        "R&D investment",
        "New product development",
        "Technology adoption",
        "Process improvements"
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Financial Stability",
      description: "Strong financial position and business continuity planning.",
      details: [
        "Audited financial statements",
        "Credit rating verification",
        "Business continuity plans",
        "Insurance coverage"
      ]
    },
    {
      icon: GlobeAltIcon,
      title: "Sustainability",
      description: "Environmental responsibility and sustainable business practices.",
      details: [
        "Environmental certifications",
        "Sustainable sourcing",
        "Carbon footprint reduction",
        "Waste management programs"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vendor Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain high standards for our vendor partners to ensure quality, 
            reliability, and exceptional service for our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon;
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-blue/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-blue" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {requirement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {requirement.description}
                  </p>

                  {/* Details */}
                  <div className="w-full">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {requirement.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Requirements & Benefits
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core requirements, we offer comprehensive support and benefits to our vendor partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Documentation Requirements */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                <ClipboardDocumentCheckIcon className="w-5 h-5 mr-2 text-primary-blue" />
                Required Documentation
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                  Business license and registration
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                  Insurance certificates (General liability, Product liability)
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                  Financial statements (Last 3 years)
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                  Product catalogs and specifications
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                  Quality certifications and test reports
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                  References from existing clients
                </li>
              </ul>
            </div>

            {/* Vendor Benefits */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                <GlobeAltIcon className="w-5 h-5 mr-2 text-primary-blue" />
                Vendor Benefits
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-primary-blue flex-shrink-0" />
                  Access to our extensive customer network
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-primary-blue flex-shrink-0" />
                  Marketing and promotional support
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-primary-blue flex-shrink-0" />
                  Dedicated vendor portal and tools
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-primary-blue flex-shrink-0" />
                  Regular business reviews and feedback
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-primary-blue flex-shrink-0" />
                  Training and development opportunities
                </li>
                <li className="flex items-start">
                  <CheckBadgeIcon className="w-4 h-4 mt-0.5 mr-2 text-primary-blue flex-shrink-0" />
                  Long-term partnership agreements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorRequirements;
