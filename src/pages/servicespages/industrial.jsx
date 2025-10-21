import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import Footer from '../../footer.jsx';
import { useLanguage } from '../../contexts/LanguageContext';

const EcommerceDashboard = () => (
  <div className="bg-white rounded-2xl shadow p-6 mb-8">
    <h2 className="font-bold text-2xl text-gray-800 mb-2">
      Orders This Year: <span className="text-violet-600">12,000</span>
    </h2>
    <div className="flex gap-4 mt-4">
      <button className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold">Today</button>
      <button className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold">This Week</button>
      <button className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold">This Month</button>
      <button className="bg-violet-700 text-white px-4 py-2 rounded-full font-semibold shadow-lg">Year Overview</button>
    </div>
    <div className="mt-8">
      <h3 className="font-bold text-xl text-gray-800 mb-4">Year Overview</h3>
      {/* Replace with your chart library or SVG for orders overview */}
      <div className="w-full h-48 bg-gradient-to-t from-violet-100 to-violet-300 rounded-xl flex items-end">
        {/* Example placeholder for chart line: use violet */}
        <svg width="100%" height="100%" viewBox="0 0 400 100">
          <path d="M0,80 Q50,40 100,60 Q150,80 200,40 Q250,80 300,60 Q350,40 400,80" stroke="#7C3AED" strokeWidth="3" fill="url(#violetGradient)" />
          <defs>
            <linearGradient id="violetGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

const Industrial = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isRTL } = useLanguage();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <EcommerceDashboard />
      {/* Hero Section */}
      <section className="bg-violet-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-violet-700 mb-4">Shoply: Electronics & Gadgets</h1>
            <p className="text-lg text-gray-700 mb-6">Discover the latest electronics, gadgets, and smart devices for your home and office. Shoply brings you top brands, exclusive deals, and expert reviews to help you make the best choice.</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Smartphones & Tablets</li>
              <li>Laptops & Accessories</li>
              <li>Home Automation</li>
              <li>Wearables & Audio</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&w=800&h=600&fit=crop" alt="Modern Industry" className="rounded-lg shadow-lg w-96 h-64 object-cover" />
          </div>
        </div>
      </section>
      {/* Key Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-violet-700 mb-4">Why Shop Electronics at Shoply?</h2>
          <p className="text-base text-gray-600 mb-8">Top brands, expert reviews, and exclusive deals for all your tech needs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-6 rounded-2xl shadow-lg bg-white w-64">
              <h3 className="text-lg font-bold text-violet-700 mb-3">Latest Gadgets</h3>
              <p className="text-sm text-gray-600">Shop the newest tech and smart devices.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg bg-white w-64">
              <h3 className="text-lg font-bold text-violet-700 mb-3">Expert Reviews</h3>
              <p className="text-sm text-gray-600">Get advice and reviews from tech experts.</p>
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
          <p className="text-lg text-violet-100 mb-8">Find your favorite electronics and gadgets at Shoply and enjoy exclusive offers!</p>
          <button className="bg-white text-violet-700 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-violet-100 transition-colors duration-300 transform hover:scale-105">
            Start Shopping
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Industrial;
