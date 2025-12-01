'use client';

import { 
  UsersIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  AcademicCapIcon,
  BanknotesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const VendorBenefits = () => {
  const benefits = [
    {
      icon: UsersIcon,
      title: "Extensive Customer Network",
      description: "Access to our diverse customer base across multiple industries and regions.",
      features: [
        "10,000+ active customers",
        "Multiple industry verticals",
        "B2B and B2G opportunities",
        "Growing customer base"
      ],
      color: "bg-blue-500"
    },
    {
      icon: ChartBarIcon,
      title: "Business Growth Support",
      description: "Comprehensive support to help grow your business and expand market reach.",
      features: [
        "Market insights and analytics",
        "Sales forecasting tools",
        "Performance dashboards",
        "Growth strategy consultation"
      ],
      color: "bg-green-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Marketing & Promotion",
      description: "Co-marketing opportunities and promotional support to increase brand visibility.",
      features: [
        "Featured vendor spotlights",
        "Trade show participation",
        "Digital marketing support",
        "Product catalog inclusion"
      ],
      color: "bg-purple-500"
    },
    {
      icon: CogIcon,
      title: "Technology Integration",
      description: "Advanced technology tools and seamless integration capabilities.",
      features: [
        "Vendor portal access",
        "API integration support",
        "Real-time inventory sync",
        "Automated order processing"
      ],
      color: "bg-indigo-500"
    },
    {
      icon: AcademicCapIcon,
      title: "Training & Development",
      description: "Ongoing training programs and professional development opportunities.",
      features: [
        "Product training sessions",
        "Sales methodology training",
        "Industry best practices",
        "Certification programs"
      ],
      color: "bg-orange-500"
    },
    {
      icon: BanknotesIcon,
      title: "Financial Benefits",
      description: "Competitive terms and financial advantages for our vendor partners.",
      features: [
        "Competitive commission rates",
        "Fast payment processing",
        "Volume-based incentives",
        "Financial planning support"
      ],
      color: "bg-emerald-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Risk Management",
      description: "Comprehensive risk management and business protection services.",
      features: [
        "Credit protection services",
        "Market risk analysis",
        "Compliance support",
        "Business continuity planning"
      ],
      color: "bg-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Vendor Partners", description: "Trusted vendors in our network" },
    { number: "98%", label: "Partner Satisfaction", description: "Vendor satisfaction rate" },
    { number: "$50M+", label: "Annual Volume", description: "Combined vendor sales volume" },
    { number: "15+", label: "Years Experience", description: "Average partnership duration" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of successful vendor partners and unlock new opportunities 
            for growth, innovation, and long-term success.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-blue/5 rounded-lg p-6 mb-4">
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group hover:bg-white"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-primary-blue to-primary-dark rounded-lg p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Vendor Success Stories
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Hear from our successful vendor partners about their experience and growth with Alpha Universal Supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp Solutions",
                growth: "300% increase in sales",
                quote: "Partnering with Alpha Universal has transformed our business. Their extensive customer network and support have been invaluable.",
                person: "Sarah Johnson, CEO"
              },
              {
                company: "Industrial Pro",
                growth: "Expanded to 5 new markets",
                quote: "The marketing support and business insights have helped us identify new opportunities and grow strategically.",
                person: "Mike Chen, Sales Director"
              },
              {
                company: "MedSupply Plus",
                growth: "50% reduction in admin costs",
                quote: "Their technology platform and automated processes have streamlined our operations significantly.",
                person: "Dr. Emily Rodriguez, COO"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-1">{story.company}</h4>
                  <p className="text-white/80 text-sm font-medium">{story.growth}</p>
                </div>
                <blockquote className="text-white/90 text-sm mb-4 italic">
                  "{story.quote}"
                </blockquote>
                <cite className="text-white/70 text-xs">— {story.person}</cite>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process Preview */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started as a vendor partner is straightforward. Our streamlined process 
              ensures quick evaluation and onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Complete our comprehensive vendor registration form with your company details.",
                icon: "📝"
              },
              {
                step: "2",
                title: "Initial Review",
                description: "Our team reviews your application and conducts initial qualification assessment.",
                icon: "🔍"
              },
              {
                step: "3",
                title: "Evaluation & Interview",
                description: "Detailed evaluation of your capabilities and strategic alignment interview.",
                icon: "💼"
              },
              {
                step: "4",
                title: "Partnership Launch",
                description: "Upon approval, we establish partnership agreement and begin collaboration.",
                icon: "🚀"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Ready to become a vendor partner? Start your application today!
            </p>
            <button className="bg-primary-blue hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Application Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorBenefits;
