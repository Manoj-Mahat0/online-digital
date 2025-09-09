// src/pages/MsmePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * MSME Page converted from the provided HTML.
 * - No global header/footer included (App-level header/footer should wrap this page).
 * - Uses Tailwind utility classes like in your HTML; assumes tailwind is configured.
 * - Simple FAQ toggle implemented with React state.
 * - Form submit is prevented (you can wire it to your API later).
 */

export default function MsmePage() {
  const [faqsOpen, setFaqsOpen] = useState([false, false, false, false]);

  function toggleFaq(index) {
    setFaqsOpen((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to your backend or form handler
    alert("Form submitted (demo) — hook up your API here.");
  }

  return (
    <main className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Back to Home
        </Link>

        {/* Topbar */}
        <div className="bg-forest text-white py-2 rounded-md mb-4 hidden">
          {/* kept hidden by default - you can enable or style as needed */}
        </div>

        {/* Header */}
        <header className="bg-gradient-to-r from-forest to-royalpurple text-white py-8 rounded-2xl mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="/img/mainLogo.png" alt="Logo" className="h-16 rounded-lg" />
              <div>
                <h5 className="text-lg md:text-xl font-semibold">
                  सूक्ष्म, लघु और मध्यम उद्यमों पंजीकरण कंसल्टेंसी सेवा
                </h5>
                <h6 className="font-medium text-yellow-300">REGISTRATION CONSULTANCY FOR MSME</h6>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm italic">(An ISO Certified Consultancy Private Organisation)</p>
              <div className="inline-block bg-[#D4EDDA] text-[#0B3D2E] rounded-lg px-3 py-1 mt-2 font-semibold">
                MSME Registration Consultancy Portal
              </div>
            </div>
            <div>
              <img src="/img/swach-bharat.jpg" alt="Swachh Bharat" className="h-16 rounded-lg" />
            </div>
          </div>
        </header>

        {/* Nav (simple) */}
        <nav className="bg-white rounded-lg shadow-sm mb-8">
          <div className="overflow-x-auto">
            <ul className="flex gap-2 whitespace-nowrap py-3 px-4 text-sm md:text-base">
              <li>
                <a href="#formSection" className="py-2 px-4 rounded hover:bg-royalpurple hover:text-yellow-400 transition">
                  NEW UDYAM REGISTRATION CONSULTANCY
                </a>
              </li>
              <li>
                <a href="#formSection" className="py-2 px-4 rounded hover:bg-royalpurple hover:text-yellow-400 transition">
                  UDYAM RE-REGISTRATION CONSULTANCY
                </a>
              </li>
              <li>
                <a href="#formSection" className="py-2 px-4 rounded hover:bg-royalpurple hover:text-yellow-400 transition">
                  UPDATE UDYAM CERTIFICATE CONSULTANCY
                </a>
              </li>
              <li>
                <a href="#formSection" className="py-2 px-4 rounded hover:bg-royalpurple hover:text-yellow-400 transition">
                  PRINT UDYAM CERTIFICATE CONSULTANCY
                </a>
              </li>
              <li>
                <a href="#formSection" className="py-2 px-4 rounded hover:bg-royalpurple hover:text-yellow-400 transition">
                  CANCEL UDYAM REGISTRATION CONSULTANCY
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Marquee */}
        <div className="bg-forest text-white py-2 px-4 rounded-lg mb-8">
          <div className="text-sm">
            MSME Registration portal is currently undergoing system upgradation by the Ministry of MSME and CBDT
          </div>
        </div>

        {/* Hero */}
        <section className="text-center bg-gradient-to-r from-forest to-royalpurple text-white py-10 rounded-2xl mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Udyam Aadhar Registration | MSME Registration Online</h1>
          <p className="text-lg md:text-xl">Fast, secure, and professional MSME registration consultancy services.</p>
        </section>

        {/* Form + Info */}
        <section id="formSection" className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Left: Form */}
            <div className="bg-white rounded-2xl p-8 shadow-neu">
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-6">MSME REGISTRATION CONSULTANCY ONLINE FORM</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="w-full rounded-lg p-3 border border-gray-200"
                  placeholder="Applicant Name *"
                  required
                />
                <input
                  type="text"
                  className="w-full rounded-lg p-3 border border-gray-200"
                  placeholder="Mobile Number *"
                  required
                />
                <input
                  type="email"
                  className="w-full rounded-lg p-3 border border-gray-200"
                  placeholder="Email ID *"
                  required
                />
                <input
                  type="text"
                  className="w-full rounded-lg p-3 border border-gray-200"
                  placeholder="Office Address *"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input className="rounded-lg p-3 border border-gray-200" placeholder="Pincode *" />
                  <select className="rounded-lg p-3 border border-gray-200">
                    <option>Select State</option>
                  </select>
                  <select className="rounded-lg p-3 border border-gray-200">
                    <option>Select District</option>
                  </select>
                </div>

                <select className="w-full rounded-lg p-3 border border-gray-200">
                  <option>Social Category</option>
                </select>

                <select className="w-full rounded-lg p-3 border border-gray-200">
                  <option>Type of Organisation</option>
                </select>

                <input className="w-full rounded-lg p-3 border border-gray-200" placeholder="Business Name" />
                <input type="date" className="w-full rounded-lg p-3 border border-gray-200" />

                <select className="w-full rounded-lg p-3 border border-gray-200" required>
                  <option value="" disabled selected>
                    Main Business Activity of Enterprise
                  </option>
                  <option>Manufacturing</option>
                  <option>Trading</option>
                  <option>Service</option>
                  <option>Agriculture</option>
                  <option>Export</option>
                  <option>Import</option>
                  <option>Consultancy</option>
                  <option>IT & Software</option>
                  <option>Retail</option>
                  <option>Wholesale</option>
                </select>

                <textarea className="w-full rounded-lg p-3 border border-gray-200" placeholder="Additional Details About Business" />

                <div className="flex items-center gap-2">
                  <input id="agree" type="checkbox" className="mt-1" />
                  <label htmlFor="agree" className="text-sm">
                    I agree to the Terms of Service
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-royalpurple text-yellow-300 font-bold rounded-lg hover:bg-forest transition"
                >
                  SUBMIT APPLICATION
                </button>
              </form>
            </div>

            {/* Right: Instructions */}
            <aside className="bg-white rounded-2xl p-6 shadow-neu">
              <h3 className="text-2xl font-bold text-forest mb-4">READ THE INSTRUCTIONS TO FILL MSME REGISTRATION FORM</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>APPLICANT NAME</strong>: Applicant should enter their full name.</p>
                <p><strong>MOBILE NUMBER</strong>: Enter the correct mobile number without +91.</p>
                <p><strong>EMAIL ID</strong>: Fill the correct email ID to receive acknowledgement.</p>
                <p><strong>OFFICE ADDRESS</strong>: Enter the complete office address.</p>
                <p><strong>SOCIAL CATEGORY</strong>: Choose the category from options.</p>
                <p><strong>DATE OF COMMENCEMENT</strong>: Enter registration/incorporation date.</p>
                <p><strong>TYPE OF ORGANISATION</strong>: Select the type of organisation.</p>
                <p><strong>MAIN BUSINESS ACTIVITY</strong>: Select the activity type.</p>
                <p><strong>DOCUMENT VERIFICATION</strong>: Ensure all supporting documents are ready for verification.</p>
                <p><strong>CONTACT SUPPORT</strong>: Reach out to our team if you face any issues while filling the form.</p>
              </div>
            </aside>
          </div>
        </section>

        {/* What is MSME */}
        <section className="py-12 bg-white rounded-2xl mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-forest mb-4">What is MSME?</h2>
            <p className="text-lg text-gray-700">
              Micro, Small and Medium Enterprises (MSME) are the backbone of the Indian economy. These enterprises are
              registered under the Udyam Registration Portal and enjoy benefits like government schemes, subsidies, and easier credit access.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 mb-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-neu text-center">
              <i className="fas fa-check-circle text-3xl text-forest mb-3" />
              <h3 className="text-xl font-semibold">Government Subsidies</h3>
              <p>Registered MSMEs can avail government schemes and financial assistance for growth.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-neu text-center">
              <i className="fas fa-check-circle text-3xl text-forest mb-3" />
              <h3 className="text-xl font-semibold">Easier Loans</h3>
              <p>Helps in getting priority loans and credit facilities at lower interest rates.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-neu text-center">
              <i className="fas fa-check-circle text-3xl text-forest mb-3" />
              <h3 className="text-xl font-semibold">Legal Recognition</h3>
              <p>Provides your business legal recognition, enabling participation in government tenders.</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 bg-white rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-forest text-center mb-8">MSME Registration Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gray-50 shadow-neu">
              <h3 className="font-semibold mb-2">Step 1</h3>
              <p>Fill the MSME registration form online with accurate business details.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow-neu">
              <h3 className="font-semibold mb-2">Step 2</h3>
              <p>Upload required documents such as PAN, Aadhaar, and business proof for verification.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow-neu">
              <h3 className="font-semibold mb-2">Step 3</h3>
              <p>Our experts review the form and documents for accuracy and compliance.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 shadow-neu">
              <h3 className="font-semibold mb-2">Step 4</h3>
              <p>Receive your MSME/Udyam Registration Certificate via email.</p>
            </div>
          </div>
        </section>

        {/* Who Needs */}
        <section className="py-12 bg-lightgreen rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-forest text-center mb-8">Who Needs MSME Registration?</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-neu text-center">
              <h3 className="font-semibold mb-2">Small Businesses</h3>
              <p>Entrepreneurs running small businesses can avail financial and legal benefits.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-neu text-center">
              <h3 className="font-semibold mb-2">Startups</h3>
              <p>Startups get access to government schemes, tax benefits, and better growth opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-neu text-center">
              <h3 className="font-semibold mb-2">Manufacturers & Traders</h3>
              <p>Manufacturers, suppliers, and traders can participate in tenders and gain market credibility.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white rounded-2xl mb-12">
          <h2 className="text-3xl font-bold text-forest text-center mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What documents are required for MSME registration?",
                a: "Documents include PAN card, Aadhaar card, business address proof, and bank account details.",
              },
              {
                q: "How long does the registration process take?",
                a: "Typically, MSME registration is completed within 3–5 working days after document verification.",
              },
              {
                q: "Is there any fee for MSME registration?",
                a: "No, MSME/Udyam Registration is completely free of cost under government norms.",
              },
              {
                q: "Can a business update details after registration?",
                a: "Yes, businesses can update details like address, activity type, and investment in the Udyam portal anytime.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border rounded-lg p-4 bg-white shadow-neu">
                <button
                  className="w-full text-left flex justify-between items-center font-semibold text-lg"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{item.q}</span>
                  <span className={`transform transition-transform duration-200 ${faqsOpen[idx] ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {faqsOpen[idx] && <p className="mt-3 text-gray-700">{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Footer note (page-level) */}
        <footer className="text-center text-sm text-gray-600 py-6">
          <img src="/img/mainLogo.png" alt="logo" className="mx-auto h-12 mb-2" />
          <p>© {new Date().getFullYear()} Online Digital India. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
