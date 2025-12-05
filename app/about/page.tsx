import AboutSection from "../../components/sections/AboutSection";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Howitsection from "../../components/sections/Howitsection";
import AboutCat from "../../components/sections/AboutCat";
import FAQAbout from "../../components/sections/FAQAbout";
import TestimonialAbout from "@/components/sections/TestimonialAbout";
export default function About() {
  const breadcrumbItems = [
    { label: 'About Us' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Learn more about Alpha Universal Supplies and our commitment to excellence in providing quality products and services.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <AboutSection />

      <Howitsection />
      <AboutCat />
      <TestimonialAbout />
      <FAQAbout />
    </div>
  );
}
