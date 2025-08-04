"use client";
import Image from "next/image";
import { useState } from "react";

export default function GreenBloom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm animate-slideInDown relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center animate-fadeInLeft">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">GREENBLOOM</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 animate-fadeInUp animate-delay-200">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Our Work</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Career</a>
            </nav>

            {/* Desktop Right Side Icons */}
            <div className="hidden lg:flex items-center space-x-4 animate-fadeInRight">
              {/* Shopping Cart */}
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L9 21h6M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>

              {/* Search */}
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Profile */}
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Icons and Hamburger */}
            <div className="lg:hidden flex items-center space-x-2 animate-fadeInRight">
              {/* Mobile Shopping Cart */}
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L9 21h6M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button 
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}>
            <div className="py-4 space-y-4 border-t border-gray-200">
              <a 
                href="/" 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Career
              </a>
              <div className="px-4 flex items-center space-x-4 pt-2">
                {/* Mobile Search */}
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Mobile Profile */}
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 to-gray-100">
        {/* Plant Image Background */}
        <div className="absolute right-0 top-0 w-3/5 h-full">
          <div className="relative w-full h-full">
            {/* Plant Illustration */}
            <div className="absolute inset-0 bg-gradient-to-l from-green-100 via-green-50 to-transparent">
              {/* Large Plant Leaves */}
              <div className="absolute bottom-0 right-0 w-full h-full animate-fadeInRight animate-delay-800">
                {/* Main Plant Structure */}
                <div className="relative w-full h-full">
                  {/* Large Leaves */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className={`absolute bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-scaleIn`}
                      style={{
                        width: `${120 + i * 20}px`,
                        height: `${60 + i * 10}px`,
                        bottom: `${20 + i * 8}%`,
                        right: `${10 + i * 5}%`,
                        transform: `rotate(${-20 + i * 15}deg)`,
                        animationDelay: `${1.0 + (i * 0.1)}s`,
                        opacity: 0.8 - (i * 0.1)
                      }}
                    ></div>
                  ))}
                  
                  {/* Smaller accent leaves */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={`small-${i}`}
                      className={`absolute bg-gradient-to-br from-green-300 to-green-500 rounded-full animate-fadeInUp`}
                      style={{
                        width: `${40 + i * 15}px`,
                        height: `${25 + i * 8}px`,
                        bottom: `${40 + i * 12}%`,
                        right: `${5 + i * 8}%`,
                        transform: `rotate(${30 - i * 20}deg)`,
                        animationDelay: `${1.2 + (i * 0.15)}s`,
                        opacity: 0.6
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fadeInUp">
              FIND BEAUTIFUL <span className="text-green-600">PLANTS</span><br />
              ONLY AT <span className="text-green-600">GREENBLOOM</span>
            </h1>

            {/* Description */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 animate-fadeInUp animate-delay-400">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <p className="text-xl text-gray-600 leading-relaxed">
                  GreenBloom sells beautiful plants<br />
                  that will liven up your space.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Get started
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300 hover:scale-105">
                    Explore now
                  </button>
                </div>
              </div>

              {/* Featured Plant Card */}
              <div className="lg:w-1/3 animate-scaleIn animate-delay-800">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">KALANCHOE</h3>
                      <p className="text-gray-500">Blossfeldiana</p>
                    </div>
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                      {/* Plant Icon */}
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 1.5a.5.5 0 01.5.5v1.25c0 .414.336.75.75.75H14a.5.5 0 010 1h-.75a1.75 1.75 0 01-1.75-1.75V2a.5.5 0 01.5-.5zM8 1.5a.5.5 0 01.5.5v1.25c0 .414.336.75.75.75H10a.5.5 0 010 1H9.25A1.75 1.75 0 017.5 3.25V2a.5.5 0 01.5-.5zM4 1.5a.5.5 0 01.5.5v1.25c0 .414.336.75.75.75H6a.5.5 0 010 1H5.25A1.75 1.75 0 013.5 3.25V2a.5.5 0 01.5-.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <button className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-green-300 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GreenBloom?</h2>
            <p className="text-xl text-gray-600">We provide the best quality plants for your home and garden</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-400">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Hand-picked plants with guaranteed quality and health certification</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-600">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and safe delivery to your doorstep with proper plant care</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-800">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 plant care support and guidance from our expert team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
