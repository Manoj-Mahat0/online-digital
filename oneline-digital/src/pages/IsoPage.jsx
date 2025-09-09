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

        {/* Hero */}
        <section className="w-full bg-blue-500 rounded-xl p-8 text-white mb-8">
          <div className="md:flex md:items-center md:gap-8">
            {/* Left Content */}
            <div className="md:flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                ISO : <span className="font-extrabold">ISO 9001:2015 Certification</span>
              </h1>
              <p className="text-sm md:text-lg opacity-90 mb-2">
                India’s leading ISO certification provider, helping your business
                achieve ISO certification quickly and reliably.
              </p>
              <p className="text-xs md:text-sm opacity-75">
                ISO 9001, ISO 14001, ISO 45001, OHSAS 18001, ISO 22000, ISO 27001…more
              </p>
              <a
                href="#formSection"
                className="inline-block mt-4 px-6 py-2 rounded-full font-semibold
                   bg-gradient-to-r from-blue-600 to-blue-500
                   shadow-[6px_6px_12px_#0a3d78,-6px_-6px_12px_#3b82f6]
                   hover:from-blue-500 hover:to-blue-400 transition"
              >
                Apply Now
              </a>
            </div>

            {/* Right: Enquiry form */}
            <div id="formSection" className="md:w-5/12 mt-6 md:mt-0">
              <div className="bg-white p-6 rounded-xl ">
                <h2 className="text-center text-blue-900 font-bold text-xl mb-4">
                  ENQUIRY FORM
                </h2>

                <form onSubmit={handleSubmit} id="enquiryForm" className="space-y-4">
                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">
                      Enquiry Type
                    </label>
                    <select name="enquiryType" required className="w-full px-3 py-2 text-black border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
                      <option value="">--SELECT ENQUIRY TYPE--</option>
                      <option>General</option>
                      <option>Registration</option>
                    </select>
                  </div>

                  {/* Certificate Type */}
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">
                      Certificate Type
                    </label>
                    <select name="certificateType" required className="w-full px-3 py-2 text-black border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
                      <option value="">--SELECT CERTIFICATE TYPE--</option>
                      <option>ISO 9001</option>
                      <option>ISO 14001</option>
                      <option>ISO 27001</option>
                    </select>
                  </div>

                  {/* Applicant Name */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Applicant Name *
                    </label>
                    <input
                      name="applicantName"
                      id="applicantName"
                      className="w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    {errors.applicantName && (
                      <p className="text-red-600 text-sm mt-1">{errors.applicantName}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="text"
                      placeholder="Mobile *"
                      className="w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
                      aria-label="Mobile"
                      inputMode="numeric"   // mobile keyboard pe numeric dikhayega
                      pattern="[0-9]*"      // sirf digits allow karega
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ""); // non-numeric hatao
                      }}
                    />

                    {errors.mobileNumber && (
                      <p className="text-red-600 text-sm mt-1">{errors.mobileNumber}</p>
                    )}
                  </div>

                  {/* Email ID */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Email ID
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Captcha */}
                  <div className="flex items-center gap-2">
                    <input
                      name="verificationCode"
                      placeholder="Verification Code *"
                      className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <div
                      onClick={regenCaptcha}
                      role="button"
                      className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg cursor-pointer select-none"
                    >
                      {captcha}
                    </div>
                  </div>
                  {errors.captcha && (
                    <p className="text-red-600 text-sm mt-1">{errors.captcha}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-bold text-white
                       bg-gradient-to-r from-blue-600 to-blue-500
                       shadow-[6px_6px_12px_#b0c4de,-6px_-6px_12px_#ffffff]
                       hover:from-blue-500 hover:to-blue-400 transition"
                  >
                    Enquiry Now
                  </button>
                  {success && (
                    <p className="text-green-600 font-semibold text-center mt-2">
                      Form submitted successfully!
                    </p>
                  )}
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
            <div className="text-center">
              <h2 className="relative inline-block text-2xl font-bold text-white bg-blue-500 
           px-6 py-3 rounded-lg mb-6 shadow-lg shadow-indigo-500/50">
                What is ISO Registration?
              </h2>
            </div>
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
          <div className="text-center">
            <h2 className="relative inline-block text-2xl font-bold text-white bg-blue-500 
           px-6 py-3 rounded-lg mb-6 shadow-lg shadow-indigo-500/50">
              Types of ISO Registration
            </h2>
          </div>
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
          <div className="text-center">
            <h2 className="relative inline-block text-2xl font-bold text-white bg-blue-500 
           px-6 py-3 rounded-lg mb-6 shadow-lg shadow-indigo-500/50">
              Benefits of ISO Certification
            </h2>
          </div>

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
        <section className="mb-16">
          <div className="text-center">
            <h2 className="relative inline-block text-2xl font-bold text-white bg-blue-500 
           px-6 py-3 rounded-lg mb-6 shadow-lg shadow-indigo-500/50">
              Our ISO Certification Process
            </h2>
          </div>

          <div className="relative grid md:grid-cols-4 gap-6 items-center">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-800 hidden md:block z-0"></div>

            {[
              {
                icon: "fas fa-file-alt",
                title: "Step 1: Application",
                desc: "Submit your enquiry form with required details.",
              },
              {
                icon: "fas fa-search",
                title: "Step 2: Review",
                desc: "Our experts review your documents and business process.",
              },
              {
                icon: "fas fa-check-square",
                title: "Step 3: Audit",
                desc: "ISO audit is conducted by certified professionals.",
              },
              {
                icon: "fas fa-award",
                title: "Step 4: Certification",
                desc: "Receive your ISO certificate officially after approval.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl p-6 text-center shadow-md z-10"
              >
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600 text-white text-2xl shadow">
                  <i className={step.icon}></i>
                </div>
                <h6 className="font-semibold text-blue-900 mb-2">{step.title}</h6>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="relative inline-block text-2xl font-bold text-white bg-blue-500 
           px-6 py-3 rounded-lg mb-6 shadow-lg shadow-indigo-500/50">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 space-y-0">
              {/* Column 1 */}
              <div className="space-y-4">
                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q1. What is ISO certification?</summary>
                  <p className="mt-2 text-sm">
                    ISO certification is a seal of approval from an external body that confirms a company follows international standards for quality, safety, or efficiency.
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q2. Why is ISO certification important?</summary>
                  <p className="mt-2 text-sm">
                    It builds customer trust, improves credibility, and shows that your business meets global standards.
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q3. Who can apply for ISO certification?</summary>
                  <p className="mt-2 text-sm">
                    Any business, whether small, medium, or large, can apply for ISO certification across different industries.
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q4. What are the common types of ISO certifications?</summary>
                  <p className="mt-2 text-sm">
                    Some popular ones include ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and ISO 27001 (Information Security).
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q5. How long is ISO certification valid?</summary>
                  <p className="mt-2 text-sm">
                    Typically, ISO certification is valid for 3 years, with surveillance audits in between.
                  </p>
                </details>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q6. What documents are required for ISO certification?</summary>
                  <p className="mt-2 text-sm">
                    Basic documents include business registration proof, address verification, sales or purchase invoices, and a company profile.
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q7. What are the benefits of ISO certification?</summary>
                  <p className="mt-2 text-sm">
                    It improves customer satisfaction, increases efficiency, enhances market reputation, and helps in government and international contracts.
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q8. Can ISO certification help in getting government tenders?</summary>
                  <p className="mt-2 text-sm">
                    Yes, many government and corporate tenders give preference to ISO-certified companies, as it shows quality and reliability.
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q9. Does ISO certification guarantee product quality?</summary>
                  <p className="mt-2 text-sm">
                    ISO certification ensures that a company follows proper processes and standards, which improves overall quality and consistency.
                  </p>
                </details>

                <details className="neo p-4 rounded-lg">
                  <summary className="cursor-pointer font-bold">Q10. How much does ISO certification cost?</summary>
                  <p className="mt-2 text-sm">
                    The cost depends on the type of certification, the size of the business, and the certification body. Small businesses usually get it at affordable rates.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>


      </div>
    </main>
  );
}

// manoj