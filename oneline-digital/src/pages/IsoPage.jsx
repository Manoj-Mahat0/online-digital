// src/pages/IsoPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function IsoPage() {
  const [captcha, setCaptcha] = useState(() =>
    Math.floor(10000 + Math.random() * 90000).toString()
  );
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [faqsOpen, setFaqsOpen] = useState([false, false, false, false]);

  function regenCaptcha() {
    setCaptcha(Math.floor(10000 + Math.random() * 90000).toString());
  }

  function validateForm(data) {
    const e = {};
    if (!data.applicantName?.trim()) e.applicantName = "Please enter your name.";
    if (!/^\d{10}$/.test((data.mobileNumber || "").trim()))
      e.mobileNumber = "Enter valid 10-digit mobile number.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email address.";
    if ((data.verificationCode || "").trim() !== captcha) e.captcha = "Incorrect code!";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = Object.fromEntries(fd.entries());
    const validation = validateForm(payload);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSuccess(true);
      e.target.reset();
      regenCaptcha();
      setTimeout(() => setSuccess(false), 3500);
    } else {
      setSuccess(false);
    }
  }

  function toggleFaq(i) {
    setFaqsOpen((s) => {
      const copy = [...s];
      copy[i] = !copy[i];
      return copy;
    });
  }

  return (
    <main className="bg-blue-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-sm text-blue-600 inline-block mb-4">← Back to Home</Link>

        {/* Hero */}
        <section className="section-bg rounded-xl p-8 text-white mb-8">
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">ISO : <span className="font-extrabold">ISO 9001:2015 Certification</span></h1>
              <p className="text-sm md:text-lg opacity-90">
                India’s ISO certification provider — ISO 9001, ISO 14001, ISO 27001, ISO 45001 and more. Quick, reliable and professional.
              </p>
              <a href="#formSection" className="inline-block mt-4 btn-modern px-6 py-2 rounded-full text-white">Apply Now</a>
            </div>

            {/* Right: Enquiry form */}
            <div id="formSection" className="md:w-5/12 mt-6 md:mt-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-center text-blue-900 font-bold text-xl mb-4">ENQUIRY FORM</h2>

                <form onSubmit={handleSubmit} id="enquiryForm" className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Enquiry Type</label>
                    <select name="enquiryType" required className="input-modern">
                      <option value="">--SELECT ENQUIRY TYPE--</option>
                      <option>General</option>
                      <option>Registration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Certificate Type</label>
                    <select name="certificateType" required className="input-modern">
                      <option value="">--SELECT CERTIFICATE TYPE--</option>
                      <option>ISO 9001</option>
                      <option>ISO 14001</option>
                      <option>ISO 27001</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Applicant Name *</label>
                    <input name="applicantName" id="applicantName" className="input-modern" />
                    {errors.applicantName && <p className="text-red-600 text-sm mt-1">{errors.applicantName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Mobile Number *</label>
                    <input name="mobileNumber" id="mobileNumber" className="input-modern" />
                    {errors.mobileNumber && <p className="text-red-600 text-sm mt-1">{errors.mobileNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Email ID</label>
                    <input name="email" id="email" type="email" className="input-modern" />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="flex items-center gap-2">
                    <input name="verificationCode" placeholder="Verification Code *" className="input-modern flex-1" />
                    <div onClick={regenCaptcha} role="button" className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg cursor-pointer select-none">
                      {captcha}
                    </div>
                  </div>
                  {errors.captcha && <p className="text-red-600 text-sm mt-1">{errors.captcha}</p>}

                  <button type="submit" className="w-full btn-modern py-3 rounded-full font-bold transition">Enquiry Now</button>
                  {success && <p className="text-green-600 font-semibold text-center mt-2">Form submitted successfully!</p>}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Info Card */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center md:justify-start">
            <img src="/img/iso-new.png" alt="ISO" className="w-44 h-auto rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">What is ISO Registration?</h2>
            <p className="text-blue-800 mb-3">
              ISO Registration is the process by which businesses comply with internationally recognized standards for quality, safety, and efficiency.
            </p>
            <ul className="list-inside space-y-2 text-blue-700">
              <li className="flex items-start gap-2"><span className="text-blue-600">✔</span> Recognized internationally</li>
              <li className="flex items-start gap-2"><span className="text-blue-600">✔</span> Improves internal processes</li>
              <li className="flex items-start gap-2"><span className="text-blue-600">✔</span> Enhances credibility and trust</li>
            </ul>
            <a href="#formSection" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow">Get ISO Certified</a>
          </div>
        </section>

        {/* Types of ISO */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">Types of ISO Registration</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-blue-600 text-white p-3 rounded-full text-2xl mb-4 inline-block"><i className="bi bi-graph-up-arrow" /></div>
              <h4 className="font-bold text-blue-800 mb-2">ISO 9001:2015</h4>
              <p className="text-blue-700 text-sm">Quality Management System — improve efficiency & customer satisfaction.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-blue-600 text-white p-3 rounded-full text-2xl mb-4 inline-block"><i className="bi bi-tree" /></div>
              <h4 className="font-bold text-blue-800 mb-2">ISO 14001:2015</h4>
              <p className="text-blue-700 text-sm">Environmental Management System — minimize environmental impact.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="bg-blue-600 text-white p-3 rounded-full text-2xl mb-4 inline-block"><i className="bi bi-shield-lock-fill" /></div>
              <h4 className="font-bold text-blue-800 mb-2">ISO 27001:2022</h4>
              <p className="text-blue-700 text-sm">Information Security Management — protect data & reduce risk.</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">Benefits of ISO Certification</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3 text-blue-600">✔</div>
              <h4 className="font-bold mb-2">Builds Trust</h4>
              <p className="text-sm">Enhances customer confidence by assuring quality standards.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3 text-blue-600">🔒</div>
              <h4 className="font-bold mb-2">Legal Compliance</h4>
              <p className="text-sm">Helps ensure regulatory requirements are met.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3 text-blue-600">📈</div>
              <h4 className="font-bold mb-2">Business Growth</h4>
              <p className="text-sm">Improves processes and market credibility.</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">Our ISO Certification Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="process-step bg-white rounded-xl p-6 text-center">Step 1: Application</div>
            <div className="process-step bg-white rounded-xl p-6 text-center">Step 2: Review</div>
            <div className="process-step bg-white rounded-xl p-6 text-center">Step 3: Audit</div>
            <div className="process-step bg-white rounded-xl p-6 text-center">Step 4: Certification</div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What is ISO Certification?",
                a: "ISO Certification is a process to ensure company's products/services meet international quality, safety and efficiency standards."
              },
              {
                q: "Who needs ISO Certification?",
                a: "Manufacturers, service providers, startups, SMEs — any organization wanting improved processes and trust."
              },
              {
                q: "How long to get ISO certified?",
                a: "Duration varies with readiness, typically 30–90 days depending on the standard and preparedness."
              },
              {
                q: "Is ISO Certification mandatory?",
                a: "Not always legally mandatory, but highly recommended to improve credibility and processes."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-blue-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-white"
                >
                  <span className="font-semibold text-blue-800">{item.q}</span>
                  <span className="text-blue-600">{faqsOpen[idx] ? "−" : "+"}</span>
                </button>
                <div className={`px-6 py-4 text-blue-700 ${faqsOpen[idx] ? "" : "hidden"}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

// manoj