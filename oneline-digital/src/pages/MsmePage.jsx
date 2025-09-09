// src/pages/MsmePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * MSME Page wired to POST JSON to https://onlinebe.onrender.com/msme/
 * Minimal UI changes — kept your markup and styles intact.
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

  function isoToDdMmYyyy(iso) {
    if (!iso) return "";
    const parts = iso.split("-");
    if (parts.length !== 3) return iso;
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd.entries());

    // basic required checks (minimal, non-invasive)
    if (!obj.applicant_name?.trim()) {
      toast.error("Please enter Applicant Name.");
      return;
    }
    if (!/^\d{10}$/.test((obj.mobile || "").trim())) {
      toast.error("Enter valid 10-digit mobile number.");
      return;
    }
    if (!obj.email?.trim()) {
      toast.error("Please enter Email ID.");
      return;
    }

    // Build payload matching API
    const payload = {
      applicant_name: obj.applicant_name || "",
      mobile: obj.mobile || "",
      email: obj.email || "",
      office_address: obj.office_address || "",
      pincode: obj.pincode || "",
      state: obj.state || "",
      district: obj.district || "",
      social_category: obj.social_category || "",
      organisation_type: obj.organisation_type || "",
      business_name: obj.business_name || "",
      incorporation_date: isoToDdMmYyyy(obj.incorporation_date || ""),
      main_activity: obj.main_activity || "",
      additional_details: obj.additional_details || "",
    };

    try {
      const resp = await fetch("https://onlinebe.onrender.com/msme/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => ({}));

      if (resp.status === 201) {
        toast.success(data.message || "MSME registration received");
        form.reset();
      } else {
        const msg = data?.message || data?.detail || `Submission failed (${resp.status})`;
        toast.error(msg);
      }
    } catch (err) {
      console.error("MSME submit error:", err);
      toast.error("Network error — please check your connection.");
    }
  }

  return (
    <main className="bg-gray-100 text-gray-800">
      <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="container mx-auto px-4 py-6">

        {/* Topbar (kept as-is) */}
        <div className="bg-forest text-white py-2 rounded-md mb-4 hidden"></div>

        {/* Header */}
        <header className="bg-gradient-to-r from-[#0a3c2f] to-[#502c6d] text-white py-6 rounded-2xl mb-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
            <div className="flex items-center gap-4 bg-white rounded-lg px-4 py-2">
              <img src="/img/edigital.png" alt="e-digital" className="h-12" />
              <img src="/img/iso.png" alt="ISO" className="h-12" />
            </div>

            <div className="text-center">
              <h5 className="text-lg md:text-xl font-semibold">सूक्ष्म, लघु और मध्यम उद्यम पंजीकरण कंसल्टेंसी सेवा</h5>
              <h6 className="font-bold text-yellow-400 uppercase">REGISTRATION CONSULTANCY FOR MICRO, SMALL & MEDIUM ENTERPRISES</h6>
              <p className="text-sm italic mt-1">(An ISO Certified Consultancy Private Organisation)</p>
              <div className="inline-block bg-[#D4EDDA] text-[#0B3D2E] rounded-lg px-4 py-1 mt-2 font-semibold">
                MSME Registration Consultancy Portal / उद्यम पंजीकरण कंसल्टेंसी पोर्टल
              </div>
            </div>

            <div>
              <img src="/img/swach-bharat.png" alt="Swachh Bharat" className="h-16" />
            </div>
          </div>
        </header>

        {/* Marquee */}
        <div className="bg-green-800 text-white py-2 px-4 rounded-lg mb-8">
          <div className="text-sm">
           Get your MSME registration today and unlock subsidies, loans, and growth opportunities.
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
                <input name="applicant_name" type="text" className="w-full rounded-lg p-3 border border-gray-200" placeholder="Applicant Name *" required />

                <input name="mobile" type="text" placeholder="Mobile *" className="neo-inset rounded-lg px-4 py-3 w-full" aria-label="Mobile" inputMode="numeric" pattern="[0-9]*" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); }} />

                <input name="email" type="email" className="w-full rounded-lg p-3 border border-gray-200" placeholder="Email ID *" required />

                <input name="office_address" type="text" className="w-full rounded-lg p-3 border border-gray-200" placeholder="Office Address *" required />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input name="pincode" type="text" placeholder="Pincode *" className="rounded-lg p-3 border border-gray-200 w-full" inputMode="numeric" pattern="[0-9]*" maxLength={6} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); }} />

                  <select name="state" className="rounded-lg p-3 border border-gray-200">
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

                  <select name="district" className="rounded-lg p-3 border border-gray-200">
                    <option value="">Select District</option>
                    <option>Ranchi</option>
                    <option>East Singhbhum</option>
                    <option>West Singhbhum</option>
                  </select>
                </div>

                <select name="social_category" className="w-full rounded-lg p-3 border border-gray-200">
                  <option value="">Social Category</option>
                  <option>General</option>
                  <option>SC</option>
                  <option>ST</option>
                  <option>OBC</option>
                </select>

                <select name="organisation_type" className="w-full rounded-lg p-3 border border-gray-200">
                  <option value="">Type of Organisation</option>
                  <option>Proprietorship</option>
                  <option>Partnership</option>
                  <option>Pvt. Ltd.</option>
                  <option>LLP</option>
                </select>

                <input name="business_name" className="w-full rounded-lg p-3 border border-gray-200" placeholder="Business Name" />

                <input name="incorporation_date" type="date" className="w-full rounded-lg p-3 border border-gray-200" />

                <select name="main_activity" className="w-full rounded-lg p-3 border border-gray-200" required>
                  <option value="" disabled>Main Business Activity of Enterprise</option>
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

                <textarea name="additional_details" className="w-full rounded-lg p-3 border border-gray-200" placeholder="Additional Details About Business" />

                <div className="flex items-center gap-2">
                  <input id="agree" name="agree" type="checkbox" className="mt-1" />
                  <label htmlFor="agree" className="text-sm">I agree to the Terms of Service</label>
                </div>

                <button type="submit" className="w-full py-3 bg-royalpurple text-yellow-300 font-bold rounded-lg hover:bg-forest transition">
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
                <button className="w-full text-left flex justify-between items-center font-semibold text-lg" onClick={() => toggleFaq(idx)}>
                  <span>{item.q}</span>
                  <span className={`transform transition-transform duration-200 ${faqsOpen[idx] ? "rotate-180" : ""}`}>▾</span>
                </button>
                {faqsOpen[idx] && <p className="mt-3 text-gray-700">{item.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 py-6">
          <img src="/img/mainLogo.png" alt="logo" className="mx-auto h-12 mb-2" />
          <p>© {new Date().getFullYear()} Online Digital India. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
