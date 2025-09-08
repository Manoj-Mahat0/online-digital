import React from "react";

export default function FssaiPage() {
  return (
    <main className="bg-[#f9fbfd] text-gray-800">
      {/* Hero: Form + Instructions */}
      <div className="container mx-auto px-4 py-10 lg:grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Form */}
        <div className="neu rounded-2xl p-6 flex flex-col">
          <div className="bg-[#003566] text-white rounded-lg py-4 px-6 mb-6">
            <h3 className="text-center text-lg font-semibold">
              Apply for FSSAI Registration
            </h3>
          </div>
          <form className="space-y-4 flex-1 flex flex-col">
            <input
              type="text"
              placeholder="Applicant Name *"
              className="w-full neu-inset rounded-lg px-4 py-2"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email *"
                className="neu-inset rounded-lg px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Mobile *"
                className="neu-inset rounded-lg px-4 py-2 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Business / Company Name *"
              className="w-full neu-inset rounded-lg px-4 py-2"
            />
            <select className="w-full neu-inset rounded-lg px-4 py-2">
              <option>Select Food Category *</option>
              <option>Restaurant</option>
              <option>Food Manufacturer</option>
              <option>Retailer</option>
            </select>
            <textarea
              rows="2"
              placeholder="Business Address *"
              className="w-full neu-inset rounded-lg px-4 py-2"
            ></textarea>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Pincode *"
                className="neu-inset rounded-lg px-4 py-2 w-full"
              />
              <select className="neu-inset rounded-lg px-4 py-2 w-full">
                <option>State *</option>
                <option>Jharkhand</option>
                <option>Bihar</option>
                <option>Delhi</option>
              </select>
              <select className="neu-inset rounded-lg px-4 py-2 w-full">
                <option>District *</option>
                <option>East Singhbhum</option>
                <option>West Singhbhum</option>
                <option>Gumla</option>
              </select>
            </div>
            <input
              type="file"
              className="w-full neu-inset rounded-lg px-4 py-2"
            />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="neu-inset rounded" /> I agree to
              Terms
            </label>
            <input
              type="text"
              placeholder="Verification Code *"
              className="w-full neu-inset rounded-lg px-4 py-2"
            />
            <textarea
              rows="2"
              placeholder="Additional Notes (Optional)"
              className="w-full neu-inset rounded-lg px-4 py-2"
            ></textarea>

            <button
              type="submit"
              className="gradient-btn text-white font-semibold w-full py-2 rounded-lg shadow-md hover:scale-105 transition mt-2"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* Instructions + FAQ */}
        <div className="neu rounded-2xl p-6 flex flex-col">
          <div className="bg-[#003566] text-white rounded-lg py-4 px-6 mb-6">
            <h3 className="text-center text-lg font-semibold">
              Instructions to Fill Form
            </h3>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="mt-4 text-lg space-y-2">
              <p>✅ <b>Applicant Name:</b> Enter the correct business name.</p>
              <p>✅ <b>Email ID:</b> Use valid email ID.</p>
              <p>✅ <b>Business Name:</b> Ensure spelling correctness.</p>
              <p>✅ <b>Mobile:</b> Enter Indian mobile number.</p>
              <p>✅ <b>Business Type:</b> Select from dropdown.</p>
              <p>✅ <b>Address:</b> Enter accurate details.</p>
              <p>✅ <b>Pincode:</b> Enter correct postal code.</p>
              <p>✅ <b>State:</b> Select business state.</p>
              <p>✅ <b>District:</b> Select correct district.</p>
            </div>

            <div>
              <h3 className="text-center text-lg font-semibold text-[#003566] mt-6">
                FAQs
              </h3>
              <div className="mt-4 space-y-3">
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q1. What is FSSAI registration?
                  </summary>
                  <p className="mt-2 text-sm">
                    Food businesses must obtain FSSAI certification to comply
                    with food safety laws.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q2. Who needs an FSSAI registration?
                  </summary>
                  <p className="mt-2 text-sm">
                    Anyone in food manufacturing, storage, processing, or sales
                    needs it.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q3. How do I get it?
                  </summary>
                  <p className="mt-2 text-sm">
                    Apply online through FSSAI Portal or contact Online Digital
                    India.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q4. What documents are needed?
                  </summary>
                  <p className="mt-2 text-sm">
                    Photo, ID proof, address proof, and food business details.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q5. Validity of FSSAI license?
                  </summary>
                  <p className="mt-2 text-sm">
                    It is valid for 1 to 5 years and must be renewed.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Licenses */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#003566] mb-10">
          Types of FSSAI Licenses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="neu rounded-2xl p-8 text-center hover:scale-105 transition cursor-pointer group relative overflow-hidden">
            <div className="text-5xl mb-4">🍽</div>
            <h5 className="text-xl font-semibold">Basic Registration</h5>
            <p className="text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              For small food businesses with annual turnover up to ₹12 Lakhs.
            </p>
          </div>
          <div className="neu rounded-2xl p-8 text-center hover:scale-105 transition cursor-pointer group relative overflow-hidden">
            <div className="text-5xl mb-4">🏬</div>
            <h5 className="text-xl font-semibold">State License</h5>
            <p className="text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              For mid-sized businesses with ₹12L – ₹20Cr turnover, valid within one state.
            </p>
          </div>
          <div className="neu rounded-2xl p-8 text-center hover:scale-105 transition cursor-pointer group relative overflow-hidden">
            <div className="text-5xl mb-4">🏢</div>
            <h5 className="text-xl font-semibold">Central License</h5>
            <p className="text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Required for large/multi-state operations with turnover above ₹20 Cr.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f9fbfd]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#003566] mb-10">
            Benefits of FSSAI Certificate
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">✅ Builds Customer Trust</h3>
              <p>Displaying FSSAI license shows your food is safe & compliant.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">✅ Legal Protection</h3>
              <p>Meets food safety laws & reduces penalties.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">✅ Govt Loans & Subsidies</h3>
              <p>Registered businesses get govt schemes & benefits.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">✅ National Recognition</h3>
              <p>Boosts credibility across India.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">✅ Business Expansion</h3>
              <p>Expand business across states without restriction.</p>
            </div>
            <div className="neu rounded-2xl p-6">
              <h3 className="font-semibold mb-2">✅ Right to Use Logo</h3>
              <p>Use FSSAI logo on packaging for better trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#003566] mb-12">
          FSSAI Registration Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="neu rounded-2xl p-6 text-center">
            <h6 className="font-semibold mb-2">Step 1: Application</h6>
            <p className="text-gray-600 text-sm">Submit enquiry form.</p>
          </div>
          <div className="neu rounded-2xl p-6 text-center">
            <h6 className="font-semibold mb-2">Step 2: Verification</h6>
            <p className="text-gray-600 text-sm">Experts review documents.</p>
          </div>
          <div className="neu rounded-2xl p-6 text-center">
            <h6 className="font-semibold mb-2">Step 3: Payment</h6>
            <p className="text-gray-600 text-sm">Make the applicable fee payment.</p>
          </div>
          <div className="neu rounded-2xl p-6 text-center">
            <h6 className="font-semibold mb-2">Step 4: Certification</h6>
            <p className="text-gray-600 text-sm">Receive your FSSAI certificate.</p>
          </div>
        </div>
      </section>

      {/* Who Needs License */}
      <section className="py-16 bg-[#f1f8ff]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#003566] mb-12">
            Who Needs an FSSAI License?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="neu rounded-2xl p-6 text-center">🍴 Restaurants & Cafes</div>
            <div className="neu rounded-2xl p-6 text-center">🏬 Retailers & Wholesalers</div>
            <div className="neu rounded-2xl p-6 text-center">🏭 Food Manufacturers</div>
            <div className="neu rounded-2xl p-6 text-center">🚚 Distributors</div>
            <div className="neu rounded-2xl p-6 text-center">🥂 Vendors & Caterers</div>
            <div className="neu rounded-2xl p-6 text-center">🌾 Exporters & Importers</div>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#003566] mb-12">
            Why FSSAI Registration is Important
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="neu rounded-2xl p-6 text-center">🔒 Legal Protection</div>
            <div className="neu rounded-2xl p-6 text-center">🤝 Builds Trust</div>
            <div className="neu rounded-2xl p-6 text-center">🏆 Market Recognition</div>
          </div>
        </div>
      </section>
    </main>
  );
}
