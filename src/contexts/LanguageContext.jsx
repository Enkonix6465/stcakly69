import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Translation data
const translations = {
  English: {
    // Header translations
    home: 'Home',
    aboutUs: 'About Us',
    services: 'Services',
    blog: 'Blog',
    contactUs: 'Contact Us',
    viewAllServices: 'View All Services',
    yogaMeditation: 'Yoga & Meditation',
    commercial: 'Commercial Construction',
    renovation: 'Renovation & Remodeling',
    interiorDesign: 'Interior Design & Finishing',
    industrial: 'Industrial Construction',
    road: 'Road & Infrastructure Construction',
    userProfile: 'User Profile',
    signedIn: 'Signed in',
    logout: 'Logout',
    
    // Hero section
    buildingYourFuture: 'Building Your Future',
    heroDescription: 'Quality construction services for residential, commercial, and industrial projects. From concept to completion, we deliver excellence, safety, and reliability every step of the way.',
    exploreOurServices: 'Explore Our Services',
    
    // Who We Are section
    yearsExperience: 'Years experience building',
    aboutUsTitle: 'About Us',
    expertConstruction: 'Expert construction for every vision',
    aboutUsDescription: 'With 25 years of experience, our team delivers quality construction services for residential, commercial, and industrial projects. We focus on safety, innovation, and client satisfaction—turning your ideas into reality with reliable project management and skilled craftsmanship.',
    contactUs: 'Contact Us',
    
    // Services section
    ourTopServices: 'Our Top Services',
    residentialConstruction: 'Residential Construction',
    residentialTagline: 'Custom homes, apartments, and villas.',
    residentialDetails: 'We build high-quality residential spaces tailored to your needs, ensuring comfort, safety, and modern design.',
    commercialConstruction: 'Commercial Construction',
    commercialTagline: 'Offices, retail, and business spaces.',
    commercialDetails: 'From office complexes to retail stores, we deliver functional and attractive commercial buildings for your business success.',
    renovationRemodeling: 'Renovation & Remodeling',
    renovationTagline: 'Transform and upgrade existing spaces.',
    renovationDetails: 'Give your property a new look and improved functionality with our expert renovation and remodeling services.',
    industrialConstruction: 'Industrial/Infrastructure Construction',
    industrialTagline: 'Factories, warehouses, and infrastructure.',
    industrialDetails: 'We handle large-scale industrial and infrastructure projects with a focus on durability, efficiency, and safety.',
    
    // Services Page Translations
    startBuildingDreams: 'Start Building Dreams',
    servicesHeroDescription: 'From residential towers to commercial complexes, we deliver quality construction, innovative solutions, and on-time project completion by milestone.',
    exploreServices: 'Explore Services',
    getAQuote: 'Get a Quote',
    qualityServices: 'Quality Services',
    featuredProjects: 'Featured Projects',
    
    // Cost Estimator Section
    estimateProjectCost: 'Estimate Your Project Cost',
    costEstimatorDescription: 'A quick tool that lets visitors get a rough cost idea for their project before contacting you',
    renovation: 'Renovation',
    residential: 'Residential',
    commercial: 'Commercial',
    industrial: 'Industrial',
    areaSizePlaceholder: 'Area Size (sq. ft. or m²)',
    standard: 'Standard',
    premium: 'Premium',
    luxury: 'Luxury',
    locationOptional: 'Location (optional)',
    yourName: 'Your name',
    phoneNumber: 'Phone number',
    getDetailedQuote: 'Get a Detailed Quote',
    instantApproximateCost: '- Instant Approximate Cost',
    
    // Safety Standards Section
    safetyStandardsFollowed: 'Safety Standards Followed',
    certifiedProfessionals: 'Certified Professionals',
    certifiedProfessionalsDesc: 'All our staff are certified and trained to follow the highest safety protocols in the industry.',
    regularAudits: 'Regular Audits',
    regularAuditsDesc: 'We conduct regular safety audits and inspections to ensure compliance with all regulations.',
    qualityMaterials: 'Quality Materials',
    qualityMaterialsDesc: 'Only approved, high-quality materials are used to guarantee safety and durability.',
    emergencyPreparedness: 'Emergency Preparedness',
    emergencyPreparednessDesc: 'Comprehensive emergency plans and first-aid readiness at every site.',
    
    // Featured Projects Section
    finishingWorks: 'FINISHING WORKS',
    redevelopment: 'REDEVELOPMENT',
    modernBathroom: 'Modern bathroom',
    repairOfApartments: 'Repair of apartments',
    decorativeWorksInLiving: 'Decorative works in living',
    officeInteriorModernStyle: 'Office interior in modern style',
    
    // Service Cards
    residentialConstructionDesc: 'Building dream homes with modern architecture, quality materials, and sustainable design. From single-family homes to luxury estates, we create living spaces that reflect your lifestyle.',
    commercialConstructionDesc: 'Constructing office buildings, retail spaces, and commercial complexes with cutting-edge technology and efficient designs that maximize functionality and productivity.',
    renovationRemodelingDesc: 'Transform existing spaces with expert renovation services. We modernize kitchens, bathrooms, and entire buildings while maintaining structural integrity and enhancing value.',
    interiorDesignFinishing: 'Interior Design & Finishing',
    interiorDesignFinishingDesc: 'Complete interior solutions from concept to completion. We provide custom designs, premium finishes, and detailed craftsmanship for elegant and functional living spaces.',
    industrialConstructionDesc: 'Specialized construction for factories, warehouses, and manufacturing facilities. We deliver robust structures with advanced safety systems and operational efficiency.',
    roadInfrastructureConstruction: 'Road/Infrastructure Construction',
    roadInfrastructureConstructionDesc: 'Building essential infrastructure including roads, bridges, and public works projects. We use durable materials and proven techniques for long-lasting community assets.',
    
    // Commercial Construction Specific Translations
    commercialConstructionServices: 'Commercial Construction Services',
    commercialHeroDescription: 'Build, expand, or renovate your business space with our expert team—delivering quality, safety, and efficiency for every project.',
    whyChooseCommercial: 'Why Choose Our Commercial Services?',
    whyChooseCommercialDesc: 'Experience hassle-free, high-quality commercial construction tailored to your business needs.',
    buildingBusinessesBuildingSuccess: 'Building Businesses, Building Success',
    buildingBusinessesDesc: 'We deliver on our promise of quality, safety, and customer satisfaction—every single time.',
    
    // Commercial Benefits
    turnkeyProjectDelivery: 'Turnkey Project Delivery',
    modernSustainableDesigns: 'Modern & Sustainable Designs',
    strictQualitySafetyStandards: 'Strict Quality & Safety Standards',
    onTimeOnBudgetCompletion: 'On-Time & On-Budget Completion',
    expertProjectManagement: 'Expert Project Management',
    comprehensiveAftercareSupport: 'Comprehensive Aftercare & Support',
    
    // Commercial Services
    officeWorkspaceConstruction: 'Office & Workspace Construction',
    officeWorkspaceConstructionDesc: 'Design and build modern, efficient office spaces tailored to your business needs.',
    retailShowroomFitOuts: 'Retail & Showroom Fit-Outs',
    retailShowroomFitOutsDesc: 'Create inviting retail environments and showrooms that attract customers.',
    industrialWarehouseFacilities: 'Industrial & Warehouse Facilities',
    industrialWarehouseFacilitiesDesc: 'Robust construction for factories, warehouses, and logistics centers.',
    hospitalityRestaurantProjects: 'Hospitality & Restaurant Projects',
    hospitalityRestaurantProjectsDesc: 'Build hotels, restaurants, and cafes with a focus on guest experience.',
    healthcareInstitutionalBuildings: 'Healthcare & Institutional Buildings',
    healthcareInstitutionalBuildingsDesc: 'Specialized construction for clinics, hospitals, and educational institutions.',
    renovationExpansion: 'Renovation & Expansion',
    renovationExpansionDesc: 'Upgrade, expand, or modernize your commercial property with minimal disruption.',
    
    // Commercial Process
    requirementAnalysis: 'Requirement Analysis',
    siteSurveyFeasibilityStudy: 'Site Survey & Feasibility Study',
    designPlanningApprovals: 'Design, Planning & Approvals',
    transparentQuotationAgreement: 'Transparent Quotation & Agreement',
    constructionProgressUpdates: 'Construction & Regular Progress Updates',
    finalHandoverOngoingSupport: 'Final Handover & Ongoing Support',
    
    // Commercial Features
    dedicatedProjectManager: 'Dedicated Project Manager',
    dedicatedProjectManagerDesc: 'Expert project manager assigned to oversee every aspect of your commercial construction project and ensure optimal results.',
    detailedProjectTimeline: 'Detailed Project Timeline',
    detailedProjectTimelineDesc: 'Comprehensive project schedule with clear milestones to track your construction progress effectively.',
    qualitySafetyAudits: 'Quality & Safety Audits',
    qualitySafetyAuditsDesc: 'Regular quality inspections and safety monitoring to ensure all construction standards and regulations are met.',
    postCompletionMaintenance: 'Post-Completion Maintenance',
    postCompletionMaintenanceDesc: 'Ongoing support and maintenance services to ensure your commercial property remains in excellent condition.',
    
    // Additional Commercial Translations
    ourCommercialServices: 'Our Commercial Construction Services',
    commercialProcessDescription: 'We make your commercial construction journey smooth and transparent from start to finish.',
    whatMakesUsDifferent: 'What Sets Us Apart',
    whatMakesUsDifferentDesc: 'Our commitment to quality, transparency, and client satisfaction makes us the trusted choice for commercial construction.',
    commercialExpertiseDesc1: 'We handle every aspect of your project, from design to handover, with a focus on safety and excellence.',
    commercialExpertiseDesc2: 'Our team is licensed, insured, and dedicated to delivering your business space on time and within budget.',
    commercialExpertiseDesc3: 'We use only the best materials and maintain open communication throughout the process.',
    commercialExpertiseDesc4: 'Enjoy peace of mind with our post-completion support and quality assurance.',
    readyToBuildBusinessSpace: 'Ready to Build Your Business Space?',
    businessSpaceDescription: 'Contact us today for a free consultation and let our experts turn your vision into reality with quality, safety, and on-time delivery.',
    
    // Impact Metrics section
    buildingSuccess: 'Building Success, One Project at a Time',
    impactDescription: 'We are proud to have delivered exceptional construction solutions for clients across multiple industries. Our commitment to quality, safety, and innovation has helped us complete a wide range of projects, from residential buildings to large-scale commercial and industrial developments. Partner with us to bring your vision to life with expertise you can trust.',
    scheduleCall: 'Schedule a call',
    happyClients: 'Happy Clients',
    completedProjects: 'Completed Projects',
    industriesServed: 'Industries Served',
    expertTeamMembers: 'Expert Team Members',
    
    // Testimonials section
    whatOurClientsSay: 'What Our Clients Say',
    excellentJob: 'EXCELLENT JOB!',
    testimonialDescription: 'A seamless process from start to finish. Attention to detail and client needs is just fantastic.',
    
    // Testimonial cards
    victoriaLinton: 'Victoria Linton',
    projectManager: 'Project Manager',
    victoriaReview: 'The team exceeded our expectations. Our office building was delivered on time and with outstanding quality!',
    
    fannyOwen: 'Fanny Owen',
    fannyReview: 'A seamless process from start to finish. Attention to detail and client needs is just fantastic.',
    
    clientReview: 'Client Review',
    clientReviewText: 'Rhoncu neque viverra justo ultricies duis lorem dolor sed comset adipiscing.',
    
    alexMorgan: 'Alex Morgan',
    siteSupervisor: 'Site Supervisor',
    alexReview: 'Very satisfied with the timely delivery and quality of work!',
    
    dmitriWoodhouse: 'Dmitri Woodhouse',
    dmitriReview: 'Mauris in aliquam se fringilla morbi tincidunt augue amet dui massa!',
    
    nellyVane: 'NELLY VANE',
    interiorDesigner: 'Interior Designer',
    nellyReview: 'The renovation was handled with great professionalism. Highly recommend!',
    
    priyaSharma: 'Priya Sharma',
    projectEngineer: 'Project Engineer',
    priyaReview: 'Excellent communication and project management throughout.',
    
    topNotch: 'Top-notch!',
    topNotchReview: 'Our home renovation was smooth and stress-free.',
    
    recommended: 'Recommended!',
    recommendedReview: 'Commercial space completed ahead of schedule.',
    
    greatSupport: 'Great Support',
    greatSupportReview: 'The team was always available for our questions.',
    
    impressiveResults: 'Impressive Results',
    impressiveResultsReview: 'Our office looks amazing, thank you!',
    
    professionalTeam: 'Professional Team',
    professionalTeamReview: 'Very professional and courteous staff.',
    
    // CTA section
    readyToBuild: 'Ready to Build Your Next Project?',
    ctaDescription: 'Partner with us for your construction needs—residential, commercial, or industrial. Our experienced team delivers quality, safety, and innovation on every project. Let\'s turn your vision into reality with reliable project management and expert craftsmanship.',
    getFreeConsultation: 'Get a Free Consultation',
    viewOurServices: 'View Our Services',
    
    // Mission & Vision section
    ourMission: 'Our Mission',
    missionStatement: 'To provide accessible, comprehensive construction solutions that transform communities and create lasting positive infrastructure development with quality, safety, and innovation.',
    ourVision: 'Our Vision',
    visionStatement: 'To be the leading construction company where clients discover their path to exceptional building projects and sustainable infrastructure transformation.',

    // About Us page translations
    aboutUsTitle: 'About Us',
    company: 'Company',
    aboutHeroDescription: 'With 25 years of experience, our team delivers quality construction services for residential, commercial, and industrial projects with unwavering commitment to excellence.',
    
    // Our Growth section
    ourGrowthTitle: 'Our Growth Through the Years',
    ourGrowthDescription: 'From humble beginnings to industry leadership, discover the milestones that shaped our construction excellence and commitment to quality.',
    
    // Timeline labels
    timelineFoundation: 'Foundation',
    timelineGrowth: 'Growth',
    timelineInnovation: 'Innovation',
    timelineLeadership: 'Leadership',
    timelineFuture: 'Future',
    
    // Milestones
    milestone1Title: 'Foundation Laid',
    milestone1Description: 'Started our journey with residential construction projects',
    milestone2Title: 'Commercial Growth', 
    milestone2Description: 'Expanded into commercial and industrial construction',
    milestone3Title: 'Technological Innovation',
    milestone3Description: 'Integrated advanced construction technologies and sustainable practices',
    milestone4Title: 'Industry Leadership',
    milestone4Description: 'Became a recognized leader in construction excellence',
    milestone5Title: 'Future Vision',
    milestone5Description: 'Continuing to build tomorrow with innovative solutions',

    // What Makes Us Unique
    whatMakesUsUnique: 'What Makes Us Unique',
    uniqueDescription: 'We combine decades of experience with cutting-edge technology to deliver construction projects that stand the test of time.',
    qualityCraftsmanship: 'Quality Craftsmanship',
    qualityCraftsmanshipDesc: 'We deliver superior construction by using the best materials, skilled professionals, and rigorous quality control at every stage of the project.',
    innovativeSolutions: 'Innovative Solutions',
    innovativeSolutionsDesc: 'We embrace the latest construction technologies and methods to deliver efficient, sustainable, and cost-effective results for our clients.',
    transparentCommunication: 'Transparent Communication',
    transparentCommunicationDesc: 'We keep our clients informed at every step, ensuring clarity, trust, and a smooth construction experience from start to finish.',

    // Our Values
    ourValues: 'Our Values',
    onTimeDelivery: 'On-Time Delivery',
    onTimeDeliveryDesc: 'We are committed to completing projects within deadlines, maintaining efficiency and reliability at every stage.',
    clientCentricApproach: 'Client-Centric Approach',
    clientCentricApproachDesc: 'We prioritize our clients\' needs, offering transparent communication and tailored solutions for every project.',
    safetyFirst: 'Safety First',
    safetyFirstDesc: 'We uphold the highest safety standards to protect our team, clients, and communities on every site.',
    sustainablePractices: 'Sustainable Practices',
    sustainablePracticesDesc: 'We integrate eco-friendly methods and materials to build responsibly for the future.',
    innovationTechnology: 'Innovation & Technology',
    innovationTechnologyDesc: 'We leverage the latest construction technologies to deliver modern, efficient, and cost-effective solutions.',

    // CTA Section
    readyToBuildVision: 'Ready to Build Your Vision?',
    ctaDescription: 'Partner with us for quality construction, on-time delivery, and innovative solutions. Let\'s turn your ideas into reality with a team you can trust.',
    startJourney: 'Start your journey',
    
    // Home2 specific translations
    buildingWithIntegrity: 'Building with Integrity',
    trustedConstruction: 'Trusted construction for every vision.',
    excellenceInEveryBuild: 'Excellence in every build.',
    startYourProject: 'Start Your Project',
    meet: 'Meet',
    ourTeam: 'Our Team',
    teamDescription: 'Our experienced construction team brings your vision to life with precision, safety, and quality. From project planning to on-site management, we ensure every build is completed on time and to the highest standards. Trust us to deliver excellence for your residential, commercial, or industrial projects.',
    
    // Team members
    michaelStone: 'Michael Stone',
    siteManager: 'SITE MANAGER',
    michaelStoneDescription: 'Oversees all on-site operations, ensuring safety, quality, and timely project delivery for every construction build.',
    emilyCarter: 'Emily Carter',
    projectCoordinator: 'PROJECT COORDINATOR',
    emilyCarterDescription: 'Coordinates between teams, suppliers, and clients to keep construction projects on track and within budget.',
    davidMason: 'David Mason',
    leadEngineer: 'LEAD ENGINEER',
    davidMasonDescription: 'Responsible for structural planning, technical supervision, and ensuring engineering excellence on every site.',
    sophiaTurner: 'Sophia Turner',
    safetyOfficer: 'SAFETY OFFICER',
    sophiaTurnerDescription: 'Ensures all safety protocols are followed, providing a secure environment for workers and visitors on site.',
    
    // CEO section
    ourCEO: 'Our CEO',
    ceoMissionStatement: 'Leading our mission to build a better tomorrow through quality construction and innovation.',
    ceoExperience: 'With over 20 years of experience in the construction industry, our CEO has overseen the successful completion of numerous residential, commercial, and industrial projects. Their commitment to safety, efficiency, and client satisfaction drives our company forward.',
    ceoQuote: 'We believe that every project is an opportunity to create lasting value for our clients and communities. Our team is dedicated to delivering excellence, from the ground up.',
    ceoName: 'Lisa, CEO',
    
    // Why Choose Us section
    whyBuildersTrustUs: 'Why Builders Trust Us',
    whyBuildersTrustUsDescription: 'We deliver quality construction solutions with a focus on safety, innovation, and client satisfaction. Our experienced team, modern equipment, and commitment to deadlines set us apart in the construction industry.',
    constructionAdvantages: 'Our Construction Advantages',
    experiencedTeam: 'Experienced Team',
    experiencedTeamDescription: 'Decades of hands-on expertise in residential, commercial, and industrial construction.',
    qualityMaterials: 'Quality Materials',
    qualityMaterialsDescription: 'We use only industry-approved materials for lasting results and safety.',
    safetyFirst: 'Safety First',
    safetyFirstDescription: 'Strict protocols and regular training keep our sites secure for everyone.',
    onTimeDelivery: 'On-Time Delivery',
    onTimeDeliveryDescription: 'We meet deadlines and keep your project on track, every time.',
    modernEquipment: 'Modern Equipment',
    modernEquipmentDescription: 'Advanced machinery and technology for efficient, high-quality builds.',
    transparentCommunication: 'Transparent Communication',
    transparentCommunicationDescription: 'We keep you informed at every stage of your project.',
    
    // Projects and CTA
    featuredProjects: 'Featured Projects',
    readyToBuildDream: 'Ready to Build Your Dream Project?',
    readyToBuildDreamDescription: 'Partner with our expert construction team for quality, safety, and on-time delivery. From residential to commercial, we turn your vision into reality—every step of the way.',
    
    // Residential Page Translations
    residentialConstructionServices: 'Residential Construction Services',
    residentialHeroDescription: 'We make your construction journey smooth and transparent from start to finish.',
    exploreMore: 'Explore More',
    whyChooseResidential: 'Why Choose Our Residential Services?',
    whyChooseResidentialDesc: 'Experience hassle-free, high-quality residential construction with personalized attention to every detail.',
    buildingDreamHomes: 'Building Dream Homes',
    buildingDreamHomesDesc: 'Creating beautiful, functional residential spaces that reflect your lifestyle and exceed expectations.',
    customHomeDesignPlanning: 'Custom Home Design & Planning',
    highQualityMaterials: 'High-Quality Materials & Workmanship',
    onTimeProjectDelivery: 'On-Time Project Delivery',
    transparentPricing: 'Transparent Pricing & Contracts',
    energyEfficientSolutions: 'Energy-Efficient & Sustainable Solutions',
    comprehensiveProjectManagement: 'Comprehensive Project Management',
    ourResidentialServices: 'Our Residential Construction Services',
    customHomeDesign: 'Custom Home Design',
    customHomeDesignDesc: 'Personalized architectural designs tailored to your lifestyle and preferences with modern functionality.',
    newHomeConstruction: 'New Home Construction',
    newHomeConstructionDesc: 'Complete home building services from foundation to final finishing with quality materials and craftsmanship.',
    homeRenovationRemodeling: 'Home Renovation & Remodeling',
    homeRenovationRemodelingDesc: 'Transform your existing home with kitchen, bathroom, and whole-home renovation services.',
    interiorDesignFinishing: 'Interior Design & Finishing',
    interiorDesignFinishingDesc: 'Premium interior solutions including flooring, painting, lighting, and custom millwork.',
    sustainableBuildingSolutions: 'Sustainable Building Solutions',
    sustainableBuildingSolutionsDesc: 'Eco-friendly construction with energy-efficient systems and sustainable building materials.',
    projectManagement: 'Project Management',
    projectManagementDesc: 'Comprehensive project oversight ensuring timely completion within budget and quality standards.',
    howOurProcessWorks: 'How Our Process Works',
    processDescription: 'We make your construction journey smooth and transparent from start to finish.',
    requirementGathering: 'Requirement Gathering',
    siteVisitFeasibility: 'Site Visit & Feasibility Study',
    designPlanningApproval: 'Design & Planning Approval',
    transparentQuotationAgreement: 'Transparent Quotation & Agreement',
    constructionRegularUpdates: 'Construction & Regular Updates',
    finalHandoverSupport: 'Final Handover & Support',
    startProjectToday: 'Start your project today',
    whatMakesUsDifferent: 'What Makes Us Different',
    whatMakesUsDifferentDesc: 'Our residential construction expertise, attention to detail, and commitment to homeowner satisfaction sets us apart from the competition.',
    residentialContractors: 'Residential Contractors',
    detailedProjectTimeline: 'Detailed Project Timeline & Milestones',
    comprehensiveWarranty: 'Comprehensive Warranty & Support',
    residentialExpertiseDesc1: 'From custom home design to complete construction, we handle every detail of your residential project with precision and care.',
    residentialExpertiseDesc2: 'Our licensed and experienced residential construction team delivers quality homes on schedule and within your budget.',
    residentialExpertiseDesc3: 'We use premium building materials and maintain transparent communication throughout your home building journey.',
    residentialExpertiseDesc4: 'Enjoy complete peace of mind with our comprehensive warranties and ongoing homeowner support services.',
    residentialContractorsDesc: 'Fully licensed contractors with years of experience in home construction and renovation projects.',
    detailedProjectTimelineDesc: 'Comprehensive timeline with clear milestones, keeping you informed at each construction stage.',
    qualityMaterialsDesc: 'Premium building materials and skilled craftsmen ensure your home meets the highest quality standards.',
    comprehensiveWarrantySupportDesc: 'Extensive warranty coverage and ongoing support services for your residential construction project.',
    readyToBuildDreamHome: 'Ready to Build Your Dream Home?',
    dreamHomeDescription: 'Get started let our residential construction experts bring your dream home to life with exceptional quality and craftsmanship.',
    getStarted: 'Get started',
    getQuote: 'Get a Free Quote',
    
    // Footer translations
    buildRightConstruction: 'BuildRight Construction',
    footerTagline: 'Building your vision, safely and on time.',
    quickLinks: 'Quick Links',
    projects: 'Projects',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Hours',
    footerAddress: '456 Builder Road, Metro City',
    footerHours: 'Mon–Sat, 8 AM – 7 PM',
    followUs: 'Follow Us',
    newsletter: 'Newsletter',
    newsletterDescription: 'Get construction news, safety tips, and project updates in your inbox.',
    yourEmail: 'Your email',
    subscribe: 'Subscribe',
    subscriptionThankYou: 'Thanks for subscribing to BuildRight updates!',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    copyright: '© 2025 BuildRight Construction. All rights reserved.',

    // Renovation Page translations
    renovationRemodelingServices: 'Renovation & Remodeling Services',
    renovationHeroDescription: 'Transform your property with expert renovation and remodeling solutions—modernize, expand, and reimagine your space with our trusted team.',
    getFreeConsultation: 'Get a Free Consultation',
    whyRenovateRemodel: 'Why Renovate & Remodel?',
    whyRenovateRemodeDesc: 'Unlock the full potential of your property with our expert renovation and remodeling services.',
    modernizeUpgradeSpace: 'Modernize and upgrade your living or working space',
    increasePropertyValue: 'Increase property value and curb appeal',
    enhanceEnergyEfficiency: 'Enhance energy efficiency and sustainability',
    customizeInteriors: 'Customize interiors to fit your lifestyle',
    fixStructuralIssues: 'Fix structural issues and improve safety',
    transformOutdatedRooms: 'Transform outdated rooms into functional spaces',
    benefitTitle1: 'Modernize',
    benefitTitle2: 'Increase',
    benefitTitle3: 'Enhance',
    benefitTitle4: 'Customize',
    transformYourSpace: 'Transform Your Space',
    transformYourSpaceDesc: 'Experience the difference a professional renovation can make—functionality, beauty, and value.',
    ourRenovationServices: 'Renovation & Remodeling Services',
    kitchenRemodeling: 'Kitchen Remodeling',
    kitchenRemodelingDesc: 'Upgrade your kitchen with modern designs, new cabinetry, countertops, and smart appliances.',
    bathroomRenovation: 'Bathroom Renovation',
    bathroomRenovationDesc: 'Transform your bathroom with luxury fixtures, efficient layouts, and stylish finishes.',
    basementFinishing: 'Basement Finishing',
    basementFinishingDesc: 'Convert your basement into a livable space—family room, gym, or home office.',
    roomAdditions: 'Room Additions',
    roomAdditionsDesc: 'Expand your home with additional bedrooms, sunrooms, or living areas.',
    exteriorUpgrades: 'Exterior Upgrades',
    exteriorUpgradesDesc: 'Boost curb appeal with new siding, roofing, windows, and landscaping.',
    wholeHomeRenovation: 'Whole-Home Renovation',
    wholeHomeRenovationDesc: 'Comprehensive remodeling for a complete transformation of your property.',
    scheduleFreeConsultation: 'Schedule a free renovation consultation',
    discussVisionBudget: 'Discuss your vision, needs, and budget with our experts',
    receiveDetailedPlan: 'Receive a detailed project plan and timeline',
    skilledTeamExecutes: 'Our skilled team executes the renovation/remodeling',
    finalWalkthroughGuarantee: 'Final walkthrough and satisfaction guarantee',
    licensedInsuredProfessionals: 'Licensed & Insured Professionals',
    licensedInsuredProfessionalsDesc: 'We provide licensed & insured professionals for every project.',
    customDesignSolutions: 'Custom Design Solutions',
    customDesignSolutionsDesc: 'We provide custom design solutions for every project.',
    qualityMaterialsCraftsmanship: 'Quality Materials & Craftsmanship',
    qualityMaterialsCraftsmanshipDesc: 'We provide quality materials & craftsmanship for every project.',
    onTimeProjectDelivery: 'On-Time Project Delivery',
    onTimeProjectDeliveryDesc: 'We provide on-time project delivery for every project.',
    
    // Additional renovation translations
    whatSetsUsApart: 'What Sets Us Apart',
    whatSetsUsApartDesc: 'Our renovation & remodeling services are designed for quality, reliability, and your complete satisfaction.',
    renovationExpertiseDesc1: 'We combine innovative design, skilled craftsmanship, and transparent project management to deliver exceptional results. From concept to completion, our team works closely with you to ensure your vision is realized on time and within budget.',
    renovationExpertiseDesc2: 'Whether you\'re updating a single room or transforming your entire property, we use only the highest quality materials and proven construction techniques.',
    renovationExpertiseDesc3: 'Our commitment to communication and customer service means you\'re always informed and in control throughout the renovation process.',
    renovationExpertiseDesc4: 'Discover why homeowners and businesses trust us for their most important renovation and remodeling projects.',
    readyToRenovate: 'Ready to Renovate or Remodel?',
    readyToRenovateDesc: 'Contact us today for a free consultation and let our experts turn your renovation dreams into reality. Your perfect space is just a project away!',
    bookYourConsultation: 'Book Your Free Consultation',
    
    // Interior Design page translations
    interiorHeroTitle: 'Interior Design &',
    interiorHeroTitleHighlight: 'Finishing Services',
    interiorHeroDescription: 'Elevate your space with bespoke interior design and flawless finishing. Our experts bring your vision to life with creativity, precision, and style.',
    bookFreeConsultation: 'Book a Free Design Consultation',
    whyInteriorDesign: 'Why',
    interiorDesignWord: 'Interior Design?',
    interiorDesignTransform: 'Transform your home or business with the art and science of interior design and finishing.',
    transformYourSpace: 'Transform Your Space',
    transformYourSpaceDesc: 'Experience the difference a professional interior design can make—beauty, comfort, and value.',
    interiorServicesTitle: 'Interior Design & Finishing',
    servicesWord: 'Services',
    howItWorks: 'How',
    itWorksWord: 'It Works',
    interiorProcessDesc: 'Our process ensures a seamless interior design and finishing experience from concept to completion.',
    step: 'Step',
    bookDesignConsultation: 'Book Your Design Consultation',
    interiorWhatSetsUsApartDesc: 'Our interior design & finishing services are crafted for elegance, comfort, and your complete satisfaction.',
    interiorExpertiseDesc1: 'We blend creativity, technical expertise, and premium materials to deliver stunning interiors. From concept to completion, our team collaborates with you to ensure your vision is realized on time and within budget.',
    interiorExpertiseDesc2: 'Whether you\'re refreshing a single room or transforming your entire property, we use only the best finishes and design solutions.',
    interiorExpertiseDesc3: 'Our commitment to communication and service means you\'re always informed and in control throughout the design process.',
    interiorExpertiseDesc4: 'Discover why clients trust us for their most important interior design and finishing projects.',
    readyToTransformSpace: 'Ready to Transform Your Space?',
    interiorCtaDescription: 'Contact us today for a free interior design consultation and let our experts create the perfect space for you. Style, comfort, and quality—delivered.',
    
    // Interior Benefits
    interiorBenefit1Title: 'Aesthetic Appeal',
    interiorBenefit1Desc: 'Enhances aesthetic appeal and comfort',
    interiorBenefit2Title: 'Space Optimization',
    interiorBenefit2Desc: 'Maximizes space functionality and flow',
    interiorBenefit3Title: 'Property Value',
    interiorBenefit3Desc: 'Increases property value and marketability',
    interiorBenefit4Title: 'Personal Style',
    interiorBenefit4Desc: 'Reflects your unique style and personality',
    interiorBenefit5Title: 'Lighting & Ambiance',
    interiorBenefit5Desc: 'Improves lighting, color, and ambiance',
    interiorBenefit6Title: 'Professional Finish',
    interiorBenefit6Desc: 'Delivers professional finishing and detailing',
    
    // Interior Services
    interiorService1Title: 'Space Planning & Layouts',
    interiorService1Desc: 'Optimize your interiors for maximum functionality and flow.',
    interiorService2Title: 'Custom Furniture & Cabinetry',
    interiorService2Desc: 'Bespoke solutions tailored to your space and taste.',
    interiorService3Title: 'Wall & Ceiling Finishes',
    interiorService3Desc: 'Expert painting, wallpaper, and decorative treatments.',
    interiorService4Title: 'Lighting Design & Installation',
    interiorService4Desc: 'Create the perfect mood and highlight architectural features.',
    interiorService5Title: 'Flooring Solutions',
    interiorService5Desc: 'Premium hardwood, tile, carpet, and more for every room.',
    interiorService6Title: 'Window Treatments',
    interiorService6Desc: 'Elegant drapes, blinds, and shades for privacy and style.',
    
    // Interior Process Steps
    interiorStep1: 'Book a free interior design consultation',
    interiorStep2: 'Share your vision, needs, and budget with our designers',
    interiorStep3: 'Receive a custom design plan and material samples',
    interiorStep4: 'Our team transforms your space with expert finishing',
    interiorStep5: 'Final walkthrough and satisfaction guarantee',
    
    // Interior Features
    interiorFeature1Title: 'Award-winning designers',
    interiorFeature1Desc: 'We provide award-winning designers for every project.',
    interiorFeature2Title: '3D visualization & planning',
    interiorFeature2Desc: 'We provide 3D visualization & planning for every project.',
    interiorFeature3Title: 'Premium materials & finishes',
    interiorFeature3Desc: 'We provide premium materials & finishes for every project.',
    interiorFeature4Title: 'On-time project completion',
    interiorFeature4Desc: 'We provide on-time project completion for every project.',
    
    // Industrial Construction page translations
    industrialHeroTitle: 'Industrial',
    industrialHeroTitleHighlight: 'Construction',
    industrialHeroDescription: 'Robust infrastructure for industrial success. We build durable facilities designed for heavy operations, safety, and long-term performance.',
    whyIndustrialConstruction: 'Why Choose',
    constructionWord: 'Construction',
    industrialBenefitsDesc: 'Discover the advantages of modern industrial construction for your business and operations.',
    
    // Industrial Benefits
    industrialBenefit1Title: 'Enhanced Durability',
    industrialBenefit1Desc: 'Industrial construction delivers robust structures built to withstand heavy use, harsh environments, and the test of time.',
    industrialBenefit2Title: 'Operational Efficiency',
    industrialBenefit2Desc: 'Streamlined construction processes that minimize downtime and maximize operational productivity for industrial facilities.',
    industrialBenefit3Title: 'Safety Compliance',
    industrialBenefit3Desc: 'Strict safety standards and regulatory compliance ensure a secure environment for your workforce and assets.',
    industrialBenefit4Title: 'Scalable Design',
    industrialBenefit4Desc: 'Flexible designs and innovative solutions allow your facility to grow and adapt to future needs.',
    
    // Industrial Services
    industrialService1Title: 'Manufacturing Plants',
    industrialService1Desc: 'State-of-the-art manufacturing facilities designed for optimal production efficiency and workflow.',
    industrialService2Title: 'Warehouse Construction',
    industrialService2Desc: 'Large-scale storage and distribution centers with advanced logistics and material handling systems.',
    industrialService3Title: 'Industrial Renovations',
    industrialService3Desc: 'Upgrade existing facilities with modern equipment integration and improved safety systems.',
    industrialService4Title: 'Processing Facilities',
    industrialService4Desc: 'Specialized facilities for food processing, chemical production, and heavy manufacturing operations.',
    industrialService5Title: 'Power & Utilities',
    industrialService5Desc: 'Infrastructure for power generation, utilities, and essential industrial support systems.',
    industrialService6Title: 'Heavy Industry',
    industrialService6Desc: 'Robust construction for steel mills, mining operations, and heavy machinery installations.',
    
    // Industrial Process Steps
    industrialStep1Title: 'Site Assessment',
    industrialStep1Desc: 'Comprehensive evaluation of your site conditions and operational requirements.',
    industrialStep2Title: 'Design & Engineering',
    industrialStep2Desc: 'Advanced structural design and engineering solutions for industrial specifications.',
    industrialStep3Title: 'Permits & Approvals',
    industrialStep3Desc: 'Handling all regulatory requirements and industrial compliance certifications.',
    industrialStep4Title: 'Construction Phase',
    industrialStep4Desc: 'Professional construction with rigorous safety protocols and quality control.',
    industrialStep5Title: 'Testing & Commissioning',
    industrialStep5Desc: 'Thorough testing and system commissioning before facility handover.',
    
    // Industrial Features
    industrialFeature1Title: 'Advanced Safety Systems',
    industrialFeature1Desc: 'Comprehensive safety protocols and emergency systems integrated throughout the facility.',
    industrialFeature2Title: 'Heavy Load Capacity',
    industrialFeature2Desc: 'Engineered to handle heavy machinery and equipment loads with superior structural integrity.',
    industrialFeature3Title: 'Environmental Compliance',
    industrialFeature3Desc: 'Built to meet all environmental regulations and sustainability standards for industrial operations.',
    industrialFeature4Title: 'Future Expansion Ready',
    industrialFeature4Desc: 'Designed with modular construction methods allowing for easy future expansion and modifications.',
    industrialFeature5Title: 'Quality Materials',
    industrialFeature5Desc: 'Premium industrial-grade materials selected for durability, performance, and long-term reliability.',
    industrialFeature6Title: 'Expert Engineering',
    industrialFeature6Desc: 'Specialized industrial engineering team with decades of experience in complex facility construction.',
    
    // Industrial Additional Translations
    industrialServicesWeProvide: 'Industrial Services We',
    serviceWord: 'Provide',
    industrialServicesBackground: 'Industrial Services Background',
    industrialHowItWorksDesc: 'Get started with your industrial construction project in strategic, efficient steps.',
    worksWord: 'Works',
    industrialProcessSteps: 'Industrial Construction Process Steps',
    whatSetsUsApart: 'What Sets Us Apart',
    industrialWhatSetsUsApartDesc: 'Discover why we are the trusted choice for industrial construction and infrastructure projects.',
    industrialCtaTitle: 'Transform Your Facility with Industrial Construction Today',
    industrialCtaDesc: 'Get access to specialized industrial construction services to create robust, efficient facilities that drive your business success.',
    transformYourFacility: 'Transform Your Facility',
    industrialBenefitsCenterDesc: 'Experience the benefits of modern industrial construction—strength, efficiency, and innovation for your next project.',
    industrialConstructionSite: 'Industrial Construction Site',
    viewPortfolio: 'View Portfolio',

    // Road Construction Page translations
    roadHeroTitle: 'Road & Infrastructure',
    roadHeroTitleHighlight: 'Construction Services',
    roadHeroDescription: 'Building the roads and infrastructure that connect communities, drive progress, and ensure a sustainable future.',
    learnMoreAboutConstruction: 'Learn More About Construction',
    
    // Road Key Benefits
    keyBenefits: 'Key Benefits',
    roadKeyBenefitsDesc: 'Partner with us for reliable, innovative, and sustainable road and infrastructure construction solutions.',
    qualityDurability: 'Quality & Durability',
    qualityDurabilityDesc: 'We use the best materials and engineering practices to ensure long-lasting, safe, and reliable infrastructure.',
    sustainability: 'Sustainability',
    sustainabilityDesc: 'We prioritize eco-friendly methods and materials for a greener tomorrow.',
    expertise: 'Expertise',
    expertiseDesc: 'Our team brings decades of experience in road and infrastructure construction, ensuring every project meets the highest standards.',
    onTimeDelivery: 'On-Time Delivery',
    onTimeDeliveryDesc: 'We deliver projects on schedule, minimizing disruption and maximizing value for communities and clients.',
    buildingTheFuture: 'Building the Future',
    buildingTheFutureDesc: 'Our road and infrastructure projects are designed to last, supporting growth, safety, and connectivity for generations to come.',
    
    // Road Services
    ourRoadInfrastructureServices: 'Our Road/Infrastructure Construction Services',
    highwayRoadConstruction: 'Highway & Road Construction',
    highwayRoadConstructionDesc: 'Design, construction, and maintenance of highways, roads, and expressways for safe and efficient transportation.',
    bridgeOverpassConstruction: 'Bridge & Overpass Construction',
    bridgeOverpassConstructionDesc: 'Expertise in building durable bridges and overpasses to enhance connectivity and support heavy traffic loads.',
    urbanInfrastructureDevelopment: 'Urban Infrastructure Development',
    urbanInfrastructureDevelopmentDesc: 'Comprehensive solutions for city infrastructure, including drainage, sidewalks, lighting, and public spaces.',
    maintenanceRehabilitation: 'Maintenance & Rehabilitation',
    maintenanceRehabilitationDesc: 'Ongoing maintenance, repair, and upgrades to extend the lifespan and safety of existing infrastructure.',
    sustainableConstructionSolutions: 'Sustainable Construction Solutions',
    sustainableConstructionSolutionsDesc: 'Utilizing eco-friendly materials and methods to minimize environmental impact and promote sustainability.',
    projectManagementConsultation: 'Project Management & Consultation',
    projectManagementConsultationDesc: 'End-to-end project management, consultation, and support for successful infrastructure delivery.',
    
    // Road How It Works
    roadHowItWorksDesc: 'Our process ensures quality, safety, and efficiency at every stage of your infrastructure project.',
    step1: 'Step 1',
    step1Desc: 'Initial consultation and project assessment',
    step2: 'Step 2',
    step2Desc: 'Site survey, planning, and design development',
    step3: 'Step 3',
    step3Desc: 'Procurement of materials and mobilization of resources',
    step4: 'Step 4',
    step4Desc: 'Construction, supervision, and quality control',
    step5: 'Step 5',
    step5Desc: 'Project delivery, handover, and ongoing maintenance',
    requestConsultation: 'Request a Consultation',
    
    // Road What Sets Us Apart
    roadWhatSetsUsApartDesc: 'Discover why we are the trusted choice for road and infrastructure construction projects.',
    provenTrackRecord: 'Proven Track Record: Successfully delivering complex infrastructure projects on time and within budget.',
    cuttingEdgeTechnology: 'Cutting-Edge Technology: Leveraging the latest construction methods and equipment for superior results.',
    commitmentToSafety: 'Commitment to Safety: Strict adherence to safety standards to protect our team and the community.',
    sustainabilityFocus: 'Sustainability Focus: Eco-friendly practices and materials for a greener tomorrow.',
    expertTeam: 'Expert Team: Highly skilled engineers, project managers, and workers dedicated to quality and excellence.',
    innovativeSolutions: 'Innovative Solutions',
    innovativeSolutionsDesc: 'We embrace innovation to solve infrastructure challenges and deliver lasting value.',
    clientCentricApproach: 'Client-Centric Approach',
    clientCentricApproachDesc: 'We prioritize client needs, ensuring transparent communication and tailored solutions.',
    qualityAssurance: 'Quality Assurance',
    qualityAssuranceDesc: 'Rigorous quality checks at every stage guarantee superior infrastructure outcomes.',
    sustainableImpact: 'Sustainable Impact',
    sustainableImpactDesc: 'We build with the future in mind, focusing on sustainability and community benefit.',
    
    // Road CTA
    readyToBuildFuture: 'Ready to Build the Future?',
    readyToBuildFutureDesc: 'Contact us today to discuss your road and infrastructure construction needs. Let\'s create lasting impact together.',
    getInTouch: 'Get in Touch',

    // Blog Page translations
    constructionInsightsBlog: 'Construction Insights Blog',
    blogHeroDesc: 'Explore the latest trends, safety tips, and innovations in the construction industry',
    featuredConstructionArticles: 'Featured Construction Articles',
    
    // Featured Articles
    essentialSafetyPractices: 'Essential Safety Practices for Every Construction Site',
    safetyPracticesDesc: 'Learn the top safety protocols to keep your team and site secure on every project.',
    safetyTeam: 'Safety Team',
    minutesRead: 'min read',
    daysAgo: 'd ago',
    readMore: 'Read More',
    
    modernMaterials: 'Modern Materials: Building for the Future',
    modernMaterialsDesc: 'Discover the latest innovations in construction materials and how they improve project outcomes.',
    materialsTeam: 'Materials Team',
    
    projectManagementTools: 'Project Management Tools for Construction Success',
    projectManagementToolsDesc: 'Explore the best digital tools and strategies for managing construction projects efficiently.',
    projectTeam: 'Project Team',
    
    // Equipment Section
    findRightConstructionEquipment: 'Find the Right Construction Equipment',
    equipmentComparisonDesc: 'Compare different types of construction equipment to discover which one matches your project needs and site requirements',
    equipmentType: 'Equipment Type',
    purpose: 'Purpose',
    bestFor: 'Best For',
    keyFeatures: 'Key Features',
    operatorSkill: 'Operator Skill',
    
    // Equipment Types
    excavator: 'Excavator',
    diggingDemolition: 'Digging, Demolition',
    largeScaleEarthworks: 'Large-scale earthworks',
    rotationPowerfulArm: '360° rotation, powerful arm',
    advanced: 'Advanced',
    
    crane: 'Crane',
    liftingHoisting: 'Lifting, Hoisting',
    highRiseConstruction: 'High-rise construction',
    tallReachHeavyLoads: 'Tall reach, heavy loads',
    expert: 'Expert',
    
    bulldozer: 'Bulldozer',
    pushingGrading: 'Pushing, Grading',
    sitePreparation: 'Site preparation',
    heavyBladeStrongTraction: 'Heavy blade, strong traction',
    intermediate: 'Intermediate',
    
    loader: 'Loader',
    loadingTransporting: 'Loading, Transporting',
    movingMaterials: 'Moving materials',
    largeBucketFastMovement: 'Large bucket, fast movement',
    
    concreteMixer: 'Concrete Mixer',
    mixingConcrete: 'Mixing Concrete',
    foundationWork: 'Foundation work',
    rotatingDrumConsistentMix: 'Rotating drum, consistent mix',
    basic: 'Basic',
    
    // Myths vs Facts Section
    constructionSiteMythsVsFacts: 'Construction Site Myths vs Facts',
    mythsFactsDesc: 'Let\'s debunk common construction site misconceptions with real, safety-focused facts.',
    myths: 'Myths',
    mythsDescription: 'Common misconceptions about construction sites and safety that many people believe to be true, but are actually myths that can put workers at risk.',
    facts: 'Facts',
    factsDescription: 'Real, safety-focused facts about construction sites that help keep everyone safe and projects running smoothly.',
    
    // Quiz Section
    twoMinuteQuiz: '2 Minute Quiz',
    question: 'Question',
    of: 'of',
    previous: '← Previous',
    next: 'Next →',
    seeResults: 'See Results',
    quizResults: 'Quiz Results',
    excellentKnowledge: 'Excellent! You have great wellness knowledge!',
    goodKnowledge: 'Good job! You know your wellness basics!',
    notBadKeepLearning: 'Not bad! Keep learning about wellness!',
    keepLearningJourney: 'Keep learning! Wellness is a journey!',
    takeQuizAgain: 'Take Quiz Again',
    
    // CTA Section
    readyToStartNextProject: 'Ready to Start Your Next Project?',
    ctaProjectDesc: 'Contact our team today for expert advice, quotes, or to discuss your construction needs. Let us help you build your vision safely and efficiently!',
    contactUs: 'Contact Us',

    // Contact Page translations
    contactConstructionTeam: 'Contact Our Construction Team',
    contactHeroDesc: 'Reach out to us for project inquiries, site visits, partnership opportunities, or any construction-related questions. Our team is ready to help you build safely and efficiently.',
    
    // Contact Cards
    callOurOffice: 'Call Our Office',
    speakWithTeamDesc: 'Speak with our construction management team. Available Monday to Saturday, 8 AM to 7 PM for project support, safety concerns, and site coordination.',
    emailUs: 'Email Us',
    emailUsDesc: 'Email us for project bids, material supply, safety documentation, or general construction inquiries. We respond within 1 business day.',
    visitOurOffice: 'Visit Our Office',
    buildRightConstructionHQ: 'BuildRight Construction HQ',
    visitOfficeDesc: 'Visit us for face-to-face consultations, project planning, or to discuss your construction needs. Our office is open to clients, partners, and suppliers.',
    
    // Form Section
    connectWithProjectTeam: 'Connect With Our Project Team',
    firstName: 'First Name',
    enterFirstName: 'Enter your first name',
    lastName: 'Last Name',
    enterLastName: 'Enter your last name',
    email: 'Email',
    enterEmail: 'Enter your email address',
    phone: 'Phone',
    enterPhone: 'Enter your phone number',
    projectDetails: 'Project Details',
    projectDetailsPlaceholder: 'Describe your construction project, timeline, or request a site visit...',
    sendMessage: 'Send Message',
    thankYouMessage: 'Thank you! Our construction team will contact you soon.',
    
    // Location Section
    officeAndSiteLocations: 'Our Office & Site Locations',
    officeHours: 'Office Hours',
    mondaySaturday: 'Monday - Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    gettingHere: 'Getting Here',
    accessibleTransport: 'Accessible by car, truck, and public transport. Parking available for clients and suppliers.',
    contactInfo: 'Contact Info',
    buildRightConstructionHQ: 'BuildRight Construction HQ',
    
    // FAQ Section
    frequentlyAskedConstructionQuestions: 'Frequently Asked Construction Questions',
    faq1Question: 'What construction services do you provide?',
    faq1Answer: 'We offer a full range of construction services including residential, commercial, and industrial building, renovations, site management, safety compliance, and project consulting.',
    faq2Question: 'How long does a typical project take?',
    faq2Answer: 'Project timelines vary based on scope and complexity. We provide a detailed schedule and keep you updated at every stage, from planning to completion.',
    faq3Question: 'Do you handle permits and safety compliance?',
    faq3Answer: 'Yes, we manage all necessary permits and ensure strict adherence to safety regulations and building codes for every project.',
    faq4Question: 'Can I request a site visit or consultation?',
    faq4Answer: 'Absolutely! Contact us to schedule a site visit or a project consultation. We\'ll assess your needs and provide expert recommendations.',
    faq5Question: 'How do I get started with a construction project?',
    faq5Answer: 'Just contact us by phone, email, or the form above. We\'ll discuss your requirements, provide a quote, and guide you through the next steps for your construction project.',
    
    // Newsletter Section
    stayConnectedWithBuildRight: 'Stay Connected With BuildRight',
    newsletterDescription: 'Subscribe to our newsletter for construction industry updates, safety tips, and project highlights delivered to your inbox.',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    agreeToReceiveUpdates: 'I agree to receive wellness updates and special offers',
    subscribeToNewsletter: 'Subscribe to Newsletter',
    thankYouForSubscribing: 'Thank you for subscribing!',
    
    // Quiz Questions
    quizQuestion1: 'What is the most important piece of safety equipment on a construction site?',
    quizQ1Option1: 'Hard hat',
    quizQ1Option2: 'Gloves', 
    quizQ1Option3: 'Safety boots',
    quizQ1Option4: 'All of the above',
    
    quizQuestion2: 'Which material is commonly used for building strong foundations?',
    quizQ2Option1: 'Wood',
    quizQ2Option2: 'Concrete',
    quizQ2Option3: 'Plastic',
    quizQ2Option4: 'Glass',
    
    quizQuestion3: 'What does PPE stand for?',
    quizQ3Option1: 'Personal Protective Equipment',
    quizQ3Option2: 'Project Planning Essentials',
    quizQ3Option3: 'Powerful Performance Equipment',
    quizQ3Option4: 'Professional Project Engineering',
    
    quizQuestion4: 'Which machine is used to lift heavy materials to great heights?',
    quizQ4Option1: 'Bulldozer',
    quizQ4Option2: 'Crane',
    quizQ4Option3: 'Excavator',
    quizQ4Option4: 'Loader',
    
    quizQuestion5: 'What is the main purpose of scaffolding?',
    quizQ5Option1: 'Decoration',
    quizQ5Option2: 'Support workers and materials',
    quizQ5Option3: 'Lighting',
    quizQ5Option4: 'Sound insulation',
    
    quizQuestion6: 'Which of these is a green building practice?',
    quizQ6Option1: 'Using recycled materials',
    quizQ6Option2: 'Wasting water',
    quizQ6Option3: 'Ignoring insulation',
    quizQ6Option4: 'Using only concrete',
    
    quizQuestion7: 'Who is responsible for site safety?',
    quizQ7Option1: 'Site manager',
    quizQ7Option2: 'Workers',
    quizQ7Option3: 'Visitors',
    quizQ7Option4: 'Everyone on site',
    
    quizQuestion8: 'What document outlines the steps and safety measures for a specific task?',
    quizQ8Option1: 'Blueprint',
    quizQ8Option2: 'Risk Assessment',
    quizQ8Option3: 'Invoice',
    quizQ8Option4: 'Permit',
    
    quizQuestion9: 'Which technology is transforming construction project planning?',
    quizQ9Option1: 'BIM (Building Information Modeling)',
    quizQ9Option2: 'Typewriters',
    quizQ9Option3: 'Fax machines',
    quizQ9Option4: 'Chalkboards',
    
    quizQuestion10: 'What is the first thing to do before starting any construction work?',
    quizQ10Option1: 'Start digging',
    quizQ10Option2: 'Check weather',
    quizQ10Option3: 'Conduct a safety briefing',
    quizQ10Option4: 'Order lunch',

    // Myths and Facts content
    myth1_1: 'Wearing a hard hat is only necessary when it\'s raining.',
    myth1_2: 'All construction sites are equally dangerous.',
    myth1_3: 'You don\'t need to read the safety manual if you have experience.',
    myth1_4: 'Green building always costs more than traditional methods.',
    
    fact1_1: 'Hard hats are required at all times on active construction sites to protect from falling objects and head injuries.',
    fact1_2: 'Risks vary by site, but proper safety protocols can make any site much safer.',
    fact1_3: 'Every site and project is different; reading the safety manual is essential for everyone, regardless of experience.',
    fact1_4: 'Green building can reduce costs over time through energy savings and incentives.',
    
    myth2_1: 'Scaffolding is safe as long as it looks stable.',
    myth2_2: 'Permits are just paperwork and can be skipped if you\'re in a hurry.',
    myth2_3: 'Only supervisors are responsible for safety on site.',
    myth2_4: 'You can operate any equipment if you watch someone else do it first.',
    
    fact2_1: 'Scaffolding must be inspected regularly and meet safety standards before use.',
    fact2_2: 'Permits are legally required and skipping them can result in fines or shutdowns.',
    fact2_3: 'Safety is everyone\'s responsibility, from workers to supervisors.',
    fact2_4: 'Proper training and certification are required to operate construction equipment safely.',
    
    myth3_1: 'Concrete just dries, it doesn\'t need to cure.',
    myth3_2: 'Bigger machines are always better for every job.',
    myth3_3: 'Safety meetings are a waste of time.',
    myth3_4: 'Personal protective equipment (PPE) is optional if you\'re careful.',
    
    fact3_1: 'Concrete must cure properly to reach its full strength and durability.',
    fact3_2: 'The right machine depends on the specific task and site conditions, not just size.',
    fact3_3: 'Safety meetings help prevent accidents and keep everyone informed about site hazards.',
    fact3_4: 'PPE is mandatory and protects against many common site injuries, regardless of experience.'
  },
  
  Arabic: {
    // Header translations
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    services: 'الخدمات',
    blog: 'المدونة',
    contactUs: 'اتصل بنا',
    viewAllServices: 'عرض جميع الخدمات',
    yogaMeditation: 'اليوجا والتأمل',
    commercial: 'البناء التجاري',
    renovation: 'التجديد والإعادة تشكيل',
    interiorDesign: 'التصميم الداخلي والتشطيبات',
    industrial: 'البناء الصناعي',
    road: 'بناء الطرق والبنية التحتية',
    userProfile: 'الملف الشخصي',
    signedIn: 'تم تسجيل الدخول',
    logout: 'تسجيل الخروج',
    
    // Hero section
    buildingYourFuture: 'بناء مستقبلك',
    heroDescription: 'خدمات البناء عالية الجودة للمشاريع السكنية والتجارية والصناعية. من المفهوم إلى الإنجاز، نقدم التميز والأمان والموثوقية في كل خطوة.',
    exploreOurServices: 'استكشف خدماتنا',
    
    // Who We Are section
    yearsExperience: 'سنوات خبرة في البناء',
    aboutUsTitle: 'من نحن',
    expertConstruction: 'خبرة في البناء لكل رؤية',
    aboutUsDescription: 'مع 25 عامًا من الخبرة، يقدم فريقنا خدمات البناء عالية الجودة للمشاريع السكنية والتجارية والصناعية. نركز على السلامة والابتكار ورضا العملاء - تحويل أفكارك إلى واقع بإدارة مشاريع موثوقة ومهارة حرفية متخصصة.',
    contactUs: 'اتصل بنا',
    
    // Services section
    ourTopServices: 'خدماتنا الأساسية',
    residentialConstruction: 'البناء السكني',
    residentialTagline: 'منازل مخصصة وشقق وفيلات.',
    residentialDetails: 'نبني مساحات سكنية عالية الجودة مصممة خصيصًا لاحتياجاتك، مما يضمن الراحة والأمان والتصميم الحديث.',
    commercialConstruction: 'البناء التجاري',
    commercialTagline: 'مكاتب ومتاجر ومساحات تجارية.',
    commercialDetails: 'من مجمعات المكاتب إلى متاجر التجزئة، نقدم مباني تجارية وظيفية وجذابة لنجاح عملك.',
    renovationRemodeling: 'التجديد وإعادة التأهيل',
    renovationTagline: 'تحويل وترقية المساحات الموجودة.',
    renovationDetails: 'امنح عقارك مظهرًا جديدًا ووظائف محسنة مع خدمات التجديد وإعادة التأهيل المتخصصة لدينا.',
    industrialConstruction: 'البناء الصناعي/البنية التحتية',
    industrialTagline: 'مصانع ومستودعات وبنية تحتية.',
    industrialDetails: 'نتعامل مع مشاريع البنية التحتية الصناعية واسعة النطاق مع التركيز على المتانة والكفاءة والأمان.',
    
    // Services Page Translations
    startBuildingDreams: 'ابدأ ببناء الأحلام',
    servicesHeroDescription: 'من الأبراج السكنية إلى المجمعات التجارية، نقدم بناء عالي الجودة وحلول مبتكرة وإنجاز المشاريع في الوقت المحدد حسب المعالم.',
    exploreServices: 'استكشف الخدمات',
    getAQuote: 'احصل على عرض أسعار',
    qualityServices: 'خدمات عالية الجودة',
    featuredProjects: 'المشاريع المميزة',
    
    // Cost Estimator Section
    estimateProjectCost: 'قدّر تكلفة مشروعك',
    costEstimatorDescription: 'أداة سريعة تتيح للزوار الحصول على فكرة تقريبية عن التكلفة لمشروعهم قبل التواصل معك',
    renovation: 'التجديد',
    residential: 'سكني',
    commercial: 'تجاري',
    industrial: 'صناعي',
    areaSizePlaceholder: 'مساحة المنطقة (قدم مربع أو متر مربع)',
    standard: 'معياري',
    premium: 'متميز',
    luxury: 'فاخر',
    locationOptional: 'الموقع (اختياري)',
    yourName: 'اسمك',
    phoneNumber: 'رقم الهاتف',
    getDetailedQuote: 'احصل على عرض أسعار مفصل',
    instantApproximateCost: '- التكلفة التقريبية الفورية',
    
    // Safety Standards Section
    safetyStandardsFollowed: 'معايير السلامة المتبعة',
    certifiedProfessionals: 'متخصصون معتمدون',
    certifiedProfessionalsDesc: 'جميع موظفينا معتمدون ومدربون على اتباع أعلى بروتوكولات السلامة في الصناعة.',
    regularAudits: 'عمليات تدقيق منتظمة',
    regularAuditsDesc: 'نقوم بعمليات تدقيق وتفتيش منتظمة للسلامة لضمان الامتثال لجميع اللوائح.',
    qualityMaterials: 'مواد عالية الجودة',
    qualityMaterialsDesc: 'يتم استخدام المواد المعتمدة عالية الجودة فقط لضمان السلامة والمتانة.',
    emergencyPreparedness: 'الاستعداد للطوارئ',
    emergencyPreparednessDesc: 'خطط طوارئ شاملة واستعداد للإسعافات الأولية في كل موقع.',
    
    // Featured Projects Section
    finishingWorks: 'أعمال التشطيب',
    redevelopment: 'إعادة التطوير',
    modernBathroom: 'حمام عصري',
    repairOfApartments: 'إصلاح الشقق',
    decorativeWorksInLiving: 'أعمال ديكورية في المعيشة',
    officeInteriorModernStyle: 'التصميم الداخلي للمكتب بأسلوب عصري',
    
    // Service Cards
    residentialConstructionDesc: 'بناء منازل الأحلام بهندسة معمارية حديثة ومواد عالية الجودة وتصميم مستدام. من المنازل المفردة إلى العقارات الفاخرة، نخلق مساحات معيشية تعكس أسلوب حياتك.',
    commercialConstructionDesc: 'بناء المباني المكتبية ومساحات التجزئة والمجمعات التجارية بتكنولوجيا متطورة وتصاميم فعالة تزيد من الوظائف والإنتاجية.',
    renovationRemodelingDesc: 'تحويل المساحات الموجودة بخدمات التجديد المتخصصة. نحدث المطابخ والحمامات والمباني الكاملة مع الحفاظ على السلامة الهيكلية وتعزيز القيمة.',
    interiorDesignFinishing: 'التصميم الداخلي والتشطيب',
    interiorDesignFinishingDesc: 'حلول داخلية كاملة من المفهوم إلى الإنجاز. نقدم تصاميم مخصصة وتشطيبات متميزة ومهارة حرفية مفصلة لمساحات معيشية أنيقة ووظيفية.',
    industrialConstructionDesc: 'بناء متخصص للمصانع والمستودعات ومرافق التصنيع. نقدم هياكل قوية مع أنظمة أمان متقدمة وكفاءة تشغيلية.',
    roadInfrastructureConstruction: 'بناء الطرق/البنية التحتية',
    roadInfrastructureConstructionDesc: 'بناء البنية التحتية الأساسية بما في ذلك الطرق والجسور ومشاريع الأشغال العامة. نستخدم مواد متينة وتقنيات مثبتة لأصول مجتمعية طويلة الأمد.',
    
    // ترجمات البناء التجاري المحددة
    commercialConstructionServices: 'خدمات البناء التجاري',
    commercialHeroDescription: 'ابني أو وسع أو جدد مساحة عملك مع فريقنا الخبير—نقدم الجودة والأمان والكفاءة في كل مشروع.',
    whyChooseCommercial: 'لماذا تختار خدماتنا التجارية؟',
    whyChooseCommercialDesc: 'اختبر البناء التجاري عالي الجودة والخالي من المتاعب والمصمم خصيصًا لاحتياجات عملك.',
    buildingBusinessesBuildingSuccess: 'بناء الأعمال، بناء النجاح',
    buildingBusinessesDesc: 'نحن نفي بوعدنا للجودة والأمان ورضا العملاء—في كل مرة.',
    
    // فوائد البناء التجاري
    turnkeyProjectDelivery: 'تسليم المشروع الجاهز',
    modernSustainableDesigns: 'تصاميم حديثة ومستدامة',
    strictQualitySafetyStandards: 'معايير صارمة للجودة والأمان',
    onTimeOnBudgetCompletion: 'إنجاز في الوقت المحدد وضمن الميزانية',
    expertProjectManagement: 'إدارة مشاريع متخصصة',
    comprehensiveAftercareSupport: 'دعم شامل للرعاية اللاحقة',
    
    // الخدمات التجارية
    officeWorkspaceConstruction: 'بناء المكاتب ومساحات العمل',
    officeWorkspaceConstructionDesc: 'تصميم وبناء مساحات مكتبية حديثة وفعالة مصممة خصيصًا لاحتياجات عملك.',
    retailShowroomFitOuts: 'تجهيز المتاجر وصالات العرض',
    retailShowroomFitOutsDesc: 'إنشاء بيئات تجارية جذابة وصالات عرض تجذب العملاء.',
    industrialWarehouseFacilities: 'المرافق الصناعية والمستودعات',
    industrialWarehouseFacilitiesDesc: 'بناء قوي للمصانع والمستودعات ومراكز اللوجستيات.',
    hospitalityRestaurantProjects: 'مشاريع الضيافة والمطاعم',
    hospitalityRestaurantProjectsDesc: 'بناء الفنادق والمطاعم والمقاهي مع التركيز على تجربة الضيوف.',
    healthcareInstitutionalBuildings: 'مباني الرعاية الصحية والمؤسسية',
    healthcareInstitutionalBuildingsDesc: 'بناء متخصص للعيادات والمستشفيات والمؤسسات التعليمية.',
    renovationExpansion: 'التجديد والتوسيع',
    renovationExpansionDesc: 'ترقية أو توسيع أو تحديث ممتلكاتك التجارية مع الحد الأدنى من التعطيل.',
    
    // عملية البناء التجاري
    requirementAnalysis: 'تحليل المتطلبات',
    siteSurveyFeasibilityStudy: 'مسح الموقع ودراسة الجدوى',
    designPlanningApprovals: 'التصميم والتخطيط والموافقات',
    transparentQuotationAgreement: 'عرض أسعار شفاف واتفاقية',
    constructionProgressUpdates: 'البناء وتحديثات التقدم المنتظمة',
    finalHandoverOngoingSupport: 'التسليم النهائي والدعم المستمر',
    
    // ميزات البناء التجاري
    dedicatedProjectManager: 'مدير مشروع مخصص',
    dedicatedProjectManagerDesc: 'مدير مشروع خبير مكلف بالإشراف على كل جانب من جوانب مشروع البناء التجاري الخاص بك وضمان النتائج المثلى.',
    detailedProjectTimeline: 'جدول زمني مفصل للمشروع',
    detailedProjectTimelineDesc: 'جدول مشروع شامل مع معالم واضحة لتتبع تقدم البناء الخاص بك بفعالية.',
    qualitySafetyAudits: 'عمليات تدقيق الجودة والأمان',
    qualitySafetyAuditsDesc: 'عمليات تفتيش منتظمة للجودة ومراقبة الأمان لضمان استيفاء جميع معايير ولوائح البناء.',
    postCompletionMaintenance: 'صيانة ما بعد الإنجاز',
    postCompletionMaintenanceDesc: 'خدمات الدعم والصيانة المستمرة لضمان بقاء ممتلكاتك التجارية في حالة ممتازة.',
    
    // ترجمات تجارية إضافية
    ourCommercialServices: 'خدماتنا للبناء التجاري',
    commercialProcessDescription: 'نحن نجعل رحلة البناء التجاري الخاصة بك سلسة وشفافة من البداية إلى النهاية.',
    whatMakesUsDifferent: 'ما الذي يميزنا',
    whatMakesUsDifferentDesc: 'التزامنا بالجودة والشفافية ورضا العملاء يجعلنا الخيار الموثوق للبناء التجاري.',
    commercialExpertiseDesc1: 'نتولى كل جانب من جوانب مشروعك، من التصميم إلى التسليم، مع التركيز على السلامة والتميز.',
    commercialExpertiseDesc2: 'فريقنا مرخص ومؤمن ومكرس لتسليم مساحة عملك في الوقت المحدد وضمن الميزانية.',
    commercialExpertiseDesc3: 'نستخدم أفضل المواد فقط ونحافظ على التواصل المفتوح طوال العملية.',
    commercialExpertiseDesc4: 'استمتع براحة البال مع دعمنا بعد الإنجاز وضمان الجودة.',
    readyToBuildBusinessSpace: 'مستعد لبناء مساحة عملك؟',
    businessSpaceDescription: 'اتصل بنا اليوم للحصول على استشارة مجانية ودع خبراءنا يحولون رؤيتك إلى واقع بجودة وأمان وتسليم في الوقت المحدد.',
    
    // Impact Metrics section
    buildingSuccess: 'بناء النجاح، مشروع واحد في كل مرة',
    impactDescription: 'نحن فخورون بتقديم حلول البناء الاستثنائية للعملاء عبر صناعات متعددة. التزامنا بالجودة والسلامة والابتكار ساعدنا في إكمال مجموعة واسعة من المشاريع، من المباني السكنية إلى التطويرات التجارية والصناعية واسعة النطاق. شاركنا لتحقيق رؤيتك بخبرة يمكنك الوثوق بها.',
    scheduleCall: 'جدولة مكالمة',
    happyClients: 'عملاء سعداء',
    completedProjects: 'مشاريع مكتملة',
    industriesServed: 'صناعات تم خدمتها',
    expertTeamMembers: 'أعضاء الفريق الخبراء',
    
    // Testimonials section
    whatOurClientsSay: 'ماذا يقول عملاؤنا',
    excellentJob: 'عمل ممتاز!',
    testimonialDescription: 'عملية سلسة من البداية إلى النهاية. الاهتمام بالتفاصيل واحتياجات العملاء رائع حقًا.',
    
    // Testimonial cards
    victoriaLinton: 'فيكتوريا لينتون',
    projectManager: 'مدير مشروع',
    victoriaReview: 'تجاوز الفريق توقعاتنا. تم تسليم مبنى مكتبنا في الوقت المحدد وبجودة متميزة!',
    
    fannyOwen: 'فاني أوين',
    fannyReview: 'عملية سلسة من البداية إلى النهاية. الاهتمام بالتفاصيل واحتياجات العملاء رائع حقًا.',
    
    clientReview: 'مراجعة العميل',
    clientReviewText: 'تجربة ممتازة مع فريق محترف ومتفهم لاحتياجات العملاء.',
    
    alexMorgan: 'أليكس مورغان',
    siteSupervisor: 'مشرف الموقع',
    alexReview: 'راضٍ جداً عن التسليم في الوقت المحدد وجودة العمل!',
    
    dmitriWoodhouse: 'دميتري وودهاوس',
    dmitriReview: 'خدمة ممتازة وعمل احترافي في كل التفاصيل!',
    
    nellyVane: 'نيلي فان',
    interiorDesigner: 'مصممة داخلية',
    nellyReview: 'تم التعامل مع التجديد بمهنية عالية. أنصح بشدة!',
    
    priyaSharma: 'بريا شارما',
    projectEngineer: 'مهندسة مشاريع',
    priyaReview: 'تواصل ممتاز وإدارة مشاريع رائعة طوال الوقت.',
    
    topNotch: 'من الدرجة الأولى!',
    topNotchReview: 'تجديد منزلنا كان سلس وبدون ضغط.',
    
    recommended: 'موصى به!',
    recommendedReview: 'تم إنجاز المساحة التجارية قبل الموعد المحدد.',
    
    greatSupport: 'دعم رائع',
    greatSupportReview: 'الفريق كان متاحاً دائماً لأسئلتنا.',
    
    impressiveResults: 'نتائج مبهرة',
    impressiveResultsReview: 'مكتبنا يبدو رائعاً، شكراً لكم!',
    
    professionalTeam: 'فريق محترف',
    professionalTeamReview: 'فريق مهني ومهذب جداً.',
    
    // CTA section
    readyToBuild: 'هل أنت مستعد لبناء مشروعك التالي؟',
    ctaDescription: 'شاركنا في احتياجات البناء الخاصة بك - سكنية أو تجارية أو صناعية. فريقنا ذو الخبرة يقدم الجودة والأمان والابتكار في كل مشروع. دعنا نحول رؤيتك إلى واقع بإدارة مشاريع موثوقة ومهارة حرفية متخصصة.',
    getFreeConsultation: 'احصل على استشارة مجانية',
    viewOurServices: 'عرض خدماتنا',
    
    // Mission & Vision section
    ourMission: 'مهمتنا',
    missionStatement: 'توفير حلول بناء شاملة ومتاحة تحول المجتمعات وتخلق تنمية بنية تحتية إيجابية دائمة بالجودة والأمان والابتكار.',
    ourVision: 'رؤيتنا',
    visionStatement: 'أن نكون الشركة الرائدة في البناء حيث يكتشف العملاء طريقهم إلى مشاريع بناء استثنائية وتحول بنية تحتية مستدامة.',

    // About Us page translations
    aboutUsTitle: 'من نحن',
    company: 'الشركة',
    aboutHeroDescription: 'مع 25 عامًا من الخبرة، يقدم فريقنا خدمات البناء عالية الجودة للمشاريع السكنية والتجارية والصناعية مع التزام راسخ بالتميز.',
    
    // Our Growth section
    ourGrowthTitle: 'نموّنا عبر السنين',
    ourGrowthDescription: 'من البدايات المتواضعة إلى الريادة في الصناعة، اكتشف المحطات المهمة التي شكّلت تميزنا في البناء والتزامنا بالجودة.',
    
    // Timeline labels
    timelineFoundation: 'التأسيس',
    timelineGrowth: 'النمو',
    timelineInnovation: 'الابتكار',
    timelineLeadership: 'الريادة',
    timelineFuture: 'المستقبل',
    
    // Milestones
    milestone1Title: 'وضع الأساس',
    milestone1Description: 'بدأنا رحلتنا مع مشاريع البناء السكني',
    milestone2Title: 'النمو التجاري', 
    milestone2Description: 'توسعنا في البناء التجاري والصناعي',
    milestone3Title: 'الابتكار التكنولوجي',
    milestone3Description: 'دمجنا تقنيات البناء المتقدمة والممارسات المستدامة',
    milestone4Title: 'الريادة في الصناعة',
    milestone4Description: 'أصبحنا رائدين معترف بهم في تميز البناء',
    milestone5Title: 'رؤية المستقبل',
    milestone5Description: 'مستمرون في بناء الغد بحلول مبتكرة',

    // What Makes Us Unique
    whatMakesUsUnique: 'ما يميزنا',
    uniqueDescription: 'نجمع بين عقود من الخبرة والتكنولوجيا المتطورة لتقديم مشاريع بناء تصمد أمام اختبار الزمن.',
    qualityCraftsmanship: 'الحرفية عالية الجودة',
    qualityCraftsmanshipDesc: 'نقدم بناءً متفوقًا باستخدام أفضل المواد والمهنيين المهرة ومراقبة الجودة الصارمة في كل مرحلة من المشروع.',
    innovativeSolutions: 'الحلول المبتكرة',
    innovativeSolutionsDesc: 'نتبنى أحدث تقنيات وطرق البناء لتقديم نتائج فعالة ومستدامة وفعالة من حيث التكلفة لعملائنا.',
    transparentCommunication: 'التواصل الشفاف',
    transparentCommunicationDesc: 'نبقي عملاءنا على اطلاع في كل خطوة، مضمونين الوضوح والثقة وتجربة بناء سلسة من البداية إلى النهاية.',

    // Our Values
    ourValues: 'قيمنا',
    onTimeDelivery: 'التسليم في الوقت المحدد',
    onTimeDeliveryDesc: 'نلتزم بإكمال المشاريع ضمن المواعيد النهائية، مع الحفاظ على الكفاءة والموثوقية في كل مرحلة.',
    clientCentricApproach: 'النهج المتمحور حول العميل',
    clientCentricApproachDesc: 'نعطي الأولوية لاحتياجات عملائنا، ونقدم تواصلاً شفافًا وحلولاً مخصصة لكل مشروع.',
    safetyFirst: 'السلامة أولاً',
    safetyFirstDesc: 'نلتزم بأعلى معايير السلامة لحماية فريقنا وعملائنا والمجتمعات في كل موقع.',
    sustainablePractices: 'الممارسات المستدامة',
    sustainablePracticesDesc: 'ندمج الطرق والمواد الصديقة للبيئة للبناء بمسؤولية من أجل المستقبل.',
    innovationTechnology: 'الابتكار والتكنولوجيا',
    innovationTechnologyDesc: 'نستفيد من أحدث تقنيات البناء لتقديم حلول حديثة وفعالة وفعالة من حيث التكلفة.',

    // CTA Section
    readyToBuildVision: 'مستعد لبناء رؤيتك؟',
    ctaDescription: 'شاركنا للحصول على بناء عالي الجودة وتسليم في الوقت المحدد وحلول مبتكرة. دعنا نحول أفكارك إلى واقع مع فريق يمكنك الثقة به.',
    startJourney: 'ابدأ رحلتك',
    
    // Home2 specific translations
    buildingWithIntegrity: 'البناء بالنزاهة',
    trustedConstruction: 'بناء موثوق لكل رؤية.',
    excellenceInEveryBuild: 'التميز في كل بناء.',
    startYourProject: 'ابدأ مشروعك',
    meet: 'تعرف على',
    ourTeam: 'فريقنا',
    teamDescription: 'يحقق فريق البناء ذو الخبرة لدينا رؤيتك بدقة وأمان وجودة. من تخطيط المشاريع إلى إدارة الموقع، نضمن إنجاز كل بناء في الوقت المحدد وبأعلى المعايير. ثق بنا لتقديم التميز لمشاريعك السكنية أو التجارية أو الصناعية.',
    
    // Team members
    michaelStone: 'مايكل ستون',
    siteManager: 'مدير الموقع',
    michaelStoneDescription: 'يشرف على جميع العمليات في الموقع، مما يضمن السلامة والجودة والتسليم في الوقت المناسب لكل مشروع بناء.',
    emilyCarter: 'إيميلي كارتر',
    projectCoordinator: 'منسق المشروع',
    emilyCarterDescription: 'ينسق بين الفرق والموردين والعملاء للحفاظ على مشاريع البناء على المسار الصحيح وضمن الميزانية.',
    davidMason: 'ديفيد ماسون',
    leadEngineer: 'كبير المهندسين',
    davidMasonDescription: 'مسؤول عن التخطيط الهيكلي والإشراف التقني وضمان التميز الهندسي في كل موقع.',
    sophiaTurner: 'صوفيا تيرنر',
    safetyOfficer: 'مسؤول السلامة',
    sophiaTurnerDescription: 'يضمن اتباع جميع بروتوكولات السلامة، مما يوفر بيئة آمنة للعمال والزوار في الموقع.',
    
    // CEO section
    ourCEO: 'مديرنا التنفيذي',
    ceoMissionStatement: 'قيادة مهمتنا لبناء غد أفضل من خلال البناء عالي الجودة والابتكار.',
    ceoExperience: 'مع أكثر من 20 عامًا من الخبرة في صناعة البناء، أشرف مديرنا التنفيذي على الإنجاز الناجح للعديد من المشاريع السكنية والتجارية والصناعية. التزامهم بالسلامة والكفاءة ورضا العملاء يدفع شركتنا إلى الأمام.',
    ceoQuote: 'نؤمن أن كل مشروع هو فرصة لخلق قيمة دائمة لعملائنا ومجتمعاتنا. فريقنا مكرس لتقديم التميز، من الأساس إلى القمة.',
    ceoName: 'ليزا، المدير التنفيذي',
    
    // Why Choose Us section
    whyBuildersTrustUs: 'لماذا يثق بنا البناؤون',
    whyBuildersTrustUsDescription: 'نقدم حلول بناء عالية الجودة مع التركيز على السلامة والابتكار ورضا العملاء. فريقنا ذو الخبرة والمعدات الحديثة والالتزام بالمواعيد النهائية يميزنا في صناعة البناء.',
    constructionAdvantages: 'مزايا البناء لدينا',
    experiencedTeam: 'فريق ذو خبرة',
    experiencedTeamDescription: 'عقود من الخبرة العملية في البناء السكني والتجاري والصناعي.',
    qualityMaterials: 'مواد عالية الجودة',
    qualityMaterialsDescription: 'نستخدم فقط المواد المعتمدة من الصناعة للحصول على نتائج دائمة وآمنة.',
    safetyFirst: 'السلامة أولاً',
    safetyFirstDescription: 'بروتوكولات صارمة وتدريب منتظم يحافظ على أمان مواقعنا للجميع.',
    onTimeDelivery: 'التسليم في الوقت المحدد',
    onTimeDeliveryDescription: 'نلتزم بالمواعيد النهائية ونحافظ على مشروعك على المسار الصحيح، في كل مرة.',
    modernEquipment: 'معدات حديثة',
    modernEquipmentDescription: 'آلات وتكنولوجيا متقدمة لبناء فعال وعالي الجودة.',
    transparentCommunication: 'تواصل شفاف',
    transparentCommunicationDescription: 'نبقيك على اطلاع في كل مرحلة من مراحل مشروعك.',
    
    // Projects and CTA
    featuredProjects: 'المشاريع المميزة',
    readyToBuildDream: 'هل أنت مستعد لبناء مشروع أحلامك؟',
    readyToBuildDreamDescription: 'شارك مع فريق البناء الخبير لدينا للحصول على الجودة والسلامة والتسليم في الوقت المحدد. من السكني إلى التجاري، نحول رؤيتك إلى واقع - في كل خطوة على الطريق.',
    
    // Residential Page Translations
    residentialConstructionServices: 'خدمات البناء السكني',
    residentialHeroDescription: 'نجعل رحلة البناء الخاصة بك سلسة وشفافة من البداية إلى النهاية.',
    exploreMore: 'استكشف المزيد',
    whyChooseResidential: 'لماذا تختار خدماتنا السكنية؟',
    whyChooseResidentialDesc: 'اختبر البناء السكني عالي الجودة وخالي من المتاعب مع اهتمام شخصي بكل التفاصيل.',
    buildingDreamHomes: 'بناء منازل الأحلام',
    buildingDreamHomesDesc: 'إنشاء مساحات سكنية جميلة ووظيفية تعكس أسلوب حياتك وتتجاوز التوقعات.',
    customHomeDesignPlanning: 'تصميم وتخطيط المنازل المخصصة',
    highQualityMaterials: 'مواد عالية الجودة ومهارة حرفية',
    onTimeProjectDelivery: 'تسليم المشروع في الوقت المحدد',
    transparentPricing: 'تسعير شفاف وعقود واضحة',
    energyEfficientSolutions: 'حلول موفرة للطاقة ومستدامة',
    comprehensiveProjectManagement: 'إدارة مشاريع شاملة',
    ourResidentialServices: 'خدمات البناء السكني لدينا',
    customHomeDesign: 'تصميم المنازل المخصصة',
    customHomeDesignDesc: 'تصاميم معمارية شخصية مصممة خصيصاً لأسلوب حياتك وتفضيلاتك مع وظائف عصرية.',
    newHomeConstruction: 'بناء المنازل الجديدة',
    newHomeConstructionDesc: 'خدمات بناء منازل كاملة من الأساس إلى التشطيب النهائي بمواد عالية الجودة ومهارة حرفية.',
    homeRenovationRemodeling: 'تجديد وإعادة تأهيل المنازل',
    homeRenovationRemodelingDesc: 'حول منزلك الحالي مع خدمات تجديد المطبخ والحمام والمنزل بالكامل.',
    interiorDesignFinishing: 'التصميم الداخلي والتشطيب',
    interiorDesignFinishingDesc: 'حلول داخلية متميزة تشمل الأرضيات والطلاء والإضاءة والأعمال الخشبية المخصصة.',
    sustainableBuildingSolutions: 'حلول البناء المستدام',
    sustainableBuildingSolutionsDesc: 'بناء صديق للبيئة مع أنظمة موفرة للطاقة ومواد بناء مستدامة.',
    projectManagement: 'إدارة المشاريع',
    projectManagementDesc: 'إشراف شامل على المشاريع يضمن الإنجاز في الوقت المحدد ضمن الميزانية ومعايير الجودة.',
    howOurProcessWorks: 'كيف تعمل عمليتنا',
    processDescription: 'نجعل رحلة البناء الخاصة بك سلسة وشفافة من البداية إلى النهاية.',
    requirementGathering: 'جمع المتطلبات',
    siteVisitFeasibility: 'زيارة الموقع ودراسة الجدوى',
    designPlanningApproval: 'التصميم وموافقة التخطيط',
    transparentQuotationAgreement: 'عرض أسعار شفاف واتفاقية',
    constructionRegularUpdates: 'البناء والتحديثات المنتظمة',
    finalHandoverSupport: 'التسليم النهائي والدعم',
    startProjectToday: 'ابدأ مشروعك اليوم',
    whatMakesUsDifferent: 'ما الذي يميزنا',
    whatMakesUsDifferentDesc: 'خبرتنا في البناء السكني واهتمامنا بالتفاصيل والتزامنا برضا أصحاب المنازل يميزنا عن المنافسة.',
    residentialContractors: 'مقاولو البناء السكني',
    detailedProjectTimeline: 'جدول زمني مفصل للمشروع ومعالم واضحة',
    comprehensiveWarranty: 'ضمان شامل ودعم',
    residentialExpertiseDesc1: 'من تصميم المنازل المخصصة إلى البناء الكامل، نتعامل مع كل تفصيلة من مشروعك السكني بدقة وعناية.',
    residentialExpertiseDesc2: 'فريق البناء السكني المرخص والخبير لدينا يسلم منازل عالية الجودة في الموعد المحدد وضمن ميزانيتك.',
    residentialExpertiseDesc3: 'نستخدم مواد بناء متميزة ونحافظ على التواصل الشفاف طوال رحلة بناء منزلك.',
    residentialExpertiseDesc4: 'استمتع براحة البال الكاملة مع ضماناتنا الشاملة وخدمات الدعم المستمرة لأصحاب المنازل.',
    residentialContractorsDesc: 'مقاولون سكنيون مرخصون مع سنوات من الخبرة في بناء وتجديد المنازل.',
    detailedProjectTimelineDesc: 'جدول زمني شامل مع معالم واضحة، نبقيك على اطلاع بالتقدم في كل مرحلة بناء.',
    qualityMaterialsDesc: 'مواد بناء متميزة وحرفيون مهرة لضمان أن منزلك يلبي أعلى معايير الجودة.',
    comprehensiveWarrantySupportDesc: 'تغطية ضمان واسعة وخدمات دعم مستمرة لمشروع البناء السكني الخاص بك.',
    readyToBuildDreamHome: 'مستعد لبناء منزل أحلامك؟',
    dreamHomeDescription: 'ابدأ الآن ودع خبراء البناء السكني لدينا يحققون منزل أحلامك بجودة استثنائية ومهارة حرفية.',
    getStarted: 'ابدأ الآن',
    getQuote: 'احصل على عرض سعر مجاني',
    
    // Footer translations
    buildRightConstruction: 'بيلد رايت للإنشاءات',
    footerTagline: 'نبني رؤيتك، بأمان وفي الوقت المحدد.',
    quickLinks: 'روابط سريعة',
    projects: 'المشاريع',
    address: 'العنوان',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    hours: 'ساعات العمل',
    footerAddress: '456 شارع البناة، المدينة المترو',
    footerHours: 'الاثنين - السبت، 8 صباحاً - 7 مساءً',
    followUs: 'تابعنا',
    newsletter: 'النشرة الإخبارية',
    newsletterDescription: 'احصل على أخبار البناء ونصائح السلامة وتحديثات المشاريع في صندوق بريدك.',
    yourEmail: 'بريدك الإلكتروني',
    subscribe: 'اشترك',
    subscriptionThankYou: 'شكراً لاشتراكك في تحديثات بيلد رايت!',
    privacyPolicy: 'سياسة الخصوصية',
    termsConditions: 'الشروط والأحكام',
    disclaimer: 'إخلاء المسؤولية',
    copyright: '© 2025 بيلد رايت للإنشاءات. جميع الحقوق محفوظة.',

    // Renovation Page translations
    renovationRemodelingServices: 'خدمات التجديد والإعادة تشكيل',
    renovationHeroDescription: 'حول ممتلكاتك بحلول التجديد والإعادة تشكيل الخبيرة—حدث، وسع، وأعد تصور مساحتك مع فريقنا الموثوق.',
    getFreeConsultation: 'احصل على استشارة مجانية',
    whyRenovateRemodel: 'لماذا التجديد والإعادة تشكيل؟',
    whyRenovateRemodeDesc: 'اطلق الإمكانات الكاملة لممتلكاتك مع خدمات التجديد والإعادة تشكيل الخبيرة لدينا.',
    modernizeUpgradeSpace: 'حدث وطور مساحة المعيشة أو العمل',
    increasePropertyValue: 'زد قيمة العقار والجاذبية الخارجية',
    enhanceEnergyEfficiency: 'عزز كفاءة الطاقة والاستدامة',
    customizeInteriors: 'خصص التصاميم الداخلية لتناسب نمط حياتك',
    fixStructuralIssues: 'أصلح المشاكل الهيكلية وحسن الأمان',
    transformOutdatedRooms: 'حول الغرف القديمة إلى مساحات وظيفية',
    benefitTitle1: 'التحديث',
    benefitTitle2: 'الزيادة',
    benefitTitle3: 'التعزيز',
    benefitTitle4: 'التخصيص',
    transformYourSpace: 'حول مساحتك',
    transformYourSpaceDesc: 'اختبر الفرق الذي يمكن أن يحدثه التجديد المهني—الوظيفية والجمال والقيمة.',
    ourRenovationServices: 'خدمات التجديد والإعادة تشكيل',
    kitchenRemodeling: 'إعادة تشكيل المطبخ',
    kitchenRemodelingDesc: 'طور مطبخك بتصاميم عصرية وخزائن جديدة وأسطح عمل وأجهزة ذكية.',
    bathroomRenovation: 'تجديد الحمام',
    bathroomRenovationDesc: 'حول حمامك بتجهيزات فاخرة وتصاميم فعالة ولمسات أنيقة.',
    basementFinishing: 'إنهاء القبو',
    basementFinishingDesc: 'حول قبوك إلى مساحة قابلة للسكن—غرفة عائلية أو صالة رياضة أو مكتب منزلي.',
    roomAdditions: 'إضافات الغرف',
    roomAdditionsDesc: 'وسع منزلك بغرف نوم إضافية أو غرف شمسية أو مناطق معيشة.',
    exteriorUpgrades: 'تطويرات خارجية',
    exteriorUpgradesDesc: 'عزز الجاذبية الخارجية بكسوة جديدة وأسقف ونوافذ وتنسيق حدائق.',
    wholeHomeRenovation: 'تجديد كامل للمنزل',
    wholeHomeRenovationDesc: 'إعادة تشكيل شاملة لتحويل كامل لممتلكاتك.',
    scheduleFreeConsultation: 'جدول استشارة تجديد مجانية',
    discussVisionBudget: 'ناقش رؤيتك واحتياجاتك وميزانيتك مع خبرائنا',
    receiveDetailedPlan: 'احصل على خطة مشروع مفصلة وجدول زمني',
    skilledTeamExecutes: 'فريقنا الماهر ينفذ التجديد/الإعادة تشكيل',
    finalWalkthroughGuarantee: 'جولة نهائية وضمان الرضا',
    licensedInsuredProfessionals: 'محترفون مرخصون ومؤمنون',
    licensedInsuredProfessionalsDesc: 'نوفر محترفين مرخصين ومؤمنين لكل مشروع.',
    customDesignSolutions: 'حلول تصميم مخصصة',
    customDesignSolutionsDesc: 'نوفر حلول تصميم مخصصة لكل مشروع.',
    qualityMaterialsCraftsmanship: 'مواد عالية الجودة وحرفية',
    qualityMaterialsCraftsmanshipDesc: 'نوفر مواد عالية الجودة وحرفية لكل مشروع.',
    onTimeProjectDelivery: 'تسليم المشروع في الوقت المحدد',
    onTimeProjectDeliveryDesc: 'نوفر تسليم المشروع في الوقت المحدد لكل مشروع.',
    
    // Additional renovation translations
    whatSetsUsApart: 'ما يميزنا',
    whatSetsUsApartDesc: 'خدمات التجديد وإعادة التصميم مصممة للجودة والموثوقية ورضاكم التام.',
    renovationExpertiseDesc1: 'نجمع بين التصميم المبتكر والحرفية الماهرة وإدارة المشاريع الشفافة لتقديم نتائج استثنائية. من المفهوم إلى الإنجاز، يعمل فريقنا معكم عن كثب لضمان تحقيق رؤيتكم في الوقت المحدد وضمن الميزانية.',
    renovationExpertiseDesc2: 'سواء كنتم تحدثون غرفة واحدة أو تحولون عقاركم بالكامل، نستخدم فقط مواد عالية الجودة وتقنيات البناء المثبتة.',
    renovationExpertiseDesc3: 'التزامنا بالتواصل وخدمة العملاء يعني أنكم مطلعون دائماً وتتحكمون في عملية التجديد بأكملها.',
    renovationExpertiseDesc4: 'اكتشفوا لماذا يثق أصحاب المنازل والشركات بنا في أهم مشاريع التجديد وإعادة التصميم.',
    readyToRenovate: 'مستعدون للتجديد أو إعادة التصميم؟',
    readyToRenovateDesc: 'تواصلوا معنا اليوم للحصول على استشارة مجانية ودعوا خبراءنا يحولون أحلام التجديد إلى حقيقة. مساحتكم المثالية على بُعد مشروع واحد فقط!',
    bookYourConsultation: 'احجزوا استشارتكم المجانية',
    
    // Interior Design page translations
    interiorHeroTitle: 'التصميم الداخلي و',
    interiorHeroTitleHighlight: 'خدمات التشطيب',
    interiorHeroDescription: 'ارتقوا بمساحتكم بتصميم داخلي مخصص وتشطيبات لا تشوبها شائبة. خبراؤنا يحققون رؤيتكم بالإبداع والدقة والأناقة.',
    bookFreeConsultation: 'احجزوا استشارة تصميم مجانية',
    whyInteriorDesign: 'لماذا',
    interiorDesignWord: 'التصميم الداخلي؟',
    interiorDesignTransform: 'حولوا منزلكم أو عملكم بفن وعلم التصميم الداخلي والتشطيبات.',
    transformYourSpace: 'حولوا مساحتكم',
    transformYourSpaceDesc: 'اختبروا الفرق الذي يمكن أن يحدثه التصميم الداخلي المهني—الجمال والراحة والقيمة.',
    interiorServicesTitle: 'التصميم الداخلي والتشطيب',
    servicesWord: 'الخدمات',
    howItWorks: 'كيف',
    itWorksWord: 'يعمل',
    interiorProcessDesc: 'عمليتنا تضمن تجربة سلسة للتصميم الداخلي والتشطيب من المفهوم إلى الإنجاز.',
    step: 'الخطوة',
    bookDesignConsultation: 'احجزوا استشارة التصميم',
    interiorWhatSetsUsApartDesc: 'خدمات التصميم الداخلي والتشطيب مصنوعة للأناقة والراحة ورضاكم التام.',
    interiorExpertiseDesc1: 'نمزج الإبداع والخبرة التقنية والمواد المتميزة لتقديم تصاميم داخلية مذهلة. من المفهوم إلى الإنجاز، يتعاون فريقنا معكم لضمان تحقيق رؤيتكم في الوقت المحدد وضمن الميزانية.',
    interiorExpertiseDesc2: 'سواء كنتم تجددون غرفة واحدة أو تحولون عقاركم بالكامل، نستخدم فقط أفضل التشطيبات وحلول التصميم.',
    interiorExpertiseDesc3: 'التزامنا بالتواصل والخدمة يعني أنكم مطلعون دائماً وتتحكمون في عملية التصميم بأكملها.',
    interiorExpertiseDesc4: 'اكتشفوا لماذا يثق العملاء بنا في أهم مشاريع التصميم الداخلي والتشطيب.',
    readyToTransformSpace: 'مستعدون لتحويل مساحتكم؟',
    interiorCtaDescription: 'تواصلوا معنا اليوم للحصول على استشارة تصميم داخلي مجانية ودعوا خبراءنا يخلقون المساحة المثالية لكم. الأناقة والراحة والجودة—مُسلمة.',
    
    // Interior Benefits
    interiorBenefit1Title: 'الجاذبية الجمالية',
    interiorBenefit1Desc: 'يعزز الجاذبية الجمالية والراحة',
    interiorBenefit2Title: 'تحسين المساحة',
    interiorBenefit2Desc: 'يزيد وظائف المساحة والتدفق إلى أقصى حد',
    interiorBenefit3Title: 'قيمة العقار',
    interiorBenefit3Desc: 'يزيد قيمة العقار وقابليته للتسويق',
    interiorBenefit4Title: 'الأسلوب الشخصي',
    interiorBenefit4Desc: 'يعكس أسلوبكم الفريد وشخصيتكم',
    interiorBenefit5Title: 'الإضاءة والأجواء',
    interiorBenefit5Desc: 'يحسن الإضاءة واللون والأجواء',
    interiorBenefit6Title: 'اللمسة المهنية',
    interiorBenefit6Desc: 'يوفر تشطيبات مهنية وتفاصيل دقيقة',
    
    // Interior Services
    interiorService1Title: 'تخطيط المساحات والتخطيطات',
    interiorService1Desc: 'حسنوا تصاميمكم الداخلية للحصول على أقصى وظائف وتدفق.',
    interiorService2Title: 'الأثاث والخزائن المخصصة',
    interiorService2Desc: 'حلول مخصصة مصممة لمساحتكم وذوقكم.',
    interiorService3Title: 'تشطيبات الجدران والأسقف',
    interiorService3Desc: 'طلاء خبير وورق جدران ومعالجات زخرفية.',
    interiorService4Title: 'تصميم وتركيب الإضاءة',
    interiorService4Desc: 'اخلقوا المزاج المثالي وأبرزوا الملامح المعمارية.',
    interiorService5Title: 'حلول الأرضيات',
    interiorService5Desc: 'خشب صلب متميز وبلاط وسجاد والمزيد لكل غرفة.',
    interiorService6Title: 'معالجات النوافذ',
    interiorService6Desc: 'ستائر أنيقة وعمياء وظلال للخصوصية والأناقة.',
    
    // Interior Process Steps
    interiorStep1: 'احجزوا استشارة تصميم داخلي مجانية',
    interiorStep2: 'شاركوا رؤيتكم واحتياجاتكم وميزانيتكم مع مصممينا',
    interiorStep3: 'احصلوا على خطة تصميم مخصصة وعينات من المواد',
    interiorStep4: 'فريقنا يحول مساحتكم بتشطيبات خبيرة',
    interiorStep5: 'جولة نهائية وضمان الرضا',
    
    // Interior Features
    interiorFeature1Title: 'مصممون حائزون على جوائز',
    interiorFeature1Desc: 'نوفر مصممين حائزين على جوائز لكل مشروع.',
    interiorFeature2Title: 'تصور ثلاثي الأبعاد وتخطيط',
    interiorFeature2Desc: 'نوفر تصور ثلاثي الأبعاد وتخطيط لكل مشروع.',
    interiorFeature3Title: 'مواد وتشطيبات متميزة',
    interiorFeature3Desc: 'نوفر مواد وتشطيبات متميزة لكل مشروع.',
    interiorFeature4Title: 'إنجاز المشروع في الوقت المحدد',
    interiorFeature4Desc: 'نوفر إنجاز المشروع في الوقت المحدد لكل مشروع.',
    
    // Industrial Construction page translations - Arabic
    industrialHeroTitle: 'البناء',
    industrialHeroTitleHighlight: 'الصناعي',
    industrialHeroDescription: 'بنية تحتية قوية للنجاح الصناعي. نبني منشآت متينة مصممة للعمليات الثقيلة والسلامة والأداء طويل المدى.',
    whyIndustrialConstruction: 'لماذا تختار',
    constructionWord: 'البناء',
    industrialBenefitsDesc: 'اكتشف مزايا البناء الصناعي الحديث لأعمالك وعملياتك.',
    
    // Industrial Benefits - Arabic
    industrialBenefit1Title: 'المتانة المحسنة',
    industrialBenefit1Desc: 'يوفر البناء الصناعي هياكل قوية مبنية لتتحمل الاستخدام الثقيل والبيئات القاسية واختبار الزمن.',
    industrialBenefit2Title: 'الكفاءة التشغيلية',
    industrialBenefit2Desc: 'عمليات بناء مبسطة تقلل من وقت التوقف وتزيد من الإنتاجية التشغيلية للمنشآت الصناعية.',
    industrialBenefit3Title: 'الامتثال للسلامة',
    industrialBenefit3Desc: 'معايير السلامة الصارمة والامتثال التنظيمي يضمن بيئة آمنة للقوى العاملة والأصول.',
    industrialBenefit4Title: 'التصميم القابل للتوسع',
    industrialBenefit4Desc: 'التصميمات المرنة والحلول المبتكرة تسمح لمنشأتك بالنمو والتكيف مع الاحتياجات المستقبلية.',
    
    // Industrial Services - Arabic
    industrialService1Title: 'مصانع التصنيع',
    industrialService1Desc: 'منشآت تصنيع حديثة مصممة للكفاءة الإنتاجية المثلى وتدفق العمل.',
    industrialService2Title: 'بناء المستودعات',
    industrialService2Desc: 'مراكز تخزين وتوزيع واسعة النطاق مع أنظمة لوجستية ومناولة مواد متقدمة.',
    industrialService3Title: 'التجديدات الصناعية',
    industrialService3Desc: 'ترقية المنشآت الحالية مع تكامل المعدات الحديثة وأنظمة السلامة المحسنة.',
    industrialService4Title: 'منشآت المعالجة',
    industrialService4Desc: 'منشآت متخصصة لمعالجة الأغذية والإنتاج الكيميائي وعمليات التصنيع الثقيل.',
    industrialService5Title: 'الطاقة والمرافق',
    industrialService5Desc: 'بنية تحتية لتوليد الطاقة والمرافق وأنظمة الدعم الصناعي الأساسية.',
    industrialService6Title: 'الصناعات الثقيلة',
    industrialService6Desc: 'بناء قوي لمطاحن الصلب وعمليات التعدين وتركيبات الآلات الثقيلة.',
    
    // Industrial Process Steps - Arabic
    industrialStep1Title: 'تقييم الموقع',
    industrialStep1Desc: 'تقييم شامل لظروف موقعك والمتطلبات التشغيلية.',
    industrialStep2Title: 'التصميم والهندسة',
    industrialStep2Desc: 'تصميم هيكلي متقدم وحلول هندسية للمواصفات الصناعية.',
    industrialStep3Title: 'التصاريح والموافقات',
    industrialStep3Desc: 'التعامل مع جميع المتطلبات التنظيمية وشهادات الامتثال الصناعي.',
    industrialStep4Title: 'مرحلة البناء',
    industrialStep4Desc: 'بناء مهني مع بروتوكولات السلامة الصارمة ومراقبة الجودة.',
    industrialStep5Title: 'الاختبار والتشغيل',
    industrialStep5Desc: 'اختبار شامل وتشغيل الأنظمة قبل تسليم المنشأة.',
    
    // Industrial Features - Arabic
    industrialFeature1Title: 'أنظمة السلامة المتقدمة',
    industrialFeature1Desc: 'بروتوكولات السلامة الشاملة وأنظمة الطوارئ المدمجة في جميع أنحاء المنشأة.',
    industrialFeature2Title: 'قدرة تحمل الأحمال الثقيلة',
    industrialFeature2Desc: 'مهندسة لتحمل أحمال الآلات والمعدات الثقيلة مع تكامل هيكلي فائق.',
    industrialFeature3Title: 'الامتثال البيئي',
    industrialFeature3Desc: 'مبنية لتلبية جميع اللوائح البيئية ومعايير الاستدامة للعمليات الصناعية.',
    industrialFeature4Title: 'جاهزة للتوسع المستقبلي',
    industrialFeature4Desc: 'مصممة بطرق البناء المعيارية التي تسمح بسهولة التوسع والتعديلات المستقبلية.',
    industrialFeature5Title: 'مواد عالية الجودة',
    industrialFeature5Desc: 'مواد صناعية ممتازة مختارة للمتانة والأداء والموثوقية طويلة المدى.',
    industrialFeature6Title: 'هندسة خبيرة',
    industrialFeature6Desc: 'فريق هندسة صناعية متخصص مع عقود من الخبرة في بناء المنشآت المعقدة.',
    
    // Industrial Additional Translations - Arabic
    industrialServicesWeProvide: 'الخدمات الصناعية التي',
    serviceWord: 'نقدمها',
    industrialServicesBackground: 'خلفية الخدمات الصناعية',
    industrialHowItWorksDesc: 'ابدأ مع مشروع البناء الصناعي في خطوات استراتيجية وفعالة.',
    worksWord: 'يعمل',
    industrialProcessSteps: 'خطوات عملية البناء الصناعي',
    whatSetsUsApart: 'ما يميزنا',
    industrialWhatSetsUsApartDesc: 'اكتشف لماذا نحن الخيار الموثوق للبناء الصناعي ومشاريع البنية التحتية.',
    industrialCtaTitle: 'حول منشأتك مع البناء الصناعي اليوم',
    industrialCtaDesc: 'احصل على خدمات البناء الصناعي المتخصصة لإنشاء منشآت قوية وفعالة تدفع نجاح أعمالك.',
    transformYourFacility: 'حول منشأتك',
    industrialBenefitsCenterDesc: 'اختبر فوائد البناء الصناعي الحديث—القوة والكفاءة والابتكار لمشروعك القادم.',
    industrialConstructionSite: 'موقع البناء الصناعي',
    viewPortfolio: 'عرض المحفظة',

    // Road Construction Page translations
    roadHeroTitle: 'بناء الطرق والبنية التحتية',
    roadHeroTitleHighlight: 'خدمات البناء',
    roadHeroDescription: 'بناء الطرق والبنية التحتية التي تربط المجتمعات وتدفع التقدم وتضمن مستقبلاً مستداماً.',
    learnMoreAboutConstruction: 'تعرف على المزيد حول البناء',
    
    // Road Key Benefits
    keyBenefits: 'الفوائد الرئيسية',
    roadKeyBenefitsDesc: 'تعاون معنا للحصول على حلول بناء الطرق والبنية التحتية الموثوقة والمبتكرة والمستدامة.',
    qualityDurability: 'الجودة والمتانة',
    qualityDurabilityDesc: 'نستخدم أفضل المواد والممارسات الهندسية لضمان بنية تحتية طويلة الأمد وآمنة وموثوقة.',
    sustainability: 'الاستدامة',
    sustainabilityDesc: 'نعطي الأولوية للطرق والمواد الصديقة للبيئة من أجل غد أكثر اخضراراً.',
    expertise: 'الخبرة',
    expertiseDesc: 'فريقنا يجلب عقوداً من الخبرة في بناء الطرق والبنية التحتية، مما يضمن تحقيق كل مشروع لأعلى المعايير.',
    onTimeDelivery: 'التسليم في الوقت المحدد',
    onTimeDeliveryDesc: 'نسلم المشاريع في الموعد المحدد، مما يقلل من الاضطراب ويزيد من القيمة للمجتمعات والعملاء.',
    buildingTheFuture: 'بناء المستقبل',
    buildingTheFutureDesc: 'مشاريع الطرق والبنية التحتية لدينا مصممة لتدوم، تدعم النمو والسلامة والاتصال للأجيال القادمة.',
    
    // Road Services
    ourRoadInfrastructureServices: 'خدمات بناء الطرق/البنية التحتية لدينا',
    highwayRoadConstruction: 'بناء الطرق السريعة والطرق',
    highwayRoadConstructionDesc: 'تصميم وإنشاء وصيانة الطرق السريعة والطرق والطرق السريعة للنقل الآمن والفعال.',
    bridgeOverpassConstruction: 'بناء الجسور والأنفاق العلوية',
    bridgeOverpassConstructionDesc: 'خبرة في بناء جسور ومعابر علوية متينة لتعزيز الاتصال ودعم الأحمال المرورية الثقيلة.',
    urbanInfrastructureDevelopment: 'تطوير البنية التحتية الحضرية',
    urbanInfrastructureDevelopmentDesc: 'حلول شاملة لبنية المدينة التحتية، بما في ذلك الصرف والأرصفة والإضاءة والمساحات العامة.',
    maintenanceRehabilitation: 'الصيانة والتأهيل',
    maintenanceRehabilitationDesc: 'صيانة مستمرة وإصلاح وترقيات لتمديد عمر وسلامة البنية التحتية الموجودة.',
    sustainableConstructionSolutions: 'حلول البناء المستدامة',
    sustainableConstructionSolutionsDesc: 'استخدام مواد وطرق صديقة للبيئة لتقليل التأثير البيئي وتعزيز الاستدامة.',
    projectManagementConsultation: 'إدارة المشاريع والاستشارة',
    projectManagementConsultationDesc: 'إدارة المشاريع من البداية إلى النهاية والاستشارة والدعم لتسليم البنية التحتية بنجاح.',
    
    // Road How It Works
    roadHowItWorksDesc: 'عمليتنا تضمن الجودة والسلامة والكفاءة في كل مرحلة من مراحل مشروع البنية التحتية الخاص بك.',
    step1: 'الخطوة 1',
    step1Desc: 'الاستشارة الأولية وتقييم المشروع',
    step2: 'الخطوة 2',
    step2Desc: 'مسح الموقع والتخطيط وتطوير التصميم',
    step3: 'الخطوة 3',
    step3Desc: 'شراء المواد وتعبئة الموارد',
    step4: 'الخطوة 4',
    step4Desc: 'البناء والإشراف ومراقبة الجودة',
    step5: 'الخطوة 5',
    step5Desc: 'تسليم المشروع والتسليم والصيانة المستمرة',
    requestConsultation: 'طلب استشارة',
    
    // Road What Sets Us Apart
    roadWhatSetsUsApartDesc: 'اكتشف لماذا نحن الخيار الموثوق لمشاريع بناء الطرق والبنية التحتية.',
    provenTrackRecord: 'سجل حافل مثبت: تسليم ناجح لمشاريع البنية التحتية المعقدة في الوقت المحدد وضمن الميزانية.',
    cuttingEdgeTechnology: 'التكنولوجيا المتطورة: الاستفادة من أحدث طرق البناء والمعدات للحصول على نتائج فائقة.',
    commitmentToSafety: 'الالتزام بالسلامة: الالتزام الصارم بمعايير السلامة لحماية فريقنا والمجتمع.',
    sustainabilityFocus: 'التركيز على الاستدامة: ممارسات ومواد صديقة للبيئة من أجل غد أكثر اخضراراً.',
    expertTeam: 'فريق خبراء: مهندسون ومديرو مشاريع وعمال ماهرون مكرسون للجودة والتميز.',
    innovativeSolutions: 'حلول مبتكرة',
    innovativeSolutionsDesc: 'نحتضن الابتكار لحل تحديات البنية التحتية وتقديم قيمة دائمة.',
    clientCentricApproach: 'نهج محوره العميل',
    clientCentricApproachDesc: 'نعطي الأولوية لاحتياجات العملاء، مما يضمن التواصل الشفاف والحلول المخصصة.',
    qualityAssurance: 'ضمان الجودة',
    qualityAssuranceDesc: 'فحوصات الجودة الصارمة في كل مرحلة تضمن نتائج البنية التحتية الفائقة.',
    sustainableImpact: 'التأثير المستدام',
    sustainableImpactDesc: 'نبني مع وضع المستقبل في الاعتبار، مع التركيز على الاستدامة والمنفعة المجتمعية.',
    
    // Road CTA
    readyToBuildFuture: 'مستعد لبناء المستقبل؟',
    readyToBuildFutureDesc: 'اتصل بنا اليوم لمناقشة احتياجات بناء الطرق والبنية التحتية الخاصة بك. دعونا نخلق تأثيراً دائماً معاً.',
    getInTouch: 'تواصل معنا',

    // Blog Page translations
    constructionInsightsBlog: 'مدونة رؤى البناء',
    blogHeroDesc: 'استكشف أحدث الاتجاهات ونصائح السلامة والابتكارات في صناعة البناء',
    featuredConstructionArticles: 'مقالات البناء المميزة',
    
    // Featured Articles
    essentialSafetyPractices: 'الممارسات الأساسية للسلامة لكل موقع بناء',
    safetyPracticesDesc: 'تعلم أهم بروتوكولات السلامة للحفاظ على أمان فريقك وموقعك في كل مشروع.',
    safetyTeam: 'فريق السلامة',
    minutesRead: 'دقيقة قراءة',
    daysAgo: 'منذ يوم',
    readMore: 'اقرأ المزيد',
    
    modernMaterials: 'المواد الحديثة: البناء للمستقبل',
    modernMaterialsDesc: 'اكتشف أحدث الابتكارات في مواد البناء وكيف تحسن نتائج المشاريع.',
    materialsTeam: 'فريق المواد',
    
    projectManagementTools: 'أدوات إدارة المشاريع لنجاح البناء',
    projectManagementToolsDesc: 'استكشف أفضل الأدوات الرقمية والاستراتيجيات لإدارة مشاريع البناء بكفاءة.',
    projectTeam: 'فريق المشروع',
    
    // Equipment Section
    findRightConstructionEquipment: 'اعثر على معدات البناء المناسبة',
    equipmentComparisonDesc: 'قارن بين أنواع مختلفة من معدات البناء لاكتشاف أيها يناسب احتياجات مشروعك ومتطلبات الموقع',
    equipmentType: 'نوع المعدة',
    purpose: 'الغرض',
    bestFor: 'الأفضل لـ',
    keyFeatures: 'الميزات الرئيسية',
    operatorSkill: 'مهارة المشغل',
    
    // Equipment Types
    excavator: 'حفارة',
    diggingDemolition: 'الحفر، الهدم',
    largeScaleEarthworks: 'أعمال ترابية واسعة النطاق',
    rotationPowerfulArm: 'دوران 360 درجة، ذراع قوي',
    advanced: 'متقدم',
    
    crane: 'رافعة',
    liftingHoisting: 'الرفع، الرافعة',
    highRiseConstruction: 'بناء المباني الشاهقة',
    tallReachHeavyLoads: 'وصول عالي، أحمال ثقيلة',
    expert: 'خبير',
    
    bulldozer: 'جرافة',
    pushingGrading: 'الدفع، التسوية',
    sitePreparation: 'تحضير الموقع',
    heavyBladeStrongTraction: 'شفرة ثقيلة، جر قوي',
    intermediate: 'متوسط',
    
    loader: 'محمل',
    loadingTransporting: 'التحميل، النقل',
    movingMaterials: 'نقل المواد',
    largeBucketFastMovement: 'دلو كبير، حركة سريعة',
    
    concreteMixer: 'خلاطة خرسانة',
    mixingConcrete: 'خلط الخرسانة',
    foundationWork: 'أعمال الأساسات',
    rotatingDrumConsistentMix: 'أسطوانة دوارة، خلط متسق',
    basic: 'أساسي',
    
    // Myths vs Facts Section
    constructionSiteMythsVsFacts: 'خرافات مواقع البناء مقابل الحقائق',
    mythsFactsDesc: 'دعونا نفند المفاهيم الخاطئة الشائعة حول مواقع البناء بحقائق حقيقية تركز على السلامة.',
    myths: 'خرافات',
    mythsDescription: 'مفاهيم خاطئة شائعة حول مواقع البناء والسلامة يعتقد كثيرون أنها صحيحة، لكنها في الواقع خرافات قد تعرض العمال للخطر.',
    facts: 'حقائق',
    factsDescription: 'حقائق حقيقية تركز على السلامة حول مواقع البناء تساعد في الحفاظ على سلامة الجميع وسير المشاريع بسلاسة.',
    
    // Quiz Section
    twoMinuteQuiz: 'اختبار دقيقتين',
    question: 'سؤال',
    of: 'من',
    previous: '← السابق',
    next: 'التالي →',
    seeResults: 'عرض النتائج',
    quizResults: 'نتائج الاختبار',
    excellentKnowledge: 'ممتاز! لديك معرفة رائعة بالعافية!',
    goodKnowledge: 'عمل جيد! تعرف أساسيات العافية!',
    notBadKeepLearning: 'ليس سيئاً! استمر في تعلم العافية!',
    keepLearningJourney: 'استمر في التعلم! العافية رحلة!',
    takeQuizAgain: 'خذ الاختبار مرة أخرى',
    
    // CTA Section
    readyToStartNextProject: 'مستعد لبدء مشروعك القادم؟',
    ctaProjectDesc: 'اتصل بفريقنا اليوم للحصول على مشورة الخبراء أو عروض الأسعار أو لمناقشة احتياجات البناء الخاصة بك. دعنا نساعدك في بناء رؤيتك بأمان وكفاءة!',
    contactUs: 'اتصل بنا',

    // Contact Page translations
    contactConstructionTeam: 'اتصل بفريق البناء لدينا',
    contactHeroDesc: 'تواصل معنا للاستفسارات عن المشاريع وزيارات المواقع وفرص الشراكة أو أي أسئلة متعلقة بالبناء. فريقنا مستعد لمساعدتك في البناء بأمان وكفاءة.',
    
    // Contact Cards
    callOurOffice: 'اتصل بمكتبنا',
    speakWithTeamDesc: 'تحدث مع فريق إدارة البناء لدينا. متاحون من الاثنين إلى السبت، من 8 صباحًا إلى 7 مساءً لدعم المشاريع ومخاوف السلامة وتنسيق المواقع.',
    emailUs: 'راسلنا عبر البريد الإلكتروني',
    emailUsDesc: 'راسلنا عبر البريد الإلكتروني للحصول على عروض المشاريع وتوريد المواد والوثائق الأمنية أو الاستفسارات العامة حول البناء. نرد خلال يوم عمل واحد.',
    visitOurOffice: 'زر مكتبنا',
    buildRightConstructionHQ: 'مقر شركة بناء بيلدرايت',
    visitOfficeDesc: 'زرنا للاستشارات وجهًا لوجه وتخطيط المشاريع أو لمناقشة احتياجات البناء الخاصة بك. مكتبنا مفتوح للعملاء والشركاء والموردين.',
    
    // Form Section
    connectWithProjectTeam: 'تواصل مع فريق المشروع لدينا',
    firstName: 'الاسم الأول',
    enterFirstName: 'أدخل اسمك الأول',
    lastName: 'الاسم الأخير',
    enterLastName: 'أدخل اسمك الأخير',
    email: 'البريد الإلكتروني',
    enterEmail: 'أدخل عنوان بريدك الإلكتروني',
    phone: 'الهاتف',
    enterPhone: 'أدخل رقم هاتفك',
    projectDetails: 'تفاصيل المشروع',
    projectDetailsPlaceholder: 'اوصف مشروع البناء الخاص بك والجدول الزمني أو اطلب زيارة موقع...',
    sendMessage: 'إرسال الرسالة',
    thankYouMessage: 'شكرًا لك! سيتصل بك فريق البناء لدينا قريبًا.',
    
    // Location Section
    officeAndSiteLocations: 'مواقع مكاتبنا ومواقعنا',
    officeHours: 'ساعات العمل',
    mondaySaturday: 'الاثنين - السبت',
    sunday: 'الأحد',
    closed: 'مغلق',
    gettingHere: 'الوصول إلى هنا',
    accessibleTransport: 'يمكن الوصول إليه بالسيارة والشاحنة والنقل العام. موقف سيارات متاح للعملاء والموردين.',
    contactInfo: 'معلومات الاتصال',
    buildRightConstructionHQ: 'مقر بيلدرايت للإنشاء',
    
    // FAQ Section
    frequentlyAskedConstructionQuestions: 'أسئلة البناء المتداولة',
    faq1Question: 'ما هي خدمات البناء التي تقدمونها؟',
    faq1Answer: 'نحن نقدم مجموعة كاملة من خدمات البناء بما في ذلك البناء السكني والتجاري والصناعي والتجديدات وإدارة المواقع والامتثال للسلامة واستشارات المشاريع.',
    faq2Question: 'كم من الوقت يستغرق المشروع النموذجي؟',
    faq2Answer: 'تختلف الجداول الزمنية للمشاريع حسب النطاق والتعقيد. نقدم جدولًا زمنيًا مفصلًا ونبقيك على اطلاع في كل مرحلة، من التخطيط إلى الإنجاز.',
    faq3Question: 'هل تتعاملون مع التصاريح والامتثال للسلامة؟',
    faq3Answer: 'نعم، نحن نتولى جميع التصاريح اللازمة ونضمن الالتزام الصارم بلوائح السلامة وقوانين البناء لكل مشروع.',
    faq4Question: 'هل يمكنني طلب زيارة موقع أو استشارة؟',
    faq4Answer: 'بالطبع! اتصل بنا لجدولة زيارة موقع أو استشارة مشروع. سنقيم احتياجاتك ونقدم توصيات خبيرة.',
    faq5Question: 'كيف أبدأ مع مشروع البناء؟',
    faq5Answer: 'فقط اتصل بنا عبر الهاتف أو البريد الإلكتروني أو النموذج أعلاه. سنناقش متطلباتك ونقدم عرض أسعار ونرشدك خلال الخطوات التالية لمشروع البناء الخاص بك.',
    
    // Newsletter Section
    stayConnectedWithBuildRight: 'ابق على تواصل مع بيلدرايت',
    newsletterDescription: 'اشترك في نشرتنا الإخبارية لتحديثات صناعة البناء ونصائح السلامة وأبرز المشاريع المرسلة إلى صندوق البريد الوارد الخاص بك.',
    fullName: 'الاسم الكامل',
    emailAddress: 'عنوان البريد الإلكتروني',
    agreeToReceiveUpdates: 'أوافق على تلقي تحديثات العافية والعروض الخاصة',
    subscribeToNewsletter: 'اشترك في النشرة الإخبارية',
    thankYouForSubscribing: 'شكرًا لك على الاشتراك!',
    
    // Quiz Questions
    quizQuestion1: 'ما هو أهم قطعة من معدات السلامة في موقع البناء؟',
    quizQ1Option1: 'خوذة صلبة',
    quizQ1Option2: 'قفازات',
    quizQ1Option3: 'أحذية السلامة',
    quizQ1Option4: 'كل ما سبق',
    
    quizQuestion2: 'أي مادة تُستخدم عادة لبناء أسس قوية؟',
    quizQ2Option1: 'خشب',
    quizQ2Option2: 'خرسانة',
    quizQ2Option3: 'بلاستيك',
    quizQ2Option4: 'زجاج',
    
    quizQuestion3: 'ماذا يعني PPE؟',
    quizQ3Option1: 'معدات الحماية الشخصية',
    quizQ3Option2: 'أساسيات تخطيط المشروع',
    quizQ3Option3: 'معدات الأداء القوي',
    quizQ3Option4: 'الهندسة المهنية للمشاريع',
    
    quizQuestion4: 'أي آلة تُستخدم لرفع المواد الثقيلة إلى ارتفاعات عالية؟',
    quizQ4Option1: 'جرافة',
    quizQ4Option2: 'رافعة',
    quizQ4Option3: 'حفارة',
    quizQ4Option4: 'محمل',
    
    quizQuestion5: 'ما هو الغرض الرئيسي من السقالات؟',
    quizQ5Option1: 'الزينة',
    quizQ5Option2: 'دعم العمال والمواد',
    quizQ5Option3: 'الإضاءة',
    quizQ5Option4: 'عزل الصوت',
    
    quizQuestion6: 'أي من هذه ممارسة للبناء الأخضر؟',
    quizQ6Option1: 'استخدام مواد معاد تدويرها',
    quizQ6Option2: 'إهدار الماء',
    quizQ6Option3: 'تجاهل العزل',
    quizQ6Option4: 'استخدام الخرسانة فقط',
    
    quizQuestion7: 'من المسؤول عن السلامة في الموقع؟',
    quizQ7Option1: 'مدير الموقع',
    quizQ7Option2: 'العمال',
    quizQ7Option3: 'الزوار',
    quizQ7Option4: 'الجميع في الموقع',
    
    quizQuestion8: 'أي وثيقة تحدد الخطوات وتدابير السلامة لمهمة محددة؟',
    quizQ8Option1: 'مخطط',
    quizQ8Option2: 'تقييم المخاطر',
    quizQ8Option3: 'فاتورة',
    quizQ8Option4: 'تصريح',
    
    quizQuestion9: 'أي تقنية تحول تخطيط مشاريع البناء؟',
    quizQ9Option1: 'نمذجة معلومات البناء (BIM)',
    quizQ9Option2: 'آلات كاتبة',
    quizQ9Option3: 'آلات فاكس',
    quizQ9Option4: 'سبورات طباشيرية',
    
    quizQuestion10: 'ما هو أول شيء يجب فعله قبل بدء أي عمل بناء؟',
    quizQ10Option1: 'بدء الحفر',
    quizQ10Option2: 'فحص الطقس',
    quizQ10Option3: 'إجراء إحاطة أمنية',
    quizQ10Option4: 'طلب الغداء',

    // Myths and Facts content
    myth1_1: 'ارتداء الخوذة الصلبة ضروري فقط عندما تمطر.',
    myth1_2: 'جميع مواقع البناء خطيرة بنفس الدرجة.',
    myth1_3: 'لا تحتاج إلى قراءة دليل السلامة إذا كانت لديك خبرة.',
    myth1_4: 'البناء الأخضر يكلف دائماً أكثر من الطرق التقليدية.',
    
    fact1_1: 'الخوذات الصلبة مطلوبة في جميع الأوقات في مواقع البناء النشطة للحماية من الأجسام المتساقطة وإصابات الرأس.',
    fact1_2: 'المخاطر تختلف حسب الموقع، لكن بروتوكولات السلامة المناسبة يمكن أن تجعل أي موقع أكثر أماناً.',
    fact1_3: 'كل موقع ومشروع مختلف؛ قراءة دليل السلامة ضرورية للجميع، بغض النظر عن الخبرة.',
    fact1_4: 'البناء الأخضر يمكن أن يقلل التكاليف مع مرور الوقت من خلال توفير الطاقة والحوافز.',
    
    myth2_1: 'السقالات آمنة طالما أنها تبدو مستقرة.',
    myth2_2: 'التصاريح مجرد أوراق يمكن تجاوزها إذا كنت في عجلة.',
    myth2_3: 'المشرفون فقط مسؤولون عن السلامة في الموقع.',
    myth2_4: 'يمكنك تشغيل أي معدة إذا شاهدت شخصاً آخر يفعل ذلك أولاً.',
    
    fact2_1: 'يجب فحص السقالات بانتظام وتلبية معايير السلامة قبل الاستخدام.',
    fact2_2: 'التصاريح مطلوبة قانونياً وتجاوزها يمكن أن يؤدي إلى غرامات أو إغلاق.',
    fact2_3: 'السلامة مسؤولية الجميع، من العمال إلى المشرفين.',
    fact2_4: 'التدريب والشهادة المناسبة مطلوبة لتشغيل معدات البناء بأمان.',
    
    myth3_1: 'الخرسانة تجف فقط، لا تحتاج للمعالجة.',
    myth3_2: 'الآلات الأكبر دائماً أفضل لكل عمل.',
    myth3_3: 'اجتماعات السلامة مضيعة للوقت.',
    myth3_4: 'معدات الحماية الشخصية (PPE) اختيارية إذا كنت حذراً.',
    
    fact3_1: 'يجب معالجة الخرسانة بشكل صحيح للوصول إلى قوتها ومتانتها الكاملة.',
    fact3_2: 'الآلة المناسبة تعتمد على المهمة المحددة وظروف الموقع، وليس الحجم فقط.',
    fact3_3: 'اجتماعات السلامة تساعد في منع الحوادث وإبقاء الجميع على علم بمخاطر الموقع.',
    fact3_4: 'معدات الحماية الشخصية إلزامية وتحمي من العديد من إصابات الموقع الشائعة، بغض النظر عن الخبرة.'
  },
  
  Hebrew: {
    // Header translations
    home: 'בית',
    aboutUs: 'אודותינו',
    services: 'שירותים',
    blog: 'בלוג',
    contactUs: 'צור קשר',
    viewAllServices: 'צפה בכל השירותים',
    yogaMeditation: 'יוגה ומדיטציה',
    commercial: 'בנייה מסחרית',
    renovation: 'שיפוץ ועיצוב מחדש',
    interiorDesign: 'עיצוב פנים וגימורים',
    industrial: 'בנייה תעשייתית',
    road: 'בניית דרכים ותשתיות',
    userProfile: 'פרופיל משתמש',
    signedIn: 'מחובר',
    logout: 'התנתק',
    
    // Hero section
    buildingYourFuture: 'בונים את העתיד שלך',
    heroDescription: 'שירותי בנייה איכותיים לפרויקטים מגורים, מסחריים ותעשייתיים. מהקונספט ועד להשלמה, אנו מספקים מצוינות, בטיחות ואמינות בכל שלב.',
    exploreOurServices: 'גלה את השירותים שלנו',
    
    // Who We Are section
    yearsExperience: 'שנות ניסיון בבנייה',
    aboutUsTitle: 'אודותינו',
    expertConstruction: 'בנייה מקצועית לכל חזון',
    aboutUsDescription: 'עם 25 שנות ניסיון, הצוות שלנו מספק שירותי בנייה איכותיים לפרויקטים מגורים, מסחריים ותעשייתיים. אנו מתמקדים בבטיחות, חדשנות ושביעות רצון הלקוחות - הופכים את הרעיונות שלך למציאות עם ניהול פרויקטים אמין ומומחיות מקצועית.',
    contactUs: 'צור קשר',
    
    // Services section
    ourTopServices: 'השירותים המובילים שלנו',
    residentialConstruction: 'בנייה למגורים',
    residentialTagline: 'בתים מותאמים אישית, דירות ווילות.',
    residentialDetails: 'אנו בונים חללי מגורים איכותיים המותאמים לצרכים שלך, המבטיחים נוחות, בטיחות ועיצוב מודרני.',
    commercialConstruction: 'בנייה מסחרית',
    commercialTagline: 'משרדים, חנויות וחללים עסקיים.',
    commercialDetails: 'ממתחמי משרדים ועד חנויות קמעונאיות, אנו מספקים מבנים מסחריים פונקציונליים ואטרקטיביים להצלחת העסק שלך.',
    renovationRemodeling: 'שיפוץ ועיצוב מחדש',
    renovationTagline: 'הפיכה ושדרוג של חללים קיימים.',
    renovationDetails: 'תן לנכס שלך מראה חדש ופונקציונליות משופרת עם שירותי השיפוץ והעיצוב מחדש המקצועיים שלנו.',
    industrialConstruction: 'בנייה תעשייתية/תשתיות',
    industrialTagline: 'מפעלים, מחסנים ותשתיות.',
    industrialDetails: 'אנו מטפלים בפרויקטי תשתיות תעשייתיים בקנה מידה גדול עם התמקדות בעמידות, יעילות ובטיחות.',
    
    // Services Page Translations
    startBuildingDreams: 'התחל לבנות חלומות',
    servicesHeroDescription: 'ממגדלי מגורים ועד למתחמים מסחריים, אנו מספקים בנייה איכותית, פתרונות חדשניים והשלמת פרויקטים בזמן לפי אבני דרך.',
    exploreServices: 'גלה שירותים',
    getAQuote: 'קבל הצעת מחיר',
    qualityServices: 'שירותים איכותיים',
    featuredProjects: 'פרויקטים מובילים',
    
    // Cost Estimator Section
    estimateProjectCost: 'הערך את עלות הפרויקט שלך',
    costEstimatorDescription: 'כלי מהיר המאפשר למבקרים לקבל רעיון כללי על העלות עבור הפרויקט שלהם לפני יצירת קשר',
    renovation: 'שיפוץ',
    residential: 'מגורים',
    commercial: 'מסחרי',
    industrial: 'תעשייתי',
    areaSizePlaceholder: 'גודל שטח (רגל רבוע או מ״ר)',
    standard: 'סטנדרטי',
    premium: 'פרימיום',
    luxury: 'יוקרה',
    locationOptional: 'מיקום (אופציונלי)',
    yourName: 'השם שלך',
    phoneNumber: 'מספר טלפון',
    getDetailedQuote: 'קבל הצעת מחיר מפורטת',
    instantApproximateCost: '- עלות משוערת מיידית',
    
    // Safety Standards Section
    safetyStandardsFollowed: 'תקני בטיחות הנהוגים',
    certifiedProfessionals: 'אנשי מקצוע מוסמכים',
    certifiedProfessionalsDesc: 'כל הצוות שלנו מוסמך ומאומן לפעול לפי פרוטוקולי הבטיחות הגבוהים ביותר בתעשייה.',
    regularAudits: 'ביקורות קבועות',
    regularAuditsDesc: 'אנו מבצעים ביקורות ובדיקות בטיחות קבועות כדי להבטיח עמידה בכל התקנות.',
    qualityMaterials: 'חומרים איכותיים',
    qualityMaterialsDesc: 'משתמשים רק בחומרים מאושרים ואיכותיים כדי להבטיח בטיחות ועמידות.',
    emergencyPreparedness: 'מוכנות לחירום',
    emergencyPreparednessDesc: 'תוכניות חירום מקיפות ומוכנות עזרה ראשונה בכל אתר.',
    
    // Featured Projects Section
    finishingWorks: 'עבודות גמר',
    redevelopment: 'פיתוח מחדש',
    modernBathroom: 'חדר רחצה מודרני',
    repairOfApartments: 'תיקון דירות',
    decorativeWorksInLiving: 'עבודות דקורטיביות בסלון',
    officeInteriorModernStyle: 'עיצוב פנים למשרד בסגנון מודרני',
    
    // Service Cards
    residentialConstructionDesc: 'בניית בתי חלומות עם אדריכלות מודרנית, חומרים איכותיים ועיצוב בר-קיימא. מבתים חד-משפחתיים ועד אחוזות יוקרה, אנו יוצרים חללי מחיה המשקפים את אורח החיים שלך.',
    commercialConstructionDesc: 'בניית בנייני משרדים, חללי קמעונאות ומתחמים מסחריים עם טכנולוגיה מתקדמת ועיצובים יעילים הממקסמים פונקציונליות ופרודוקטיביות.',
    renovationRemodelingDesc: 'הפיכת חללים קיימים עם שירותי שיפוץ מומחים. אנו מחדשים מטבחים, חדרי רחצה ובניינים שלמים תוך שמירה על שלמות מבנית ושיפור הערך.',
    interiorDesignFinishing: 'עיצוב פנים וגימורים',
    interiorDesignFinishingDesc: 'פתרונות פנים מלאים מקונספט ועד השלמה. אנו מספקים עיצובים מותאמים אישית, גימורים יוקרתיים ואומנות מפורטת לחללי מחיה אלגנטיים ופונקציונליים.',
    industrialConstructionDesc: 'בנייה מתמחה למפעלים, מחסנים ומתקני ייצור. אנו מספקים מבנים חזקים עם מערכות בטיחות מתקדמות ויעילות תפעולית.',
    roadInfrastructureConstruction: 'בניית כבישים/תשתיות',
    roadInfrastructureConstructionDesc: 'בניית תשתיות חיוניות כולל כבישים, גשרים ופרויקטי עבודות ציבוריות. אנו משתמשים בחומרים עמידים וטכניקות מוכחות לנכסים קהילתיים ארוכי טווח.',
    
    // תרגומים ספציפיים לבנייה מסחרית
    commercialConstructionServices: 'שירותי בנייה מסחרית',
    commercialHeroDescription: 'בנה, הרחב או שפץ את המרחב העסקי שלך עם הצוות המומחה שלנו—מספקים איכות, בטיחות ויעילות בכל פרויקט.',
    whyChooseCommercial: 'למה לבחור בשירותים המסחריים שלנו?',
    whyChooseCommercialDesc: 'חווה בנייה מסחרית איכותית וללא טרחה המותאמת לצרכים העסקיים שלך.',
    buildingBusinessesBuildingSuccess: 'בונים עסקים, בונים הצלחה',
    buildingBusinessesDesc: 'אנו עומדים בהבטחה שלנו לאיכות, בטיחות ושביעות רצון הלקוחות—בכל פעם.',
    
    // יתרונות הבנייה המסחרית
    turnkeyProjectDelivery: 'מסירת פרויקט מפתח בידיים',
    modernSustainableDesigns: 'עיצובים מודרניים ובני קיימא',
    strictQualitySafetyStandards: 'תקני איכות ובטיחות קפדניים',
    onTimeOnBudgetCompletion: 'השלמה בזמן ובתקציב',
    expertProjectManagement: 'ניהול פרויקטים מומחה',
    comprehensiveAftercareSupport: 'תמיכה מקיפה לאחר מכן',
    
    // שירותים מסחריים
    officeWorkspaceConstruction: 'בניית משרדים וחללי עבודה',
    officeWorkspaceConstructionDesc: 'תכנון ובנייה של חללי משרדים מודרניים ויעילים המותאמים לצרכי העסק שלך.',
    retailShowroomFitOuts: 'התאמות קמעונאות ואולמי תצוגה',
    retailShowroomFitOutsDesc: 'יצירת סביבות קמעונאות מזמינות ואולמי תצוגה המושכים לקוחות.',
    industrialWarehouseFacilities: 'מתקני תעשייה ומחסנים',
    industrialWarehouseFacilitiesDesc: 'בנייה חזקה למפעלים, מחסנים ומרכזי לוגיסטיקה.',
    hospitalityRestaurantProjects: 'פרויקטי אירוח ומסעדות',
    hospitalityRestaurantProjectsDesc: 'בניית בתי מלון, מסעדות ובתי קפה עם התמקדות בחווית האורחים.',
    healthcareInstitutionalBuildings: 'מבני בריאות ומוסדות',
    healthcareInstitutionalBuildingsDesc: 'בנייה מתמחה למרפאות, בתי חולים ומוסדות חינוך.',
    renovationExpansion: 'שיפוץ והרחבה',
    renovationExpansionDesc: 'שדרוג, הרחבה או מודרניזציה של הנכס המסחרי שלך עם הפרעה מינימלית.',
    
    // תהליך הבנייה המסחרית
    requirementAnalysis: 'ניתוח דרישות',
    siteSurveyFeasibilityStudy: 'סקר אתר ומחקר כדאיות',
    designPlanningApprovals: 'עיצוב, תכנון ואישורים',
    transparentQuotationAgreement: 'הצעת מחיר שקופה והסכם',
    constructionProgressUpdates: 'בנייה ועדכוני התקדמות קבועים',
    finalHandoverOngoingSupport: 'מסירה סופית ותמיכה שוטפת',
    
    // תכונות הבנייה המסחרית
    dedicatedProjectManager: 'מנהל פרויקט ייעודי',
    dedicatedProjectManagerDesc: 'מנהל פרויקט מומחה המוקצה לפקח על כל היבט של פרויקט הבנייה המסחרית שלך ולהבטיח תוצאות מיטביות.',
    detailedProjectTimeline: 'לוח זמנים מפורט לפרויקט',
    detailedProjectTimelineDesc: 'לוח זמנים מקיף לפרויקט עם אבני דרך ברורות למעקב יעיל אחר התקדמות הבנייה שלך.',
    qualitySafetyAudits: 'ביקורות איכות ובטיחות',
    qualitySafetyAuditsDesc: 'בדיקות איכות קבועות וניטור בטיחות כדי להבטיח עמידה בכל תקני ותקנות הבנייה.',
    postCompletionMaintenance: 'תחזוקה לאחר השלמה',
    postCompletionMaintenanceDesc: 'שירותי תמיכה ותחזוקה מתמשכים כדי להבטיח שהנכס המסחרי שלך יישאר במצב מצוין.',
    
    // תרגומים מסחריים נוספים
    ourCommercialServices: 'השירותים המסחריים שלנו',
    commercialProcessDescription: 'אנו הופכים את מסע הבנייה המסחרית שלך לחלק ושקוף מתחילה ועד סוף.',
    whatMakesUsDifferent: 'מה מבדיל אותנו',
    whatMakesUsDifferentDesc: 'המחויבות שלנו לאיכות, שקיפות ושביעות רצון הלקוחות הופכת אותנו לבחירה המהימנה לבנייה מסחרית.',
    commercialExpertiseDesc1: 'אנו מטפלים בכל היבט של הפרויקט שלך, מעיצוב ועד מסירה, עם התמקדות בבטיחות ומצוינות.',
    commercialExpertiseDesc2: 'הצוות שלנו מורשה, מבוטח ומחויב למסור את המרחב העסקי שלך בזמן ובתקציב.',
    commercialExpertiseDesc3: 'אנו משתמשים רק בחומרים הטובים ביותר ושומרים על תקשורת פתוחה לאורך כל התהליך.',
    commercialExpertiseDesc4: 'תיהנה משקט נפשי עם התמיכה שלנו לאחר השלמה והבטחת איכות.',
    readyToBuildBusinessSpace: 'מוכן לבנות את המרחב העסקי שלך?',
    businessSpaceDescription: 'צור איתנו קשר היום לייעוץ חינם ותן למומחים שלנו להפוך את החזון שלך למציאות באיכות, בטיחות ומסירה בזמן.',
    
    // Impact Metrics section
    buildingSuccess: 'בונים הצלחה, פרויקט אחד בכל פעם',
    impactDescription: 'אנו גאים בכך שסיפקנו פתרונות בנייה יוצאי דופן ללקוחות בתעשיות מרובות. המחויבות שלנו לאיכות, בטיחות וחדשנות עזרה לנו להשלים מגוון רחב של פרויקטים, ממבני מגורים ועד פיתוחים מסחריים ותעשייתיים בקנה מידה גדול. השתתף איתנו כדי להגשים את החזון שלך עם מומחיות שאתה יכול לסמוך עליה.',
    scheduleCall: 'קבע שיחה',
    happyClients: 'לקוחות מרוצים',
    completedProjects: 'פרויקטים שהושלמו',
    industriesServed: 'תעשיות שקיבלו שירות',
    expertTeamMembers: 'חברי צוות מומחים',
    
    // Testimonials section
    whatOurClientsSay: 'מה הלקוחות שלנו אומרים',
    excellentJob: 'עבודה מצוינת!',
    testimonialDescription: 'תהליך חלק מתחילה ועד סוף. תשומת הלב לפרטים ולצרכי הלקוחות פשוט פנטסטית.',
    
    // Testimonial cards
    victoriaLinton: 'ויקטוריה לינטון',
    projectManager: 'מנהלת פרויקט',
    victoriaReview: 'הצוות עלה על הציפיות שלנו. בניין המשרדים שלנו נמסר בזמן ובאיכות יוצאת דופן!',
    
    fannyOwen: 'פאני אוון',
    fannyReview: 'תהליך חלק מתחילה ועד סוף. תשומת הלב לפרטים ולצרכי הלקוחות פשוט פנטסטית.',
    
    clientReview: 'ביקורת לקוח',
    clientReviewText: 'חוויה מצוינת עם צוות מקצועי ומבין את צרכי הלקוחות.',
    
    alexMorgan: 'אלכס מורגן',
    siteSupervisor: 'מפקח אתר',
    alexReview: 'מרוצה מאוד מהמסירה בזמן ומאיכות העבודה!',
    
    dmitriWoodhouse: 'דמיטרי וודהאוס',
    dmitriReview: 'שירות מצוין ועבודה מקצועית בכל הפרטים!',
    
    nellyVane: 'נלי ויין',
    interiorDesigner: 'מעצבת פנים',
    nellyReview: 'השיפוץ טופל במקצועיות רבה. ממליצה בחום!',
    
    priyaSharma: 'פריה שארמה',
    projectEngineer: 'מהנדסת פרויקטים',
    priyaReview: 'תקשורת מצוינת וניהול פרויקטים נהדר לכל אורך הדרך.',
    
    topNotch: 'ברמה הגבוהה ביותר!',
    topNotchReview: 'שיפוץ הבית שלנו היה חלק וללא לחץ.',
    
    recommended: 'מומלץ!',
    recommendedReview: 'החלל המסחרי הושלם לפני המועד הקבוע.',
    
    greatSupport: 'תמיכה נהדרת',
    greatSupportReview: 'הצוות תמיד היה זמין לשאלות שלנו.',
    
    impressiveResults: 'תוצאות מרשימות',
    impressiveResultsReview: 'המשרד שלנו נראה מדהים, תודה לכם!',
    
    professionalTeam: 'צוות מקצועי',
    professionalTeamReview: 'צוות מקצועי ואדיב מאוד.',
    
    // CTA section
    readyToBuild: 'מוכן לבנות את הפרויקט הבא שלך?',
    ctaDescription: 'השתתף איתנו לצרכי הבנייה שלך - מגורים, מסחרי או תעשייתי. הצוות המנוסה שלנו מספק איכות, בטיחות וחדשנות בכל פרויקט. בואו נהפוך את החזון שלך למציאות עם ניהול פרויקטים אמין ומומחיות מקצועית.',
    getFreeConsultation: 'קבל ייעוץ חינם',
    viewOurServices: 'צפה בשירותים שלנו',
    
    // Mission & Vision section
    ourMission: 'המשימה שלנו',
    missionStatement: 'לספק פתרונות בנייה נגישים ומקיפים הממירים קהילות ויוצרים פיתוח תשתית חיובי מתמשך עם איכות, בטיחות וחדשנות.',
    ourVision: 'החזון שלנו',
    visionStatement: 'להיות חברת הבנייה המובילה שבה לקוחות מגלים את דרכם לפרויקטי בנייה יוצאי דופן ושינוי תשתית בר קיימא.',

    // About Us page translations
    aboutUsTitle: 'אודותינו',
    company: 'חברה',
    aboutHeroDescription: 'עם 25 שנות ניסיון, הצוות שלנו מספק שירותי בנייה איכותיים לפרויקטים מגורים, מסחריים ותעשייתיים עם מחויבות בלתי מעורערת למצוינות.',
    
    // Our Growth section
    ourGrowthTitle: 'הצמיחה שלנו לאורך השנים',
    ourGrowthDescription: 'מהתחלות צנועות למנהיגות בתעשייה, גלה את אבני הדרך שעיצבו את המצוינות שלנו בבנייה והמחויבות שלנו לאיכות.',
    
    // Timeline labels
    timelineFoundation: 'יסוד',
    timelineGrowth: 'צמיחה',
    timelineInnovation: 'חדשנות',
    timelineLeadership: 'מנהיגות',
    timelineFuture: 'עתיד',
    
    // Milestones
    milestone1Title: 'הנחת יסודות',
    milestone1Description: 'התחלנו את המסע שלנו עם פרויקטי בנייה למגורים',
    milestone2Title: 'צמיחה מסחרית', 
    milestone2Description: 'התרחבנו לבנייה מסחרית ותעשייתית',
    milestone3Title: 'חדשנות טכנולוגית',
    milestone3Description: 'שילבנו טכנולוגיות בנייה מתקדמות ושיטות בר קיימא',
    milestone4Title: 'מנהיגות בתעשייה',
    milestone4Description: 'הפכנו למנהיגים מוכרים במצוינות בנייה',
    milestone5Title: 'חזון עתידי',
    milestone5Description: 'ממשיכים לבנות את המחר עם פתרונות חדשניים',

    // What Makes Us Unique
    whatMakesUsUnique: 'מה עושה אותנו ייחודיים',
    uniqueDescription: 'אנו משלבים עשרות שנות ניסיון עם טכנולוגיה מתקדמת כדי לספק פרויקטי בנייה שעומדים במבחן הזמן.',
    qualityCraftsmanship: 'אומנות איכותית',
    qualityCraftsmanshipDesc: 'אנו מספקים בנייה מעולה באמצעות שימוש בחומרים הטובים ביותר, אנשי מקצוע מיומנים ובקרת איכות קפדנית בכל שלב של הפרויקט.',
    innovativeSolutions: 'פתרונות חדשניים',
    innovativeSolutionsDesc: 'אנו מאמצים את הטכנולוגיות והשיטות החדישות ביותר בבנייה כדי לספק תוצאות יעילות, בר קיימא וחסכוניות ללקוחותינו.',
    transparentCommunication: 'תקשורת שקופה',
    transparentCommunicationDesc: 'אנו מעדכנים את לקוחותינו בכל שלב, מבטיחים בהירות, אמון וחוויית בנייה חלקה מההתחלה ועד הסוף.',

    // Our Values
    ourValues: 'הערכים שלנו',
    onTimeDelivery: 'משלוח בזמן',
    onTimeDeliveryDesc: 'אנו מחויבים להשלמת פרויקטים בתוך לוחות הזמנים, תוך שמירה על יעילות ואמינות בכל שלב.',
    clientCentricApproach: 'גישה ממוקדת לקוח',
    clientCentricApproachDesc: 'אנו נותנים עדיפות לצרכי הלקוחות שלנו, מציעים תקשורת שקופה ופתרונות מותאמים לכל פרויקט.',
    safetyFirst: 'בטיחות ראשונה',
    safetyFirstDesc: 'אנו שומרים על סטנדרטי הבטיחות הגבוהים ביותר כדי להגן על הצוות, הלקוחות והקהילות שלנו בכל אתר.',
    sustainablePractices: 'שיטות בר קיימא',
    sustainablePracticesDesc: 'אנו משלבים שיטות וחומרים ידידותיים לסביבה כדי לבנות באחריות למען העתיד.',
    innovationTechnology: 'חדשנות וטכנולוגיה',
    innovationTechnologyDesc: 'אנו מנצלים את הטכנולוגיות החדישות ביותר בבנייה כדי לספק פתרונות מודרניים, יעילים וחסכוניים.',

    // CTA Section
    readyToBuildVision: 'מוכן לבנות את החזון שלך?',
    ctaDescription: 'שותף איתנו לבנייה איכותית, משלוח בזמן ופתרונות חדשניים. בואו נהפוך את הרעיונות שלכם למציאות עם צוות שאתם יכולים לסמוך עליו.',
    startJourney: 'התחל את המסע שלך',
    
    // Home2 specific translations
    buildingWithIntegrity: 'בנייה עם יושרה',
    trustedConstruction: 'בנייה מהימנה לכל חזון.',
    excellenceInEveryBuild: 'מצוינות בכל בנייה.',
    startYourProject: 'התחל את הפרויקט שלך',
    meet: 'הכירו את',
    ourTeam: 'הצוות שלנו',
    teamDescription: 'צוות הבנייה המנוסה שלנו מביא את החזון שלך לחיים בדיוק, בטיחות ואיכות. מתכנון פרויקטים ועד ניהול אתר, אנו מבטיחים שכל בנייה תושלם בזמן ובסטנדרטים הגבוהים ביותר. בטח בנו להביא מצוינות לפרויקטי מגורים, מסחריים או תעשייתיים שלך.',
    
    // Team members
    michaelStone: 'מייקל סטון',
    siteManager: 'מנהל אתר',
    michaelStoneDescription: 'מפקח על כל הפעולות באתר, מבטיח בטיחות, איכות ומסירת פרויקט במועד לכל בנייה.',
    emilyCarter: 'אמילי קרטר',
    projectCoordinator: 'רכזת פרויקט',
    emilyCarterDescription: 'מתאמת בין צוותים, ספקים ולקוחות כדי לשמור על פרויקטי בנייה במסלול ובתוך התקציב.',
    davidMason: 'דיוויד מייסון',
    leadEngineer: 'מהנדס ראשי',
    davidMasonDescription: 'אחראי על תכנון מבני, פיקוח טכני והבטחת מצוינות הנדסית בכל אתר.',
    sophiaTurner: 'סופיה טרנר',
    safetyOfficer: 'קצינת בטיחות',
    sophiaTurnerDescription: 'מבטיחה שכל פרוטוקולי הבטיחות נעקבים, מספקת סביבה בטוחה לעובדים ומבקרים באתר.',
    
    // CEO section
    ourCEO: 'המנכ"ל שלנו',
    ceoMissionStatement: 'מוביל את המשימה שלנו לבנות מחר טוב יותר באמצעות בנייה איכותית וחדשנות.',
    ceoExperience: 'עם למעלה מ-20 שנות ניסיון בתעשיית הבנייה, המנכ"ל שלנו פיקח על השלמה מוצלחת של פרויקטים מגורים, מסחריים ותעשייתיים רבים. המחויבות שלהם לבטיחות, יעילות ושביעות רצון הלקוחות מניעה את החברה שלנו קדימה.',
    ceoQuote: 'אנו מאמינים שכל פרויקט הוא הזדמנות ליצור ערך מתמשך ללקוחות ולקהילות שלנו. הצוות שלנו מוקדש להביא מצוינות, מהיסוד ועד למעלה.',
    ceoName: 'ליזה, מנכ"לית',
    
    // Why Choose Us section
    whyBuildersTrustUs: 'למה בנאים בוטחים בנו',
    whyBuildersTrustUsDescription: 'אנו מספקים פתרונות בנייה איכותיים עם התמקדות בבטיחות, חדשנות ושביעות רצון הלקוחות. הצוות המנוסה שלנו, הציוד המודרני והמחויבות לעמידה בלוחות זמנים מבדילים אותנו בתעשיית הבנייה.',
    constructionAdvantages: 'יתרונות הבנייה שלנו',
    experiencedTeam: 'צוות מנוסה',
    experiencedTeamDescription: 'עשרות שנים של מומחיות מעשית בבנייה למגורים, מסחרית ותעשייתית.',
    qualityMaterials: 'חומרים איכותיים',
    qualityMaterialsDescription: 'אנו משתמשים רק בחומרים מאושרים בתעשייה לתוצאות עמידות ובטוחות.',
    safetyFirst: 'בטיחות קודם כל',
    safetyFirstDescription: 'פרוטוקולים קפדניים והכשרה סדירה שומרים על האתרים שלנו בטוחים לכולם.',
    onTimeDelivery: 'מסירה בזמן',
    onTimeDeliveryDescription: 'אנו עומדים בלוחות זמנים ושומרים על הפרויקט שלך במסלול, בכל פעם.',
    modernEquipment: 'ציוד מודרני',
    modernEquipmentDescription: 'מכונות וטכנולוגיה מתקדמת לבנייה יעילה ואיכותית.',
    transparentCommunication: 'תקשורת שקופה',
    transparentCommunicationDescription: 'אנו מעדכנים אותך בכל שלב של הפרויקט שלך.',
    
    // Projects and CTA
    featuredProjects: 'פרויקטים מובילים',
    readyToBuildDream: 'מוכן לבנות את פרויקט החלומות שלך?',
    readyToBuildDreamDescription: 'שתתף עם צוות הבנייה המומחה שלנו לאיכות, בטיחות ומסירה בזמן. ממגורים למסחר, אנו הופכים את החזון שלך למציאות - בכל שלב בדרך.',
    
    // Residential Page Translations
    residentialConstructionServices: 'שירותי בנייה למגורים',
    residentialHeroDescription: 'אנו הופכים את מסע הבנייה שלך לחלק ושקוף מההתחלה ועד הסוף.',
    exploreMore: 'גלה עוד',
    whyChooseResidential: 'למה לבחור בשירותי המגורים שלנו?',
    whyChooseResidentialDesc: 'חווה בנייה למגורים איכותית וללא דאגות עם תשומת לב אישית לכל פרט.',
    buildingDreamHomes: 'בונים בתי חלומות',
    buildingDreamHomesDesc: 'יוצרים חללי מגורים יפים ופונקציונליים המשקפים את אורח החיים שלך ועולים על הציפיות.',
    customHomeDesignPlanning: 'תכנון ועיצוב בתים מותאם אישית',
    highQualityMaterials: 'חומרים איכותיים ואומנות מקצועית',
    onTimeProjectDelivery: 'מסירת פרויקט במועד',
    transparentPricing: 'תמחור שקוף וחוזים ברורים',
    energyEfficientSolutions: 'פתרונות חוסכי אנרגיה ובר קיימא',
    comprehensiveProjectManagement: 'ניהול פרויקטים מקיף',
    ourResidentialServices: 'שירותי הבנייה למגורים שלנו',
    customHomeDesign: 'עיצוב בתים מותאם אישית',
    customHomeDesignDesc: 'עיצובים אדריכליים אישיים המותאמים לאורח החיים והעדפות שלך עם פונקציונליות מודרנית.',
    newHomeConstruction: 'בניית בתים חדשים',
    newHomeConstructionDesc: 'שירותי בניית בתים מלאים מיסוד ועד גימור סופי עם חומרים איכותיים ואומנות מקצועית.',
    homeRenovationRemodeling: 'שיפוץ ועיצוב מחדש של בתים',
    homeRenovationRemodelingDesc: 'הפוך את הבית הנוכחי שלך עם שירותי שיפוץ מטבח, חדר רחצה ובית שלם.',
    interiorDesignFinishing: 'עיצוב פנים וגימורים',
    interiorDesignFinishingDesc: 'פתרונות פנים מעולים כולל ריצוף, צביעה, תאורה ועבודות עץ מותאמות אישית.',
    sustainableBuildingSolutions: 'פתרונות בנייה בר קיימא',
    sustainableBuildingSolutionsDesc: 'בנייה ידידותית לסביבה עם מערכות חוסכות אנרגיה וחומרי בנייה בר קיימא.',
    projectManagement: 'ניהול פרויקטים',
    projectManagementDesc: 'פיקוח מקיף על פרויקטים המבטיח השלמה במועד בתוך התקציב ותקני איכות.',
    howOurProcessWorks: 'איך התהליך שלנו עובד',
    processDescription: 'אנו הופכים את מסע הבנייה שלך לחלק ושקוף מההתחלה ועד הסוף.',
    requirementGathering: 'איסוף דרישות',
    siteVisitFeasibility: 'ביקור באתר ומחקר היתכנות',
    designPlanningApproval: 'עיצוב ואישור תכנון',
    transparentQuotationAgreement: 'הצעת מחיר שקופה והסכם',
    constructionRegularUpdates: 'בנייה ועדכונים קבועים',
    finalHandoverSupport: 'מסירה סופית ותמיכה',
    startProjectToday: 'התחל את הפרויקט שלך היום',
    whatMakesUsDifferent: 'מה עושה אותנו שונים',
    whatMakesUsDifferentDesc: 'המומחיות שלנו בבנייה למגורים, תשומת הלב לפרטים והמחויבות שלנו לשביעות רצון בעלי הבתים מבדילה אותנו מהתחרות.',
    residentialContractors: 'קבלני בנייה למגורים',
    detailedProjectTimeline: 'לוח זמנים מפורט לפרויקט ואבני דרך',
    comprehensiveWarranty: 'אחריות מקיפה ותמיכה',
    residentialExpertiseDesc1: 'מעיצוב בתים מותאם אישית ועד בנייה מלאה, אנו מטפלים בכל פרט של הפרויקט המגורים שלך בדיוק ובזהירות.',
    residentialExpertiseDesc2: 'צוות הבנייה למגורים המורשה והמנוסה שלנו מספק בתים איכותיים בזמן ובתוך התקציב שלך.',
    residentialExpertiseDesc3: 'אנו משתמשים בחומרי בנייה מעולים ושומרים על תקשורת שקופה לכל אורך מסע בניית הבית שלך.',
    residentialExpertiseDesc4: 'תיהנה משקט נפשי מלא עם האחריות המקיפה שלנו ושירותי התמיכה המתמשכים לבעלי בתים.',
    residentialContractorsDesc: 'קבלני מגורים מורשים עם שנים של ניסיון בבניית בתים ושיפוץ.',
    detailedProjectTimelineDesc: 'לוח זמנים מקיף עם אבני דרך ברורות, נשמור אותך מעודכן בכל שלב בנייה.',
    qualityMaterialsDesc: 'חומרי בנייה מעולים ובעלי מלאכה מיומנים להבטחת תקני איכות גבוהים.',
    comprehensiveWarrantySupportDesc: 'כיסוי אחריות נרחב ושירותי תמיכה מתמשכים לפרויקט הבנייה למגורים שלך.',
    readyToBuildDreamHome: 'מוכן לבנות את בית החלומות שלך?',
    dreamHomeDescription: 'התחל עכשיו ותן למומחי הבנייה למגורים שלנו להביא את בית החלומות שלך לחיים עם איכות יוצאת דופן ואומנות מקצועית.',
    getStarted: 'התחל עכשיו',
    getQuote: 'קבל הצעת מחיר חינם',
    
    // Footer translations
    buildRightConstruction: 'בילדרייט בנייה',
    footerTagline: 'בונים את החזון שלך, בבטחה ובזמן.',
    quickLinks: 'קישורים מהירים',
    projects: 'פרויקטים',
    address: 'כתובת',
    phone: 'טלפון',
    email: 'אימייל',
    hours: 'שעות פעילות',
    footerAddress: 'רחוב הבנאים 456, מטרו סיטי',
    footerHours: 'ב׳-ש׳, 8:00-19:00',
    followUs: 'עקבו אחרינו',
    newsletter: 'ניוזלטר',
    newsletterDescription: 'קבלו חדשות בנייה, טיפי בטיחות ועדכוני פרויקטים בתיבת הדואר שלכם.',
    yourEmail: 'האימייל שלך',
    subscribe: 'הירשם',
    subscriptionThankYou: 'תודה שנרשמת לעדכוני בילדרייט!',
    privacyPolicy: 'מדיניות פרטיות',
    termsConditions: 'תנאים והגבלות',
    disclaimer: 'הסתייגות',
    copyright: '© 2025 בילדרייט בנייה. כל הזכויות שמורות.',

    // Renovation Page translations
    renovationRemodelingServices: 'שירותי שיפוץ ועיצוב מחדש',
    renovationHeroDescription: 'שנה את הנכס שלך עם פתרונות שיפוץ ועיצוב מחדש מומחים—חדש, הרחב ודמיין מחדש את החלל שלך עם הצוות המוכח שלנו.',
    getFreeConsultation: 'קבל ייעוץ חינם',
    whyRenovateRemodel: 'למה לשפץ ולעצב מחדש?',
    whyRenovateRemodeDesc: 'פתח את הפוטנציאל המלא של הנכס שלך עם שירותי השיפוץ והעיצוב מחדש המומחים שלנו.',
    modernizeUpgradeSpace: 'חדש ושדרג את החלל המגורים או העבודה שלך',
    increasePropertyValue: 'הגדל את ערך הנכס והמשיכה החיצונית',
    enhanceEnergyEfficiency: 'שפר את יעילות האנרגיה והקיימות',
    customizeInteriors: 'התאם עיצובים פנימיים לסגנון החיים שלך',
    fixStructuralIssues: 'תקן בעיות מבניות ושפר את הבטיחות',
    transformOutdatedRooms: 'הפוך חדרים מיושנים לחללים פונקציונליים',
    benefitTitle1: 'חידוש',
    benefitTitle2: 'הגדלה',
    benefitTitle3: 'שיפור',
    benefitTitle4: 'התאמה',
    transformYourSpace: 'שנה את החלל שלך',
    transformYourSpaceDesc: 'חווה את ההבדל שיכול לעשות שיפוץ מקצועי—פונקציונליות, יופי וערך.',
    ourRenovationServices: 'שירותי שיפוץ ועיצוב מחדש',
    kitchenRemodeling: 'עיצוב מטבח מחדש',
    kitchenRemodelingDesc: 'שדרג את המטבח שלך עם עיצובים מודרניים, ארונות חדשים, משטחים ומכשירים חכמים.',
    bathroomRenovation: 'שיפוץ חדר רחצה',
    bathroomRenovationDesc: 'שנה את חדר הרחצה שלך עם אבזרים יוקרתיים, פריסות יעילות וגימורים אלגנטיים.',
    basementFinishing: 'גימור מרתף',
    basementFinishingDesc: 'הפוך את המרתף שלך לחלל מגורים—חדר משפחה, חדר כושר או משרד ביתי.',
    roomAdditions: 'תוספות חדרים',
    roomAdditionsDesc: 'הרחב את הבית שלך עם חדרי שינה נוספים, חדרי שמש או אזורי מגורים.',
    exteriorUpgrades: 'שדרוגים חיצוניים',
    exteriorUpgradesDesc: 'הגבר את המשיכה החיצונית עם חיפוי חדש, קירוי, חלונות וגינון.',
    wholeHomeRenovation: 'שיפוץ כל הבית',
    wholeHomeRenovationDesc: 'עיצוב מחדש מקיף לשינוי מלא של הנכס שלך.',
    scheduleFreeConsultation: 'קבע ייעוץ שיפוץ חינם',
    discussVisionBudget: 'דון על החזון, הצרכים והתקציב שלך עם המומחים שלנו',
    receiveDetailedPlan: 'קבל תוכנית פרויקט מפורטת ולוח זמנים',
    skilledTeamExecutes: 'הצוות המיומן שלנו מבצע את השיפוץ/העיצוב מחדש',
    finalWalkthroughGuarantee: 'סיור סופי וערבות שביעות רצון',
    licensedInsuredProfessionals: 'אנשי מקצוע מורשים ומבוטחים',
    licensedInsuredProfessionalsDesc: 'אנו מספקים אנשי מקצוע מורשים ומבוטחים לכל פרויקט.',
    customDesignSolutions: 'פתרונות עיצוב מותאמים',
    customDesignSolutionsDesc: 'אנו מספקים פתרונות עיצוב מותאמים לכל פרויקט.',
    qualityMaterialsCraftsmanship: 'חומרים איכותיים ואומנות',
    qualityMaterialsCraftsmanshipDesc: 'אנו מספקים חומרים איכותיים ואומנות לכל פרויקט.',
    onTimeProjectDelivery: 'מסירת פרויקט בזמן',
    onTimeProjectDeliveryDesc: 'אנו מספקים מסירת פרויקט בזמן לכל פרויקט.',
    
    // Additional renovation translations
    whatSetsUsApart: 'מה מייחד אותנו',
    whatSetsUsApartDesc: 'שירותי השיפוץ והעיצוב מחדש שלנו מיועדים לאיכות, אמינות ושביעות רצונכם המלאה.',
    renovationExpertiseDesc1: 'אנו משלבים עיצוב חדשני, אומנות מיומנת וניהול פרויקטים שקוף כדי לספק תוצאות יוצאות דופן. מהרעיון ועד להשלמה, הצוות שלנו עובד איתכם בשיתוף פעולה הדוק כדי להבטיח שהחזון שלכם יתממש בזמן ובמסגרת התקציב.',
    renovationExpertiseDesc2: 'בין אם אתם מעדכנים חדר יחיד או משנים את כל הנכס שלכם, אנו משתמשים רק בחומרים באיכות הגבוהה ביותר ובטכניקות בנייה מוכחות.',
    renovationExpertiseDesc3: 'המחויבות שלנו לתקשורת ולשירות לקוחות פירושה שאתם תמיד מעודכנים ושולטים לאורך כל תהליך השיפוץ.',
    renovationExpertiseDesc4: 'גלו מדוע בעלי בתים ועסקים בטוחים בנו לפרויקטי השיפוץ והעיצוב המחדש החשובים ביותר שלהם.',
    readyToRenovate: 'מוכנים לשפץ או לעצב מחדש?',
    readyToRenovateDesc: 'צרו איתנו קשר היום לייעוץ חינם ותנו למומחים שלנו להפוך את חלומות השיפוץ שלכם למציאות. החלל המושלם שלכם נמצא במרחק של פרויקט אחד בלבד!',
    bookYourConsultation: 'הזמינו את הייעוץ החינמי שלכם',
    
    // Interior Design page translations
    interiorHeroTitle: 'עיצוב פנים ו',
    interiorHeroTitleHighlight: 'שירותי גמר',
    interiorHeroDescription: 'העלו את החלל שלכם עם עיצוב פנים מותאם אישית וגימור ללא רבב. המומחים שלנו מביאים את החזון שלכם לחיים ביצירתיות, דיוק וסגנון.',
    bookFreeConsultation: 'הזמינו ייעוץ עיצוב חינם',
    whyInteriorDesign: 'למה',
    interiorDesignWord: 'עיצוב פנים?',
    interiorDesignTransform: 'שנו את הבית או העסק שלכם עם האמנות והמדע של עיצוב פנים וגימור.',
    transformYourSpace: 'שנו את החלל שלכם',
    transformYourSpaceDesc: 'חוו את ההבדל שעיצוב פנים מקצועי יכול לעשות—יופי, נוחות וערך.',
    interiorServicesTitle: 'עיצוב פנים וגימור',
    servicesWord: 'שירותים',
    howItWorks: 'איך',
    itWorksWord: 'זה עובד',
    interiorProcessDesc: 'התהליך שלנו מבטיח חוויה חלקה של עיצוב פנים וגימור מהרעיון ועד לסיום.',
    step: 'שלב',
    bookDesignConsultation: 'הזמינו ייעוץ עיצוב',
    interiorWhatSetsUsApartDesc: 'שירותי עיצוב הפנים והגימור שלנו מעוצבים לאלגנטיות, נוחות ושביעות רצונכם המלאה.',
    interiorExpertiseDesc1: 'אנו משלבים יצירתיות, מומחיות טכנית וחומרים מעולים כדי לספק עיצובי פנים מהממים. מהרעיון ועד לסיום, הצוות שלנו משתף פעולה איתכם כדי להבטיח שהחזון שלכם יתממש בזמן ובמסגרת התקציב.',
    interiorExpertiseDesc2: 'בין אם אתם מרעננים חדר יחיד או משנים את כל הנכס שלכם, אנו משתמשים רק בגימור הטוב ביותר ובפתרונות עיצוב.',
    interiorExpertiseDesc3: 'המחויבות שלנו לתקשורת ושירות פירושה שאתם תמיד מעודכנים ושולטים לאורך כל תהליך העיצוב.',
    interiorExpertiseDesc4: 'גלו מדוע לקוחות בוטחים בנו לפרויקטי עיצוב הפנים והגימור החשובים ביותר שלהם.',
    readyToTransformSpace: 'מוכנים לשנות את החלל שלכם?',
    interiorCtaDescription: 'צרו איתנו קשר היום לייעוץ עיצוב פנים חינם ותנו למומחים שלנו ליצור עבורכם את החלל המושלם. סגנון, נוחות ואיכות—מועברים.',
    
    // Interior Benefits
    interiorBenefit1Title: 'משיכה אסתטית',
    interiorBenefit1Desc: 'משפר משיכה אסתטית ונוחות',
    interiorBenefit2Title: 'אופטימיזציה של חלל',
    interiorBenefit2Desc: 'מגדיל לחלוטין את פונקציונליות החלל והזרימה',
    interiorBenefit3Title: 'ערך הנכס',
    interiorBenefit3Desc: 'מגדיל את ערך הנכס ואת יכולת השיווק',
    interiorBenefit4Title: 'סגנון אישי',
    interiorBenefit4Desc: 'משקף את הסגנון הייחודי והאישיות שלכם',
    interiorBenefit5Title: 'תאורה ואווירה',
    interiorBenefit5Desc: 'משפר תאורה, צבע ואווירה',
    interiorBenefit6Title: 'גימור מקצועי',
    interiorBenefit6Desc: 'מספק גימור מקצועי ופרטים מדויקים',
    
    // Interior Services
    interiorService1Title: 'תכנון חללים ופריסות',
    interiorService1Desc: 'אייעלו את הפנים שלכם לפונקציונליות וזרימה מקסימליות.',
    interiorService2Title: 'רהיטים וארונות מותאמים אישית',
    interiorService2Desc: 'פתרונות בהתאמה אישית המותאמים לחלל ולטעם שלכם.',
    interiorService3Title: 'גימורי קירות ותקרות',
    interiorService3Desc: 'צביעה מומחית, טפטים וטיפולים דקורטיביים.',
    interiorService4Title: 'עיצוב והתקנה של תאורה',
    interiorService4Desc: 'צרו את מצב הרוח המושלם והדגישו מאפיינים אדריכליים.',
    interiorService5Title: 'פתרונות ריצוף',
    interiorService5Desc: 'עץ קשה מעולה, אריחים, שטיח ועוד לכל חדר.',
    interiorService6Title: 'טיפולים לחלונות',
    interiorService6Desc: 'וילונות אלגנטיים, תריסים וצללים לפרטיות וסגנון.',
    
    // Interior Process Steps
    interiorStep1: 'הזמינו ייעוץ עיצוב פנים חינם',
    interiorStep2: 'שתפו את החזון, הצרכים והתקציב שלכם עם המעצבים שלנו',
    interiorStep3: 'קבלו תוכנית עיצוב מותאמת אישית ודוגמאות חומרים',
    interiorStep4: 'הצוות שלנו משנה את החלל שלכם עם גימור מומחה',
    interiorStep5: 'סיור סופי וערבות לשביעות רצון',
    
    // Interior Features
    interiorFeature1Title: 'מעצבים זוכי פרסים',
    interiorFeature1Desc: 'אנו מספקים מעצבים זוכי פרסים לכל פרויקט.',
    interiorFeature2Title: 'הדמיה תלת-ממדית ותכנון',
    interiorFeature2Desc: 'אנו מספקים הדמיה תלת-ממדית ותכנון לכל פרויקט.',
    interiorFeature3Title: 'חומרים וגימורים מעולים',
    interiorFeature3Desc: 'אנו מספקים חומרים וגימורים מעולים לכל פרויקט.',
    interiorFeature4Title: 'השלמת פרויקט בזמן',
    interiorFeature4Desc: 'אנו מספקים השלמת פרויקט בזמן לכל פרויקט.',
    
    // Industrial Construction page translations - Hebrew
    industrialHeroTitle: 'בנייה',
    industrialHeroTitleHighlight: 'תעשייתית',
    industrialHeroDescription: 'תשתית חזקה להצלחה תעשייתית. אנו בונים מתקנים עמידים המיועדים לפעילות כבדה, בטיחות וביצועים לטווח ארוך.',
    whyIndustrialConstruction: 'למה לבחור',
    constructionWord: 'בנייה',
    industrialBenefitsDesc: 'גלו את היתרונות של בנייה תעשייתית מודרנית לעסק והפעילות שלכם.',
    
    // Industrial Benefits - Hebrew
    industrialBenefit1Title: 'עמידות משופרת',
    industrialBenefit1Desc: 'בנייה תעשייתית מספקת מבנים חזקים הבנויים לעמוד בשימוש כבד, סביבות קשות ומבחן הזמן.',
    industrialBenefit2Title: 'יעילות תפעולית',
    industrialBenefit2Desc: 'תהליכי בנייה מייעלים הממזערים את זמני ההשבתה ומגדילים את הפרודוקטיביות התפעולית למתקנים תעשייתיים.',
    industrialBenefit3Title: 'תאימות בטיחות',
    industrialBenefit3Desc: 'תקני בטיחות מחמירים ותאימות רגולטורית מבטיחים סביבה בטוחה לכוח העבודה והנכסים.',
    industrialBenefit4Title: 'עיצוב ניתן להרחבה',
    industrialBenefit4Desc: 'עיצובים גמישים ופתרונות חדשניים מאפשרים למתקן שלכם לגדול ולהתאים לצרכים עתידיים.',
    
    // Industrial Services - Hebrew
    industrialService1Title: 'מפעלי ייצור',
    industrialService1Desc: 'מתקני ייצור חדישים המתוכננים ליעילות ייצור אופטימלית ותהליכי עבודה.',
    industrialService2Title: 'בניית מחסנים',
    industrialService2Desc: 'מרכזי אחסון והפצה בקנה מידה גדול עם מערכות לוגיסטיקה וטיפול בחומרים מתקדמות.',
    industrialService3Title: 'שיפוצים תעשייתיים',
    industrialService3Desc: 'שדרוג מתקנים קיימים עם אינטגרציה של ציוד חדיש ומערכות בטיחות משופרות.',
    industrialService4Title: 'מתקני עיבוד',
    industrialService4Desc: 'מתקנים מיוחדים לעיבוד מזון, ייצור כימי ופעילות ייצור כבד.',
    industrialService5Title: 'אנרגיה ושירותים',
    industrialService5Desc: 'תשתית לייצור אנרגיה, שירותים ומערכות תמיכה תעשייתיות חיוניות.',
    industrialService6Title: 'תעשייה כבדה',
    industrialService6Desc: 'בנייה חזקה למפעלי פלדה, פעילות כרייה והתקנות מכונות כבדות.',
    
    // Industrial Process Steps - Hebrew
    industrialStep1Title: 'הערכת אתר',
    industrialStep1Desc: 'הערכה מקיפה של תנאי האתר והדרישות התפעוליות שלכם.',
    industrialStep2Title: 'תכנון והנדסה',
    industrialStep2Desc: 'תכנון מבני מתקדם ופתרונות הנדסיים למפרטים תעשייתיים.',
    industrialStep3Title: 'היתרים ואישורים',
    industrialStep3Desc: 'טיפול בכל הדרישות הרגולטוריות ואישורי תאימות תעשייתיים.',
    industrialStep4Title: 'שלב הבנייה',
    industrialStep4Desc: 'בנייה מקצועית עם פרוטוקולי בטיחות מחמירים ובקרת איכות.',
    industrialStep5Title: 'בדיקה והפעלה',
    industrialStep5Desc: 'בדיקה מקיפה והפעלת מערכות לפני מסירת המתקן.',
    
    // Industrial Features - Hebrew
    industrialFeature1Title: 'מערכות בטיחות מתקדמות',
    industrialFeature1Desc: 'פרוטוקולי בטיחות מקיפים ומערכות חירום משולבות ברחבי המתקן.',
    industrialFeature2Title: 'כושר נשיאת משאות כבדים',
    industrialFeature2Desc: 'מהונדסים לטפל במשאות מכונות וציוד כבדים עם תקינות מבנית מעולה.',
    industrialFeature3Title: 'תאימות סביבתית',
    industrialFeature3Desc: 'בנוי לעמוד בכל התקנות הסביבתיות ותקני הקיימות לפעילות תעשייתית.',
    industrialFeature4Title: 'מוכן להרחבה עתידית',
    industrialFeature4Desc: 'מתוכנן עם שיטות בנייה מודולריות המאפשרות הרחבה ושינויים עתידיים בקלות.',
    industrialFeature5Title: 'חומרים איכותיים',
    industrialFeature5Desc: 'חומרים תעשייתיים מעולים הנבחרים לעמידות, ביצועים ואמינות לטווח ארוך.',
    industrialFeature6Title: 'הנדסה מומחית',
    industrialFeature6Desc: 'צוות הנדסה תעשייתית מיוחד עם עשרות שנות ניסיון בבניית מתקנים מורכבים.',
    
    // Industrial Additional Translations - Hebrew
    industrialServicesWeProvide: 'השירותים התעשייתיים ש',
    serviceWord: 'אנו מספקים',
    industrialServicesBackground: 'רקע שירותים תעשייתיים',
    industrialHowItWorksDesc: 'התחילו עם פרויקט הבנייה התעשייתית שלכם בצעדים אסטרטגיים ויעילים.',
    worksWord: 'עובד',
    industrialProcessSteps: 'שלבי תהליך הבנייה התעשייתית',
    whatSetsUsApart: 'מה מייחד אותנו',
    industrialWhatSetsUsApartDesc: 'גלו למה אנחנו הבחירה המהימנה לבנייה תעשייתית ופרויקטי תשתית.',
    industrialCtaTitle: 'שנו את המתקן שלכם עם בנייה תעשייתית היום',
    industrialCtaDesc: 'קבלו גישה לשירותי בנייה תעשייתית מיוחדים ליצירת מתקנים חזקים ויעילים המניעים את הצלחת העסק שלכם.',
    transformYourFacility: 'שנו את המתקן שלכם',
    industrialBenefitsCenterDesc: 'חוו את היתרונות של בנייה תעשייתית מודרנית—כוח, יעילות וחדשנות לפרויקט הבא שלכם.',
    industrialConstructionSite: 'אתר בנייה תעשייתית',
    viewPortfolio: 'צפו בתיק העבודות',

    // Road Construction Page translations
    roadHeroTitle: 'בניית כבישים ותשתיות',
    roadHeroTitleHighlight: 'שירותי בנייה',
    roadHeroDescription: 'בניית הכבישים והתשתיות המחברות קהילות, מניעות קידמה ומבטיחות עתיד בר-קיימא.',
    learnMoreAboutConstruction: 'למדו עוד על בנייה',
    
    // Road Key Benefits
    keyBenefits: 'יתרונות מרכזיים',
    roadKeyBenefitsDesc: 'שתפו פעולה איתנו לפתרונות בניית כבישים ותשתיות אמינים, חדשניים וברי-קיימא.',
    qualityDurability: 'איכות ועמידות',
    qualityDurabilityDesc: 'אנו משתמשים בחומרים הטובים ביותר ובפרקטיקות הנדסיות כדי להבטיח תשתית ארוכת טווח, בטוחה ואמינה.',
    sustainability: 'קיימות',
    sustainabilityDesc: 'אנו נותנים עדיפות לשיטות וחומרים ידידותיים לסביבה למען מחר ירוק יותר.',
    expertise: 'מומחיות',
    expertiseDesc: 'הצוות שלנו מביא עשרות שנות ניסיון בבניית כבישים ותשתיות, המבטיח שכל פרויקט עומד בסטנדרטים הגבוהים ביותר.',
    onTimeDelivery: 'מסירה בזמן',
    onTimeDeliveryDesc: 'אנו מספקים פרויקטים בלוח הזמנים, ממזערים הפרעות ומגדילים את הערך לקהילות ולקוחות.',
    buildingTheFuture: 'בניית העתיד',
    buildingTheFutureDesc: 'פרויקטי הכבישים והתשתיות שלנו מתוכננים להחזיק מעמד, תומכים בצמיחה, בטיחות וקישוריות לדורות הבאים.',
    
    // Road Services
    ourRoadInfrastructureServices: 'שירותי בניית כבישים/תשתיות שלנו',
    highwayRoadConstruction: 'בניית כבישים מהירים וכבישים',
    highwayRoadConstructionDesc: 'תכנון, בנייה ותחזוקה של כבישים מהירים, כבישים וכבישים מהירים לתחבורה בטוחה ויעילה.',
    bridgeOverpassConstruction: 'בניית גשרים ומעברים עליונים',
    bridgeOverpassConstructionDesc: 'מומחיות בבניית גשרים ומעברים עליונים עמידים לשיפור הקישוריות ותמיכה בעומסי תנועה כבדים.',
    urbanInfrastructureDevelopment: 'פיתוח תשתית עירונית',
    urbanInfrastructureDevelopmentDesc: 'פתרונות מקיפים לתשתית עירונית, כולל ניקוז, מדרכות, תאורה ומרחבים ציבוריים.',
    maintenanceRehabilitation: 'תחזוקה ושיקום',
    maintenanceRehabilitationDesc: 'תחזוקה שוטפת, תיקונים ושדרוגים להארכת חיי ובטיחות התשתית הקיימת.',
    sustainableConstructionSolutions: 'פתרונות בנייה בת-קיימא',
    sustainableConstructionSolutionsDesc: 'שימוש בחומרים ושיטות ידידותיות לסביבה כדי למזער את ההשפעה הסביבתית ולקדם קיימות.',
    projectManagementConsultation: 'ניהול פרויקטים וייעוץ',
    projectManagementConsultationDesc: 'ניהול פרויקטים מקצה לקצה, ייעוץ ותמיכה למסירת תשתית מוצלחת.',
    
    // Road How It Works
    roadHowItWorksDesc: 'התהליך שלנו מבטיח איכות, בטיחות ויעילות בכל שלב של פרויקט התשתית שלכם.',
    step1: 'שלב 1',
    step1Desc: 'ייעוץ ראשוני והערכת פרויקט',
    step2: 'שלב 2',
    step2Desc: 'סקר אתר, תכנון ופיתוח עיצוב',
    step3: 'שלב 3',
    step3Desc: 'רכישת חומרים וגיוס משאבים',
    step4: 'שלב 4',
    step4Desc: 'בנייה, פיקוח ובקרת איכות',
    step5: 'שלב 5',
    step5Desc: 'מסירת פרויקט, העברה ותחזוקה שוטפת',
    requestConsultation: 'בקש ייעוץ',
    
    // Road What Sets Us Apart
    roadWhatSetsUsApartDesc: 'גלו למה אנחנו הבחירה המהימנה לפרויקטי בניית כבישים ותשתיות.',
    provenTrackRecord: 'רקורד מוכח: מסירה מוצלחת של פרויקטי תשתית מורכבים בזמן ובתקציב.',
    cuttingEdgeTechnology: 'טכנולוגיה מתקדמת: מינוף שיטות הבנייה והציוד העדכניים ביותר לתוצאות מעולות.',
    commitmentToSafety: 'מחויבות לבטיחות: הקפדה קפדנית על תקני בטיחות להגנה על הצוות שלנו ועל הקהילה.',
    sustainabilityFocus: 'התמקדות בקיימות: פרקטיקות וחומרים ידידותיים לסביבה למען מחר ירוק יותר.',
    expertTeam: 'צוות מומחים: מהנדסים מיומנים מאוד, מנהלי פרויקטים ועובדים המוקדשים לאיכות ולמצוינות.',
    innovativeSolutions: 'פתרונות חדשניים',
    innovativeSolutionsDesc: 'אנו מאמצים חדשנות כדי לפתור אתגרי תשתית ולספק ערך מתמשך.',
    clientCentricApproach: 'גישה ממוקדת לקוח',
    clientCentricApproachDesc: 'אנו נותנים עדיפות לצרכי הלקוחות, מבטיחים תקשורת שקופה ופתרונות מותאמים.',
    qualityAssurance: 'הבטחת איכות',
    qualityAssuranceDesc: 'בדיקות איכות קפדניות בכל שלב מבטיחות תוצאות תשתית מעולות.',
    sustainableImpact: 'השפעה בת-קיימא',
    sustainableImpactDesc: 'אנו בונים עם המחשבה על העתיד, מתמקדים בקיימות ובתועלת קהילתית.',
    
    // Road CTA
    readyToBuildFuture: 'מוכנים לבנות את העתיד?',
    readyToBuildFutureDesc: 'צרו איתנו קשר היום כדי לדון בצרכי בניית הכבישים והתשתיות שלכם. בואו ניצור השפעה מתמשכת יחד.',
    getInTouch: 'צרו קשר',

    // Blog Page translations
    constructionInsightsBlog: 'בלוג תובנות בנייה',
    blogHeroDesc: 'חקרו את הטרנדים האחרונים, טיפי בטיחות וחדשנות בתעשיית הבנייה',
    featuredConstructionArticles: 'מאמרי בנייה מומלצים',
    
    // Featured Articles
    essentialSafetyPractices: 'נוהלי בטיחות חיוניים לכל אתר בנייה',
    safetyPracticesDesc: 'למדו על הפרוטוקולים החשובים ביותר לשמירה על בטיחות הצוות והאתר בכל פרויקט.',
    safetyTeam: 'צוות בטיחות',
    minutesRead: 'דקות קריאה',
    daysAgo: 'לפני יום',
    readMore: 'קרא עוד',
    
    modernMaterials: 'חומרים מודרניים: בנייה לעתיד',
    modernMaterialsDesc: 'גלו את החדשנות האחרונה בחומרי בנייה וכיצד הם משפרים תוצאות פרויקטים.',
    materialsTeam: 'צוות חומרים',
    
    projectManagementTools: 'כלי ניהול פרויקטים להצלחת בנייה',
    projectManagementToolsDesc: 'חקרו את הכלים הדיגיטליים והאסטרטגיות הטובים ביותר לניהול יעיל של פרויקטי בנייה.',
    projectTeam: 'צוות פרויקט',
    
    // Equipment Section
    findRightConstructionEquipment: 'מצאו את ציוד הבנייה הנכון',
    equipmentComparisonDesc: 'השוו סוגים שונים של ציוד בנייה כדי לגלות איזה מתאים לצרכי הפרויקט ודרישות האתר שלכם',
    equipmentType: 'סוג ציוד',
    purpose: 'מטרה',
    bestFor: 'הטוב ביותר עבור',
    keyFeatures: 'תכונות מפתח',
    operatorSkill: 'כישור מפעיל',
    
    // Equipment Types
    excavator: 'מחפרון',
    diggingDemolition: 'חפירה, הריסה',
    largeScaleEarthworks: 'עבודות עפר בהיקף גדול',
    rotationPowerfulArm: 'סיבוב 360 מעלות, זרוע חזקה',
    advanced: 'מתקדם',
    
    crane: 'מנוף',
    liftingHoisting: 'הרמה, הנפה',
    highRiseConstruction: 'בניית מגדלים',
    tallReachHeavyLoads: 'הגעה גבוהה, משאים כבדים',
    expert: 'מומחה',
    
    bulldozer: 'דחפור',
    pushingGrading: 'דחיפה, יישור',
    sitePreparation: 'הכנת אתר',
    heavyBladeStrongTraction: 'להב כבד, משיכה חזקה',
    intermediate: 'בינוני',
    
    loader: 'מעמיס',
    loadingTransporting: 'טעינה, הובלה',
    movingMaterials: 'העברת חומרים',
    largeBucketFastMovement: 'דלי גדול, תנועה מהירה',
    
    concreteMixer: 'מערבל בטון',
    mixingConcrete: 'ערבוב בטון',
    foundationWork: 'עבודות יסוד',
    rotatingDrumConsistentMix: 'תוף מסתובב, ערבוב עקבי',
    basic: 'בסיסי',
    
    // Myths vs Facts Section
    constructionSiteMythsVsFacts: 'מיתוסים מול עובדות באתרי בנייה',
    mythsFactsDesc: 'בואו נפריך תפיסות שגויות נפוצות על אתרי בנייה עם עובדות אמיתיות המתמקדות בבטיחות.',
    myths: 'מיתוסים',
    mythsDescription: 'תפיסות שגויות נפוצות על אתרי בנייה ובטיחות שאנשים רבים מאמינים שהן אמת, אך למעשה הן מיתוסים שיכולים לסכן עובדים.',
    facts: 'עובדות',
    factsDescription: 'עובדות אמיתיות המתמקדות בבטיחות על אתרי בנייה שעוזרות לשמור על בטיחות כולם ועל התקדמות חלקה של פרויקטים.',
    
    // Quiz Section
    twoMinuteQuiz: 'חידון של שתי דקות',
    question: 'שאלה',
    of: 'מתוך',
    previous: '← קודם',
    next: 'הבא →',
    seeResults: 'צפה בתוצאות',
    quizResults: 'תוצאות החידון',
    excellentKnowledge: 'מעולה! יש לך ידע נהדר על בריאות!',
    goodKnowledge: 'עבודה טובה! אתה יודע את יסודות הבריאות!',
    notBadKeepLearning: 'לא רע! המשך ללמוד על בריאות!',
    keepLearningJourney: 'המשך ללמוד! בריאות היא מסע!',
    takeQuizAgain: 'עשה את החידון שוב',
    
    // CTA Section
    readyToStartNextProject: 'מוכנים להתחיל את הפרויקט הבא?',
    ctaProjectDesc: 'צרו קשר עם הצוות שלנו היום לקבלת ייעוץ מקצועי, הצעות מחיר או לדיון בצרכי הבנייה שלכם. תנו לנו לעזור לכם לבנות את החזון שלכם בבטחה וביעילות!',
    contactUs: 'צרו קשר',

    // Contact Page translations
    contactConstructionTeam: 'צרו קשר עם צוות הבנייה שלנו',
    contactHeroDesc: 'פנו אלינו לבירורי פרויקטים, ביקורי אתרים, הזדמנויות שותפות או כל שאלה הקשורה לבנייה. הצוות שלנו מוכן לעזור לכם לבנות בבטחה וביעילות.',
    
    // Contact Cards
    callOurOffice: 'התקשרו למשרד שלנו',
    speakWithTeamDesc: 'דברו עם צוות ניהול הבנייה שלנו. זמינים מיום שני עד שבת, 8:00-19:00 לתמיכה בפרויקטים, חששות בטיחות ותיאום אתרים.',
    emailUs: 'שלחו לנו אימייל',
    emailUsDesc: 'שלחו לנו אימייל להצעות מחיר לפרויקטים, אספקת חומרים, תיעוד בטיחות או פניות כלליות בנושא בנייה. אנו מגיבים תוך יום עסקים אחד.',
    visitOurOffice: 'בקרו במשרד שלנו',
    buildRightConstructionHQ: 'מטה בילדרייט קונסטרקשן',
    visitOfficeDesc: 'בקרו אצלנו לייעוצים פנים אל פנים, תכנון פרויקטים או לדיון בצרכי הבנייה שלכם. המשרד שלנו פתוח ללקוחות, שותפים וספקים.',
    
    // Form Section
    connectWithProjectTeam: 'התחברו לצוות הפרויקט שלנו',
    firstName: 'שם פרטי',
    enterFirstName: 'הכניסו את השם הפרטי שלכם',
    lastName: 'שם משפחה',
    enterLastName: 'הכניסו את שם המשפחה שלכם',
    email: 'אימייל',
    enterEmail: 'הכניסו את כתובת האימייל שלכם',
    phone: 'טלפון',
    enterPhone: 'הכניסו את מספר הטלפון שלכם',
    projectDetails: 'פרטי הפרויקט',
    projectDetailsPlaceholder: 'תארו את פרויקט הבנייה שלכם, לוח זמנים או בקשו ביקור באתר...',
    sendMessage: 'שלחו הודעה',
    thankYouMessage: 'תודה! צוות הבנייה שלנו יצור איתכם קשר בקרוב.',
    
    // Location Section
    officeAndSiteLocations: 'מיקומי המשרדים והאתרים שלנו',
    officeHours: 'שעות המשרד',
    mondaySaturday: 'יום שני - יום שבת',
    sunday: 'יום ראשון',
    closed: 'סגור',
    gettingHere: 'להגיע לכאן',
    accessibleTransport: 'נגיש ברכב, משאית ותחבורה ציבורית. חניה זמינה ללקוחות וספקים.',
    contactInfo: 'פרטי קשר',
    buildRightConstructionHQ: 'מטה בילדרייט קונסטרקשן',
    
    // FAQ Section
    frequentlyAskedConstructionQuestions: 'שאלות נפוצות על בנייה',
    faq1Question: 'אילו שירותי בנייה אתם מספקים?',
    faq1Answer: 'אנו מציעים מגוון שלם של שירותי בנייה כולל בנייה למגורים, מסחרית ותעשייתית, שיפוצים, ניהול אתרים, ציות בטיחות וייעוץ פרויקטים.',
    faq2Question: 'כמה זמן לוקח פרויקט טיפוסי?',
    faq2Answer: 'לוחות זמנים של פרויקטים משתנים בהתאם להיקף ולמורכבות. אנו מספקים לוח זמנים מפורט ומעדכנים אתכם בכל שלב, מתכנון ועד השלמה.',
    faq3Question: 'האם אתם מטפלים בהיתרים וציות בטיחות?',
    faq3Answer: 'כן, אנו מנהלים את כל הרישיונות הנדרשים ומבטיחים הקפדה קפדנית על תקנות בטיחות וחוקי בנייה לכל פרויקט.',
    faq4Question: 'האם אוכל לבקש ביקור באתר או ייעוץ?',
    faq4Answer: 'בהחלט! צרו איתנו קשר לתיאום ביקור באתר או ייעוץ פרויקט. נעריך את הצרכים שלכם ונספק המלצות מומחים.',
    faq5Question: 'איך מתחילים עם פרויקט בנייה?',
    faq5Answer: 'פשוט צרו איתנו קשר בטלפון, אימייל או בטופס למעלה. נדון בדרישות שלכם, נספק הצעת מחיר ונדריך אתכם בשלבים הבאים לפרויקט הבנייה שלכם.',
    
    // Newsletter Section
    stayConnectedWithBuildRight: 'הישארו מחוברים לבילדרייט',
    newsletterDescription: 'הירשמו לניוזלטר שלנו לעדכונים על תעשיית הבנייה, טיפי בטיחות והדגשות פרויקטים שנשלחים לתיבת הדואר שלכם.',
    fullName: 'שם מלא',
    emailAddress: 'כתובת אימייל',
    agreeToReceiveUpdates: 'אני מסכים לקבל עדכוני בריאות והצעות מיוחדות',
    subscribeToNewsletter: 'הירשמו לניוזלטר',
    thankYouForSubscribing: 'תודה על ההרשמה!',
    
    // Quiz Questions
    quizQuestion1: 'מהי החתיכה החשובה ביותר של ציוד בטיחות באתר בנייה?',
    quizQ1Option1: 'קסדה קשה',
    quizQ1Option2: 'כפפות',
    quizQ1Option3: 'נעלי בטיחות',
    quizQ1Option4: 'כל האמור לעיל',
    
    quizQuestion2: 'איזה חומר נפוץ לשימוש לבניית יסודות חזקים?',
    quizQ2Option1: 'עץ',
    quizQ2Option2: 'בטון',
    quizQ2Option3: 'פלסטיק',
    quizQ2Option4: 'זכוכית',
    
    quizQuestion3: 'מה משמעותו של PPE?',
    quizQ3Option1: 'ציוד הגנה אישי',
    quizQ3Option2: 'יסודות תכנון פרויקט',
    quizQ3Option3: 'ציוד ביצועים חזק',
    quizQ3Option4: 'הנדסת פרויקטים מקצועית',
    
    quizQuestion4: 'איזו מכונה משמשת להרמת חומרים כבדים לגבהים?',
    quizQ4Option1: 'דחפור',
    quizQ4Option2: 'מנוף',
    quizQ4Option3: 'מחפרון',
    quizQ4Option4: 'מעמיס',
    
    quizQuestion5: 'מה המטרה העיקרית של פיגומים?',
    quizQ5Option1: 'קישוט',
    quizQ5Option2: 'תמיכה בעובדים וחומרים',
    quizQ5Option3: 'תאורה',
    quizQ5Option4: 'בידוד קול',
    
    quizQuestion6: 'איזה מאלה הוא נוהג בנייה ירוקה?',
    quizQ6Option1: 'שימוש בחומרים ממוחזרים',
    quizQ6Option2: 'בזבוז מים',
    quizQ6Option3: 'התעלמות מבידוד',
    quizQ6Option4: 'שימוש בבטון בלבד',
    
    quizQuestion7: 'מי אחראי על בטיחות האתר?',
    quizQ7Option1: 'מנהל אתר',
    quizQ7Option2: 'עובדים',
    quizQ7Option3: 'מבקרים',
    quizQ7Option4: 'כולם באתר',
    
    quizQuestion8: 'איזה מסמך מתאר את השלבים ואמצעי הבטיחות למשימה ספציפית?',
    quizQ8Option1: 'תכנית',
    quizQ8Option2: 'הערכת סיכונים',
    quizQ8Option3: 'חשבונית',
    quizQ8Option4: 'רישיון',
    
    quizQuestion9: 'איזו טכנולוגיה משנה תכנון פרויקטי בנייה?',
    quizQ9Option1: 'מידול מידע בנייה (BIM)',
    quizQ9Option2: 'מכונות כתיבה',
    quizQ9Option3: 'מכונות פקס',
    quizQ9Option4: 'לוחות גיר',
    
    quizQuestion10: 'מה הדבר הראשון לעשות לפני התחלת עבודת בנייה?',
    quizQ10Option1: 'להתחיל לחפור',
    quizQ10Option2: 'לבדוק מזג האוויר',
    quizQ10Option3: 'לערוך תדרוך בטיחות',
    quizQ10Option4: 'להזמין ארוחת צהריים',

    // Myths and Facts content
    myth1_1: 'חבישת קסדה נדרשת רק כשיורד גשם.',
    myth1_2: 'כל אתרי הבנייה מסוכנים באותה מידה.',
    myth1_3: 'אין צורך לקרוא את מדריך הבטיחות אם יש לך ניסיון.',
    myth1_4: 'בנייה ירוקה תמיד עולה יותר משיטות מסורתיות.',
    
    fact1_1: 'קסדות נדרשות בכל עת באתרי בנייה פעילים כדי להגן מפני חפצים נופלים ופציעות ראש.',
    fact1_2: 'הסיכונים משתנים לפי אתר, אבל פרוטוקולי בטיחות נכונים יכולים להפוך כל אתר לבטוח הרבה יותר.',
    fact1_3: 'כל אתר ופרויקט שונה; קריאת מדריך הבטיחות חיונית לכולם, ללא קשר לניסיון.',
    fact1_4: 'בנייה ירוקה יכולה להפחית עלויות עם הזמן באמצעות חיסכון באנרגיה ותמריצים.',
    
    myth2_1: 'פיגומים בטוחים כל עוד הם נראים יציבים.',
    myth2_2: 'היתרים הם רק ניירת וניתן לדלג עליהם אם אתה ממהר.',
    myth2_3: 'רק מפקחים אחראים לבטיחות באתר.',
    myth2_4: 'אתה יכול להפעיל כל ציוד אם אתה רואה מישהו אחר עושה את זה קודם.',
    
    fact2_1: 'פיגומים חייבים להיבדק באופן קבוע ולעמוד בתקני בטיחות לפני השימוש.',
    fact2_2: 'היתרים נדרשים חוקית ודילוג עליהם עלול להוביל לקנסות או סגירות.',
    fact2_3: 'בטיחות היא אחריות של כולם, מעובדים ועד מפקחים.',
    fact2_4: 'הכשרה והסמכה מתאימה נדרשת להפעלת ציוד בנייה בבטחה.',
    
    myth3_1: 'בטון פשוט מתייבש, הוא לא צריך התמצקות.',
    myth3_2: 'מכונות גדולות יותר תמיד טובות יותר לכל עבודה.',
    myth3_3: 'פגישות בטיחות הן בזבוז זמן.',
    myth3_4: 'ציוד מגן אישי (PPE) הוא אופציונלי אם אתה זהיר.',
    
    fact3_1: 'בטון חייב להתמצק כראוי כדי להגיע לחוזק ועמידות מלאים.',
    fact3_2: 'המכונה הנכונה תלויה במשימה הספציפית ובתנאי האתר, לא רק בגודל.',
    fact3_3: 'פגישות בטיחות עוזרות למנוע תאונות ולשמור על כולם מעודכנים על סכנות האתר.',
    fact3_4: 'ציוד מגן אישי הוא חובה ומגן מפני פציעות נפוצות באתר, ללא קשר לניסיון.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [isRTL, setIsRTL] = useState(false);

  // Update RTL direction when language changes
  useEffect(() => {
    const rtlLanguages = ['Arabic', 'Hebrew'];
    const shouldBeRTL = rtlLanguages.includes(currentLanguage);
    setIsRTL(shouldBeRTL);
    
    // Update document direction
    document.dir = shouldBeRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage === 'Arabic' ? 'ar' : 
                                   currentLanguage === 'Hebrew' ? 'he' : 'en';
  }, [currentLanguage]);

  const translate = (key) => {
    return translations[currentLanguage]?.[key] || key;
  };

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    // Store language preference
    localStorage.setItem('selectedLanguage', language);
  };

  // Load saved language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const value = {
    currentLanguage,
    isRTL,
    translate,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};