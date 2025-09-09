import React from "react";

export default function GemPage() {
  return (
    <main className="text-gray-800">
      {/* Header Section */}
      <header className="neo py-6">
        <div className="container mx-auto grid grid-cols-3 items-center gap-4 px-4">
          {/* Left Logo */}
          <div>
            {/* <img src="img/mainLogo.png" alt="Logo" className="h-16 mx-auto" /> */}
          </div>
          {/* Center Title */}
          <div className="text-center">
            <h5 className="text-lg font-bold text-gray-700">
              सरकारी ई-मार्केटप्लेस पंजीकरण कंसल्टेंसी सेवा
            </h5>
            <h1 className="uppercase tracking-wide text-gray-600 font-semibold">
              REGISTRATION CONSULTANCY FOR GeM
            </h1>
            <p className="text-sm text-gray-500">
              (An ISO Certified Consultancy Private Organisation)
            </p>
            <div className="gradient-text font-bold">
              GeM Registration Consultancy Portal
            </div>
          </div>
          {/* Right Logo */}
          <div className="text-right">
            <img
              src="img/swach-bharat.jpg"
              alt="Swachh Bharat"
              className="h-16 ml-auto"
            />
          </div>
        </div>
      </header>

      {/* Navbar */}
      {/* <nav className="bg-teal-600 text-white">
        <div className="container mx-auto flex flex-wrap justify-center px-4">
          <a
            href="#formSection"
            className="px-4 py-3 hover:bg-teal-700 transition rounded-lg"
          >
            New Registration
          </a>
          <a
            href="#formSection"
            className="px-4 py-3 hover:bg-teal-700 transition rounded-lg"
          >
            Seller Registration
          </a>
          <a
            href="#formSection"
            className="px-4 py-3 hover:bg-teal-700 transition rounded-lg"
          >
            Buyer Registration
          </a>
          <a
            href="#formSection"
            className="px-4 py-3 hover:bg-teal-700 transition rounded-lg"
          >
            Certificate Download
          </a>
          <a
            href="#formSection"
            className="px-4 py-3 hover:bg-teal-700 transition rounded-lg"
          >
            Update Profile
          </a>
          <a
            href="#formSection"
            className="px-4 py-3 hover:bg-teal-700 transition rounded-lg"
          >
            Cancel Registration
          </a>
        </div>
      </nav> */}

      {/* GEM Registration Section */}
      <section className="py-10" id="formSection">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4 items-stretch">
          {/* Form */}
          <div className="neo p-6 rounded-2xl flex flex-col h-full">
            <h5 className="bg-teal-600 text-white text-center py-3 rounded-xl shadow">
              Application Form for GEM Registration
            </h5>
            <form className="mt-6 space-y-4 flex-grow">
              <div>
                <label className="font-semibold">Authorized Person Name *</label>
                <input
                  type="text"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Email *</label>
                <input
                  type="email"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Mobile Number *</label>
                <input
                  type="text"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Date of Birth *</label>
                <input
                  type="date"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Organization Name *</label>
                <input
                  type="text"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Organization Type *</label>
                <select className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none">
                  <option value="">Select</option>
                  <option>Proprietorship</option>
                  <option>Partnership</option>
                  <option>Pvt. Ltd.</option>
                  <option>LLP</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-semibold">Incorporation Date *</label>
                <input
                  type="date"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Business PAN *</label>
                <input
                  type="text"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">State *</label>
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
              <div>
                <select className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none">
                  <option>District *</option>
                  <option>East Singhbhum</option>
                  <option>West Singhbhum</option>
                  <option>Gumla</option>
                </select>
              </div>
              <div>
                <label className="font-semibold">Full Address *</label>
                <textarea
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                  rows="2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Guidelines */}
          <div className="neo p-4 rounded-2xl flex flex-col h-full">
            <h4 className="gradient-text text-2xl font-bold mb-8">
              Procedure to Obtain GEM Registration
            </h4>
            <ul className="space-y-3 text-gray-800 text-base leading-relaxed mb-0 flex-grow">
              <li>✅ Authorized Person: Enter legal name as per Aadhaar/PAN.</li>
              <li>✅ Email: Use active email (all OTPs sent here).</li>
              <li>✅ Mobile: Enter Aadhaar-linked 10-digit mobile.</li>
              <li>✅ Date of Birth: Must match PAN records.</li>
              <li>✅ Organization: Full legal name as per PAN.</li>
              <li>
                ✅ Type: Select correct business type (Proprietorship, LLP, Pvt.
                Ltd., etc.).
              </li>
              <li>
                ✅ Incorporation Date: Must match incorporation certificate.
              </li>
              <li>✅ Business PAN: Correct 10-digit alphanumeric PAN only.</li>
              <li>
                ✅ Documents: Keep Aadhaar, PAN, Address Proof, Incorporation
                Certificate ready.
              </li>
              <li>
                ✅ Photo: Recent passport-size color photo with plain background.
              </li>
              <li>✅ Accuracy: Double-check all details before submission.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h4 className="text-center gradient-text text-2xl font-bold mb-8">
            Procedure to Obtain GEM Registration
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="neo p-4 flex items-center gap-4 rounded-xl">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full">
                1
              </span>
              <p className="font-semibold">Fill Application Form with Details</p>
            </div>
            <div className="neo p-4 flex items-center gap-4 rounded-xl">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full">
                2
              </span>
              <p className="font-semibold">Make Online Payment</p>
            </div>
            <div className="neo p-4 flex items-center gap-4 rounded-xl">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full">
                3
              </span>
              <p className="font-semibold">Call for Profile & OTP Verification</p>
            </div>
            <div className="neo p-4 flex items-center gap-4 rounded-xl">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full">
                4
              </span>
              <p className="font-semibold">Profile & Seller ID Creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Product Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold gradient-text mb-10">
            Popular Product Categories
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            <div className="neo p-6 rounded-xl text-center">
              <span className="text-3xl text-teal-600 mb-3">🍴</span>
              <h6 className="font-bold">Food & Beverages</h6>
            </div>
            <div className="neo p-6 rounded-xl text-center">
              <span className="text-3xl text-teal-600 mb-3">💻</span>
              <h6 className="font-bold">Electronics</h6>
            </div>
            <div className="neo p-6 rounded-xl text-center">
              <span className="text-3xl text-teal-600 mb-3">🛋️</span>
              <h6 className="font-bold">Furniture</h6>
            </div>
            <div className="neo p-6 rounded-xl text-center">
              <span className="text-3xl text-teal-600 mb-3">🚚</span>
              <h6 className="font-bold">Logistics</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold gradient-text mb-10">
            Benefits of GEM Registration
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="neo p-5 rounded-xl">
              <h3 className="font-bold">✅ Direct Access to Govt Buyers</h3>
              <p className="text-sm mt-2">
                Sell directly to govt agencies without middlemen.
              </p>
            </div>
            <div className="neo p-5 rounded-xl">
              <h3 className="font-bold">✅ Transparent Procurement</h3>
              <p className="text-sm mt-2">
                Digital, secure, and paperless transactions.
              </p>
            </div>
            <div className="neo p-5 rounded-xl">
              <h3 className="font-bold">✅ Faster Payment Cycles</h3>
              <p className="text-sm mt-2">
                Timely payments through structured system.
              </p>
            </div>
            <div className="neo p-5 rounded-xl">
              <h3 className="font-bold">✅ MSME & Startup Support</h3>
              <p className="text-sm mt-2">
                Special advantages & easy onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold gradient-text mb-10">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="neo p-6 rounded-xl text-center">
              <h6 className="font-bold">🔒 Trusted Service</h6>
              <p className="text-sm mt-2">
                Secure and reliable consultancy for all GEM registrations.
              </p>
            </div>
            <div className="neo p-6 rounded-xl text-center">
              <h6 className="font-bold">⚡ Quick Processing</h6>
              <p className="text-sm mt-2">
                Fast & hassle-free application with expert support.
              </p>
            </div>
            <div className="neo p-6 rounded-xl text-center">
              <h6 className="font-bold">🎧 24/7 Assistance</h6>
              <p className="text-sm mt-2">
                Our support team is always available to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold gradient-text mb-8">
            FAQs – GEM Registration
          </h2>
          <div className="space-y-4">
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">
                Who can register on GEM?
              </summary>
              <p className="mt-2 text-sm">
                Any merchant, manufacturer, or service provider can register.
              </p>
            </details>
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">
                Do I need GST to register?
              </summary>
              <p className="mt-2 text-sm">
                Not mandatory for all, but GST improves credibility.
              </p>
            </details>
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">
                How long is registration valid?
              </summary>
              <p className="mt-2 text-sm">
                Generally valid for 1–5 years based on selected plan.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
