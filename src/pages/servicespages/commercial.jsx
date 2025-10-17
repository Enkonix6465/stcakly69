import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import commercialHeroVideo from '../../assets/commercialhero.mp4';
import benefitsImg from '../../assets/residentialtower.jpg';
import stepsImg from '../../assets/commercial.jpg';
import Footer from '../../footer.jsx';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

const CommercialConstruction = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { translate, isRTL, currentLanguage } = useLanguage();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
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

  const benefits = [
    'Fast & Secure Checkout',
    'Exclusive Online Deals',
    'Trusted Product Reviews',
    'Easy Returns & Refunds',
    '24/7 Customer Support',
    'Personalized Shopping Experience'
  ];

  const services = [
    {
      title: translate('officeWorkspaceConstruction'),
      description: translate('officeWorkspaceConstructionDesc')
    },
    {
      title: translate('retailShowroomFitOuts'),
      description: translate('retailShowroomFitOutsDesc')
    },
    {
      title: translate('industrialWarehouseFacilities'),
      description: translate('industrialWarehouseFacilitiesDesc')
    },
    {
      title: translate('hospitalityRestaurantProjects'),
      description: translate('hospitalityRestaurantProjectsDesc')
    },
    {
      title: translate('healthcareInstitutionalBuildings'),
      description: translate('healthcareInstitutionalBuildingsDesc')
    },
    {
      title: translate('renovationExpansion'),
      description: translate('renovationExpansionDesc')
    }
  ];

  const howItWorks = [
    translate('requirementAnalysis'),
    translate('siteSurveyFeasibilityStudy'),
    translate('designPlanningApprovals'),
    translate('transparentQuotationAgreement'),
    translate('constructionProgressUpdates'),
    translate('finalHandoverOngoingSupport')
  ];

  const features = [
    {
      title: translate('dedicatedProjectManager'),
      description: translate('dedicatedProjectManagerDesc')
    },
    {
      title: translate('detailedProjectTimeline'),
      description: translate('detailedProjectTimelineDesc')
    },
    {
      title: translate('qualitySafetyAudits'),
      description: translate('qualitySafetyAuditsDesc')
    },
    {
      title: translate('postCompletionMaintenance'),
      description: translate('postCompletionMaintenanceDesc')
    }
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className={`w-full h-screen flex items-center ${isRTL ? 'justify-end' : 'justify-start'} px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full`}>
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={commercialHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-1 max-w-4xl px-4 w-full pt-20">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up">
            {translate('commercialConstructionServices')}
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up" data-aos-delay="200">
            {translate('commercialHeroDescription')}
          </p>
          <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <button 
              onClick={scrollToBenefits}
              className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              {translate('exploreMore')}
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="key-benefits" className={`w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} text-center`}>
              {translate('whyChooseCommercial')}
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>
              {translate('whyChooseCommercialDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards (Right in RTL) */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-3' : 'lg:order-1'}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(0,3).map((benefit, idx) => (
                <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[120px] sm:min-h-[156px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-left" : "fade-right"}
                  data-aos-delay={400+idx*100}
                  data-aos-once="false"
                >
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit}</h3>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className={`flex flex-col items-center text-center ${isRTL ? 'lg:order-2' : 'lg:order-2'}`} data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img 
                  src={benefitsImg} 
                  alt="Commercial Construction Benefits" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} text-center`}>
                {translate('buildingBusinessesBuildingSuccess')}
              </h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-center`}>
                {translate('buildingBusinessesDesc')}
              </p>
            </div>
            {/* Right Cards (Left in RTL) */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-1' : 'lg:order-3'}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(3).map((benefit, idx) => (
                <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[120px] sm:min-h-[156px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-right" : "fade-left"}
                  data-aos-delay={400+idx*100}
                  data-aos-once="false"
                >
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="mb-12 text-center" data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF4D00] text-center">
              {translate('ourCommercialServices')}
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
      {/* How It Works Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>

        <div className="max-w-7xl mx-auto w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Content Side */}
            <div 
              className={`flex flex-col space-y-8 ${isRTL ? 'lg:order-2 rtl' : 'lg:order-1'}`} 
              data-aos={isRTL ? "fade-left" : "fade-right"} 
              data-aos-once="false"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div dir={isRTL ? 'rtl' : 'ltr'}>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('howOurProcessWorks')}
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('commercialProcessDescription')}
                </p>
              </div>
              {/* Steps Container */}
              <div className="space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
                {howItWorks.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
                    data-aos={isRTL ? "fade-left" : "fade-right"}
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
                  className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105"
                >
                  {translate('startProjectToday')}
                </button>
              </div>
            </div>
            {/* Image Side */}
            <div 
              className={`flex justify-center items-center ${isRTL ? 'lg:order-1' : 'lg:order-2'}`} 
              data-aos={isRTL ? "fade-right" : "fade-left"} 
              data-aos-once="false"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="relative">
                  <img 
                    src={stepsImg} 
                    alt="Construction Steps" 
                    className="w-full object-cover rounded-2xl shadow-2xl"
                    style={{ height: '400px', maxHeight: 'none' }}
                  />
                </div>
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
                  {translate('whatMakesUsDifferent')}
                </h2>
                <p className={`text-lg sm:text-xl mb-8 text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('whatMakesUsDifferentDesc')}
                </p>
              </div>
              <div className="space-y-6">
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('commercialExpertiseDesc1')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('commercialExpertiseDesc2')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('commercialExpertiseDesc3')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('commercialExpertiseDesc4')}
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
      <section id="pricing-section" className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className={`rounded-3xl p-8 sm:p-12 flex flex-col items-center justify-center text-center ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'} text-center`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              {translate('readyToBuildBusinessSpace')}
            </h2>
            <p 
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'} text-center`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {translate('businessSpaceDescription')}
            </p>
            <button 
              className="bg-[#FF4D00] text-white font-semibold py-4 px-10 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="false"
              onClick={() => window.location.href='/contact'}
            >
              {translate('startProjectToday')}
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CommercialConstruction;