'use client';

import { useState, useEffect } from 'react';
import { 
  BuildingOfficeIcon, 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

interface VendorFormData {
  // Company Information
  companyName: string;
  businessType: string;
  customBusinessType: string;

  
  // Contact Information
  contactPerson: string;
  email: string;
  phone: string;
  
  // Address Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  
  // Procurement Officer Details
  procurementOfficerName: string;
  procurementOfficerEmail: string;
  procurementOfficerPhone: string;
  
  // Agreement
  termsAccepted: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const VendorRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VendorFormData>({
    companyName: '',
    businessType: '',
    customBusinessType: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    procurementOfficerName: '',
    procurementOfficerEmail: '',
    procurementOfficerPhone: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<{[key: string]: boolean}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [states, setStates] = useState<Array<{name: string }>>([]);
  const [loadingStates, setLoadingStates] = useState(false);

  const totalSteps = 3;

  // Fetch US States from API
  const fetchStates = async () => {
    setLoadingStates(true);
    try {
      const xhr = new XMLHttpRequest();
      
      return new Promise((resolve, reject) => {
        xhr.open('GET', 'https://us-states.p.rapidapi.com/basic');
        xhr.setRequestHeader('x-rapidapi-key', '76bfa63c81mshad17837ef2fe086p18ca98jsn90a6771ad7ae');
        xhr.setRequestHeader('x-rapidapi-host', 'us-states.p.rapidapi.com');
        
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              try {
                const data = JSON.parse(xhr.responseText);
                const statesData = data.map((state: any) => ({
                  name: state.name,
                }));
                setStates(statesData);
                resolve(statesData);
              } catch (error) {
                console.error('Error parsing states data:', error);
                reject(error);
              }
            }
            setLoadingStates(false);
          }
        };
        
        xhr.send();
      });
    } catch (error) {
      console.error('Error fetching states:', error);
    } finally {
      setLoadingStates(false);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  // Clear errors when step changes to prevent showing validation errors on untouched fields
  useEffect(() => {
    setErrors({});
  }, [currentStep]);



  const validateStepSilent = (step: number): FormErrors => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1: // Company Information
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
        if (!formData.businessType) newErrors.businessType = 'Business type is required';
        if (formData.businessType === 'other' && !formData.customBusinessType.trim()) {
          newErrors.customBusinessType = 'Please specify your business type';
        }
        break;

      case 2: // Contact & Address
        if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
        break;

      case 3: // Procurement Officer Information
        if (!formData.procurementOfficerName.trim()) newErrors.procurementOfficerName = 'Procurement officer name is required';
        if (!formData.procurementOfficerEmail.trim()) newErrors.procurementOfficerEmail = 'Procurement officer email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.procurementOfficerEmail)) newErrors.procurementOfficerEmail = 'Invalid email format';
        if (!formData.procurementOfficerPhone.trim()) newErrors.procurementOfficerPhone = 'Procurement officer phone is required';
        if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
        break;
    }

    return newErrors;
  };

  const validateStep = (step: number): boolean => {
    const newErrors = validateStepSilent(step);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => {
        const newData = { ...prev, [name]: value };
        
        // Clear custom business type if user changes from "other" to another option
        if (name === 'businessType' && value !== 'other' && prev.businessType === 'other') {
          newData.customBusinessType = '';
        }
        
        return newData;
      });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Clear custom business type error when changing business type
    if (name === 'businessType' && errors.customBusinessType) {
      setErrors(prev => ({ ...prev, customBusinessType: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
  };

  const nextStep = () => {
    const stepErrors = validateStepSilent(currentStep);
    
    if (Object.keys(stepErrors).length === 0) {
      // Clear errors when successfully moving to next step
      setErrors({});
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      // Set errors and mark all fields in current step as touched to show validation errors
      setErrors(stepErrors);
      const stepFields = getStepFields(currentStep);
      const newTouchedFields = { ...touchedFields };
      stepFields.forEach(field => {
        newTouchedFields[field] = true;
      });
      setTouchedFields(newTouchedFields);
    }
  };

  const prevStep = () => {
    // Clear errors when going back to prevent showing errors on untouched fields
    setErrors({});
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    // Allow navigation to any step, but validate current step if moving forward
    if (step >= 1 && step <= totalSteps) {
      if (step > currentStep) {
        // If moving forward, validate current step first
        const stepErrors = validateStepSilent(currentStep);
        if (Object.keys(stepErrors).length > 0) {
          // Show errors and mark fields as touched if validation fails
          setErrors(stepErrors);
          const stepFields = getStepFields(currentStep);
          const newTouchedFields = { ...touchedFields };
          stepFields.forEach(field => {
            newTouchedFields[field] = true;
          });
          setTouchedFields(newTouchedFields);
          return; // Don't navigate if current step has errors
        }
      }
      
      // Clear errors when navigating to prevent showing errors on untouched fields
      setErrors({});
      setCurrentStep(step);
    }
  };

  const getStepFields = (step: number): string[] => {
    switch (step) {
      case 1:
        const step1Fields = ['companyName', 'businessType'];
        if (formData.businessType === 'other') {
          step1Fields.push('customBusinessType');
        }
        return step1Fields;
      case 2:
        return ['contactPerson', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
      case 3:
        return ['procurementOfficerName', 'procurementOfficerEmail', 'procurementOfficerPhone', 'termsAccepted'];
      default:
        return [];
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const stepErrors = validateStepSilent(currentStep);
    
    if (Object.keys(stepErrors).length > 0) {
      // Set errors and mark all fields in current step as touched to show validation errors
      setErrors(stepErrors);
      const stepFields = getStepFields(currentStep);
      const newTouchedFields = { ...touchedFields };
      stepFields.forEach(field => {
        newTouchedFields[field] = true;
      });
      setTouchedFields(newTouchedFields);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Vendor registration submitted:', formData);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting vendor registration:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Thank you for your interest in becoming a vendor partner. We have received your application 
          and our team will review it within 5-7 business days. You will receive an email confirmation 
          shortly with your application reference number.
        </p>
        <div className="bg-primary-blue/5 border border-primary-blue/20 rounded-lg p-4 mb-6">
          <p className="text-primary-dark font-medium">
            Application Reference: VR-{Date.now().toString().slice(-6)}
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setTouchedFields({});
            setErrors({});
            setFormData({
              companyName: '',
              businessType: '',
              customBusinessType: '',
              contactPerson: '',
              email: '',
              phone: '',
              address: '',
              city: '',
              state: '',
              zipCode: '',
              country: 'United States',
              procurementOfficerName: '',
              procurementOfficerEmail: '',
              procurementOfficerPhone: '',
              termsAccepted: false
            });
          }}
          className="bg-primary-blue hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <BuildingOfficeIcon className="w-6 h-6 mr-2 text-primary-blue" />
              Company Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    errors.companyName && touchedFields.companyName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your company name"
                />
                {errors.companyName && touchedFields.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    errors.businessType && touchedFields.businessType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select business type</option>
                  <option value="corporation">Corporation</option>
                  <option value="llc">LLC</option>
                  <option value="partnership">Partnership</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                  <option value="other">Other</option>
                </select>
                {errors.businessType && touchedFields.businessType && <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>}
              </div>
            </div>

            {/* Conditional field for custom business type */}
            {formData.businessType === 'other' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Please Specify Business Type *</label>
                <input
                  type="text"
                  name="customBusinessType"
                  value={formData.customBusinessType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    errors.customBusinessType && touchedFields.customBusinessType ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your business type"
                />
                {errors.customBusinessType && touchedFields.customBusinessType && (
                  <p className="mt-1 text-sm text-red-600">{errors.customBusinessType}</p>
                )}
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <UserIcon className="w-6 h-6 mr-2 text-primary-blue" />
              Contact & Address Information
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Contact Person *</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                  errors.contactPerson && touchedFields.contactPerson ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Full name"
              />
              {errors.contactPerson && touchedFields.contactPerson && <p className="mt-1 text-sm text-red-600">{errors.contactPerson}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                      errors.email && touchedFields.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="contact@company.com"
                  />
                </div>
                {errors.email && touchedFields.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                      errors.phone && touchedFields.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                </div>
                {errors.phone && touchedFields.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                  errors.address && touchedFields.address ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Street address"
              />
              {errors.address && touchedFields.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    errors.city && touchedFields.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="City"
                />
                {errors.city && touchedFields.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loadingStates}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    errors.state && touchedFields.state ? 'border-red-500' : 'border-gray-300'
                  } ${loadingStates ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="">
                    {loadingStates ? 'Loading states...' : 'Select state'}
                  </option>
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
                {errors.state && touchedFields.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                {loadingStates && (
                  <p className="mt-1 text-sm text-gray-500">Loading US states...</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    errors.zipCode && touchedFields.zipCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="12345"
                />
                {errors.zipCode && touchedFields.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <UserIcon className="w-6 h-6 mr-2 text-primary-blue" />
              Procurement Officer Information
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Procurement Officer Name *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="procurementOfficerName"
                  value={formData.procurementOfficerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    errors.procurementOfficerName && touchedFields.procurementOfficerName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Full name of procurement officer"
                />
              </div>
              {errors.procurementOfficerName && touchedFields.procurementOfficerName && <p className="mt-1 text-sm text-red-600">{errors.procurementOfficerName}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Procurement Officer Email *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="procurementOfficerEmail"
                    value={formData.procurementOfficerEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                      errors.procurementOfficerEmail && touchedFields.procurementOfficerEmail ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="procurement@company.com"
                  />
                </div>
                {errors.procurementOfficerEmail && touchedFields.procurementOfficerEmail && <p className="mt-1 text-sm text-red-600">{errors.procurementOfficerEmail}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Procurement Officer Phone *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="procurementOfficerPhone"
                    value={formData.procurementOfficerPhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                      errors.procurementOfficerPhone && touchedFields.procurementOfficerPhone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                </div>
                {errors.procurementOfficerPhone && touchedFields.procurementOfficerPhone && <p className="mt-1 text-sm text-red-600">{errors.procurementOfficerPhone}</p>}
              </div>
            </div>


            {/* Terms and Conditions */}
            <div className="bg-gray-50 p-4 rounded-lg border-t border-gray-200">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                />
                <span className="ml-3 text-sm text-gray-700">
                  I agree to the <a href="#" className="text-primary-blue hover:text-primary-dark">Terms and Conditions</a> and 
                  <a href="#" className="text-primary-blue hover:text-primary-dark ml-1">Privacy Policy</a>. 
                  I understand that this application will be reviewed and I may be contacted for additional information. *
                </span>
              </label>
              {errors.termsAccepted && touchedFields.termsAccepted && <p className="mt-1 text-sm text-red-600">{errors.termsAccepted}</p>}
            </div>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Vendor Registration</h2>
          <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary-blue h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <button
            type="button"
            onClick={() => goToStep(1)}
            className={`transition-colors duration-200 ${
              currentStep === 1 
                ? 'text-primary-blue font-medium' 
                : currentStep > 1 
                  ? 'text-gray-600 hover:text-primary-blue cursor-pointer' 
                  : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            Company Info
          </button>
          <button
            type="button"
            onClick={() => goToStep(2)}
            className={`transition-colors duration-200 ${
              currentStep === 2 
                ? 'text-primary-blue font-medium' 
                : currentStep > 2 
                  ? 'text-gray-600 hover:text-primary-blue cursor-pointer' 
                  : currentStep === 1
                    ? 'text-gray-600 hover:text-primary-blue cursor-pointer'
                    : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            Contact & Address
          </button>
          <button
            type="button"
            onClick={() => goToStep(3)}
            className={`transition-colors duration-200 ${
              currentStep === 3 
                ? 'text-primary-blue font-medium' 
                : currentStep > 3 
                  ? 'text-gray-600 hover:text-primary-blue cursor-pointer' 
                  : currentStep >= 2
                    ? 'text-gray-600 hover:text-primary-blue cursor-pointer'
                    : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            Procurement Officer
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-primary-blue hover:bg-primary-dark text-white rounded-lg font-medium transition-colors duration-200"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-2 bg-primary-blue hover:bg-primary-dark text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationForm;
