import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import { useLanguage } from "./contexts/LanguageContext";

export default function Header() {
  const navigate = useNavigate();
  const { currentLanguage, isRTL, translate, changeLanguage } = useLanguage();
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    let currentUser = { firstName: '', lastName: '' };
    try {
      currentUser = JSON.parse(localStorage.getItem('currentUser')) || { firstName: '', lastName: '' };
    } catch (e) {}
    setInitials(
      `${currentUser.firstName?.[0] || ''}${currentUser.lastName?.[0] || ''}`.toUpperCase()
    );
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAvatarDropdownOpen && !event.target.closest('.avatar-dropdown')) {
        setIsAvatarDropdownOpen(false);
      }
      if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAvatarDropdownOpen, isLanguageDropdownOpen]);

  // Dark mode functionality
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('darkModeChanged', { detail: newDarkMode }));
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdown(false);
    }, 300); // 300ms delay before closing
    setServicesTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setHomeDropdown(false);
    setServicesDropdown(false);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userLogins');
    // Navigate to welcome page
    navigate('/');
    // Close dropdown
    setIsAvatarDropdownOpen(false);
  };

  const handleLanguageSelect = (language) => {
    changeLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full shadow-md transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-3 py-1 flex items-center justify-between">
        {/* Logo - Left Side */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="LIFE Logo" className="w-20 h-12 sm:w-28 sm:h-16 object-contain" />
          </div>
        </div>

        {/* Desktop Navigation - Right Side with Equal Gaps */}
  <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-6`}>
          <div className="relative">
            <button
              className={`text-base font-semibold hover:text-[#8F00FF] flex items-center gap-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`}
              onClick={() => setHomeDropdown((open) => !open)}
            >
              {translate('home')}
              <svg className={`w-5 h-5 ${isRTL ? 'mr-1' : 'ml-1'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {homeDropdown && (
              <div
                className={`absolute left-0 mt-2 w-48 border rounded shadow-lg z-50 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}
              >
                <Link to="/home1" className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} onClick={() => { setHomeDropdown(false); scrollToTop(); }}>Home1</Link>
                <Link to="/home2" className={`block px-4 py-3 text-base hover:bg-blue-100 transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} onClick={() => { setHomeDropdown(false); scrollToTop(); }}>Home2</Link>
              </div>
            )}
          </div>
          <Link to="/about" className={`text-base font-semibold hover:text-[#8F00FF] transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={scrollToTop}>{translate('aboutUs')}</Link>
          <div className="relative">
            <button
              className={`text-base font-semibold hover:text-[#8F00FF] flex items-center gap-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`}
              onClick={() => { navigate('/services'); scrollToTop(); }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onFocus={() => setServicesDropdown(true)}
              onBlur={() => setServicesDropdown(false)}
            >
              {translate('services')}
              <svg className={`w-5 h-5 ${isRTL ? 'mr-1' : 'ml-1'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesDropdown && (
              <div
                className={`absolute left-0 mt-2 w-56 border rounded shadow-lg z-50 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div 
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer border-b ${isDarkMode ? 'text-white hover:bg-gray-700 border-gray-600' : 'text-black hover:bg-gray-100 border-gray-200'}`} 
                  onClick={() => { 
                    setServicesDropdown(false); 
                    navigate('/services');
                    scrollToTop();
                  }}
                >
                  {translate('viewAllServices')}
                </div>
                <div 
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} 
                  onClick={() => { 
                    setServicesDropdown(false); 
                    navigate('/yoga');
                    scrollToTop();
                  }}
                >
                  {translate('residentialConstruction')}
                </div>
                <div 
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} 
                  onClick={() => { 
                    setServicesDropdown(false); 
                    navigate('/commercial');
                    scrollToTop();
                  }}
                >
                  {translate('commercialConstruction')}
                </div>
                <div 
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} 
                  onClick={() => { 
                    setServicesDropdown(false); 
                    navigate('/renovation');
                    scrollToTop();
                  }}
                >
                  {translate('renovationRemodeling')}
                </div>
                <div 
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} 
                  onClick={() => { 
                    setServicesDropdown(false); 
                    navigate('/interior-design');
                    scrollToTop();
                  }}
                >
                  {translate('interiorDesign')}
                </div>
                <div 
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} 
                  onClick={() => { 
                    setServicesDropdown(false); 
                    navigate('/industrial');
                    scrollToTop();
                  }}
                >
                  {translate('industrialConstruction')}
                </div>
                <div 
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} 
                  onClick={() => { 
                    setServicesDropdown(false); 
                    navigate('/road');
                    scrollToTop();
                  }}
                >
                  {translate('road')}
                </div>
              </div>
            )}
          </div>
          <Link to="/blog" className={`text-base font-semibold hover:text-[#8F00FF] transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={scrollToTop}>{translate('blog')}</Link>
          <Link to="/contact" className={`text-base font-semibold hover:text-[#8F00FF] transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={scrollToTop}>{translate('contactUs')}</Link>
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 bg-[#8F00FF] hover:bg-[#6c00b8]`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Language Dropdown */}
          <div className="relative language-dropdown">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 flex items-center space-x-1 bg-[#8F00FF] hover:bg-[#6c00b8] text-white`}
              title="Select Language"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{currentLanguage.substring(0, 2).toUpperCase()}</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Language Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <div className={`absolute  -right-0 mt-2 w-40 border rounded-lg shadow-lg z-50 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
                <div className="py-1">
                  <button
                    onClick={() => handleLanguageSelect('English')}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 ${
                      currentLanguage === 'English' 
                        ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                        : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('Arabic')}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 ${
                      currentLanguage === 'Arabic' 
                        ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                        : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>🇸🇦</span>
                    <span>العربية</span>
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('Hebrew')}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 ${
                      currentLanguage === 'Hebrew' 
                        ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                        : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>🇮🇱</span>
                    <span>עברית</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Avatar with Dropdown */}
          <div className="relative avatar-dropdown">
            <div 
              onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
              className="w-8 h-8 bg-[#8F00FF] rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:bg-[#6c00b8] transition-colors duration-200"
            >
              {initials}
            </div>
            
            {/* Avatar Dropdown */}
            {isAvatarDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    <div className="font-medium">User Profile</div>
                    <div className="text-gray-500 text-xs">Signed in</div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
  <div className="lg:hidden flex items-center space-x-2">
          {/* Dark Mode Toggle Button for Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 bg-[#8F00FF] hover:bg-[#6c00b8]`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Language Dropdown for Mobile */}
          <div className="relative language-dropdown">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 flex items-center space-x-1 bg-[#8F00FF] hover:bg-[#6c00b8] text-white`}
              title="Select Language"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">{currentLanguage.substring(0, 2).toUpperCase()}</span>
            </button>
            
            {/* Mobile Language Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-36 border rounded-lg shadow-lg z-50 transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
                <div className="py-1">
                  <button
                    onClick={() => handleLanguageSelect('English')}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors duration-200 flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 ${
                      currentLanguage === 'English' 
                        ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                        : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('Arabic')}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors duration-200 flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 ${
                      currentLanguage === 'Arabic' 
                        ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                        : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>🇸🇦</span>
                    <span>العربية</span>
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('Hebrew')}
                    className={`w-full text-left px-3 py-2 text-xs transition-colors duration-200 flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 ${
                      currentLanguage === 'Hebrew' 
                        ? isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                        : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>🇮🇱</span>
                    <span>עברית</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            aria-label="Toggle mobile menu"
          >
            <svg className={`w-6 h-6 transition-transform duration-200 ${isDarkMode ? 'text-white' : 'text-gray-600'} ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}> 
          <div className="px-2 py-3 space-y-2">
            {/* Home Dropdown */}
            <div>
              <button
                onClick={() => setHomeDropdown(!homeDropdown)}
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
              >
                <span className="font-semibold">{translate('home')}</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${homeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {homeDropdown && (
                <div className="ml-2 mt-1 space-y-1">
                  <Link 
                    to="/home1" 
                    onClick={closeMobileMenu}
                    className={`block py-1 px-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    Home1
                  </Link>
                  <Link 
                    to="/home2" 
                    onClick={closeMobileMenu}
                    className={`block py-1 px-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    Home2
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`block py-2 px-2 rounded-lg font-semibold transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
            >
              {translate('aboutUs')}
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => { closeMobileMenu(); navigate('/services'); }}
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
              >
                <span className="font-semibold">{translate('services')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>

            {/* Blog */}
            <Link 
              to="/blog" 
              onClick={closeMobileMenu}
              className={`block py-2 px-2 rounded-lg font-semibold transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
            >
              {translate('blog')}
            </Link>

            {/* Contact Us */}
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`block py-2 px-2 rounded-lg font-semibold transition-colors duration-200 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'}`}
            >
              {translate('contactUs')}
            </Link>

            {/* User Profile */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 px-2">
                <div className="w-7 h-7 bg-[#8F00FF] rounded-full flex items-center justify-center text-white font-bold text-xs">{initials}</div>
                <span className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>{translate('userProfile')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 