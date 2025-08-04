"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
            <div className="flex items-center animate-fadeInLeft">
              <span className="text-2xl font-bold">Lyf :)</span>
              <span className="ml-2 text-gray-600">/</span>
              <span className="ml-2 text-gray-600">lsurance@tiropay.au</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 animate-fadeInRight">
              <Link href="/real-estate" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105">Real Estate</Link>
              <Link href="/greenbloom" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105">GreenBloom</Link>
              <button className="text-gray-600 border-gray-300 border-2 px-6 py-2 rounded-full hover:text-gray-900 transition-colors duration-300">Log In</button>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center animate-fadeInRight">
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
              <Link 
                href="/real-estate" 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Real Estate
              </Link>
              <Link 
                href="/greenbloom" 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                GreenBloom
              </Link>
              <div className="px-4 space-y-3">
                <button className="w-full text-gray-600 border-gray-300 border-2 px-6 py-3 rounded-full hover:text-gray-900 hover:bg-gray-50 transition-all duration-300">
                  Log In
                </button>
                <button className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
          Life Planning, Making<br />
          Easy to Turn Dreams a Reality.
        </h1>
        <p className="text-xl text-gray-600 mb-12 animate-fadeInUp animate-delay-200">
          Get Exclusive offers on purchase of any plans
        </p>
        
        {/* Email Signup */}
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-16 animate-fadeInUp animate-delay-400">
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 hover:shadow-lg focus:scale-105"
            />
            <span className="absolute left-2 top-3 text-gray-400 ">📧</span>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Sign Up
          </button>
        </div>
      </section>

      {/* Featured Plans Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center mb-8 animate-fadeInUp animate-delay-600">
          <h2 className="text-3xl font-bold text-gray-900">Featured Plans</h2>
          <button className="text-gray-600 hover:text-gray-900 flex items-center transition-all duration-300 hover:scale-105">
            Explore All
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Money Momentum Plan */}
          <div className="bg-[#5fcba0] rounded-2xl p-6 text-white relative overflow-hidden animate-scaleIn animate-delay-200 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-sm font-medium mb-2 opacity-80">STRATEGY</div>
            <h3 className="text-2xl font-bold mb-4">Money Momentum</h3>
            <p className="text-sm mb-6 opacity-90">
              Trpd Premium helps you start saver investments insights covering.
            </p>
            <div className="mb-4">
              <div className="text-sm opacity-80">3 yrs CAGR</div>
              <div className="text-3xl font-bold">7.20%</div>
            </div>
            <button className="absolute bottom-6 right-6 bg-black bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Long-Term Plan */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden animate-scaleIn animate-delay-400 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-sm font-medium mb-2 opacity-80">PLANS</div>
            <h3 className="text-2xl font-bold mb-4">Long-Term</h3>
            <p className="text-sm mb-6 opacity-90">
              Create a vision. To get started, imagine your dream life.
            </p>
            <div className="mb-4">
              <div className="text-sm opacity-80">25 yrs CAGR</div>
              <div className="text-3xl font-bold">14.20%</div>
            </div>
            <button className="absolute bottom-6 right-6 bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Focussed Plan */}
          <div className="bg-[#cb9bfb] rounded-2xl p-6 text-white relative overflow-hidden animate-scaleIn animate-delay-600 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-sm font-medium mb-2 opacity-80">STRATEGY</div>
            <h3 className="text-2xl font-bold mb-4">Focussed</h3>
            <p className="text-sm mb-6 opacity-90">
              Be focussed Life planning, however, can serve as a roadmap or guide.
            </p>
            <div className="mb-4">
              <div className="text-sm opacity-80">1 yr returns</div>
              <div className="text-3xl font-bold">11.20%</div>
            </div>
            <button className="absolute bottom-6 right-6 bg-black bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Fixed Income Plan */}
          <div className="bg-yellow-300 rounded-2xl p-6 text-gray-900 relative overflow-hidden animate-scaleIn animate-delay-800 hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="text-sm font-medium mb-2 opacity-80">PLANS</div>
            <h3 className="text-2xl font-bold mb-4">Fixed Income</h3>
            <p className="text-sm mb-6 opacity-90">
              Get multiple benefits, and lumpsum option & Guaranteed Returns
            </p>
            <div className="mb-4">
              <div className="text-sm opacity-80">5 yrs CAGR</div>
              <div className="text-3xl font-bold">8.20%</div>
            </div>
            <button className="absolute bottom-6 right-6 bg-black bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 sm:mb-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105">Terms Policy</Link>
              <span className="text-gray-400">•</span>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105">Customer Story</Link>
            </div>
            <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
