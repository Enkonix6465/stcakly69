import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaSpa, FaAppleAlt, FaBrain, FaDumbbell, FaBed, FaUserTie } from "react-icons/fa";
import { useLanguage } from "./contexts/LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { translate, isRTL, currentLanguage } = useLanguage();

  // Dark mode functionality
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => window.removeEventListener('darkModeChanged', handleDarkModeChange);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000); // Hide message after 3s
  };

  return (
    <footer className={`${isDarkMode ? 'bg-black border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} border-t pt-10 pb-4 px-4 md:px-0`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-8" dir={isRTL ? 'rtl' : 'ltr'}>
                 {/* Brand & Tagline */}
         <div className={`flex flex-col space-y-3 ${isRTL ? 'items-end' : 'items-start'}`} dir={isRTL ? 'rtl' : 'ltr'}>
           <img src="/src/assets/logo.png" alt="Logo" className="h-28 w-28 object-contain" />
           <span className={`font-bold text-lg text-[#8F00FF] ${isRTL ? 'text-right' : 'text-left'}`}>Shoply Ecommerce</span>
           <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>Your one-stop shop for the latest electronics, fashion, and more. Fast shipping, secure checkout, and 24/7 support!</span>
         </div>
        {/* Quick Navigation */}
        <div dir={isRTL ? 'rtl' : 'ltr'}>
          <h3 className={`font-semibold mb-3 text-[#8F00FF] ${isRTL ? 'text-right' : 'text-left'}`}>{translate('quickLinks')}</h3>
          <ul className="space-y-2">
            <li><Link to="/" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>{translate('home')}</Link></li>
            <li><Link to="/about" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>{translate('aboutUs')}</Link></li>
            <li><Link to="/projects" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>{translate('projects')}</Link></li>
            <li><Link to="/contact" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>{translate('contactUs')}</Link></li>
            <li><Link to="/services" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>{translate('services')}</Link></li>
          </ul>
        </div>
                 {/* Explore Services */}
         <div dir={isRTL ? 'rtl' : 'ltr'}>
           <h3 className={`font-semibold mb-3 text-[#8F00FF] ${isRTL ? 'text-right' : 'text-left'}`}>Shop Departments</h3>
           <ul className="space-y-2">
             <li><Link to="/electronics" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>Electronics</Link></li>
             <li><Link to="/fashion" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>Fashion</Link></li>
             <li><Link to="/home-garden" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>Home & Garden</Link></li>
             <li><Link to="/beauty" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>Beauty & Health</Link></li>
             <li><Link to="/sports" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>Sports & Outdoors</Link></li>
             <li><Link to="/toys" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'} block`}>Toys & Kids</Link></li>
           </ul>
         </div>
                 {/* Contact Info */}
         <div dir={isRTL ? 'rtl' : 'ltr'}>
           <h3 className={`font-semibold mb-3 text-[#8F00FF] ${isRTL ? 'text-right' : 'text-left'}`}>Customer Service</h3>
           <ul className={`space-y-2 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
             <li><span className="font-medium">Support:</span> 1-800-SHOPLY (746-759)</li>
             <li><span className="font-medium">Email:</span> <a href="mailto:support@shoply.com" className="hover:text-blue-600">support@shoply.com</a></li>
             <li><span className="font-medium">Live Chat:</span> 24/7 via website</li>
             <li><span className="font-medium">Address:</span> 123 Commerce Ave, New York, NY</li>
           </ul>
           {/* Social Media Icons */}
           <div className="mt-4">
             <h4 className={`font-medium mb-2 text-sm text-[#8F00FF] ${isRTL ? 'text-right' : 'text-left'}`}>{translate('followUs')}</h4>
             <div className={`flex gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8F00FF] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#6c00b8] hover:scale-110 shadow-lg"><FaInstagram size={18} /></a>
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8F00FF] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#6c00b8] hover:scale-110 shadow-lg"><FaFacebookF size={18} /></a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8F00FF] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#6c00b8] hover:scale-110 shadow-lg"><FaLinkedinIn size={18} /></a>
               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8F00FF] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#6c00b8] hover:scale-110 shadow-lg"><FaYoutube size={18} /></a>
               <a href="https://wa.me/15559876543" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8F00FF] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#6c00b8] hover:scale-110 shadow-lg"><FaWhatsapp size={18} /></a>
             </div>
           </div>
         </div>
        {/* Newsletter Signup */}
        <div dir={isRTL ? 'rtl' : 'ltr'}>
          <h3 className={`font-semibold mb-3 text-[#8F00FF] ${isRTL ? 'text-right' : 'text-left'}`}>{translate('newsletter')}</h3>
          <p className={`text-sm mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{translate('newsletterDescription')}</p>
          <form className={`flex flex-col sm:flex-row gap-2 w-full ${isRTL ? 'sm:flex-row-reverse' : ''}`} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder={translate('yourEmail')}
              className={`px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8F00FF] flex-1 min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              dir={isRTL ? 'rtl' : 'ltr'}
            />
            <button
              type="submit"
              className="bg-[#8F00FF] text-white px-4 py-2 rounded hover:bg-[#6c00b8] whitespace-nowrap"
            >
              {translate('subscribe')}
            </button>
          </form>
          {subscribed && (
            <div className={`mt-2 text-[#8F00FF] text-sm font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{translate('subscriptionThankYou')}</div>
          )}
        </div>
      </div>
             {/* Legal Links */}
       <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} pt-4 gap-4`} dir={isRTL ? 'rtl' : 'ltr'}>
         <div className={`flex flex-wrap gap-4 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
           <a href="#" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>{translate('privacyPolicy')}</a>
           <a href="#" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>{translate('termsConditions')}</a>
           <a href="#" className={`hover:text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>{translate('disclaimer')}</a>
         </div>
       </div>
      {/* Copyright */}
      <div className={`max-w-7xl mx-auto text-center text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} pt-4`} dir={isRTL ? 'rtl' : 'ltr'}>
        {translate('copyright')}
      </div>
    </footer>
  );
} 