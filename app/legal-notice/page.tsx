import Breadcrumb from "../../components/ui/Breadcrumb";

export default function LegalNotice() {
  const breadcrumbItems = [
    { label: 'Legal Notice' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Notice</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Important legal information about Alpha Universal Supplies and our services.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Notice Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Company Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Company Name:</strong> Alpha Universal Supplies</p>
                <p className="mb-2"><strong>Legal Form:</strong> [Company Type]</p>
                <p className="mb-2"><strong>Registration Number:</strong> [Registration Number]</p>
                <p className="mb-2"><strong>VAT Number:</strong> [VAT Number]</p>
                <p className="mb-2"><strong>Registered Office:</strong> [Complete Address]</p>
                <p className="mb-2"><strong>Phone:</strong> [Phone Number]</p>
                <p className="mb-2"><strong>Email:</strong> [Email Address]</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Responsible for Content</h2>
              <p className="text-gray-700 mb-4">
                The content of this website is the responsibility of:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Name:</strong> [Responsible Person Name]</p>
                <p className="mb-2"><strong>Position:</strong> [Position/Title]</p>
                <p className="mb-2"><strong>Address:</strong> [Address]</p>
                <p className="mb-2"><strong>Email:</strong> [Email Address]</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The information contained in this website is for general information purposes only. 
                While we endeavor to keep the information up to date and correct, we make no 
                representations or warranties of any kind, express or implied, about the completeness, 
                accuracy, reliability, suitability, or availability with respect to the website or 
                the information, products, services, or related graphics contained on the website 
                for any purpose.
              </p>
              <p className="text-gray-700 mb-4">
                Any reliance you place on such information is therefore strictly at your own risk. 
                In no event will we be liable for any loss or damage including without limitation, 
                indirect or consequential loss or damage, or any loss or damage whatsoever arising 
                from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">External Links</h2>
              <p className="text-gray-700 mb-4">
                Through this website, you are able to link to other websites which are not under 
                the control of Alpha Universal Supplies. We have no control over the nature, 
                content, and availability of those sites. The inclusion of any links does not 
                necessarily imply a recommendation or endorse the views expressed within them.
              </p>
              <p className="text-gray-700 mb-4">
                Every effort is made to keep the website up and running smoothly. However, 
                Alpha Universal Supplies takes no responsibility for, and will not be liable for, 
                the website being temporarily unavailable due to technical issues beyond our control.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including but not limited to text, graphics, logos, 
                images, audio clips, digital downloads, data compilations, and software, is the 
                property of Alpha Universal Supplies or its content suppliers and is protected 
                by copyright laws.
              </p>
              <p className="text-gray-700 mb-4">
                The compilation of all content on this site is the exclusive property of 
                Alpha Universal Supplies and is protected by copyright laws. All software used 
                on this site is the property of Alpha Universal Supplies or its software suppliers 
                and is protected by copyright laws.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                This legal notice and any disputes arising out of or related to it shall be 
                governed by and construed in accordance with the laws of [Jurisdiction], 
                without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Legal Notice, please contact us at:
              </p>
              <div className="bg-primary-blue/10 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> legal@alphauniversalsupplies.com</p>
                <p className="mb-2"><strong>Phone:</strong> [Phone Number]</p>
                <p className="mb-2"><strong>Address:</strong> [Complete Address]</p>
              </div>
            </div>

            <div className="text-sm text-gray-500 border-t pt-6">
              <p>Last updated: [Date]</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
