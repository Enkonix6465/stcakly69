// Carousel component for Featured Projects (must be outside Home2 to use hooks)
function Carousel() {
  const [current, setCurrent] = React.useState(0);
  const total = featuredProjects.length;
  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  React.useEffect(() => {
    const timer = setTimeout(next, 5000);
    return () => clearTimeout(timer);
  }, [current]);
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl">
        <img
          src={featuredProjects[current].img}
          alt={featuredProjects[current].title}
          className="w-full h-100 sm:h-96 object-cover transition-all duration-700"
        />
        {/* Overlay info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#8F00FF]">{featuredProjects[current].title}</h3>
          <p className="text-sm sm:text-base">{featuredProjects[current].desc}</p>
          <div className="mt-2 text-lg font-semibold">Exclusive Deal: Save up to 30%!</div>
        </div>
        {/* Prev/Next buttons */}
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FF4D00] bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF4D00] bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 border-white ${current === idx ? 'bg-[#FF4D00]' : 'bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import '../aos-custom.css';
import { Link, useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../contexts/LanguageContext";

// Assets from detailed folder
import coachImg from '../assets/industrial.jpg';
import service1Img from '../assets/detailed/Fitness Programs.jpg';
import service2Img from '../assets/detailed/Diet & Nutrition.jpg';
import service3Img from '../assets/detailed/Yoga & Meditation.webp';
import expert1 from '../assets/detailed/Priya Sharma.jpeg.jpg';
import expert2 from '../assets/detailed/Dr. Arjun Rao.jpeg.jpg';
import expert3 from '../assets/detailed/Lina Gomez.avif';
import eventImg from '../assets/detailed/Sleep Therapy.jpg';
import event1Img from '../assets/yoga.jpg';
import event2Img from '../assets/detailed/Diet & Nutrition.jpg';
import event3Img from '../assets/detailed/Mental Wellness.jpeg.jpg';
import why1 from '../assets/trust.jpg';
import ceoImg from '../assets/ceo.jpg';
// Trainer images
import trainer1 from '../assets/w1.jpg';
import trainer2 from '../assets/w2.jpg';
import trainer3 from '../assets/w3.jpg';
import trainer4 from '../assets/w4.jpg';
// Hero video
import heroVideo from '../assets/home2hero.mp4';
import insightsImg from '../assets/insights.png';
import Header from "../Header";
import Footer from "../footer";
import { featuredProjects } from '../utils/featuredProjects';
import ceo from '../assets/ceo.mp4';

const Home2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const { translate, isRTL } = useLanguage();

  // Scroll to top when component mounts
  useScrollToTop();

  const scrollToExperts = () => {
    const expertsSection = document.getElementById('experts-section');
    if (expertsSection) {
      expertsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToBlog = () => {
    navigate('/blog');
  };

  // Listen for dark mode changes from localStorage or other components
  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(darkMode);
    };
    
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };
    
    checkDarkMode();
    window.addEventListener('storage', checkDarkMode);
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('storage', checkDarkMode);
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Custom progress bar animation
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('[data-aos="progress-bar"]');
      
      if (progressBars.length === 0) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-target-width') || '95%';
            const delay = parseInt(bar.getAttribute('data-aos-delay') || 0);
            
            // Ensure bar starts at 0%
            bar.style.width = '0%';
            
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, delay);
            
            observer.unobserve(bar);
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
      });
      
      progressBars.forEach((bar) => {
        // Ensure initial state is 0%
        bar.style.width = '0%';
        observer.observe(bar);
      });
    };
    
    // Run after a small delay to ensure DOM is ready
    setTimeout(animateProgressBars, 100);
  }, []);

  const services = [
    { title: "Personal Training", desc: "Customized sessions to achieve your fitness goals.", img: service1Img },
    { title: "Nutrition Guidance", desc: "Expert advice for a healthier you.", img: service2Img },
    { title: "Group Workouts", desc: "Fun, high-energy group classes for all levels.", img: service3Img },
  ];

  const experts = [
    { name: "Priya Sharma", title: "Certified Trainer", img: expert1 },
    { name: "Dr. Arjun Rao", title: "Nutritionist", img: expert2 },
    { name: "Lina Gomez", title: "Yoga Coach", img: expert3 },
  ];

  const faqs = [
    { q: "How do I enroll in a program?", a: "Click 'Get Started' and choose your preferred program." },
    { q: "Are your coaches certified?", a: "Yes, all our experts are certified." },
    { q: "Can I cancel anytime?", a: "Absolutely! You control your membership." },
    { q: "Do you offer trial classes?", a: "Yes, we offer free trial classes." },
    { q: "Can I switch programs?", a: "Yes, contact support or use your dashboard." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const instructorAvatars = {
    'Priya Sharma': expert1,
    'Dr. Arjun Rao': expert2,
    'Lina Gomez': expert3,
    'Karan Mehta': coachImg,
    'Sarah Chen': trainer1,
    'Marcus Rodriguez': trainer2,
    'Dr. Aisha Johnson': trainer3,
    'David Thompson': trainer4,
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [cardWidth, setCardWidth] = useState(344); // Default width
  const carouselRef = useRef(null);

  // Calculate card dimensions based on screen size
  const getCardDimensions = () => {
    const isMobile = window.innerWidth < 640; // sm breakpoint
    const cardWidth = isMobile ? 288 : 320; // w-72 = 288px, w-80 = 320px
    const gap = 24; // gap-6 = 24px
    return {
      cardWidth,
      gap,
      totalWidth: cardWidth + gap
    };
  };
  const events = [
    // First set of cards (from second image)
    {
      img: event1Img,
      title: 'Sunrise Yoga & Meditation',
      time: 'Saturday, 7:00 AM',
      instructor: 'David Thompson',
    },
    {
      img: event2Img,
      title: 'Healthy Diet & Nutrition Q&A',
      time: 'Sunday, 11:00 AM',
      instructor: 'Marcus Rodriguez',
    },
    {
      img: event3Img,
      title: ' Renovation & Remodeling',
      time: 'Monday, 6:00 PM',
      instructor: 'David Thompson',
    },
    // Second set of cards (from first image)
    {
      img: service1Img, // Fitness image
      title: 'Total Body Fitness Program',
      time: 'Tuesday, 5:30 PM',
      instructor: 'Sarah Chen',
    },
    {
      img: eventImg, // Industrial Construction image
      title: 'Industrial Construction Workshop',
      time: 'Wednesday, 8:00 PM',
      instructor: 'Michael Rodriguez',
    },
    {
      img: coachImg, // Road Construction image
      title: 'Road Construction Workshop',
      time: 'Friday, 4:00 PM',
      instructor: 'James Wilson',
    },
    // Additional events to make 10 cards
    {
      img: trainer1,
      title: 'Advanced Strength Training',
      time: 'Thursday, 6:30 AM',
      instructor: 'Sarah Chen',
    },
    {
      img: trainer2,
      title: 'Nutrition Planning Workshop',
      time: 'Saturday, 10:00 AM',
      instructor: 'Marcus Rodriguez',
    },
    {
      img: trainer3,
      title: 'Mind-Body Balance Session',
      time: 'Sunday, 5:00 PM',
      instructor: 'Dr. Aisha Johnson',
    },
    {
      img: trainer4,
      title: 'Advanced Yoga Flow',
      time: 'Monday, 7:30 AM',
      instructor: 'David Thompson',
    },
  ];
  
  // Calculate card width on mount and resize
  useEffect(() => {
    const updateCardWidth = () => {
      const dimensions = getCardDimensions();
      setCardWidth(dimensions.totalWidth);
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Train-like continuous scroll effect
  useEffect(() => {
    if (isHovered) return; // Don't auto-scroll when hovered
    
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 2; // Increased speed
        const dimensions = getCardDimensions();
        
        // Reset to 0 when we've scrolled through one complete set of events
        // This creates a seamless loop without gaps
        if (newPosition >= events.length * dimensions.totalWidth) {
          return 0;
        }
        
        return newPosition;
      });
    }, 50); // Faster movement (reduced from 100ms to 50ms)
    
    return () => clearInterval(interval);
  }, [isHovered, events.length]);
  
  // Create duplicated events for seamless train-like scrolling
  const duplicatedEvents = [...events, ...events, ...events]; // Triple the events for seamless loop

  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    let currentUser = { firstName: '', lastName: '' };
    try {
      currentUser = JSON.parse(localStorage.getItem('currentUser')) || { firstName: '', lastName: '' };
    } catch (e) {}
    setInitials(
      `${currentUser.firstName?.[0] || ''}${currentUser.lastName?.[0] || ''}`.toUpperCase()
    );
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#f6fffd]'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      {/* Hero Section - Ecommerce Website */}
      <section className="w-full h-screen relative overflow-hidden flex flex-col items-start justify-center px-4 text-left">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute items-start inset-0 bg-black bg-opacity-60"></div>
        {/* Left-aligned Content for ecommerce */}
        <div className={`relative z-20 flex flex-col pt-20 justify-center ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}> 
          <h1 className="pt-2 text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow animate-fade-in-up">
            Shop the Latest Deals Online
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-xl animate-fade-in-up-delay-3">
            Discover top products, exclusive offers, and fast delivery. Your one-stop shop for everything you love!
          </p>
          <button className="bg-[#8F00FF] hover:bg-[#6c00b8] text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up text-lg">
            Start Shopping
          </button>
        </div>
      </section>

        {/* Meet Our Team Section */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}> 
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-black">Meet </span>
                <span className="relative inline-block" style={{ color: '#8F00FF' }}>
                  Our Ecommerce Team
                  <span className="block w-full h-1 rounded-full mt-1" style={{ backgroundColor: '#8F00FF', maxWidth: '120px', margin: '0 auto' }}></span>
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                Experts in product management, customer support, logistics, and marketing—dedicated to your best shopping experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="relative group bg-white rounded-xl shadow-lg overflow-hidden border border-violet-400 transition-transform duration-300 hover:-translate-y-2">
                <img src={trainer1} alt="Ava Patel" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-violet-900 bg-opacity-70 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">Ava Patel</h3>
                    <p className="text-violet-300 text-sm font-semibold mb-2">Product Manager</p>
                    <p className="text-gray-200 text-sm">Leading new product launches and ensuring top quality for every item.</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-1">Ava Patel</h3>
                  <p className="text-violet-600 text-sm font-semibold">Product Manager</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative group bg-white rounded-xl shadow-lg overflow-hidden border border-violet-400 transition-transform duration-300 hover:-translate-y-2">
                <img src={trainer4} alt="Liam Chen" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-violet-900 bg-opacity-70 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">Liam Chen</h3>
                    <p className="text-violet-300 text-sm font-semibold mb-2">Customer Support Lead</p>
                    <p className="text-gray-200 text-sm">Ensuring every customer gets fast, friendly help and support.</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-1">Liam Chen</h3>
                  <p className="text-violet-600 text-sm font-semibold">Customer Support Lead</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative group bg-white rounded-xl shadow-lg overflow-hidden border border-violet-400 transition-transform duration-300 hover:-translate-y-2">
                <img src={trainer2} alt="Sophia Turner" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-violet-900 bg-opacity-70 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">Sophia Turner</h3>
                    <p className="text-violet-300 text-sm font-semibold mb-2">Logistics Coordinator</p>
                    <p className="text-gray-200 text-sm">Managing fast, reliable shipping and delivery for every order.</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-1">Sophia Turner</h3>
                  <p className="text-violet-600 text-sm font-semibold">Logistics Coordinator</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="relative group bg-white rounded-xl shadow-lg overflow-hidden border border-violet-400 transition-transform duration-300 hover:-translate-y-2">
                <img src={trainer3} alt="Noah Smith" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-violet-900 bg-opacity-70 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">Noah Smith</h3>
                    <p className="text-violet-300 text-sm font-semibold mb-2">Marketing Specialist</p>
                    <p className="text-gray-200 text-sm">Creating campaigns and deals to help you save more and shop smarter.</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-1">Noah Smith</h3>
                  <p className="text-violet-600 text-sm font-semibold">Marketing Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {/* Meet Our CEO Section */}
                <section className="w-full relative min-h-screen">
                  {/* CEO Image as Background */}
                  <div className="absolute inset-0">
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      className="w-full h-full object-cover sm:object-contain lg:object-cover object-center"
                    >
                      <source src={ceo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Violet gradient overlay from left to center - responsive */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E9D5FF] via-[#8F00FF]/70 sm:via-[#8F00FF]/50 to-transparent"></div>
                  </div>
                  {/* Content overlay */}
                  <div className="relative z-10 text-justify flex items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-12">
                    <div className={`text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-lg sm:rounded-none p-6 sm:p-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                         Meet <span style={{ color: '#8F00FF' }}>Our CEO</span>
                       </h2>
                       <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" style={{ color: '#8F00FF' }}>
                         "Our mission is to make online shopping easy, affordable, and enjoyable for everyone."
                       </p>
                       <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed opacity-90 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" style={{ color: '#111' }}>
                         15+ years of experience in ecommerce, logistics, and customer satisfaction.
                       </p>
                       <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed opacity-90 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" style={{ color: '#111' }}>
                         "We believe in putting customers first and delivering value with every order."
                       </p>
                       {/* CEO Name */}
                       <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 sm:mb-8 opacity-95 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" style={{ color: '#8F00FF' }}>
                         - Alex Morgan
                       </p>
                      
                                             {/* Social Media Links */}
                       <div className="flex gap-3 sm:gap-4 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF4D00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#e6440a] hover:scale-110 shadow-lg">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

            {/* Why Choose Us Section */}
            <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white transition-colors duration-300">
              <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
                {/* Headline */}
                <div className={`text-center mb-6 sm:mb-8 ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up" data-aos-duration="800">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#8F00FF]">Why Shoply?</h2>
                  <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700">Shoply is trusted by thousands for fast shipping, secure payments, and unbeatable deals on top products.</p>
                </div>
                {/* Main content grid: image and ecommerce highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch min-h-[250px] sm:min-h-[300px]">
                  {/* Left: Ecommerce Image */}
                  <div className="flex flex-col justify-center h-full" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                    <img src={why1} alt="Shoply Trust" className="rounded-xl w-full h-full min-h-[300px] object-cover" />
                  </div>
                  {/* Right: Ecommerce Highlights */}
                  <div className={`flex flex-col gap-4 sm:gap-6 justify-center h-full min-h-[250px] sm:min-h-[300px] ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8F00FF] m-0 p-0">Why Customers Love Us</h3>
                    <ul className={`${isRTL ? 'list-none pr-5' : 'list-disc pl-5'} text-gray-800 text-sm sm:text-base md:text-lg space-y-3`}>
                      <li><span className="font-semibold text-[#8F00FF]">Fast Shipping:</span> Get your orders delivered quickly, every time.</li>
                      <li><span className="font-semibold text-[#8F00FF]">Secure Payments:</span> Shop confidently with encrypted checkout.</li>
                      <li><span className="font-semibold text-[#8F00FF]">Exclusive Deals:</span> Save more with daily offers and discounts.</li>
                      <li><span className="font-semibold text-[#8F00FF]">Top Brands:</span> Choose from a wide range of trusted products.</li>
                      <li><span className="font-semibold text-[#8F00FF]">Customer Support:</span> Friendly help whenever you need it.</li>
                      <li><span className="font-semibold text-[#8F00FF]">Easy Returns:</span> Hassle-free returns and exchanges.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

      {/* Featured Projects Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E9D5FF] via-[#8F00FF]/10 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#8F00FF] ${isRTL ? 'text-right' : 'text-left'}`}>Featured Products & Deals</h2>
          <div className="relative">
            <Carousel />
          </div>
        </div>
      </section>




      {/* Construction CTA Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E9D5FF] via-[#8F00FF]/10 to-white text-center">
        <div className={`max-w-3xl mx-auto flex flex-col items-center gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8F00FF] mb-4">Ready to Shop the Best Deals?</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">Join Shoply and enjoy exclusive offers, fast delivery, and secure checkout on every order.</p>
          <a href="#contact" className="inline-block bg-[#8F00FF] text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-violet-700 transition text-lg">Start Shopping</a>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home2;