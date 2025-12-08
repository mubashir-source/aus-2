import Breadcrumb from "../../components/ui/Breadcrumb";

export default function TermsConditions() {
  const breadcrumbItems = [
    { label: 'Terms & Conditions' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <p className="text-gray-700 mb-6">
                Welcome to Alpha Universal Supplies. These Terms and Conditions ("Terms") govern 
                your use of our website and services. By accessing or using our services, you 
                agree to be bound by these Terms. If you do not agree with any part of these 
                Terms, you may not use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>"Company"</strong> refers to Alpha Universal Supplies</li>
                <li><strong>"Services"</strong> refers to all products, services, and website functionality provided by the Company</li>
                <li><strong>"User"</strong> or "You" refers to any individual or entity using our services</li>
                <li><strong>"Content"</strong> refers to all information, data, text, images, and other materials on our website</li>
                <li><strong>"Agreement"</strong> refers to these Terms and Conditions</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our website or services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and all applicable laws and 
                regulations. These Terms constitute a legally binding agreement between you and 
                Alpha Universal Supplies.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">3. Use of Services</h2>
              
              <h3 className="text-xl font-semibold text-primary-blue mb-3">3.1 Permitted Use</h3>
              <p className="text-gray-700 mb-4">
                You may use our services for lawful business purposes only. You agree to use our 
                services in compliance with all applicable laws and regulations.
              </p>

              <h3 className="text-xl font-semibold text-primary-blue mb-3">3.2 Prohibited Use</h3>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Use our services for any unlawful or fraudulent purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Account Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our services, you may need to create an account. 
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Update your information as necessary to keep it current</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Products and Services</h2>
              
              <h3 className="text-xl font-semibold text-primary-blue mb-3">5.1 Product Information</h3>
              <p className="text-gray-700 mb-4">
                We strive to provide accurate product descriptions and pricing information. 
                However, we do not warrant that product descriptions or other content is 
                accurate, complete, reliable, or error-free.
              </p>

              <h3 className="text-xl font-semibold text-primary-blue mb-3">5.2 Pricing and Availability</h3>
              <p className="text-gray-700 mb-4">
                All prices are subject to change without notice. Product availability is not 
                guaranteed and may vary. We reserve the right to limit quantities and discontinue 
                products at any time.
              </p>

              <h3 className="text-xl font-semibold text-primary-blue mb-3">5.3 Orders and Payment</h3>
              <p className="text-gray-700 mb-4">
                By placing an order, you make an offer to purchase products subject to these Terms. 
                We reserve the right to accept or decline any order. Payment must be made in full 
                before shipment unless other arrangements have been made.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Shipping and Delivery</h2>
              <p className="text-gray-700 mb-4">
                Shipping and delivery terms will be specified at the time of purchase. Delivery 
                dates are estimates and not guaranteed. Risk of loss and title pass to you upon 
                delivery to the carrier.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Returns and Refunds</h2>
              <p className="text-gray-700 mb-4">
                Our return and refund policy will be clearly communicated at the time of purchase. 
                Returns must be made within the specified timeframe and in accordance with our 
                return procedures. Certain products may not be eligible for return.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on our website, including text, graphics, logos, images, and software, 
                is the property of Alpha Universal Supplies or its licensors and is protected by 
                copyright and other intellectual property laws. You may not use, reproduce, or 
                distribute any content without our written permission.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also 
                governs your use of our services, to understand our practices regarding the 
                collection and use of your personal information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">10. Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                Our services are provided "as is" and "as available" without any warranties of 
                any kind, either express or implied. We disclaim all warranties, including but 
                not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, completeness, or reliability of content</li>
                <li>Uninterrupted or error-free service</li>
                <li>Security of data transmission</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Alpha Universal Supplies shall not be 
                liable for any indirect, incidental, special, consequential, or punitive damages, 
                including but not limited to loss of profits, data, or business opportunities, 
                arising from your use of our services.
              </p>
              <p className="text-gray-700 mb-4">
                Our total liability for any claims arising from these Terms or your use of our 
                services shall not exceed the amount you paid for the specific service or product 
                that gave rise to the claim.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">12. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify, defend, and hold harmless Alpha Universal Supplies and 
                its officers, directors, employees, and agents from any claims, damages, losses, 
                or expenses arising from your use of our services or violation of these Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">13. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our services at any time, with or 
                without cause or notice. You may also terminate your account at any time. Upon 
                termination, your right to use our services will cease immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">14. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of 
                [Jurisdiction], without regard to its conflict of law provisions. Any disputes 
                arising from these Terms shall be subject to the exclusive jurisdiction of the 
                courts in [Jurisdiction].
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">15. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of 
                any material changes by posting the updated Terms on our website. Your continued 
                use of our services after such changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">16. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, the 
                remaining provisions will continue to be valid and enforceable to the fullest 
                extent permitted by law.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">17. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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
