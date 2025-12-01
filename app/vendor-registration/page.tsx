import VendorRegistrationForm from "../../components/forms/VendorRegistrationForm";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendor - Alpha Universal Supplies",
  description: "Join our network of trusted vendor partners. Apply to become a vendor with Alpha Universal Supplies and unlock new opportunities for growth and success.",
};

export default function VendorRegistration() {
  const breadcrumbItems = [
    { label: 'Vendor', href: '/vendor-registration' },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} className="text-white/80" />
          </div>
          
          {/* Header Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vendor Registration</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Join our network of trusted vendor partners and unlock new opportunities for growth and success.
            </p>
          </div>
        </div>
      </section>


      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Application
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete the registration form below to begin the vendor partnership process. 
              Our team will review your application and contact you within 5-7 business days.
            </p>
          </div>
          
          <VendorRegistrationForm />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-blue/5 border border-primary-blue/20 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help with Your Application?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our vendor relations team is here to help you through the application process. 
                Contact us if you have any questions or need assistance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-sm text-gray-600">Vendor Relations: (555) 123-4570</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-sm text-gray-600">vendors@alphauniversal.com</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-sm text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
