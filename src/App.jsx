import RoadConstruction from "./pages/servicespages/road";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/home1";
import Home2 from "./pages/home2";
import Welcome from "./welcome";
import AdminDashboard from "./admin-dashboard";
import About from "./pages/aboutus";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Article from "./pages/article";
import ContactUs from "./pages/contactus";
import Residential from "./pages/servicespages/Residential";
import Commercial from "./pages/servicespages/commercial";
import RenovationRemodeling from "./pages/servicespages/rennovation";
import InteriorDesignFinishing from "./pages/servicespages/InteriorDesign";
import Industrial from "./pages/servicespages/industrial";


function App() {
  return (
    <LanguageProvider>
      <Routes>
       <Route path="/yoga" element={<Navigate to="/residential" replace />} />
       <Route path="/diet-nutrition" element={<Navigate to="/commercial" replace />} />
       <Route path="/mental-wellness" element={<Navigate to="/renovation" replace />} />
       <Route path="/fitness-programs" element={<Navigate to="/interior-design" replace />} />
        <Route path="/sleep-therapy" element={<Navigate to="/industrial" replace />} />
        <Route path="/lifestyle-coaching" element={<Navigate to="/road" replace />} />

        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home1" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/yoga" element={<Residential />} />
        <Route path="/diet-nutrition" element={<Residential />} />
        <Route path="/mental-wellness" element={<Residential />} />
        <Route path="/fitness-programs" element={<Residential />} />
        <Route path="/sleep-therapy" element={<Industrial />} />
        <Route path="/lifestyle-coaching" element={<RoadConstruction />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/renovation" element={<RenovationRemodeling />} />
        <Route path="/interior-design" element={<InteriorDesignFinishing />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/road" element={<RoadConstruction />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;