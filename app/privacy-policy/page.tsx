import Breadcrumb from "../../components/ui/Breadcrumb";

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { label: 'Privacy Policy' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <p className="text-gray-700 mb-6">
                At Alpha Universal Supplies, we are committed to protecting your privacy and 
                ensuring the security of your personal information. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-primary-blue mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company information and business details</li>
                <li>Account credentials and login information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-blue mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms used</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing orders</li>
                <li>Communicating with you about our products and services</li>
                <li>Responding to your inquiries and customer support requests</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection practices</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, please note that no method of transmission over the internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience 
                and analyze website usage. You can control cookie settings through your browser 
                preferences. Types of cookies we use include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restrict Processing:</strong> Request limitation of data processing</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy, comply with legal obligations, resolve 
                disputes, and enforce our agreements. When we no longer need your information, 
                we will securely delete or anonymize it.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete 
                such information promptly.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your 
                country of residence. We ensure that such transfers comply with applicable data 
                protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or applicable laws. We will notify you of any material changes by 
                posting the updated policy on our website and updating the "Last Updated" date. 
                Your continued use of our services after such changes constitutes acceptance of 
                the updated policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy 
                or our data practices, please contact us:
              </p>
              <div className="bg-primary-blue/10 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> privacy@alphauniversalsupplies.com</p>
                <p className="mb-2"><strong>Phone:</strong> [Phone Number]</p>
                <p className="mb-2"><strong>Address:</strong> [Complete Address]</p>
                <p className="mb-2"><strong>Data Protection Officer:</strong> [DPO Contact Information]</p>
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
