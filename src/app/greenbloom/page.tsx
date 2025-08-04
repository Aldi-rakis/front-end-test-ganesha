"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import plant from '@/asset/plant.jpg';

export default function GreenBloom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm animate-slideInDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center animate-fadeInLeft">
              <div className="w-8 h-8 bg-[#788f71] rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">GREENBLOOM</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 animate-fadeInUp animate-delay-200">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Home</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Our Work</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Service</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Career</Link>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4 animate-fadeInRight">
              {/* Shopping Cart */}
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L9 21h6M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-[#788f71] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
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

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <nav className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Home</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">About</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Our Work</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Service</Link>
            <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors duration-300">Career</Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 to-gray-100">
        
        <div className="flex flex-col items-center justify-center w-full h-full text-center">
            <div className="flex flex-row justify-between gap-10 items-center mb-8 w-full max-w-7xl mx-auto">
                <div className="text-left">
                    <h1 className="text-5xl mx-4 font-extrabold text-gray-900 leading-tight mb-2 animate-fadeInUp">
                        FIND BEAUTIFUL PLANTS<br />ONLY AT GREENBLOOM
                    </h1>
                </div>
                <div className="flex flex-col items-start  rounded-2xl px-2 py-6 ml-8 animate-fadeInRight">
                    <p className="text-lg text-start text-gray-600 mb-6">
                        GreenBloom sells beautiful plants that will liven up your space.
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-6 py-2 bg-[#788f71] text-white rounded-full font-semibold shadow hover:bg-green-700 transition-colors duration-300">
                            Get started
                        </button>
                        <button className="px-6 py-2 border border-[#788f71] text-[#788f71] rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
                            Explore now
                        </button>
                    </div>
                </div>
            </div>
           
           
            <div className="w-full h-[600px] lg:h-[400px] relative mb-16 animate-fadeInUp animate-delay-400
                sm:h-[600px] xs:h-screen">
                <Image
                    src={plant}
                    alt="GreenBloom Hero"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                    priority
                />
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

      {/* Popular Plants Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Plants</h2>
            <p className="text-xl text-gray-600">Our bestselling plants that customers love</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Plant Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scaleIn animate-delay-200">
              <div className="w-full h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.5a.5.5 0 01.5.5v1.25c0 .414.336.75.75.75H14a.5.5 0 010 1h-.75a1.75 1.75 0 01-1.75-1.75V2a.5.5 0 01.5-.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Snake Plant</h3>
              <p className="text-gray-600 mb-4">Perfect for beginners</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$29</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Plant Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scaleIn animate-delay-400">
              <div className="w-full h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 1.5a.5.5 0 01.5.5v1.25c0 .414.336.75.75.75H10a.5.5 0 010 1H9.25A1.75 1.75 0 017.5 3.25V2a.5.5 0 01.5-.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monstera</h3>
              <p className="text-gray-600 mb-4">Instagram favorite</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$45</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Plant Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scaleIn animate-delay-600">
              <div className="w-full h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 1.5a.5.5 0 01.5.5v1.25c0 .414.336.75.75.75H6a.5.5 0 010 1H5.25A1.75 1.75 0 013.5 3.25V2a.5.5 0 01.5-.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fiddle Leaf Fig</h3>
              <p className="text-gray-600 mb-4">Statement piece</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$89</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Plant Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scaleIn animate-delay-800">
              <div className="w-full h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.5a.5.5 0 01.5.5v1.25c0 .414.336.75.75.75H14a.5.5 0 010 1h-.75a1.75 1.75 0 01-1.75-1.75V2a.5.5 0 01.5-.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Peace Lily</h3>
              <p className="text-gray-600 mb-4">Air purifying</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">$35</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
