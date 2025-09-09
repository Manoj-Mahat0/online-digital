// src/pages/IecPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function IecPage() {
  const [faqOpen, setFaqOpen] = useState([false, false, false, false]);

  function toggleFaq(i) {
    setFaqOpen((s) => {
      const copy = [...s];
      copy[i] = !copy[i];
      return copy;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const fd = new FormData(form);
    // Build payload expected by API
    const payload = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      mobile: fd.get("mobile") || "",
      state: fd.get("state") || "",
      agree_terms: fd.get("agree_terms") === "on" || fd.get("agree_terms") === "true" || fd.get("agree_terms") === "yes" ? true : false,
    };

    // Basic client-side check: name and mobile required
    if (!payload.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^\d{10}$/.test(payload.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const resp = await fetch("https://onlinebe.onrender.com/iec/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => ({}));

      if (resp.status === 201) {
        toast.success(data.message || "IEC registration received");
        form.reset();
      } else {
        const msg = data?.message || data?.detail || `Submission failed (${resp.status})`;
        toast.error(msg);
      }
    } catch (err) {
      console.error("IEC submit error:", err);
      toast.error("Network error — please check your connection.");
    }
  }

  return (
    <main className="bg-[#f3f4f6] text-gray-800">
      <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="container mx-auto px-4 py-8">
        {/* Hero / Intro */}
        <section className="grid lg:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Left: Form */}
          <div className="p-8 rounded-2xl shadow-lg bg-white flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold text-center mb-6">Apply for IEC Registration</h2>

            {/* <-- wired to handleSubmit, names added to inputs --> */}
            <form className="space-y-4 flex-grow" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium mb-1">Name *</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Mobile Number *</label>
                <input
                  name="mobile"
                  type="text"
                  placeholder="Mobile *"
                  className="neo-inset rounded-lg px-4 py-3 w-full"
                  aria-label="Mobile"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // keep digits only
                  }}
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Select State *</label>
                <select name="state" className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none">
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
                <input name="agree_terms" type="checkbox" className="mt-1" id="agree-terms" />
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
            <div className="text-center mt-6"></div>
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
            <div className="bg-white neumorph p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-bold text-[#1a2249] mb-2">Q1. What is IEC Registration?</h3>
              <p className="text-gray-700">
                IEC (Import Export Code) is a 10-digit code issued by DGFT required for import/export of goods and
                services from India. It is a must-have for businesses dealing with international trade.
              </p>
            </div>

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
            <div className="relative w-72">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform relative z-10">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-3xl shadow-lg">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3 className="mt-4 font-semibold text-lg">Fill Application</h3>
                <p className="text-sm text-gray-600 mt-2">Submit your details via the form.</p>
              </div>
              {/* Connector to next */}
              <div className="hidden md:block absolute top-1/2 right-[-50%] w-[100%] h-1 bg-gradient-to-r from-[#1a2249] to-[#f5b221]"></div>
            </div>

            {/* Step 2 */}
            <div className="relative w-72">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform relative z-10">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-3xl shadow-lg">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <h3 className="mt-4 font-semibold text-lg">Callback</h3>
                <p className="text-sm text-gray-600 mt-2">Representative will contact you to verify details.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-[-50%] w-[100%] h-1 bg-gradient-to-r from-[#1a2249] to-[#f5b221]"></div>
            </div>

            {/* Step 3 */}
            <div className="relative w-72">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform relative z-10">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-3xl shadow-lg">
                  <i className="fas fa-upload"></i>
                </div>
                <h3 className="mt-4 font-semibold text-lg">Document Upload</h3>
                <p className="text-sm text-gray-600 mt-2">Provide documents or OTP for verification.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-[-50%] w-[100%] h-1 bg-gradient-to-r from-[#1a2249] to-[#f5b221]"></div>
            </div>

            {/* Step 4 */}
            <div className="relative w-72">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform relative z-10">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-3xl shadow-lg">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="mt-4 font-semibold text-lg">IEC Issued</h3>
                <p className="text-sm text-gray-600 mt-2">Receive IEC code within 3–7 business days.</p>
              </div>
            </div>

            {/* Mobile vertical lines */}
            <div className="absolute md:hidden flex flex-col items-center w-full">
              <div className="h-12 w-1 bg-gradient-to-b from-[#1a2249] to-[#f5b221]"></div>
              <div className="h-12 w-1 bg-gradient-to-b from-[#1a2249] to-[#f5b221] mt-28"></div>
              <div className="h-12 w-1 bg-gradient-to-b from-[#1a2249] to-[#f5b221] mt-28"></div>
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
            {/* Card 1: Business Compliance */}
            <div className="neumorph p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-2xl mx-auto mb-4 shadow-lg">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="font-semibold mb-2 text-2xl text-center">Business Compliance</h3>
              <p className="text-gray-700 text-center">
                An IEC (Import Export Code) is mandatory for anyone who wants to start an import or export business in India.
                It enables you to expand your products and services into international markets, establish global connections,
                and grow your business without limitations. Without an IEC, you cannot carry out cross-border trade legally.
              </p>
            </div>

            {/* Card 2: Benefits */}
            <div className="neumorph p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1a2249] text-[#f5b221] text-2xl mx-auto mb-4 shadow-lg">
                <i className="fas fa-gift"></i>
              </div>
              <h3 className="font-semibold mb-2 text-2xl text-center">Benefits</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 ">
                <li>Required for import & export transactions.</li>
                <li>Helps establish credibility with partners.</li>
                <li>Essential for export incentives and easier customs clearance.</li>
              </ul>
            </div>
          </div>
        </section>


        {/* FAQ */}
      <section className="py-12">
  <div className="container mx-auto">
    <div className="text-center">
      <h2 className="relative inline-block text-2xl font-bold text-yellow-500 bg-[#1a2340] 
           px-6 py-3 rounded-lg mb-6 shadow-lg shadow-indigo-500/50">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6 space-y-0">
      {/* Column 1 */}
      <div className="space-y-4">
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q1. Is IEC compulsory for international trade?</summary>
          <p className="mt-2 text-sm">
            Yes, both the import and export of products and services require it.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q2. Can individuals apply for IEC?</summary>
          <p className="mt-2 text-sm">
            Yes, they can apply on the strength of their PAN and Aadhaar.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q3. Can I apply for an IEC without having a registered business?</summary>
          <p className="mt-2 text-sm">
            Yes, individuals can apply for IEC using their PAN and Aadhaar, even without a registered business entity.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q4. How long does the registration take?</summary>
          <p className="mt-2 text-sm">
            It usually takes 2–3 working days through eDigital.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q5. Do digital exports like IT services or freelancing require an IEC?</summary>
          <p className="mt-2 text-sm">
            Yes, accepting payments from overseas customers is required.
          </p>
        </details>
      </div>

      {/* Column 2 */}
      <div className="space-y-4">
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q6. Can I modify my IEC details after registration?</summary>
          <p className="mt-2 text-sm">
            Yes, you can use the DGFT portal to change your IEC information, including your address, email, and phone number.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q7. Is GST mandatory for IEC registration?</summary>
          <p className="mt-2 text-sm">
            No, to receive IEC, GST is not required. However, for some kinds of enterprises, it might be necessary.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q8. Can one person or entity have more than one IEC?</summary>
          <p className="mt-2 text-sm">
            No, only one IEC is issued per PAN number. Duplicate IECs are not allowed.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q9. What if I don't use my IEC?</summary>
          <p className="mt-2 text-sm">
            Non-use does not entail any penalty. Nevertheless, DGFT necessitates annual updating of IEC details online, whether unused or not.
          </p>
        </details>
        <details className="neo p-4 rounded-lg">
          <summary className="cursor-pointer font-bold">Q10. Do I require a digital signature to file an IEC?</summary>
          <p className="mt-2 text-sm">
            Digital signatures (DSCs) are not required for individuals. Aadhaar-based OTP authentication can also be used for filing.
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
