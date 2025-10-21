import React, { useState, useEffect } from "react";
// Replaced with a direct ecommerce video from Pexels (MP4, compatible)
const homeheroVideo = "https://videos.pexels.com/video-files/856192/856192-hd_1920_1080_25fps.mp4"; // Example: woman shopping online, Pexels
import impactVideo from "../assets/impact.mp4";
import missionImg from "../assets/mission.jpeg";
import yogaImg from "../assets/villa.jpg";
import nutritionImg from "../assets/commercial.jpg";
import fitnessImg from "../assets/renovation.jpg";
import sleepImg from "../assets/industrial.jpg";
import badgeIcon from "../assets/logo.png";
import why1 from "../assets/why1.jpg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import homectaImg from "../assets/homecta.jpg";
import whoweareImg from "../assets/whoweare.jpg";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../contexts/LanguageContext";

function Hero({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);
  const { translate, isRTL } = useLanguage();

  const scrollToWhoWeAre = () => {
    const whoWeAreSection = document.getElementById('who-we-are');
    if (whoWeAreSection) {
      whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <section
    ref={elementRef}
    className={`w-full h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 text-center transition-all duration-1000 ease-out ${
      isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
    }`}
  >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={homeheroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{
          filter: 'brightness(0.8) contrast(1.1) saturate(1.1)',
          objectFit: 'cover'
        }}
      />
      {/* Content */}
  <div className={`relative z-20 flex flex-col pt-20 items-center text-center justify-center`}>
        <h1 className={`pt-2 text-6xl md:text-7xl font-extrabold text-white mb-8 drop-shadow transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{textAlign: 'center'}}>
          Welcome to Shoply Ecommerce
        </h1>
        <p className={`text-2xl md:text-3xl text-white mb-12 max-w-2xl transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`} style={{textAlign: 'center'}}>
          Discover the latest electronics, fashion, home essentials, and more. Enjoy fast shipping, secure checkout, and exclusive deals every day!
        </p>
        <button 
          onClick={scrollToWhoWeAre}
          className={`font-semibold px-12 py-5 rounded-full shadow transition-all duration-1000 ease-out delay-500 transform hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } text-xl ${
            isDarkMode 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-[#8F00FF] text-white hover:bg-[#6c00b8]'
          }`}>
          Shop Now
        </button>
      </div>
    </section>
  );
}


function WhoWeAre({ isDarkMode }) {
  // Example ecommerce product cards, styled like the attachment
  const products = [
    {
      img: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&w=600&h=400&fit=crop", // Wireless Headphones
      title: "Wireless Headphones",
      price: "$59",
      tag: "Popular",
      tagColor: "bg-orange-500",
    },
    {
      img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=600&h=400&fit=crop", // Trendy Sneakers
      title: "Trendy Sneakers",
      price: "$42",
      tag: "New Arrival",
      tagColor: "bg-violet-500",
    },
    {
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&w=600&h=400&fit=crop", // Smart Watch
      title: "Smart Watch",
      price: "$38",
      tag: "Premium",
      tagColor: "bg-blue-500",
    },
    {
      img: "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&w=600&h=400&fit=crop", // Eco Water Bottle
      title: "Eco Water Bottle",
      price: "$22",
      tag: "Eco",
      tagColor: "bg-green-500",
    },
    {
      img: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&w=600&h=400&fit=crop", // Fashion Backpack
      title: "Fashion Backpack",
      price: "$32",
      tag: "Best Seller",
      tagColor: "bg-pink-500",
    },
    {
      img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&h=400&fit=crop", // Dessert Candle
      title: "Dessert Candle",
      price: "$16",
      tag: "Dessert",
      tagColor: "bg-yellow-500",
    },
  ];
  return (
  <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Our Featured Products</h2>
  <p className="text-center text-gray-200 mb-10">Carefully selected by our team, each product represents the best in quality, value, and style.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="relative rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col justify-end min-h-[320px] group">
              <img src={product.img} alt={product.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-4 py-1 rounded-full text-white text-xs font-semibold shadow-lg ${product.tagColor}`}>{product.tag}</span>
              </div>
              <div className="relative z-10 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-bold mb-2 drop-shadow">{product.title}</h3>
                <div className="text-white text-2xl font-extrabold drop-shadow">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function ServicesOverview({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);
  const { isRTL } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      img: "https://images.pexels.com/photos/133579/pexels-photo-133579.jpeg?auto=compress&w=600&h=400&fit=crop", // Electronics: modern gadgets
      title: "Electronics",
      tagline: "Latest gadgets, smartphones, and accessories",
      details: "Shop top brands like Apple, Samsung, and Sony. Fast delivery and warranty included."
    },
    {
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=600&h=400&fit=crop", // Fashion: stylish clothing
      title: "Fashion",
      tagline: "Trendy clothing, shoes, and accessories",
      details: "Discover new arrivals, exclusive deals, and top brands in fashion for men, women, and kids."
    },
    {
      img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&w=600&h=400&fit=crop", // Home & Living: cozy living room
      title: "Home & Living",
      tagline: "Furniture, decor, and essentials",
      details: "Upgrade your home with stylish furniture, modern decor, and everyday essentials."
    },
    {
      img: "https://images.pexels.com/photos/4153140/pexels-photo-4153140.jpeg?auto=compress&w=600&h=400&fit=crop", // Beauty & Health: skincare products
      title: "Beauty & Health",
      tagline: "Skincare, wellness, and personal care",
      details: "Find top-rated beauty, skincare, and health products for every need."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 px-4 transition-all duration-1000 ease-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
      } ${isDarkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-[#8F00FF] mb-10 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Shop Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`relative group w-full h-[360px] bg-[#8F00FF] rounded-[10px] overflow-hidden shadow-md transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${i * 200}ms` 
              }}
            >
              {/* Image always visible */}
              <div className="w-full h-[320px] bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
              {/* Title (default) in white area */}
              <div className="flex-1 w-full min-h-[60px] flex items-center justify-center">
                 <h3 className="text-lg font-bold text-white uppercase tracking-wide text-center mt-2 group-hover:opacity-0 transition-opacity duration-300">{s.title}</h3>
              </div>
              {/* Overlay: covers entire card on hover */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 ${
                isDarkMode ? 'bg-black' : 'bg-white'
              }`}>
                <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-center mb-2 ${
                  isDarkMode ? 'text-white' : 'text-[#8F00FF]'
                }`}>{s.title}</h3>
                <p className={`text-lg text-justify md:text-xl mb-2 text-center font-semibold ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{s.tagline}</p>
                <p className={`text-base text-justify md:text-lg mb-2 text-center ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-700'
                }`}>{s.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactMetrics({ isDarkMode }) {
  // Construction metrics and animation
  const [counts, setCounts] = useState({
    customers: 0,
    orders: 0,
    categories: 0,
    partners: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = React.useRef(null);
  const { translate, isRTL } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            const targets = {
              customers: 12000,
              orders: 35000,
              categories: 12,
              partners: 150
            };
            const intervals = {};
            Object.keys(targets).forEach(key => {
              let current = 0;
              const target = targets[key];
              const increment = target / steps;
              intervals[key] = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(intervals[key]);
                }
                setCounts(prev => ({
                  ...prev,
                  [key]: Math.floor(current)
                }));
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className={`w-full py-20 px-4 relative overflow-hidden transition-all duration-1000 ease-out ${
        hasAnimated ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
      }`}
      style={{ background: '#8F00FF' }}
    >
      <div className="max-w-7xl mx-auto relative z-20 flex flex-col justify-start min-h-[420px]">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
          Shoply Impact: Trusted by Thousands
        </h2>
        <div className="w-full flex flex-col items-center">
          <p className="text-white/80 text-lg md:text-xl mb-6 max-w-2xl text-center">
            Over 12,000 happy customers, 35,000+ orders delivered, and 150+ brand partners. Shoply is your go-to ecommerce platform for quality, speed, and satisfaction.
          </p>
          <button className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8F00FF] transition-colors duration-200 mb-12">
            Join Shoply Today
          </button>
        </div>
        <div className="w-full flex flex-row justify-between items-center gap-2 mt-auto">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white">{counts.customers}+</span>
            <span className="text-white/80 text-base md:text-lg mt-2 text-center">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white">{counts.orders}+</span>
            <span className="text-white/80 text-base md:text-lg mt-2 text-center">Orders Delivered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white">{counts.categories}+</span>
            <span className="text-white/80 text-base md:text-lg mt-2 text-center">Product Categories</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white">{counts.partners}+</span>
            <span className="text-white/80 text-base md:text-lg mt-2 text-center">Brand Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickTestimonialsPreview({ isDarkMode }) {
  // Custom floating testimonial cards, styled and positioned to match the image
  // Animation for testimonials section
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);
  // No language context needed for static ecommerce reviews
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 px-2 md:px-0 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
      }`}
      style={{ background: '#f3e8ff' }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#8F00FF] mb-10 text-center">What Our Customers Say</h2>
      <div className="w-full flex flex-row justify-center gap-8">
        {/* Card 1 */}
        <div className="w-[300px] bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-violet-200">
          <img src={user1} alt="Lina Gomez" className="w-16 h-16 rounded-full object-cover border-2 border-[#8F00FF] mb-2" />
          <div className="font-bold text-[#8F00FF] text-base mb-1">Lina Gomez</div>
          <div className="text-xs text-gray-500 mb-2">Verified Buyer</div>
          <div className="text-gray-800 text-sm mb-2">“Shoply always delivers on time and the products are top quality. Highly recommended!”</div>
          <div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_, idx) => (<span key={idx} className="text-yellow-400 text-lg">★</span>))}</div>
        </div>
        {/* Card 2 */}
        <div className="w-[300px] bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-violet-200">
          <img src={user2} alt="Fanny Owen" className="w-16 h-16 rounded-full object-cover border-2 border-[#8F00FF] mb-2" />
          <div className="font-bold text-2xl mb-2 text-[#8F00FF]">Excellent Service</div>
          <div className="text-gray-700 text-base mb-2">“Customer support is fantastic and the deals are unbeatable. Shoply is my go-to!”</div>
          <div className="font-semibold text-lg mb-2 text-[#8F00FF]">Fanny Owen</div>
          <div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_, idx) => (<span key={idx} className="text-yellow-400 text-lg">★</span>))}</div>
        </div>
        {/* Card 3 */}
        <div className="w-[300px] bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-violet-200">
          <img src={user3} alt="Amit Patel" className="w-16 h-16 rounded-full object-cover border-2 border-[#8F00FF] mb-2" />
          <div className="font-bold text-xs text-[#8F00FF] mb-1">Amit Patel</div>
          <div className="text-gray-700 text-xs mb-1">“Great variety and easy checkout. I always find what I need at Shoply.”</div>
          <div className="text-gray-600 text-sm mb-1">Frequent Shopper</div>
          <div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_, idx) => (<span key={idx} className="text-yellow-400 text-lg">★</span>))}</div>
        </div>
      </div>
    </section>
  );
}

function CallToActionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);
  const { translate, isRTL } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToServices = () => {
    navigate('/services');
  };

  return (
    <section ref={sectionRef} className="w-full py-16 px-2 md:px-0 flex justify-center items-center relative overflow-hidden" style={{ backgroundColor: '#8F00FF' }}>
      <div className="max-w-7xl w-full relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left: Content - Slide from left */}
        <div className={`flex-1 flex flex-col justify-center text-left pl-8 lg:pl-12 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Shop the Latest Deals on Shoply!
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
            Enjoy exclusive offers, fast shipping, and secure checkout on electronics, fashion, home essentials, and more. Your next favorite product is just a click away.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={navigateToContact}
              className="font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 bg-white text-[#8F00FF] hover:bg-gray-100"
            >
              Start Shopping
            </button>
            <button 
              onClick={navigateToServices}
              className="font-semibold px-8 py-4 rounded-full border-2 shadow-lg focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 bg-transparent text-white border-white hover:bg-white hover:text-[#8F00FF]"
            >
              Explore Categories
            </button>
          </div>
        </div>
        {/* Right: Image - Slide from right */}
        <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img 
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&w=800&h=600&fit=crop" 
              alt="Ecommerce Shopping" 
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isRTL } = useLanguage();

  // Scroll to top when component mounts
  useScrollToTop();

  // Dark mode functionality
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };
    
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

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
      <Hero isDarkMode={isDarkMode} />
      <WhoWeAre isDarkMode={isDarkMode} />
      <ServicesOverview isDarkMode={isDarkMode} />
      <ImpactMetrics isDarkMode={isDarkMode} />
      <QuickTestimonialsPreview isDarkMode={isDarkMode} />
      <CallToActionBanner isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}