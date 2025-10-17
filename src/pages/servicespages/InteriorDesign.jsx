import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import impactVideo from '../../assets/interior.mp4';
import missionImg from '../../assets/i1.jpg';
import formSectionImg from '../../assets/i2.jpg';
import Footer from '../../footer.jsx';
import { useLanguage } from '../../contexts/LanguageContext';
const InteriorDesignFinishing = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, isRTL, translate } = useLanguage();

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

  // Reinitialize AOS when language/RTL changes
  useEffect(() => {
    // Small delay to ensure DOM updates
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [language, isRTL]);

  const benefits = [
    { title: translate('interiorBenefit1Title'), description: translate('interiorBenefit1Desc') },
    { title: translate('interiorBenefit2Title'), description: translate('interiorBenefit2Desc') },
    { title: translate('interiorBenefit3Title'), description: translate('interiorBenefit3Desc') },
    { title: translate('interiorBenefit4Title'), description: translate('interiorBenefit4Desc') },
    { title: translate('interiorBenefit5Title'), description: translate('interiorBenefit5Desc') },
    { title: translate('interiorBenefit6Title'), description: translate('interiorBenefit6Desc') }
  ];

  const services = [
    {
      title: translate('interiorService1Title'),
      description: translate('interiorService1Desc')
    },
    {
      title: translate('interiorService2Title'),
      description: translate('interiorService2Desc')
    },
    {
      title: translate('interiorService3Title'),
      description: translate('interiorService3Desc')
    },
    {
      title: translate('interiorService4Title'),
      description: translate('interiorService4Desc')
    },
    {
      title: translate('interiorService5Title'),
      description: translate('interiorService5Desc')
    },
    {
      title: translate('interiorService6Title'),
      description: translate('interiorService6Desc')
    }
  ];

  const howItWorks = [
    translate('interiorStep1'),
    translate('interiorStep2'),
    translate('interiorStep3'),
    translate('interiorStep4'),
    translate('interiorStep5')
  ];

  const features = [
    { title: translate('interiorFeature1Title'), description: translate('interiorFeature1Desc') },
    { title: translate('interiorFeature2Title'), description: translate('interiorFeature2Desc') },
    { title: translate('interiorFeature3Title'), description: translate('interiorFeature3Desc') },
    { title: translate('interiorFeature4Title'), description: translate('interiorFeature4Desc') }
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className={`w-full h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full ${isRTL ? 'justify-end' : 'justify-start'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={impactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className={`relative z-10 max-w-4xl px-4 w-full ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up">
            {translate('interiorHeroTitle')} <span className='text-[#FF4D00]'>{translate('interiorHeroTitleHighlight')}</span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up" data-aos-delay="200">
            {translate('interiorHeroDescription')}
          </p>
          <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <button className="bg-white text-[#FF4D00] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              {translate('bookFreeConsultation')}
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className={`w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className={`mb-16 ${isRTL ? 'text-right' : 'text-center'}`} data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}> 
              {translate('whyInteriorDesign')} <span className='text-[#FF4D00]'>{translate('interiorDesignWord')}</span>
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl ${isRTL ? 'mr-0' : 'mx-auto'} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}>
              {translate('interiorDesignTransform')}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Left Cards */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-3' : 'lg:order-1'}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(0, 2).map((benefit, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-left" : "fade-right"}
                  data-aos-delay={400 + idx * 100}
                  data-aos-once="false"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse gap-4' : 'gap-4'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit.title}</h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit.description}</p>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className={`flex flex-col items-center text-center lg:order-2`} data-aos="zoom-in" data-aos-delay="600" data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img
                  src={formSectionImg}
                  alt="Interior Design Benefits"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-center'}`}>{translate('transformYourSpace')}</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-center'}`}>{translate('transformYourSpaceDesc')}</p>
            </div>
            {/* Right Cards */}
            <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-1' : 'lg:order-3'}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-delay="300" data-aos-once="false">
              {benefits.slice(2, 4).map((benefit, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos={isRTL ? "fade-right" : "fade-left"}
                  data-aos-delay={400 + idx * 100}
                  data-aos-once="false"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse gap-4' : 'gap-4'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit.title}</h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`} >
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={missionImg}
            alt="Interior Design Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF4D00] bg-opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="mb-12" data-aos="fade-up">
            <div className={`relative z-10 max-w-4xl px-4 w-full ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}> 
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white  `}>
                {translate('interiorServicesTitle')} <span className="text-white">{translate('servicesWord')}</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <div className={`mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
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
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Image Side */}
            <div className={`flex items-start ${isRTL ? 'lg:order-2 justify-center lg:justify-end' : 'lg:order-1 justify-center lg:justify-start'}`} data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-once="false">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img
                    src={missionImg}
                    alt="Interior Design Steps"
                    className="w-full object-cover rounded-2xl shadow-2xl"
                    style={{ height: '600px', maxHeight: 'none' }}
                  />
                  {/* Decorative elements */}
                  <div className={`absolute -top-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 ${isRTL ? '-right-4' : '-left-4'}`}></div>
                  <div className={`absolute -bottom-4 w-6 h-6 bg-pink-400 rounded-full opacity-80 ${isRTL ? '-left-4' : '-right-4'}`}></div>
                  <div className={`absolute top-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-80 ${isRTL ? '-left-6' : '-right-6'}`}></div>
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className={`flex flex-col space-y-8 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`} data-aos={isRTL ? "fade-right" : "fade-left"} data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
              <div>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('howItWorks')} <span className='text-[#FF4D00]'>{translate('itWorksWord')}</span>
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{translate('interiorProcessDesc')}</p>
              </div>
              {/* Steps */}
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start ${isRTL ? 'flex-row-reverse gap-4' : 'gap-4'}`}
                    data-aos={isRTL ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                    data-aos-once="false"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#FF4D00]`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'} ${isRTL ? 'text-right' : 'text-left'}`}>{translate('step')} {index + 1}</h3>
                      <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isRTL ? 'text-right' : 'text-left'}`}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className={`pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <button className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105">
                  {translate('bookDesignConsultation')}
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
                  {translate('interiorWhatSetsUsApartDesc')}
                </p>
              </div>
              <div className="space-y-6">
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('interiorExpertiseDesc1')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('interiorExpertiseDesc2')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('interiorExpertiseDesc3')}
                </p>
                <p className={`text-base leading-relaxed text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  {translate('interiorExpertiseDesc4')}
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
                    <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
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
        <div className={`max-w-6xl mx-auto w-full overflow-hidden ${isRTL ? 'text-right' : 'text-center'}`} dir={isRTL ? 'rtl' : 'ltr'}>
          <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'} ${isRTL ? 'text-right' : 'text-center'}`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              {translate('readyToTransformSpace')}
            </h2>
            <p
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'} ${isRTL ? 'text-right' : 'text-center'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {translate('interiorCtaDescription')}
            </p>
            <button className="bg-[#FF4D00] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105 text-lg">
              {translate('bookFreeConsultation')}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InteriorDesignFinishing;