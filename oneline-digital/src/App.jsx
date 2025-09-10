// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/404notfound";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Landing sections
import Hero from "./components/Hero";
import Success from "./components/Success";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";

// Service pages
import GstPage from "./pages/GstPage";
import GemPage from "./pages/GemPage";
import FssaiPage from "./pages/FssaiPage";
import IsoPage from "./pages/IsoPage";
import IecPage from "./pages/IecPage";
import MsmePage from "./pages/MsmePage";

// Admin Panel components
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import GstAdmin from "./admin/GstAdmin";

export default function App() {
  return (
    <Routes>
      {/* Landing page with header/footer */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <Success />
            <Services />
            <WhyUs />
            <Testimonials />
            <Footer />
          </>
        }
      />

      {/* Service pages with header/footer */}
      <Route
        path="/gst"
        element={
          <>
            <Header />
            <GstPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/gem"
        element={
          <>
            <Header />
            <GemPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/fssai"
        element={
          <>
            <Header />
            <FssaiPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/iso"
        element={
          <>
            <Header />
            <IsoPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/iec"
        element={
          <>
            <Header />
            <IecPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/msme"
        element={
          <>
            <Header />
            <MsmePage />
            <Footer />
          </>
        }
      />

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/admin/gst" element={<AdminLayout><GstAdmin /></AdminLayout>} />

      {/* 404 page WITHOUT header/footer */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
