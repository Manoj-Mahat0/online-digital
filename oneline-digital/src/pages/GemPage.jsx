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
          <div className="neo p-6 rounded-xl flex flex-col h-full">
            <h5 className="bg-teal-600 text-white text-center text-2xl py-3 rounded-xl shadow">
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
                <label className="font-semibold">District *</label>
                <input
                  type="text"
                  className="neo-inset w-full mt-2 px-3 py-2 rounded-lg focus:outline-none"
                />
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
          <div className="p-4 rounded-3xl flex flex-col h-full bg-white">
            <h4 className="bg-teal-600 text-white text-center text-2xl py-3 rounded-3xl shadow mb-4">
              Instructions to Fill Form
            </h4>
            <ul className="space-y-3 text-gray-800 text-base leading-relaxed mb-0 flex-grow">
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Authorized Person:</b> Enter the full legal name of the person authorized to apply, exactly as
                  mentioned on Aadhaar or PAN card. Avoid using initials or nicknames to prevent mismatch during
                  verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Email:</b> Provide an active and valid email address. All OTPs, important updates, and certificate
                  details will be sent to this email, so ensure you have access to it at all times.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Mobile:</b> Enter a 10-digit mobile number that is linked to your Aadhaar for OTP verification.
                  This number will also be used for future communication and alerts regarding your registration.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Date of Birth:</b> Mention your date of birth exactly as per PAN records. Incorrect DOB entries
                  often lead to rejection or delays in processing applications.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Organization:</b> Fill in the complete legal name of your business or organization as per the PAN
                  card. Avoid short forms or trade names unless officially registered.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Type:</b> Carefully select the type of business organization (e.g., Proprietorship, Partnership,
                  Private Limited, LLP). Choosing the wrong option can affect your registration validity.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Incorporation Date:</b> Enter the official registration or incorporation date of your business.
                  This should match the details on your government-issued incorporation certificate.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Business PAN:</b> Provide the correct 10-character alphanumeric PAN number issued for your
                  business. Entering an incorrect PAN will lead to instant rejection of the application.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Documents:</b> Keep scanned copies of Aadhaar, PAN, Address Proof, and Incorporation Certificate
                  handy. Ensure that the documents are clear, valid, and not expired.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Photo:</b> Upload a recent passport-size color photograph of the applicant with a plain background.
                  Blurred or old photos are not accepted in official records.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa fa-check-circle text-teal-600 mt-1"></i>
                <span><b>Accuracy:</b> Review and double-check all details before final submission. Any mismatch between
                  documents and entered details may cause rejection or require re-application.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Procedure Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-block">
              <h4 className="bg-teal-600 text-white text-2xl py-3 px-6 rounded-3xl shadow mb-4 text-center">
                Procedure to Obtain GEM Registration
              </h4>
            </div>
          </div>
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
          <div className="flex justify-center">
            <div className="inline-block">
              <h4 className="bg-teal-600 text-white text-2xl py-3 px-6 rounded-3xl shadow mb-4 text-center">
                Popular Product Categories
              </h4>
            </div>
          </div>
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
          <div className="flex justify-center">
            <div className="inline-block">
              <h4 className="bg-teal-600 text-white text-2xl py-3 px-6 rounded-3xl shadow mb-4 text-center">
                Benefits of GEM Registration
              </h4>
            </div>
          </div>
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
          {/* Heading */}
          <div className="flex justify-center">
            <div className="inline-block">
              <h4 className="bg-teal-600 text-white text-2xl py-3 px-6 rounded-3xl shadow mb-4 text-center">
                Why Choose Us?
              </h4>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="neo p-6 rounded-xl text-center">
              <i className="fa-solid fa-shield-halved text-teal-600 text-4xl mb-3"></i>
              <h6 className="font-bold text-lg">Trusted Service</h6>
              <p className="text-sm mt-2">
                Secure and reliable consultancy for all GEM registrations.
              </p>
            </div>

            <div className="neo p-6 rounded-xl text-center">
              <i className="fa-solid fa-bolt text-teal-600 text-4xl mb-3"></i>
              <h6 className="font-bold text-lg">Quick Processing</h6>
              <p className="text-sm mt-2">
                Fast & hassle-free application with expert support.
              </p>
            </div>

            <div className="neo p-6 rounded-xl text-center">
              <i className="fa-solid fa-headset text-teal-600 text-4xl mb-3"></i>
              <h6 className="font-bold text-lg">24/7 Assistance</h6>
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
          <div className="flex justify-center">
            <div className="inline-block">
              <h4 className="bg-teal-600 text-white text-2xl py-3 px-6 rounded-3xl shadow mb-4 text-center">
                FAQs – GEM Registration
              </h4>
            </div>
          </div>
          <div className="space-y-4">
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">Q1. Who can register on the GEM portal?</summary>
              <p className="mt-2 text-sm">Any company can register to sell to government buyers, whether they are merchants,
                manufacturers, or service providers.</p>
            </details>
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">Q2. Why should businesses register on the GEM portal?</summary>
              <p className="mt-2 text-sm">It gives businesses access to government buyers, faster payments, and increased
                credibility through transparent procurement.</p>
            </details>
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">Q3. Do I need GST to register on GEM?</summary>
              <p className="mt-2 text-sm">While it’s not mandatory for all, having a GST number improves your credibility and
                allows access to more opportunities.</p>
            </details>
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">Q4. How long does it take to complete the GEM registration
                process?</summary>
              <p className="mt-2 text-sm">Typically, it takes 3–7 working days once all documents are correctly submitted.</p>
            </details>
            <details className="neo p-4 rounded-xl">
              <summary className="font-semibold cursor-pointer">Q5. Why should businesses register on the GEM portal?</summary>
              <p className="mt-2 text-sm">
                Registering on the GEM portal enables businesses to connect with a vast network of government buyers, enjoy
                transparent procurement processes, receive faster payments, and enhance their credibility in the public
                sector market.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
