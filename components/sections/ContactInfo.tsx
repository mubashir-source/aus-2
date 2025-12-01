'use client';

import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPinIcon,
      title: "Visit Our Office",
      details: [
"15500 Voss Rd Suite 240"
      ],
      action: {
        label: "Get Directions",
        href: "https://maps.app.goo.gl/Q9Pxqk72fgjm3zQu7",
        external: true
      }
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: [
        "+1 56589 54598"
      ],
      action: {
        label: "Call Now",
        href: "tel:+15658954598",
        external: false
      }
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: [
        "General: info@alphauniversalsupplies.com"
      ],
      action: {
        label: "Send Email",
        href: "mailto:info@alphauniversalsupplies.com",
        external: false
      }
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday - Sunday: Closed"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((contact, index) => {
            const IconComponent = contact.icon;
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary-blue" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {contact.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ContactInfo;
