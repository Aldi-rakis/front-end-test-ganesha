"use client";
import Image from "next/image";
import Link from "next/link";
import gedung from '@/asset/gedung.jpg';
import { useState } from "react";

export default function RealEstate() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm animate-slideInDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center animate-fadeInLeft">
              <span className="text-2xl font-bold text-gray-900">FUNDOME</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 animate-fadeInUp animate-delay-200">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Home</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About Us</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Divisions</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Careers</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact Us</Link>
            </nav>

            {/* Right Side - Desktop Login & Mobile Hamburger */}
            <div className="flex items-center">
              {/* Desktop Login Button */}
              <div className="hidden md:flex items-center animate-fadeInRight">
                <button className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                  Login / Register
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="md:hidden flex items-center animate-fadeInRight">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <nav className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Home</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">About Us</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Divisions</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Careers</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact Us</Link>
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full text-center text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-300">
                Login / Register
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-items-start overflow-hidden">
        {/* Background Building Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={gedung}
            alt="Building Background"
            layout="fill"
            objectFit="cover"
            priority
            className="z-0"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-4 md:mx-10 lg:mx-20 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Call to Action Button */}
            <div className="mb-8 animate-fadeInUp">
              <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="text-sm font-medium">Start investing in less than 5 minutes</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fadeInUp animate-delay-200">
              Real estate that<br />
              <span className="text-indigo-600">works for you</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 leading-relaxed animate-fadeInUp animate-delay-400">
              The easy to use, hassle-free way to build a global real estate<br />
              portfolio and start earning monthly returns today
            </p>

            {/* Learn More Button */}
            <div className="animate-fadeInUp animate-delay-600">
              <button className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span>Learn More</span>
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-blue-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-800">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Setup</h3>
              <p className="text-gray-600">Get started in less than 5 minutes with our streamlined process</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-1000">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Returns</h3>
              <p className="text-gray-600">Earn consistent monthly returns from your real estate investments</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-1200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Portfolio</h3>
              <p className="text-gray-600">Diversify with properties from around the world</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
