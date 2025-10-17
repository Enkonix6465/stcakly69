

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import morningWellness from '../assets/road1.jpg';
import mindfulMeditation from '../assets/homecta.jpg';
import nutrition from '../assets/road.jpg';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Article data based on the featured articles
  const articles = {
    'safety-practices': {
      title: "Essential Safety Practices for Every Construction Site",
      author: "Safety Team",
      authorInitial: "S",
      readTime: "5 min read",
      publishDate: "2 days ago",
      category: "Safety",
      image: morningWellness,
      content: `
        <p>Learn the top safety protocols to keep your team and site secure on every project. Safety is the foundation of every successful construction project. By following essential safety practices, you can prevent accidents, protect workers, and ensure compliance with regulations.</p>
        <h2>Key Safety Protocols</h2>
        <ul>
          <li>Conduct daily safety briefings and toolbox talks</li>
          <li>Ensure all workers wear appropriate personal protective equipment (PPE)</li>
          <li>Maintain clear signage and barriers around hazardous areas</li>
          <li>Regularly inspect equipment and tools for defects</li>
          <li>Provide first aid training and keep kits accessible</li>
          <li>Enforce fall protection measures for work at heights</li>
        </ul>
        <h2>Building a Safety Culture</h2>
        <p>Encourage open communication about hazards, reward safe behavior, and make safety everyone’s responsibility. A strong safety culture leads to fewer incidents and a more productive site.</p>
      `,
    },
    'modern-materials': {
      title: "Modern Materials: Building for the Future",
      author: "Materials Team",
      authorInitial: "M",
      readTime: "8 min read",
      publishDate: "1 day ago",
      category: "Materials",
      image: mindfulMeditation,
      content: `
        <p>Discover the latest innovations in construction materials and how they improve project outcomes. Modern materials offer enhanced durability, sustainability, and efficiency for today’s construction needs.</p>
        <h2>Innovative Materials</h2>
        <ul>
          <li><strong>Self-healing concrete:</strong> Reduces maintenance and extends lifespan</li>
          <li><strong>Cross-laminated timber (CLT):</strong> Eco-friendly and strong for multi-story buildings</li>
          <li><strong>Recycled steel:</strong> Lowers environmental impact and maintains strength</li>
          <li><strong>Smart glass:</strong> Adjusts transparency for energy efficiency</li>
        </ul>
        <h2>Benefits of Modern Materials</h2>
        <p>Using advanced materials can lower costs, speed up construction, and create safer, greener buildings. Stay updated with material trends to give your projects a competitive edge.</p>
      `,
    },
    'project-management': {
      title: "Project Management Tools for Construction Success",
      author: "Project Team",
      authorInitial: "P",
      readTime: "6 min read",
      publishDate: "3 days ago",
      category: "Project Management",
      image: nutrition,
      content: `
        <p>Explore the best digital tools and strategies for managing construction projects efficiently. Effective project management is key to delivering projects on time and within budget.</p>
        <h2>Top Project Management Tools</h2>
        <ul>
          <li><strong>Procore:</strong> Comprehensive platform for documentation, scheduling, and collaboration</li>
          <li><strong>PlanGrid:</strong> Real-time access to blueprints and field data</li>
          <li><strong>Buildertrend:</strong> Streamlines communication and budgeting</li>
          <li><strong>Smartsheet:</strong> Flexible project tracking and reporting</li>
        </ul>
        <h2>Strategies for Success</h2>
        <p>Set clear milestones, communicate regularly, and use analytics to track progress. The right tools and strategies help teams stay organized and deliver quality results.</p>
      `,
    },
  };

  const article = articles[id];

  if (!article) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <button
          onClick={() => navigate('/blog')}
          className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const articleImage = article.image;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      {/* Navigation */}
      <nav className={`py-4 px-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-white'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/blog')}
            className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            ← Back to Blog
          </button>
        </div>
      </nav>

      {/* Article Layout - Image above, content below */}
      <main className="relative">
        {/* Image Section */}
        <div className="flex flex-col items-center py-8 lg:py-12">
          <div className="relative w-full max-w-4xl h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={articleImage} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            {/* Category Badge - Top Right of Image */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                isDarkMode 
                  ? 'bg-black/80 text-white' 
                  : 'bg-white/90 text-gray-900'
              } shadow-md`}>
                {article.category}
              </span>
            </div>
          </div>
        </div>

        {/* Title and Intro Content Section */}
        <div className="flex flex-col items-center px-4">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-teal-500">
              {article.title}
            </h1>
            <div className={`prose max-w-none text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p className="mb-6">
                Starting your day with intention and purpose can transform your entire life. Research shows that people who follow consistent morning routines experience higher levels of productivity, better mental health, and improved overall well-being.
              </p>
              <p className="mb-6">
                In today's fast-paced world, taking control of your morning can be the difference between a chaotic day and one filled with clarity and purpose. Whether you're a busy professional, a student, or someone simply looking to improve their daily life, establishing a morning wellness routine.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width Content Section */}
        <section className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <article
              className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
              }}
            >
              <div
                dangerouslySetInnerHTML={{ 
                  __html: article.content.replace(/<p>[\s\S]*?<\/p>/i, '') 
                }}
                className={[
                  'custom-article-content',
                  isDarkMode ? 'text-gray-300' : 'text-gray-700',
                ].join(' ')}
              />
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className={`mt-16 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}> 
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-600 text-sm font-bold">{article.authorInitial}</span>
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Written by {article.author}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{article.readTime}</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/blog')}
                className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .custom-article-content h1, .custom-article-content h2, .custom-article-content h3, .custom-article-content h4 {
          margin-top: 2em;
          margin-bottom: 0.8em;
          font-weight: 700;
          line-height: 1.3;
          color: #14b8a6;
        }
        .custom-article-content h1 { font-size: 2rem; }
        .custom-article-content h2 { font-size: 1.5rem; }
        .custom-article-content h3 { font-size: 1.25rem; }
        .custom-article-content h4 { font-size: 1.1rem; }
        .custom-article-content p {
          margin-top: 1em;
          margin-bottom: 1em;
          font-size: 1.05em;
          line-height: 1.7;
        }
        .custom-article-content ul, .custom-article-content ol {
          margin-top: 1em;
          margin-bottom: 1em;
          padding-left: 1.5em;
        }
        .custom-article-content li {
          margin-bottom: 0.5em;
          font-size: 1em;
        }
        .custom-article-content strong {
          font-weight: 600;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default Article;