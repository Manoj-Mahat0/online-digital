// src/pages/IecPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function IecPage() {
  const [faqOpen, setFaqOpen] = useState([false, false, false, false]);

  function toggleFaq(i) {
    setFaqOpen((s) => {
      const copy = [...s];
      copy[i] = !copy[i];
      return copy;
    });
  }

  return (
    <main className="bg-[#f3f4f6] text-gray-800">
      <div className="container mx-auto px-4 py-8">

        {/* Hero / Intro */}
        <section className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          {/* Left: Form */}
          <div className="neumorph p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Apply for IEC Registration</h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-medium mb-1">Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email *</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Mobile Number *</label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Select State *</label>
                <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                  <option value="">State</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Uttar Pradesh</option>
                  <option>West Bengal</option>
                  <option>Tamil Nadu</option>
                </select>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" id="agree-terms" />
                <label htmlFor="agree-terms" className="text-sm text-gray-600">
                  I agree to Terms & Conditions and Refund Policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold text-yellow-500 bg-[#1a2340] hover:bg-[#162036] transition-shadow shadow-md"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Right: Image + blurb */}
          <div className="flex flex-col justify-center space-y-4">
            <img
              src="/img/iec-registration.webp"
              alt="IEC Registration"
              className="rounded-xl shadow-lg w-full object-cover"
            />
            <p className="text-gray-700 text-lg">
              Quick, reliable and fully digital IEC registration to expand your business to global markets. Our team
              assists end-to-end to make the process smooth and compliant.
            </p>
          </div>
        </section>

        {/* What is IEC */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">What is IEC Registration?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="neumorph p-6 rounded-xl transition-transform hover:scale-102">
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <p className="text-gray-700">
                IEC (Import Export Code) is a 10-digit code issued by DGFT required for import/export of goods and
                services from India. It is a must-have for businesses dealing with international trade.
              </p>
            </div>

            <div className="neumorph p-6 rounded-xl transition-transform hover:scale-102">
              <h3 className="text-xl font-semibold mb-3">Key Points</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Required for customs clearance and international payments.</li>
                <li>Enables registration with export promotion councils.</li>
                <li>Helps avail government incentives and schemes.</li>
                <li>Valid for lifetime once issued (no renewal required).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Benefits of IEC Registration</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="neumorph p-6 text-center rounded-xl">
              <i className="fas fa-globe text-3xl text-green-400 mb-3" />
              <h4 className="font-semibold">Access Global Markets</h4>
            </div>

            <div className="neumorph p-6 text-center rounded-xl">
              <i className="fas fa-file-invoice-dollar text-3xl text-blue-500 mb-3" />
              <h4 className="font-semibold">No Monthly Compliance</h4>
            </div>

            <div className="neumorph p-6 text-center rounded-xl">
              <i className="fas fa-handshake text-3xl text-green-500 mb-3" />
              <h4 className="font-semibold">Eligibility for Export Incentives</h4>
            </div>

            <div className="neumorph p-6 text-center rounded-xl">
              <i className="fas fa-check-circle text-3xl text-green-500 mb-3" />
              <h4 className="font-semibold">Builds Credibility</h4>
            </div>

            <div className="neumorph p-6 text-center rounded-xl">
              <i className="fas fa-money-bill-wave text-3xl text-blue-500 mb-3" />
              <h4 className="font-semibold">Facilitates International Transactions</h4>
            </div>

            <div className="neumorph p-6 text-center rounded-xl">
              <i className="fas fa-truck text-3xl text-green-400 mb-3" />
              <h4 className="font-semibold">Easier Customs Clearance</h4>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our 4-Step IEC Registration Process</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            <div className="neumorph p-6 relative rounded-xl text-center">
              <div className="step-number">1</div>
              <h3 className="mt-6 font-semibold">Fill Application</h3>
              <p className="text-sm text-gray-600 mt-2">Submit your details via the form.</p>
            </div>

            <div className="neumorph p-6 relative rounded-xl text-center">
              <div className="step-number">2</div>
              <h3 className="mt-6 font-semibold">Callback</h3>
              <p className="text-sm text-gray-600 mt-2">Representative will contact you to verify details.</p>
            </div>

            <div className="neumorph p-6 relative rounded-xl text-center">
              <div className="step-number">3</div>
              <h3 className="mt-6 font-semibold">Document Upload</h3>
              <p className="text-sm text-gray-600 mt-2">Provide documents or OTP for verification.</p>
            </div>

            <div className="neumorph p-6 relative rounded-xl text-center">
              <div className="step-number">4</div>
              <h3 className="mt-6 font-semibold">IEC Issued</h3>
              <p className="text-sm text-gray-600 mt-2">Receive IEC code within 3–7 business days.</p>
            </div>
          </div>
        </section>

        {/* Why Needed */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Why do you need IEC?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="neumorph p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Business Compliance</h3>
              <p className="text-gray-700">
                IEC ensures compliance with trade regulations and allows your business to legally trade internationally.
              </p>
            </div>

            <div className="neumorph p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Benefits</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Required for import & export transactions.</li>
                <li>Helps establish credibility with partners.</li>
                <li>Essential for export incentives and easier customs clearance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { q: "Is IEC compulsory for international trade?", a: "Yes — IEC is required to import/export goods and services." },
              { q: "Can individuals apply for IEC?", a: "Yes — individuals can apply using PAN and Aadhaar." },
              { q: "How long does IEC registration take?", a: "Usually issued within 3–7 business days." },
              { q: "Is IEC renewable?", a: "No — IEC is issued for lifetime and does not require renewal." },
            ].map((item, idx) => (
              <div key={idx} className="neumorph p-4 rounded-xl">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-semibold">{item.q}</span>
                  <span>{faqOpen[idx] ? "−" : "+"}</span>
                </button>
                {faqOpen[idx] && <p className="mt-3 text-gray-700">{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Minimal footer note (page-level only, header/footer are provided by App) */}
        <footer className="text-center text-sm text-gray-600 py-6">
          © {new Date().getFullYear()} Online Digital India. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
