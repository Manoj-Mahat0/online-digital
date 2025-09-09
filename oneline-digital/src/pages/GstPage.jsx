import React from "react";

export default function GstPage() {
  return (
    <main className="text-gray-800">
      {/* ✅ Logo & Title */}
      <div className="bg-[#f8fafc] flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md">
        <div className="flex items-center gap-4">
          {/* <img src="img/mainLogo.png" alt="Logo" className="h-12" /> */}
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
          {
            <img
              src="img/swach-bharat.jpg"
              className="h-14 mx-auto md:justify-self-end"
              alt="Swachh Bharat"
            />
          /* <a
            href="#form-section"
            className="bg-yellow-400 text-[#0f172a] px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition"
          >
            Apply Now
          </a> */}
        </div>
      </div>

      {/* ✅ Hero */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center leading-snug">
          Online GST{" "}
          <span className="bg-gradient-to-r from-[#ff6b00] to-[#ff9500] bg-clip-text text-transparent">
            Registration Services
          </span>{" "}
          <br />
          for{" "}
          <span className="bg-gradient-to-r from-[#ff6b00] to-[#ff9500] bg-clip-text text-transparent">
            Business
          </span>{" "}
          in India
        </h1>

        <button
          className="px-6 py-3 mt-6 rounded-lg font-semibold text-white 
               bg-gradient-to-r from-[#ff6b00] to-[#ff9500] 
               hover:from-[#ff8533] hover:to-[#ffb84d] 
               transition-all duration-300"
        >
          <a href="#formsection"> Apply Now</a>
        </button>
      </section>



      {/* ✅ Form + Instructions */}
      <div className="container mx-auto px-4 my-12 grid md:grid-cols-2 gap-8 scroll-mt-24" id="formsection">
        {/* Form */}
        <div className="neo p-6 flex flex-col" id="form-section">
          <h2 className="text-3xl font-bold mb-2 text-[#0f172a]">
            Get GST Registration
          </h2>
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
              className="w-full py-3 rounded-lg font-bold text-yellow-500 bg-[#1a2340] hover:bg-[#162036] transition-shadow shadow-md"
            >
              Submit Application
            </button>


          </form>
        </div>

        {/* Instructions */}
        <div className="neo p-6 flex flex-col">
          <h3 className="gradient-title text-xl md:text-3xl font-bold mb-5">
            Instructions to Fill the Form
          </h3>
          <ul className="space-y-4 text-base md:text-lg leading-relaxed flex-1">
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Name must match exactly with your PAN card to avoid discrepancies.</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Use a valid mobile number linked with Aadhaar for OTP verification.</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Keep scanned Aadhaar, PAN, and business proof documents ready for upload.</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Provide the correct incorporation or registration date for companies and LLPs.</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Choose the correct business type carefully (Proprietorship, LLP, Private Limited, etc.).</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Enter the official registered business address; avoid informal addresses.</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Double-check email address — OTPs and notifications will be sent there.</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Review all entered details before submitting to avoid rejection or delays.</li>
            <li><i class="fa fa-check-circle text-yellow-500 mr-2"></i> Ensure scanned documents are legible and in PDF/JPEG/PNG formats.</li>
          </ul>
        </div>
      </div>

      {/* ✅ Benefits */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 class="relative inline-block text-2xl font-bold text-yellow-500 bg-[#1a2340] px-6 py-3 rounded-lg mb-6
            shadow-lg shadow-indigo-500/50">
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
          <h2 class="relative inline-block text-2xl font-bold text-yellow-500 bg-[#1a2340] px-6 py-3 rounded-lg mb-6
            shadow-lg shadow-indigo-500/50">
            Why Choose Online Digital India?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">

            {/* Expert Guidance */}
            <div className="neo p-6">
              <i className="fa-solid fa-chalkboard-user text-yellow-500 text-3xl mb-2"></i>
              <p className="font-medium">Expert Guidance</p>
            </div>

            {/* Quick Approvals */}
            <div className="neo p-6">
              <i className="fa-solid fa-bolt-lightning text-yellow-500 text-3xl mb-2"></i>
              <p className="font-medium">Quick Approvals</p>
            </div>

            {/* Secure Process */}
            <div className="neo p-6">
              <i className="fa-solid fa-shield-halved text-yellow-500 text-3xl mb-2"></i>
              <p className="font-medium">Secure Process</p>
            </div>

            {/* Trusted Organization */}
            <div className="neo p-6">
              <i className="fa-solid fa-handshake text-yellow-500 text-3xl mb-2"></i>
              <p className="font-medium">Trusted Organization</p>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ Steps */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 class="relative inline-block text-2xl font-bold text-yellow-500 bg-[#1a2340] px-6 py-3 rounded-lg mb-6
            shadow-lg shadow-indigo-500/50">
            Step-by-Step Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 relative">

            {/* Step 1 */}
            <div className="neo p-6 relative flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow mb-3">
                <i className="fa-solid fa-file-alt text-xl"></i>
              </div>
              <p className="text-sm">
                Enter your relevant information in the online application form.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 right-0 w-6 h-1 bg-gray-800 translate-x-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="neo p-6 relative flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow mb-3">
                <i className="fa-solid fa-phone text-xl"></i>
              </div>
              <p className="text-sm">
                Our representative will call you for the GST registration.
              </p>
              <div className="hidden md:block absolute top-1/2 right-0 w-6 h-1 bg-gray-800 translate-x-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="neo p-6 relative flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow mb-3">
                <i className="fa-solid fa-id-card text-xl"></i>
              </div>
              <p className="text-sm">
                For verification, submit the necessary paperwork or an OTP.
              </p>
              <div className="hidden md:block absolute top-1/2 right-0 w-6 h-1 bg-gray-800 translate-x-1/2"></div>
            </div>

            {/* Step 4 */}
            <div className="neo p-6 relative flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff6b00] text-white rounded-full shadow mb-3">
                <i className="fa-solid fa-certificate text-xl"></i>
              </div>
              <p className="text-sm">
                Obtain your GST Number in three to seven days.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ✅ FAQ */}
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
                <summary className="cursor-pointer font-bold">Q1. What is GST registration?</summary>
                <p className="mt-2 text-sm">
                  Companies have to go through this process so that they can register themselves in the GST scheme and acquire a GSTIN, a prerequisite for tax payment.
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q2. Who should register under GST?</summary>
                <p className="mt-2 text-sm">
                  Any entity exceeding the set turnover limit, selling online, or conducting inter-state trade must register.
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q3. What are the applicable turnover limits?</summary>
                <p className="mt-2 text-sm">
                  <ul>
                    <li><b>For goods:</b> ₹40 lakh (₹10 lakh for northeastern/special states)</li>
                    <li>₹20 lakh for services (₹10 lakh in certain states)</li>
                  </ul>
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q4. Do freelancers or independent service providers require GST?</summary>
                <p className="mt-2 text-sm">
                  Yes, if their income is more than ₹20 lakh per year (₹10 lakh in the given states) or if they provide services state-wise.
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q5. Are there online GST registration processes?</summary>
                <p className="mt-2 text-sm">
                  Absolutely. At Online Digital India, we manage everything—from document collection to application submission—entirely online.
                </p>
              </details>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q6. How soon can I get a GSTIN?</summary>
                <p className="mt-2 text-sm">
                  Typically, in 3 to 7 business days, subject to the accuracy of documents and the speed of processing by the government.
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q7. Can I sell on e-commerce sites without GST?</summary>
                <p className="mt-2 text-sm">
                  No, all platform sellers of Amazon or Flipkart should possess a valid GST registration regardless of turnover.
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q8. What are the consequences of not registering for GST?</summary>
                <p className="mt-2 text-sm">
                  A penalty of ₹10,000 or 10% of the tax due, whichever is higher, can be imposed for default.
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q9. Am I allowed to register for GST voluntarily?</summary>
                <p className="mt-2 text-sm">
                  Yes, voluntary registration is allowed even if you fall below the threshold. It helps in building trust and allows you to claim input tax credit.
                </p>
              </details>
              <details className="neo p-4 rounded-lg">
                <summary className="cursor-pointer font-bold">Q10. How long is the validity of a GST certificate?</summary>
                <p className="mt-2 text-sm">
                  <ul>
                    <li><b>For regular business:</b> Not valid beyond surrender or cancellation</li>
                    <li><b>For casual or non-resident suppliers:</b> 90-day validity (extendable on request)</li>
                  </ul>
                </p>
              </details>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
