'use client';

import { useState } from 'react';
import Breadcrumb from "../../components/ui/Breadcrumb";
import OrderForm from "../../components/forms/OrderForm";

export default function Order() {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  const breadcrumbItems = [
    { label: 'Order', href: '/order' }
  ];

  const handleOrderSubmit = (data: any) => {
    setOrderData(data);
    setOrderSubmitted(true);
    
    // Here you would typically send the order to your backend
    console.log('Order submitted:', data);
  };

  if (orderSubmitted) {
    return (
      <div>
        {/* Page Header */}
        <section className="bg-linear-to-r from-primary-blue to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Breadcrumb items={breadcrumbItems} className="text-white/80" />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Confirmation</h1>
              <p className="text-xl max-w-3xl mx-auto text-white/90">
                Thank you for your order! We'll process it and get back to you soon.
              </p>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Submitted Successfully!</h2>
                <p className="text-gray-600">We've received your order and will contact you within 24 hours.</p>
              </div>

              {/* Order Details */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-6">
                  {/* Products */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Products ({orderData?.totalItems} items)</h4>
                    <div className="space-y-3">
                      {orderData?.products?.map((product: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{product.image}</span>
                            <div>
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">{product.category}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-gray-900">Qty: {product.quantity}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Shipping Address</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-gray-900">
                        <div className="font-medium">{orderData?.shippingAddress?.fullName}</div>
                        {orderData?.shippingAddress?.company && (
                          <div>{orderData.shippingAddress.company}</div>
                        )}
                        <div>{orderData?.shippingAddress?.addressLine1}</div>
                        {orderData?.shippingAddress?.addressLine2 && (
                          <div>{orderData.shippingAddress.addressLine2}</div>
                        )}
                        <div>
                          {orderData?.shippingAddress?.city}, {orderData?.shippingAddress?.state} {orderData?.shippingAddress?.zipCode}
                        </div>
                        <div>{orderData?.shippingAddress?.country}</div>
                        <div className="mt-2 text-sm text-gray-600">
                          <div>Phone: {orderData?.shippingAddress?.phone}</div>
                          <div>Email: {orderData?.shippingAddress?.email}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-blue text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</div>
                    <div>Our team will review your order and prepare a detailed quote</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-blue text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</div>
                    <div>We'll contact you within 24 hours to confirm details and pricing</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary-blue text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</div>
                    <div>Once approved, we'll process your order and arrange shipping</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => {
                    setOrderSubmitted(false);
                    setOrderData(null);
                  }}
                  className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
                >
                  Place Another Order
                </button>
                <button
                  onClick={() => window.location.href = '/products'}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-linear-to-r from-primary-blue to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} className="text-white/80" />
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Place Your Order</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Select your products and provide shipping details to complete your order.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OrderForm onSubmit={handleOrderSubmit} />
        </div>
      </section>
    </div>
  );
}
