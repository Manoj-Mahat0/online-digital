// src/pages/FssaiPage.jsx
import React from "react";

export default function FssaiPage() {
  return (
    <main className="bg-[#f9fbfd] text-gray-800">
      {/* Hero: small page intro */}
      <section className="py-12 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003566] mb-3">
            FSSAI Registration
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Apply online for FSSAI Registration & Food License. Quick, reliable & fully digital process with
            Online Digital India.
          </p>
        </div>
      </section>

      {/* Form + Instructions */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="neo rounded-2xl p-6 flex flex-col h-full">
            <div className="bg-[#003566] text-white rounded-lg py-4 px-6 mb-6">
              <h3 className="text-center text-lg font-semibold">Apply for FSSAI Registration</h3>
            </div>

            <form className="space-y-4 flex-1">
              <input
                type="text"
                placeholder="Applicant Name *"
                className="w-full neo-inset rounded-lg px-4 py-3"
                aria-label="Applicant Name"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email *"
                  className="neo-inset rounded-lg px-4 py-3 w-full"
                  aria-label="Email"
                />
                <input
                  type="text"
                  placeholder="Mobile *"
                  className="neo-inset rounded-lg px-4 py-3 w-full"
                  aria-label="Mobile"
                />
              </div>

              <input
                type="text"
                placeholder="Business / Company Name *"
                className="w-full neo-inset rounded-lg px-4 py-3"
                aria-label="Business Name"
              />

              <select className="w-full neo-inset rounded-lg px-4 py-3" aria-label="Food Category">
                <option value="">Select Food Category *</option>
                <option>Restaurant</option>
                <option>Food Manufacturer</option>
                <option>Retailer</option>
              </select>

              <textarea
                rows="2"
                placeholder="Business Address *"
                className="w-full neo-inset rounded-lg px-4 py-3"
                aria-label="Business Address"
              ></textarea>

              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Pincode *"
                  className="neo-inset rounded-lg px-4 py-3 w-full"
                  aria-label="Pincode"
                />
                <select className="neo-inset rounded-lg px-4 py-3 w-full" aria-label="State">
                  <option value="">State *</option>
                  <option>Jharkhand</option>
                  <option>Bihar</option>
                  <option>Delhi</option>
                </select>
                <select className="neo-inset rounded-lg px-4 py-3 w-full" aria-label="District">
                  <option value="">District *</option>
                  <option>East Singhbhum</option>
                  <option>West Singhbhum</option>
                  <option>Gumla</option>
                </select>
              </div>

              <input type="file" className="w-full neo-inset rounded-lg px-4 py-2" aria-label="Upload documents" />

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" aria-label="Agree to terms" />
                I agree to Terms
              </label>

              <input
                type="text"
                placeholder="Verification Code *"
                className="w-full neo-inset rounded-lg px-4 py-3"
                aria-label="Verification Code"
              />

              <textarea
                rows="2"
                placeholder="Additional Notes (Optional)"
                className="w-full neo-inset rounded-lg px-4 py-3"
                aria-label="Additional Notes"
              ></textarea>

              <button
                type="submit"
                className="gradient-btn text-white font-semibold w-full py-3 rounded-lg shadow-md hover:scale-105 transition"
                aria-label="Submit Application"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Instructions + FAQ */}
          <aside className="neo rounded-2xl p-6 flex flex-col h-full">
            <div className="bg-[#003566] text-white rounded-lg py-4 px-6 mb-6">
              <h3 className="text-center text-lg font-semibold">Instructions to Fill Form</h3>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3 text-gray-800">
                <p><strong>Applicant Name:</strong> Enter the correct business name.</p>
                <p><strong>Email ID:</strong> Use a valid email ID.</p>
                <p><strong>Business Name:</strong> Ensure spelling correctness.</p>
                <p><strong>Mobile:</strong> Enter Indian mobile number.</p>
                <p><strong>Business Type:</strong> Select from dropdown.</p>
                <p><strong>Address:</strong> Enter accurate details.</p>
                <p><strong>Pincode:</strong> Enter correct postal code.</p>
                <p><strong>State:</strong> Select business state.</p>
                <p><strong>District:</strong> Select correct district.</p>
              </div>

              <div className="mt-6">
                <h4 className="text-center text-[#003566] font-semibold mb-3">FAQs</h4>
                <div className="space-y-3">
                  <details className="neo-inset rounded-lg p-3">
                    <summary className="font-medium cursor-pointer">What is FSSAI registration?</summary>
                    <p className="mt-2 text-sm">Food businesses must obtain FSSAI certification to comply with food safety laws.</p>
                  </details>

                  <details className="neo-inset rounded-lg p-3">
                    <summary className="font-medium cursor-pointer">Who needs an FSSAI registration?</summary>
                    <p className="mt-2 text-sm">Anyone in food manufacturing, storage, processing, or sales needs it.</p>
                  </details>

                  <details className="neo-inset rounded-lg p-3">
                    <summary className="font-medium cursor-pointer">How do I get it?</summary>
                    <p className="mt-2 text-sm">Apply online through FSSAI Portal or contact Online Digital India.</p>
                  </details>

                  <details className="neo-inset rounded-lg p-3">
                    <summary className="font-medium cursor-pointer">What documents are needed?</summary>
                    <p className="mt-2 text-sm">Photo, ID proof, address proof, and food business details.</p>
                  </details>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Types of Licenses */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#003566] mb-8">Types of FSSAI Licenses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="neu rounded-2xl p-8 text-center group">
            <div className="text-5xl mb-4">🍽</div>
            <h5 className="text-xl font-semibold">Basic Registration</h5>
            <p className="text-gray-600 mt-3">For small food businesses with annual turnover up to ₹12 Lakhs.</p>
          </div>

          <div className="neu rounded-2xl p-8 text-center group">
            <div className="text-5xl mb-4">🏬</div>
            <h5 className="text-xl font-semibold">State License</h5>
            <p className="text-gray-600 mt-3">For mid-sized businesses with ₹12L – ₹20Cr turnover, valid within one state.</p>
          </div>

          <div className="neu rounded-2xl p-8 text-center group">
            <div className="text-5xl mb-4">🏢</div>
            <h5 className="text-xl font-semibold">Central License</h5>
            <p className="text-gray-600 mt-3">Required for large/multi-state operations with turnover above ₹20 Cr.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-[#f9fbfd]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003566] mb-8">Benefits of FSSAI Certificate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Builds Customer Trust</h3>
              <p>Displaying FSSAI license shows your food is safe & compliant.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Legal Protection</h3>
              <p>Meets food safety laws & reduces penalties.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Govt Loans & Subsidies</h3>
              <p>Registered businesses get govt schemes & benefits.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">National Recognition</h3>
              <p>Boosts credibility across India.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Business Expansion</h3>
              <p>Expand business across states without restriction.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Right to Use Logo</h3>
              <p>Use FSSAI logo on packaging for better trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process + Who needs */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#003566] mb-8">FSSAI Registration Process</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="neu rounded-2xl p-6 text-center">Step 1: Application</div>
          <div className="neo rounded-2xl p-6 text-center">Step 2: Verification</div>
          <div className="neo rounded-2xl p-6 text-center">Step 3: Payment</div>
          <div className="neo rounded-2xl p-6 text-center">Step 4: Certification</div>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#003566] mb-6">Who Needs an FSSAI License?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="neu rounded-2xl p-6 text-center">Restaurants & Cafes</div>
          <div className="neu rounded-2xl p-6 text-center">Retailers & Wholesalers</div>
          <div className="neu rounded-2xl p-6 text-center">Food Manufacturers</div>
          <div className="neu rounded-2xl p-6 text-center">Distributors</div>
          <div className="neu rounded-2xl p-6 text-center">Vendors & Caterers</div>
          <div className="neu rounded-2xl p-6 text-center">Exporters & Importers</div>
        </div>
      </section>
    </main>
  );
}
