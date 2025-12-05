"use client";

import { useState, useEffect } from "react";

import {
  BuildingOfficeIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

interface VendorFormData {
  // Company Information
  companyName: string;
  businessType: string;
  customBusinessType: string;
  // Contact Information
  firstName: string;
  lastName: string;
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

interface ApiError {
  success: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

const VendorRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VendorFormData>({
    companyName: "",
    businessType: "",
    customBusinessType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    procurementOfficerName: "",
    procurementOfficerEmail: "",
    procurementOfficerPhone: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submittedResellerId, setSubmittedResellerId] = useState<string>("");
  const [states, setStates] = useState<Array<{ name: string }>>([]);
  const [loadingStates, setLoadingStates] = useState(false);

  const totalSteps = 3;

  // API Configuration
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  // Fetch US States from API
  const fetchStates = async () => {
    setLoadingStates(true);
    try {
      const xhr = new XMLHttpRequest();
      return new Promise((resolve, reject) => {
        xhr.open(
          "GET",
          "https://api.countrystatecity.in/v1/countries/US/states"
        );
        xhr.setRequestHeader(
          "X-CSCAPI-KEY",
          "cmZMb2d5Mld4MVRveDB5SzVCMXpLa0hLeFZBQkhsU29GTE1FU05LNA=="
        );
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
                console.error("Error parsing states data:", error);
                reject(error);
              }
            }
            setLoadingStates(false);
          }
        };
        xhr.send();
      });
    } catch (error) {
      console.error("Error fetching states:", error);
    } finally {
      setLoadingStates(false);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => {
        const newData = { ...prev, [name]: value };
        // Clear custom business type if user changes from "other" to another option
        if (
          name === "businessType" &&
          value !== "other" &&
          prev.businessType === "other"
        ) {
          newData.customBusinessType = "";
        }
        return newData;
      });
    }
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.companyName.trim() !== "" &&
          formData.businessType !== "" &&
          (formData.businessType !== "other" ||
            formData.customBusinessType.trim() !== "")
        );
      case 2:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.address.trim() !== "" &&
          formData.city.trim() !== "" &&
          formData.state !== "" &&
          formData.zipCode.trim() !== ""
        );
      case 3:
        return (
          formData.procurementOfficerName.trim() !== "" &&
          formData.procurementOfficerEmail.trim() !== "" &&
          formData.procurementOfficerPhone.trim() !== "" &&
          formData.termsAccepted
        );
      default:
        return true;
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  // Transform form data to match API requirements
  const transformFormDataForAPI = () => {
    return {
      companyName: formData.companyName.trim(),
      businessType: formData.businessType === "other" 
        ? formData.customBusinessType.trim() 
        : formData.businessType,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      state: formData.state,
      zipCode: formData.zipCode.trim(),
      procurementName: formData.procurementOfficerName.trim(),
      procurementEmail: formData.procurementOfficerEmail.trim().toLowerCase(),
      procurementPhone: formData.procurementOfficerPhone.trim(),
      termAccepted: formData.termsAccepted
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If not on the final step, behave like nextStep function
    if (currentStep < totalSteps) {
      if (validateCurrentStep()) {
        nextStep();
      } else {
        // Show validation message for current step
        alert("Please fill in all required fields before proceeding.");
      }
      return;
    }

    // Validate final step before submission
    if (!validateCurrentStep()) {
      alert(
        "Please fill in all required fields and accept the terms and conditions."
      );
      return;
    }

    // Clear previous errors
    setSubmissionError(null);
    setValidationErrors({});
    setIsSubmitting(true);

    try {
      const apiData = transformFormDataForAPI();
      
      const response = await fetch(`${API_BASE_URL}/api/resellers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success
        console.log("Reseller registration submitted:", result);
        setSubmittedResellerId(result.data.reseller._id);
        setIsSubmitted(true);
      } else {
        // Handle API errors
        if (result.errors && Array.isArray(result.errors)) {
          // Handle validation errors
          const fieldErrors: Record<string, string> = {};
          result.errors.forEach((error: any) => {
            if (error.path) {
              fieldErrors[error.path] = error.msg;
            }
          });
          setValidationErrors(fieldErrors);
          setSubmissionError("Please correct the validation errors below.");
        } else {
          // Handle general errors
          setSubmissionError(result.message || "An error occurred while submitting your application.");
        }
      }
    } catch (error) {
      console.error("Error submitting reseller registration:", error);
      setSubmissionError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Thank you for your interest in becoming a reseller partner. We have
          received your application and our team will review it within 5-7
          business days. You will receive an email confirmation shortly with
          your application reference number.
        </p>
        <div className="bg-primary-blue/5 border border-primary-blue/20 rounded-lg p-4 mb-6">
          <p className="text-primary-dark font-medium">
            Application Reference: {submittedResellerId}
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setSubmittedResellerId("");
            setSubmissionError(null);
            setValidationErrors({});
            setFormData({
              companyName: "",
              businessType: "",
              customBusinessType: "",
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              address: "",
              city: "",
              state: "",
              zipCode: "",
              country: "United States",
              procurementOfficerName: "",
              procurementOfficerEmail: "",
              procurementOfficerPhone: "",
              termsAccepted: false,
            });
          }}
          className="bg-primary-blue hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  const renderFieldError = (fieldName: string) => {
    if (validationErrors[fieldName]) {
      return (
        <p className="mt-1 text-sm text-red-600">
          {validationErrors[fieldName]}
        </p>
      );
    }
    return null;
  };

  const getFieldClassName = (fieldName: string, baseClassName: string) => {
    return validationErrors[fieldName] 
      ? `${baseClassName} border-red-300 focus:ring-red-500 focus:border-red-500`
      : baseClassName;
  };

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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={getFieldClassName("companyName", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                  placeholder="Your company name"
                />
                {renderFieldError("companyName")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={getFieldClassName("businessType", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                >
                  <option value="">Select business type</option>
                  <option value="corporation">Corporation</option>
                  <option value="llc">LLC</option>
                  <option value="partnership">Partnership</option>
                  <option value="sole-proprietorship">
                    Sole Proprietorship
                  </option>
                  <option value="other">Other</option>
                </select>
                {renderFieldError("businessType")}
              </div>
            </div>
            {/* Conditional field for custom business type */}
            {formData.businessType === "other" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please Specify Business Type *
                </label>
                <input
                  type="text"
                  name="customBusinessType"
                  value={formData.customBusinessType}
                  onChange={handleChange}
                  className={getFieldClassName("customBusinessType", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                  placeholder="Enter your business type"
                />
                {renderFieldError("customBusinessType")}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={getFieldClassName("firstName", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                  placeholder="First name"
                />
                {renderFieldError("firstName")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={getFieldClassName("lastName", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                  placeholder="Last name"
                />
                {renderFieldError("lastName")}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={getFieldClassName("email", "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                    placeholder="contact@company.com"
                  />
                </div>
                {renderFieldError("email")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={getFieldClassName("phone", "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                    placeholder="(555) 123-4567"
                  />
                </div>
                {renderFieldError("phone")}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={getFieldClassName("address", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                placeholder="Street address"
              />
              {renderFieldError("address")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={getFieldClassName("city", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                  placeholder="City"
                />
                {renderFieldError("city")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={loadingStates}
                  className={getFieldClassName("state", `w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200 ${
                    loadingStates ? "opacity-50 cursor-not-allowed" : ""
                  }`)}
                >
                  <option value="">
                    {loadingStates ? "Loading states..." : "Select state"}
                  </option>
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
                {loadingStates && (
                  <p className="mt-1 text-sm text-gray-500">
                    Loading US states...
                  </p>
                )}
                {renderFieldError("state")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={getFieldClassName("zipCode", "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors duration-200")}
                  placeholder="12345"
                />
                {renderFieldError("zipCode")}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Procurement Officer Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="procurementOfficerName"
                  value={formData.procurementOfficerName}
                  onChange={handleChange}
                  className={getFieldClassName("procurementName", "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent")}
                  placeholder="Full name"
                />
              </div>
              {renderFieldError("procurementName")}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Procurement Officer Email *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="procurementOfficerEmail"
                  value={formData.procurementOfficerEmail}
                  onChange={handleChange}
                  className={getFieldClassName("procurementEmail", "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent")}
                  placeholder="officer@company.com"
                />
              </div>
              {renderFieldError("procurementEmail")}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Procurement Officer Phone *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="procurementOfficerPhone"
                  value={formData.procurementOfficerPhone}
                  onChange={handleChange}
                  className={getFieldClassName("procurementPhone", "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent")}
                  placeholder="(555) 987-6543"
                />
              </div>
              {renderFieldError("procurementPhone")}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={`h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue ${
                  validationErrors["termAccepted"] ? "border-red-300" : ""
                }`}
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the terms and conditions *
              </label>
            </div>
            {renderFieldError("termAccepted")}
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
          <h2 className="text-2xl font-bold text-gray-900">
            Vendor Registration
          </h2>
          <span className="text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </span>
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
                ? "text-primary-blue font-medium"
                : currentStep > 1
                ? "text-gray-600 hover:text-primary-blue cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            Company Info
          </button>
          <button
            type="button"
            onClick={() => goToStep(2)}
            className={`transition-colors duration-200 ${
              currentStep === 2
                ? "text-primary-blue font-medium"
                : currentStep > 2
                ? "text-gray-600 hover:text-primary-blue cursor-pointer"
                : currentStep === 1
                ? "text-gray-600 hover:text-primary-blue cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            Contact & Address
          </button>
          <button
            type="button"
            onClick={() => goToStep(3)}
            className={`transition-colors duration-200 ${
              currentStep === 3
                ? "text-primary-blue font-medium"
                : currentStep > 3
                ? "text-gray-600 hover:text-primary-blue cursor-pointer"
                : currentStep >= 2
                ? "text-gray-600 hover:text-primary-blue cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            }`}
          >
            Procurement Officer
          </button>
        </div>
      </div>

      {/* Error Message */}
      {submissionError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Submission Error
              </h3>
              <div className="mt-2 text-sm text-red-700">
                {submissionError}
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {renderStepContent()}

        <div className="flex justify-between mt-8">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-primary-blue hover:bg-primary-dark text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? "Submitting..."
              : currentStep === totalSteps
              ? "Submit Application"
              : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationForm;
