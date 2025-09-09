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
        <section className="grid lg:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Left: Form */}
          <div className="p-8 rounded-2xl shadow-lg bg-white flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold text-center mb-6">Apply for IEC Registration</h2>

            <form className="space-y-4 flex-grow" onSubmit={(e) => e.preventDefault()}>
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
                  placeholder="Mobile *"
                  className="neo-inset rounded-lg px-4 py-3 w-full"
                  aria-label="Mobile"
                  inputMode="numeric"   // mobile keyboard pe numeric dikhayega
                  pattern="[0-9]*"      // sirf digits allow karega
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // non-numeric hatao
                  }}
                />

              </div>

              <div>
                <label className="block font-medium mb-1">Select State *</label>
                <select className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none">
                  <option value="">Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
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
          <div className="flex flex-col justify-between p-8 rounded-2xl shadow-lg bg-white h-full">
            <div>
              <img
                src="/img/iec-hero.png"
                alt="IEC Registration"
                className="rounded-xl shadow-lg w-full object-cover mb-6"
              />
              <p className="text-gray-700 text-lg mb-4">
                Quick, reliable and fully digital IEC registration to expand your business to global markets. Our team
                assists end-to-end to make the process smooth and compliant.
              </p>
              <p className="text-gray-700 text-lg">
                With our expert support, you can focus on growing your exports while we handle all compliance and documentation.
              </p>
            </div>
            <div className="text-center mt-6">
              {/* <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 shadow">
        Learn More
      </button> */}
            </div>
          </div>
        </section>


        {/* What is IEC */}
        <section className="mb-12">
          <div className="flex justify-center mb-6">
            <h2 className="bg-[#1a2249] text-[#f5b221] text-xl md:text-2xl font-bold px-6 py-3 rounded-lg">
              What is IEC Registration?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white neumorph p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-bold text-[#1a2249] mb-2">Q1. What is IEC Registration?</h3>
              <p className="text-gray-700">
                IEC (Import Export Code) is a 10-digit code issued by DGFT required for import/export of goods and
                services from India. It is a must-have for businesses dealing with international trade.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white neumorph p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-bold text-[#1a2249] mb-2">Q2. What are the key points of IEC?</h3>
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
          <div className="flex justify-center mb-6">
            <h2 className="bg-[#1a2249] text-[#f5b221] text-xl md:text-2xl font-bold px-6 py-3 rounded-lg">
              Benefits of IEC Registration
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white neumorph p-6 text-center rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <i className="fas fa-globe text-4xl text-green-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Access Global Markets</h4>
              <p className="text-gray-600 text-sm">
                Expand your business reach by trading internationally without restrictions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white neumorph p-6 text-center rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <i className="fas fa-file-invoice-dollar text-4xl text-blue-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">No Monthly Compliance</h4>
              <p className="text-gray-600 text-sm">
                IEC does not require monthly filings or ongoing compliance burden.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white neumorph p-6 text-center rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <i className="fas fa-handshake text-4xl text-green-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Eligibility for Export Incentives</h4>
              <p className="text-gray-600 text-sm">
                Avail government schemes, subsidies, and incentives for exporters.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white neumorph p-6 text-center rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <i className="fas fa-check-circle text-4xl text-green-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Builds Credibility</h4>
              <p className="text-gray-600 text-sm">
                Gain trust from international buyers with an authorized IEC registration.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white neumorph p-6 text-center rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <i className="fas fa-money-bill-wave text-4xl text-blue-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Facilitates International Transactions</h4>
              <p className="text-gray-600 text-sm">
                Smooth banking and payment processing for imports and exports worldwide.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white neumorph p-6 text-center rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <i className="fas fa-truck text-4xl text-green-500 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Easier Customs Clearance</h4>
              <p className="text-gray-600 text-sm">
                Hassle-free customs clearance for import and export shipments.
              </p>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="mb-12">
          <div className="flex justify-center mb-6">
            <h2 className="bg-[#1a2249] text-[#f5b221] text-xl md:text-2xl font-bold px-6 py-3 rounded-lg">
              Our 4-Step IEC Registration Process
            </h2>
          </div>

          {/* Timeline / Stepper */}
          <div className="relative flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">

            {/* Step 1 */}
            <div className="neumorph p-6 relative rounded-xl text-center w-64">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-2xl shadow-lg">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="mt-4 font-semibold">Fill Application</h3>
              <p className="text-sm text-gray-600 mt-2">
                Submit your details via the form.
              </p>
            </div>

            {/* Connector Line */}
            <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-[#1a2249] to-[#f5b221]"></div>

            {/* Step 2 */}
            <div className="neumorph p-6 relative rounded-xl text-center w-64">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-2xl shadow-lg">
                <i className="fas fa-phone-volume"></i>
              </div>
              <h3 className="mt-4 font-semibold">Callback</h3>
              <p className="text-sm text-gray-600 mt-2">
                Representative will contact you to verify details.
              </p>
            </div>

            {/* Connector Line */}
            <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-[#1a2249] to-[#f5b221]"></div>

            {/* Step 3 */}
            <div className="neumorph p-6 relative rounded-xl text-center w-64">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-2xl shadow-lg">
                <i className="fas fa-upload"></i>
              </div>
              <h3 className="mt-4 font-semibold">Document Upload</h3>
              <p className="text-sm text-gray-600 mt-2">
                Provide documents or OTP for verification.
              </p>
            </div>

            {/* Connector Line */}
            <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-[#1a2249] to-[#f5b221]"></div>

            {/* Step 4 */}
            <div className="neumorph p-6 relative rounded-xl text-center w-64">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-2xl shadow-lg">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="mt-4 font-semibold">IEC Issued</h3>
              <p className="text-sm text-gray-600 mt-2">
                Receive IEC code within 3–7 business days.
              </p>
            </div>
          </div>
        </section>


        {/* Why Needed */}
        <section className="mb-12">
          <div className="flex justify-center mb-6">
            <h2 className="bg-[#1a2249] text-[#f5b221] text-xl md:text-2xl font-bold px-6 py-3 rounded-lg">
              Why do you need IEC?
            </h2>
          </div>
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
          <div className="flex justify-center mb-6">
            <h2 className="bg-[#1a2249] text-[#f5b221] text-xl md:text-2xl font-bold px-6 py-3 rounded-lg">
              Frequently Asked Questions
            </h2>
          </div>
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
