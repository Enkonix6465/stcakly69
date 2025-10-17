
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from '../contexts/LanguageContext';
import morningWellness from '../assets/road1.jpg';
import mindfulMeditation from '../assets/homecta.jpg';
import nutrition from '../assets/road.jpg';
import blogVideo from '../assets/blogVideo.mp4';
import quizImage from '../assets/quiz.jpg';

function Blog() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const { translate, isRTL } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentMythFact, setCurrentMythFact] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('safety');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  // Scroll to top when component mounts
  useScrollToTop();

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

  const categoryContent = {
    shoppingTips: {
      title: "Smart Shopping Tips",
      description: "Learn how to save money, find the best deals, and shop safely online.",
      benefits: [
        "Save more on every purchase",
        "Discover hidden deals",
        "Shop securely",
        "Get the most value"
      ],
      tips: "Always compare prices and check reviews before buying.",
      articles: "20+ articles on online shopping tips and tricks"
    },
    productReviews: {
      title: "Product Reviews",
      description: "Read expert and user reviews on the latest electronics, fashion, and home products.",
      benefits: [
        "Make informed decisions",
        "Find top-rated products",
        "Avoid buyer's remorse",
        "See real user feedback"
      ],
      tips: "Look for verified purchase reviews for honest opinions.",
      articles: "15+ reviews on trending products"
    },
    deals: {
      title: "Best Deals & Offers",
      description: "Stay updated on flash sales, exclusive discounts, and limited-time offers.",
      benefits: [
        "Save big on top brands",
        "Access exclusive coupons",
        "Limited-time offers",
        "Early access to sales"
      ],
      tips: "Sign up for our newsletter to never miss a deal!",
      articles: "18+ articles on deals and discounts"
    },
    customerStories: {
      title: "Customer Stories",
      description: "Read real stories from Shoply customers about their favorite purchases and shopping experiences.",
      benefits: [
        "Trusted reviews",
        "Shopping inspiration",
        "Community insights",
        "Tips from real buyers"
      ],
      tips: "Share your own story for a chance to be featured!",
      articles: "10+ customer stories and testimonials"
    },
    shoppingTech: {
      title: "Shopping Technology",
      description: "Explore the latest tech trends in ecommerce, from mobile apps to AI-powered recommendations.",
      benefits: [
        "Personalized shopping",
        "Faster checkout",
        "Better deals",
        "Innovative features"
      ],
      tips: "Try our app for the best experience!",
      articles: "12+ articles on ecommerce technology"
    }
  };
  // Ecommerce Quiz Questions
  const quizQuestions = [
    {
      question: "Which is the safest way to pay online?",
      options: ["Bank transfer", "Cash on delivery", "Credit card with 3D Secure", "Gift card"],
      correct: 2
    },
    {
      question: "What should you check before buying from a new website?",
      options: ["Return policy", "Contact info", "Customer reviews", "All of the above"],
      correct: 3
    },
    {
      question: "How can you find the best deals?",
      options: ["Compare prices", "Use coupons", "Sign up for newsletters", "All of the above"],
      correct: 3
    },
    {
      question: "What is a verified purchase review?",
      options: ["Review by a seller", "Review by a buyer who purchased the item", "Review by a guest", "Review by a competitor"],
      correct: 1
    },
    {
      question: "Which is NOT a benefit of shopping online?",
      options: ["Convenience", "Limited selection", "Exclusive deals", "Home delivery"],
      correct: 1
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getAnswerColor = (questionIndex, optionIndex) => {
    if (selectedAnswers[questionIndex] === undefined) return '';
    
    if (optionIndex === quizQuestions[questionIndex].correct) {
      return 'bg-[#FF4D00] text-white';
    } else if (selectedAnswers[questionIndex] === optionIndex) {
      return 'bg-red-500 text-white';
    }
    return '';
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(selectedAnswers).forEach(questionIndex => {
      if (selectedAnswers[questionIndex] === quizQuestions[questionIndex].correct) {
        correct++;
      }
    });
    return correct;
  };

  // Ecommerce Myths and Facts
  const mythsAndFacts = [
    {
      myth: [
        "Online shopping is always risky.",
        "You can't return products bought online.",
        "All deals online are scams.",
        "You can't trust product reviews."
      ],
      fact: [
        "Shoply uses secure payment and buyer protection.",
        "Most online stores offer easy returns.",
        "Shoply verifies deals and sellers for safety.",
        "Verified purchase reviews are trustworthy."
      ]
    },
    {
      myth: [
        "Online stores never have customer support.",
        "Shipping always takes weeks.",
        "You can't find exclusive products online.",
        "Online shopping is only for tech-savvy people."
      ],
      fact: [
        "Shoply offers 24/7 customer support.",
        "Shoply delivers most orders in days.",
        "Shoply features exclusive brands and products.",
        "Shoply is easy for everyone to use."
      ]
    }
  ];

  const handleMythFactNext = () => {
    if (currentMythFact < mythsAndFacts.length - 1) {
      setCurrentMythFact(currentMythFact + 1);
    }
  };

  const handleGoToFirst = () => {
    setCurrentMythFact(0);
  };

  const handleMythFactPrevious = () => {
    if (currentMythFact > 0) {
      setCurrentMythFact(currentMythFact - 1);
    }
  };

  return (
  <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      {/* Section 1 - Hero Section (Ecommerce) */}
      <section className={`w-full h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-violet-50'}`}>
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={blogVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content Overlay */}
        <div className={`relative z-10 h-full flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'} justify-center px-4 sm:px-6 md:px-8 lg:px-16`}>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}> 
            Shoply Ecommerce Blog
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl transition-all duration-1000 ease-out delay-300 animate-fade-in-up-delay-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
            Discover shopping tips, product reviews, exclusive deals, and customer stories to help you shop smarter and save more.
          </p>
        </div>
      </section>

      {/* Section 2 - Featured Articles (Ecommerce) */}
      <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}> 
            Featured Ecommerce Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article Card 1 */}
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={morningWellness} 
                  alt="Smart Shopping Tips" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                  Smart Shopping Tips
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Learn how to save money, find the best deals, and shop safely online.
                </p>
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <span className="text-[#8F00FF] text-sm font-bold">S</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Shoply Team</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2 days ago • 5 min read</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/shopping-tips')}
                  className="text-[#8F00FF] font-semibold hover:text-violet-700 transition-colors"
                >
                  Read More {isRTL ? '←' : '→'}
                </button>
              </div>
            </div>

            {/* Featured Article Card 2 - Product Reviews */}
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={mindfulMeditation} 
                  alt="Product Reviews" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                  Product Reviews
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Read expert and user reviews on the latest electronics, fashion, and home products.
                </p>
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <span className="text-[#8F00FF] text-sm font-bold">P</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Shoply Team</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>1 day ago • 8 min read</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/product-reviews')}
                  className="text-[#8F00FF] font-semibold hover:text-violet-700 transition-colors"
                >
                  Read More {isRTL ? '←' : '→'}
                </button>
              </div>
            </div>

            {/* Featured Article Card 3 - Best Deals & Offers */}
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={nutrition} 
                  alt="Best Deals & Offers" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> 
                  Best Deals & Offers
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
                  Stay updated on flash sales, exclusive discounts, and limited-time offers.
                </p>
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <span className="text-[#8F00FF] text-sm font-bold">D</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Shoply Team</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>3 days ago • 6 min read</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/article/deals-offers')}
                  className="text-[#8F00FF] font-semibold hover:text-violet-700 transition-colors"
                >
                  Read More {isRTL ? '←' : '→'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Ecommerce Category Comparison */}
      <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-violet-100' : 'bg-violet-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`} style={{textAlign: 'center'}}> 
            Compare Ecommerce Categories
          </h2>
          <p className={`text-lg text-center mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
            Find the best category for your shopping needs: tips, reviews, deals, and more.
          </p>
          <div className="overflow-x-auto">
            <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}> 
              <div className="min-w-full">
                {/* Table Header */}
                <div className={`grid grid-cols-5 gap-4 p-6 border-b-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-violet-50 border-violet-200'}`}>
                  <div className={`font-bold text-lg text-center ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}>Category</div>
                  <div className={`font-bold text-lg text-center ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}>Description</div>
                  <div className={`font-bold text-lg text-center ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}>Best For</div>
                  <div className={`font-bold text-lg text-center ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}>Key Features</div>
                  <div className={`font-bold text-lg text-center ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}>Shoply Insights</div>
                </div> {/* close Table Header */}
                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {/* Shopping Tips Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-violet-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Shopping Tips</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Save money, shop smart</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Deal hunters, smart shoppers</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Tips, guides, articles</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>20+ articles</div>
                  </div>
                  {/* Product Reviews Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-violet-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Product Reviews</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Expert & user reviews</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Informed buyers</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Ratings, feedback, comparisons</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>15+ reviews</div>
                  </div>
                  {/* Deals Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-violet-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Deals & Offers</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Discounts, coupons, sales</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Bargain seekers</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Flash sales, exclusive deals</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>18+ articles</div>
                  </div>
                  {/* Customer Stories Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-violet-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Customer Stories</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Real experiences</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Community, inspiration</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Testimonials, tips</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>10+ stories</div>
                  </div>
                  {/* Shopping Tech Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 hover:bg-violet-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                    <div className="flex items-center">
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Shopping Tech</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Latest ecommerce tech</span>
                    </div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Tech lovers</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Apps, AI, features</div>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-black'}`}>12+ articles</div>
                  </div>
                </div> {/* close Table Rows */}
              </div> {/* close min-w-full */}
            </div> {/* close rounded-xl shadow-lg */}
          </div> {/* close overflow-x-auto */}
        </div> {/* close max-w-7xl */}
      </section>
        
  {/* Section 5 - Myths vs Facts - Ecommerce Two Column Layout */}
  <section className={`w-full text-justify py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}> 
          {/* Section Header */}
          <div className="text-center mb-16 px-4 max-w-7xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}>
              Ecommerce Myths vs Facts
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Get the truth about online shopping, deals, and customer safety.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Left Column: Myths */}
              <div className="bg-gradient-to-b from-[#8F00FF] to-[#6c00b8] p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-white mb-6">Myths</h3>
                <p className="text-white text-lg mb-8 leading-relaxed">
                  Common misconceptions about online shopping.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[currentSentenceIndex]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 1) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 2) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 3) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Facts */}
              <div className="bg-white p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-[#8F00FF] mb-6">Facts</h3>
                <p className="text-[#8F00FF] text-lg mb-8 leading-relaxed">
                  The reality of safe, smart online shopping.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#8F00FF] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#8F00FF] text-base">{mythsAndFacts[currentMythFact].fact[currentSentenceIndex]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#8F00FF] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#8F00FF] text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 1) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#8F00FF] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#8F00FF] text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 2) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-[#8F00FF] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-[#8F00FF] text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 3) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                </div>
              </div>
            </div>
        </section>


  {/* Section 6 - Ecommerce Quiz */}
  <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}> 
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#8F00FF]'}`}>
            2-Minute Ecommerce Quiz
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Quiz Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xl h-full">
                <img 
                  src={quizImage} 
                  alt="Ecommerce Quiz" 
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Quiz Content */}
            <div className="flex flex-col justify-center">
              {!showResults ? (
                <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Question {currentQuestion + 1} of {quizQuestions.length}
                      </span>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-2 bg-[#8F00FF] rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-4 mb-8">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-[#8F00FF] bg-violet-50'
                            : `${isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'}`
                        } ${getAnswerColor(currentQuestion, index)}`}
                        disabled={selectedAnswers[currentQuestion] !== undefined}
                      >
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                        currentQuestion === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-[#8F00FF] text-white hover:bg-violet-700'
                      }`}
                    >
                      Previous
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-[#8F00FF] text-white rounded-lg font-semibold hover:bg-violet-700 transition-colors"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}
                    </button>
                  </div>
                </div>
              ) : (
                /* Results Section */
                <div className={`rounded-xl shadow-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Quiz Results
                  </h3>
                  
                  <div className="text-center mb-8">
                    <div className={`text-6xl font-bold mb-4 ${isDarkMode ? 'text-[#8F00FF]' : 'text-[#8F00FF]'}`}>
                      {calculateScore()}/{quizQuestions.length}
                    </div>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {calculateScore() >= 4 ? 'Excellent ecommerce knowledge!' : 'Keep learning and shopping smart!'}
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => {
                        setCurrentQuestion(0);
                        setSelectedAnswers({});
                        setShowResults(false);
                      }}
                      className="px-6 py-3 bg-[#8F00FF] text-white rounded-lg font-semibold hover:bg-violet-700 transition-colors"
                    >
                      Take Quiz Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-[#8F00FF] to-[#6c00b8] flex justify-center items-center">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Shop Smarter?</h2>
          <p className="text-lg mb-8">Join Shoply for exclusive deals, shopping tips, and the best online experience.</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-[#8F00FF] font-bold rounded-lg shadow-lg hover:bg-violet-50 transition-colors text-lg">Contact Us</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;