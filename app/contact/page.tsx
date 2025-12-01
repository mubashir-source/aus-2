import ContactForm from "../../components/forms/ContactForm";
import ContactInfo from "../../components/sections/ContactInfo";
import Breadcrumb from "../../components/ui/Breadcrumb";

export default function Contact() {
  const breadcrumbItems = [
    { label: 'Contact Us' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              We're here to help! Reach out to us for any questions, inquiries, or to discuss your supply needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <ContactInfo />

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50">
        <div className="w-full h-96 md:h-[500px] lg:h-[600px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.566671456402!2d-95.66013992368188!3d29.645326437369008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e0c7f55eaaab%3A0xbd95d10c55b9c70!2s15500%20Voss%20Rd%20Suite%20240%2C%20Sugar%20Land%2C%20TX%2077498%2C%20USA!5e0!3m2!1sen!2s!4v1764617563845!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
