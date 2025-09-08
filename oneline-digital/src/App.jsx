// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Landing sections (components you already created)
import Hero from "./components/Hero";
import Success from "./components/Success";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";

// Service pages (simple placeholders you will fill later)
import GstPage from "./pages/GstPage";
import GemPage from "./pages/GemPage";
import FssaiPage from "./pages/FssaiPage";
import IsoPage from "./pages/IsoPage";
import IecPage from "./pages/IecPage";
import MsmePage from "./pages/MsmePage";

// Optional 404
function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center neo rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-2">Page not found</h2>
        <p className="text-sm text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="text-gray-800">
      <Header />

      <Routes>
        {/* Landing page at / */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Success />
              <Services />
              <WhyUs />
              <Testimonials />
            </>
          }
        />

        {/* Service pages */}
        <Route path="/gst" element={<GstPage />} />
        <Route path="/gem" element={<GemPage />} />
        <Route path="/fssai" element={<FssaiPage />} />
        <Route path="/iso" element={<IsoPage />} />
        <Route path="/iec" element={<IecPage />} />
        <Route path="/msme" element={<MsmePage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
