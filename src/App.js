import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import Function from "./components/Function";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import DownloadPage from "./components/DownloadPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <MainVisual />
                <AboutSection />
                <FeaturesSection />
                <ContactSection />
                <Function/>
                <Achievements/>
                <ContactSection />
              </>
            } />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
