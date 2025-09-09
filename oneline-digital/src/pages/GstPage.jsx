import React from "react";

export default function GstPage() {
  return (
    <main className="text-gray-800">
      {/* ✅ Logo & Title */}
      <div className="bg-[#f8fafc] flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md">
        <div className="flex items-center gap-4">
          <img src="img/mainLogo.png" alt="Logo" className="h-12" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-[#0f172a] font-bold text-lg md:text-2xl">
            GST Registration Consultancy
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Fast, Secure & 100% Online GST Registration Service
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="#form-section"
            className="bg-yellow-400 text-[#0f172a] px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* ✅ Hero */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center leading-snug">
          Online GST <span className="text-[#FFD700]">Registration Services</span> <br />
          for <span className="text-[#FFD700]">Business</span> in India
        </h1>

      <button
  className="px-6 py-3 mt-6 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-[#ff6b00] to-[#ff9500] 
            
             hover:from-[#ff8533] hover:to-[#ffb84d] 
             transition-all duration-300"
>
  Apply Now
</button>

      </section>

      {/* ✅ Form + Instructions */}
      <div className="container mx-auto px-4 my-12 grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="neo p-6 flex flex-col" id="form-section">
          <h3 className="text-xl font-bold mb-2 text-[#0f172a]">
            Get GST Registration
          </h3>
          <p className="mb-4 text-sm">
            Fill this form with accurate details, and our experts will assist
            you end-to-end.
          </p>
          <form className="space-y-4 flex-1">
            <input
              type="text"
              placeholder="Full Name (As per PAN)"
              className="neo-inset w-full p-3 rounded-lg"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="neo-inset w-full p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Business/Company Name"
              className="neo-inset w-full p-3 rounded-lg"
            />
            <select className="neo-inset w-full p-3 rounded-lg">
              <option>Select Business Type</option>
              <option>Proprietorship</option>
              <option>Partnership</option>
              <option>Pvt. Ltd.</option>
              <option>LLP</option>
            </select>
            <input
              type="text"
              placeholder="Mobile Number"
              className="neo-inset w-full p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="neo-inset w-full p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="PAN Number"
              className="neo-inset w-full p-3 rounded-lg"
            />
            <select className="neo-inset w-full p-3 rounded-lg">
              <option>Select State</option>
              <option>Jharkhand</option>
              <option>Bihar</option>
              <option>Delhi</option>
              <option>Uttar Pradesh</option>
            </select>
            <input
              type="text"
              placeholder="District"
              className="neo-inset w-full p-3 rounded-lg"
            />
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" /> I confirm all details
              are correct and agree to Terms.
            </label>
            <button
              type="submit"
              className="gradient-btn w-full py-3 rounded-lg font-bold shadow-md"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* Instructions */}
        <div className="neo p-6 flex flex-col">
          <h3 className="gradient-title text-xl md:text-2xl font-bold mb-5">
            Instructions to Fill the Form
          </h3>
          <ul className="space-y-4 text-base md:text-lg leading-relaxed flex-1">
            <li>✓ Name must match exactly with your PAN card to avoid discrepancies.</li>
            <li>✓ Use a valid mobile number linked with Aadhaar for OTP verification.</li>
            <li>✓ Keep scanned Aadhaar, PAN, and business proof documents ready for upload.</li>
            <li>✓ Provide the correct incorporation or registration date for companies and LLPs.</li>
            <li>✓ Choose the correct business type carefully (Proprietorship, LLP, Private Limited, etc.).</li>
            <li>✓ Enter the official registered business address; avoid informal addresses.</li>
            <li>✓ Double-check email address — OTPs and notifications will be sent there.</li>
            <li>✓ Review all entered details before submitting to avoid rejection or delays.</li>
            <li>✓ Ensure scanned documents are legible and in PDF/JPEG/PNG formats.</li>
          </ul>
        </div>
      </div>

      {/* ✅ Benefits */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="gradient-title text-2xl font-bold mb-6">
            Benefits of GST Registration
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="neo p-6">
              <h4 className="font-bold mb-2">Official Business Status</h4>
              <p>
                Obtaining a GSTIN (GST Identification Number) provides your
                business with a formal identity and increases customer and
                vendor confidence.
              </p>
            </div>
            <div className="neo p-6">
              <h4 className="font-bold mb-2">Input Tax Credit Advantage</h4>
              <p>
                Your tax bill might be reduced by claiming credit for the GST
                you paid on purchases.
              </p>
            </div>
            <div className="neo p-6">
              <h4 className="font-bold mb-2">Cross-State Operations Made Simple</h4>
              <p>
                With <a href="#">GST registration</a>, your business can operate
                in multiple states without facing interstate tax hurdles.
              </p>
            </div>
            <div className="neo p-6">
              <h4 className="font-bold mb-2">Mandatory for Online Selling</h4>
              <p>
                All online sellers must be GST registered. Marketplaces often
                require your GSTIN to list products.
              </p>
            </div>
            <div className="neo p-6">
              <h4 className="font-bold mb-2">Enhanced Market Reputation</h4>
              <p>
                An enterprise that is GST-registered will be considered reliable
                and compliant, thus facilitating better commercial opportunities
                and alliances.
              </p>
            </div>
            <div className="neo p-6">
              <h4 className="font-bold mb-2">Avoid Legal Troubles</h4>
              <p>Be within taxation regulations and avoid unnecessary fines or fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="gradient-title text-2xl font-bold mb-6">
            Why Choose Online Digital India?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="neo p-6">
              <i className="fa fa-user-tie text-yellow-500 text-3xl mb-2"></i>
              <p>Expert Guidance</p>
            </div>
            <div className="neo p-6">
              <i className="fa fa-bolt text-yellow-500 text-3xl mb-2"></i>
              <p>Quick Approvals</p>
            </div>
            <div className="neo p-6">
              <i className="fa fa-lock text-yellow-500 text-3xl mb-2"></i>
              <p>Secure Process</p>
            </div>
            <div className="neo p-6">
              <i className="fa fa-thumbs-up text-yellow-500 text-3xl mb-2"></i>
              <p>Trusted Organization</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Steps */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="gradient-title text-2xl font-bold mb-6">
            Step-by-Step Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="neo p-4">1. Fill Online Application</div>
            <div className="neo p-4">2. Expert Callback & Verification</div>
            <div className="neo p-4">3. Submit Documents</div>
            <div className="neo p-4">4. Receive GSTIN in 3–7 Days</div>
          </div>
        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="gradient-title text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="neo p-4 rounded-lg">
              <summary className="cursor-pointer font-bold">
                Who is required to register for GST?
              </summary>
              <p className="mt-2 text-sm">
                Businesses exceeding ₹40L (goods) / ₹20L (services), interstate
                traders, and e-commerce sellers must register.
              </p>
            </details>
            <details className="neo p-4 rounded-lg">
              <summary className="cursor-pointer font-bold">
                How long does it take to get GSTIN?
              </summary>
              <p className="mt-2 text-sm">
                Usually 3–7 working days after document submission & verification.
              </p>
            </details>
            <details className="neo p-4 rounded-lg">
              <summary className="cursor-pointer font-bold">
                What documents are required?
              </summary>
              <p className="mt-2 text-sm">
                PAN, Aadhaar, address proof, bank statement, incorporation
                certificate (if applicable).
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
