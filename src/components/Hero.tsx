// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-16">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional
              <span className="text-yellow-400 block">Sofa Cleaning</span>
              Services
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Restore your furniture to its original beauty with our expert cleaning services. 
              Safe, effective, and guaranteed results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Book Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                Free Estimate
              </button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex items-center sm:flex-col lg:flex-row">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-0 lg:mr-3">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">Same Day</p>
                  <p className="text-blue-100 text-sm">Service Available</p>
                </div>
              </div>
              
              <div className="flex items-center sm:flex-col lg:flex-row">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-0 lg:mr-3">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">100% Safe</p>
                  <p className="text-blue-100 text-sm">Eco-Friendly</p>
                </div>
              </div>
              
              <div className="flex items-center sm:flex-col lg:flex-row">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-0 lg:mr-3">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">Guaranteed</p>
                  <p className="text-blue-100 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Clean modern sofa"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-400 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
      
      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;