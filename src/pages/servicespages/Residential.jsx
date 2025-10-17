
import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import Footer from '../../footer.jsx';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

const Residential = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { translate, isRTL } = useLanguage();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      {/* Hero Section */}
      <section className="bg-violet-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-violet-700 mb-4">Shoply: Beauty & Wellness</h1>
            <p className="text-lg text-gray-700 mb-6">Pamper yourself with premium beauty products, wellness essentials, and self-care kits. Shoply offers trusted brands, expert advice, and special bundles for your daily routine.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Skincare & Makeup</li>
              <li>Health & Wellness</li>
              <li>Personal Care Devices</li>
              <li>Gift Sets & Bundles</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/src/assets/detailed/Lina Gomez.avif" alt="Beauty & Wellness" className="rounded-lg shadow-lg w-96 h-64 object-cover" />
          </div>
        </div>
      </section>
      {/* Key Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-violet-700 mb-4">Why Shop Beauty at Shoply?</h2>
          <p className="text-base text-gray-600 mb-8">Top brands, expert advice, and exclusive deals for all your wellness needs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-6 rounded-2xl shadow-lg bg-white w-64">
              <h3 className="text-lg font-bold text-violet-700 mb-3">Premium Brands</h3>
              <p className="text-sm text-gray-600">Shop trusted names in beauty and wellness.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg bg-white w-64">
              <h3 className="text-lg font-bold text-violet-700 mb-3">Expert Advice</h3>
              <p className="text-sm text-gray-600">Get tips and recommendations from beauty experts.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg bg-white w-64">
              <h3 className="text-lg font-bold text-violet-700 mb-3">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Enjoy quick and reliable shipping.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg bg-white w-64">
              <h3 className="text-lg font-bold text-violet-700 mb-3">Exclusive Deals</h3>
              <p className="text-sm text-gray-600">Save more with Shoply's special offers.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="bg-violet-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Shop?</h2>
          <p className="text-lg text-violet-100 mb-8">Find your favorite beauty and wellness products at Shoply and enjoy exclusive offers!</p>
          <button className="bg-white text-violet-700 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-violet-100 transition-colors duration-300 transform hover:scale-105">
            Start Shopping
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Residential;