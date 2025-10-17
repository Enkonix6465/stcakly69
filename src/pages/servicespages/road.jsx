import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import roadHeroVideo from '../../assets/roadhero.mp4';
import roadBenefitsBg from '../../assets/road1.jpg';
import roadSteps from '../../assets/road.jpg';
import roadServe from '../../assets/road.jpg';
import Footer from '../../footer.jsx';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

const RoadConstruction = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { translate, isRTL } = useLanguage();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const benefits = [
    "Improves connectivity and transportation efficiency",
    "Enhances economic development and trade",
    "Increases safety standards and traffic management",
    "Promotes sustainable infrastructure development",
    "Supports community growth and accessibility",
    "Boosts regional development and investment opportunities"
  ];

  const programs = [
    {
      title: "Site Assessment & Planning",
      description: "Comprehensive evaluation of construction sites and development of detailed project plans"
    },
    {
      title: "Highway Construction",
      description: "Strategic design and construction of major highways and expressways"
    },
    {
      title: "Bridge & Infrastructure Building",
      description: "Expert construction of bridges, overpasses, and critical infrastructure"
    },
    {
      title: "Road Maintenance & Rehabilitation",
      description: "Ongoing maintenance services to extend infrastructure lifespan and safety"
    },
    {
      title: "Urban Development Projects",
      description: "Comprehensive urban infrastructure development and modernization"
    },
    {
      title: "Sustainable Construction Solutions",
      description: "Eco-friendly construction methods and materials for environmental responsibility"
    }
  ];

  const howItWorks = [
    "Complete a comprehensive site assessment and feasibility study",
    "Receive detailed project planning and engineering recommendations",
    "Access expert consultation and construction management services",
    "Execute construction with professional supervision and quality control",
    "Track progress and ensure project completion on time and budget"
  ];


  const features = [
    "Customized road and infrastructure construction plans",
    "Project tracking and quality assurance systems",
    "Advanced construction technology and equipment",
    "Expert engineering and project management support"
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
     {/* Hero Section */}
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={roadHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className={`relative z-10 max-w-4xl px-4 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up">
            {translate('roadHeroTitle')} <span className='text-[#8F00FF]'>{translate('roadHeroTitleHighlight')}</span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up" data-aos-delay="200">
            {translate('roadHeroDescription')}
          </p>
          <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <button className="bg-white text-[#8F00FF] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              {translate('learnMoreAboutConstruction')}
            </button>
          </div>
        </div>
      </section>
     
      {/* Key Benefits Section */}
      <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className={`mb-16 ${isRTL ? 'text-right' : 'text-center'}`} data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>{translate('keyBenefits')} <span className='text-[#8F00FF]'></span></h2>
            <p className={`text-base sm:text-lg max-w-2xl ${isRTL ? 'mr-0' : 'mx-auto'} ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>{translate('roadKeyBenefitsDesc')}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#8F00FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>{translate('qualityDurability')}</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>{translate('qualityDurabilityDesc')}</p>
              </div>
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#8F00FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>{translate('sustainability')}</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>{translate('sustainabilityDesc')}</p>
              </div>
            </div>
            {/* Center Image */}
            <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img src={roadBenefitsBg} alt="Road Construction" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>{translate('buildingTheFuture')}</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>{translate('buildingTheFutureDesc')}</p>
            </div>
            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left" data-aos-delay="400" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#8F00FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>{translate('expertise')}</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>{translate('expertiseDesc')}</p>
              </div>
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left" data-aos-delay="500" data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#8F00FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>{translate('onTimeDelivery')}</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>{translate('onTimeDeliveryDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
           {/* Services Section */}
      {/* Our Road/Infrastructure Construction Services Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
        <div className="absolute inset-0 z-0">
          <img 
            src={roadServe} 
            alt="Road/Infrastructure Construction Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#8F00FF] bg-opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className={`mb-12 ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              {translate('ourRoadInfrastructureServices')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Service 1 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#8F00FF]">01</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('highwayRoadConstruction')}</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('highwayRoadConstructionDesc')}</p>
            </div>
            {/* Service 2 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#8F00FF]">02</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('bridgeOverpassConstruction')}</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('bridgeOverpassConstructionDesc')}</p>
            </div>
            {/* Service 3 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#8F00FF]">03</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('urbanInfrastructureDevelopment')}</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('urbanInfrastructureDevelopmentDesc')}</p>
            </div>
            {/* Service 4 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#8F00FF]">04</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('maintenanceRehabilitation')}</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('maintenanceRehabilitationDesc')}</p>
            </div>
            {/* Service 5 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#8F00FF]">05</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('sustainableConstructionSolutions')}</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('sustainableConstructionSolutionsDesc')}</p>
            </div>
            {/* Service 6 */}
            <div className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="false"
            >
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#8F00FF]">06</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('projectManagementConsultation')}</h3>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('projectManagementConsultationDesc')}</p>
            </div>
          </div>
        </div>
      </section>
     
           {/* How It Works Section - Road/Infrastructure Construction */}
           <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
             <div className="max-w-7xl mx-auto w-full overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                 <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
                   <div>
                     <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('howItWorks')} <span className='text-[#8F00FF]'>{translate('itWorksWord')}</span></h2>
                     <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('roadHowItWorksDesc')}</p>
                   </div>
                   <div className="space-y-6">
                     {/* Step 1 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="0" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#8F00FF]">1</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('step1')}</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('step1Desc')}</p>
                       </div>
                     </div>
                     {/* Step 2 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="100" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#8F00FF]">2</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('step2')}</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('step2Desc')}</p>
                       </div>
                     </div>
                     {/* Step 3 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="200" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#8F00FF]">3</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('step3')}</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('step3Desc')}</p>
                       </div>
                     </div>
                     {/* Step 4 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#8F00FF]">4</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('step4')}</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('step4Desc')}</p>
                       </div>
                     </div>
                     {/* Step 5 */}
                     <div className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#8F00FF]">5</div>
                       <div className="flex-1">
                         <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translate('step5')}</h3>
                         <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translate('step5Desc')}</p>
                       </div>
                     </div>
                   </div>
                   <div className="pt-4">
                     <button className="bg-[#8F00FF] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#7a00d1] transition-colors duration-300 transform hover:scale-105">{translate('requestConsultation')}</button>
                   </div>
                 </div>
                 <div className="flex justify-center lg:justify-end items-start" data-aos="fade-left" data-aos-once="false">
                   <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                     <div className="relative">
                       <img src={roadSteps} alt="Construction Steps" className="w-full object-cover rounded-2xl shadow-2xl" style={{ height: '600px', maxHeight: 'none' }} />
                       <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                       <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full opacity-80" style={{ backgroundColor: '#FF4D00' }}></div>
                       <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
     
           {/* What Sets Us Apart Section - Road/Infrastructure Construction */}
           <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#FF4D00] to-[#d32f2f]">
             <div className="max-w-7xl mx-auto w-full overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                 <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
                   <div>
                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">{translate('whatSetsUsApart')}</h2>
                     <p className="text-lg sm:text-xl mb-8 text-white">{translate('roadWhatSetsUsApartDesc')}</p>
                   </div>
                   <div className="space-y-6">
                     <p className="text-base leading-relaxed text-white">• {translate('provenTrackRecord')}</p>
                     <p className="text-base leading-relaxed text-white">• {translate('cuttingEdgeTechnology')}</p>
                     <p className="text-base leading-relaxed text-white">• {translate('commitmentToSafety')}</p>
                     <p className="text-base leading-relaxed text-white">• {translate('sustainabilityFocus')}</p>
                     <p className="text-base leading-relaxed text-white">• {translate('expertTeam')}</p>
                   </div>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">{translate('innovativeSolutions')}</h3>
                     <p className="text-sm text-gray-600">{translate('innovativeSolutionsDesc')}</p>
                   </div>
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">{translate('clientCentricApproach')}</h3>
                     <p className="text-sm text-gray-600">{translate('clientCentricApproachDesc')}</p>
                   </div>
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">{translate('qualityAssurance')}</h3>
                     <p className="text-sm text-gray-600">{translate('qualityAssuranceDesc')}</p>
                   </div>
                   <div className="p-6 rounded-tl-[3rem] rounded-br-[3rem] shadow-lg bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-start">
                     <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                     </div>
                     <h3 className="text-lg font-bold text-gray-800 mb-2">{translate('sustainableImpact')}</h3>
                     <p className="text-sm text-gray-600">{translate('sustainableImpactDesc')}</p>
                   </div>
                 </div>
               </div>
             </div>
           </section>
     
           {/* Final CTA Section */}
           <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
             <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
               <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
                 <h2 
                   className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
                   data-aos="fade-down"
                   data-aos-delay="50"
                   data-aos-once="false"
                 >
                   {translate('readyToBuildFuture')}
                 </h2>
                 <p 
                   className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
                   data-aos="fade-up"
                   data-aos-delay="100"
                   data-aos-once="false"
                 >
                   {translate('readyToBuildFutureDesc')}
                 </p>
                 <button className="bg-[#FF4D00] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#e6440a] transition-colors duration-300 transform hover:scale-105">
                   {translate('getInTouch')}
                 </button>
               </div>
             </div>
           </section>
           <Footer />
    </div>
  );
};

export default RoadConstruction;
