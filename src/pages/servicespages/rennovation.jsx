import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import impactVideo from '../../assets/rehero.mp4';
import formSectionImg from '../../assets/renovation.jpg';
import missionImg from '../../assets/reno.jpg';
import mentalServe from '../../assets/reno.jpg'; // fallback for a construction image
import Footer from '../../footer.jsx';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

const RenovationRemodeling = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { translate, isRTL, currentLanguage } = useLanguage();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Listen for dark mode changes from Header
  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('key-benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    translate('modernizeUpgradeSpace'),
    translate('increasePropertyValue'),
    translate('enhanceEnergyEfficiency'),
    translate('customizeInteriors'),
    translate('fixStructuralIssues'),
    translate('transformOutdatedRooms')
  ];

  const services = [
    {
      title: translate('kitchenRemodeling'),
      description: translate('kitchenRemodelingDesc')
    },
    {
      title: translate('bathroomRenovation'),
      description: translate('bathroomRenovationDesc')
    },
    {
      title: translate('basementFinishing'),
      description: translate('basementFinishingDesc')
    },
    {
      title: translate('roomAdditions'),
      description: translate('roomAdditionsDesc')
    },
    {
      title: translate('exteriorUpgrades'),
      description: translate('exteriorUpgradesDesc')
    },
    {
      title: translate('wholeHomeRenovation'),
      description: translate('wholeHomeRenovationDesc')
    }
  ];

  const howItWorks = [
    translate('scheduleFreeConsultation'),
    translate('discussVisionBudget'),
    translate('receiveDetailedPlan'),
    translate('skilledTeamExecutes'),
    translate('finalWalkthroughGuarantee')
  ];

  const features = [
    {
      title: translate('licensedInsuredProfessionals'),
      description: translate('licensedInsuredProfessionalsDesc')
    },
    {
      title: translate('customDesignSolutions'),
      description: translate('customDesignSolutionsDesc')
    },
    {
      title: translate('qualityMaterialsCraftsmanship'),
      description: translate('qualityMaterialsCraftsmanshipDesc')
    },
    {
      title: translate('onTimeProjectDelivery'),
      description: translate('onTimeProjectDeliveryDesc')
    }
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
        <section className="bg-violet-100 py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-violet-700 mb-4">Shoply: Fashion & Accessories</h1>
              <p className="text-lg text-gray-700 mb-6">Upgrade your wardrobe with the latest fashion trends, accessories, and exclusive offers. Shoply brings you top brands, style tips, and fast delivery for every occasion.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Men's & Women's Fashion</li>
                <li>Jewelry & Watches</li>
                <li>Bags & Footwear</li>
                <li>Seasonal Collections</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/src/assets/detailed/Lina Gomez.avif" alt="Fashion" className="rounded-lg shadow-lg w-96 h-64 object-cover" />
            </div>
          </div>
        </section>

      {/* Key Benefits Section */}
      <section id="key-benefits" className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} text-center`}>
              {translate('whyRenovateRemodel')}
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>
              {translate('whyRenovateRemodeDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards (Right in RTL) */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-3' : 'lg:order-1'}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(0, 2).map((benefit, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-left" : "fade-right"}
                  data-aos-delay={400 + idx * 100}
                  data-aos-once="false"
                >
                  <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{translate('benefitTitle' + (idx + 1))}</h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit}</p>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className={`flex flex-col items-center text-center ${isRTL ? 'lg:order-2' : 'lg:order-2'}`} data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img
                  src={formSectionImg}
                  alt="Renovation Benefits"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} text-center`}>
                {translate('transformYourSpace')}
              </h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>
                {translate('transformYourSpaceDesc')}
              </p>
            </div>
            {/* Right Cards (Left in RTL) */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-1' : 'lg:order-3'}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(2, 4).map((benefit, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-right" : "fade-left"}
                  data-aos-delay={400 + idx * 100}
                  data-aos-once="false"
                >
                  <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{translate('benefitTitle' + (idx + 3))}</h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={missionImg}
            alt="Renovation Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF4D00] bg-opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="mb-12 text-center" data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              {translate('ourRenovationServices')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#FF4D00]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{service.title}</h3>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Image Side */}
            <div 
              className={`flex justify-center items-center ${isRTL ? 'lg:order-2' : 'lg:order-1'}`} 
              data-aos={isRTL ? "fade-left" : "fade-right"} 
              data-aos-once="false"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="relative">
                  <img
                    src={mentalServe}
                    alt="Renovation Steps"
                    className="w-full object-cover rounded-2xl shadow-2xl"
                    style={{ height: '600px', maxHeight: 'none' }}
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div 
              className={`flex flex-col space-y-8 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`} 
              data-aos={isRTL ? "fade-right" : "fade-left"} 
              data-aos-once="false"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div dir={isRTL ? 'rtl' : 'ltr'}>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('howItWorks')}
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('renovationProcessDescription')}
                </p>
              </div>
              {/* Steps Container */}
              <div className="space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
                    data-aos={isRTL ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                    data-aos-once="false"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]">
                      {index + 1}
                    </div>
                    <div className="flex-1" dir={isRTL ? 'rtl' : 'ltr'}>
                      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>
                        {currentLanguage === 'Arabic' ? `المرحلة ${index + 1}` : currentLanguage === 'Hebrew' ? `שלב ${index + 1}` : `Step ${index + 1}`}
                      </h3>
                      <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className={`pt-4 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <button 
                  onClick={scrollToPricing}
                  className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105">
                  {translate('bookYourRenovation')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#FF4D00] to-[#e6440a]" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Content Side */}
            <div className={`flex flex-col space-y-8 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
              <div>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('whatSetsUsApart')}
                </h2>
                <p className={`text-lg sm:text-xl mb-8 text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('whatSetsUsApartDesc')}
                </p>
              </div>
              <div className="space-y-6">
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('renovationExpertiseDesc1')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('renovationExpertiseDesc2')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('renovationExpertiseDesc3')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('renovationExpertiseDesc4')}
                </p>
              </div>
            </div>
            {/* Cards Side */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-once="false"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <div className="mb-4" dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className={`w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg ${isRTL ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>{feature.title}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto text-center w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'} ${isRTL ? 'text-right' : 'text-center'}`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              {translate('readyToRenovate')}
            </h2>
            <p
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'} ${isRTL ? 'text-right' : 'text-center'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {translate('readyToRenovateDesc')}
            </p>
            <button className="bg-[#FF4D00] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 text-lg">
              {translate('bookYourConsultation')}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RenovationRemodeling;