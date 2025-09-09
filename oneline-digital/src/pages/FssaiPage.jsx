import React from "react";

export default function FssaiPage() {
  return (
    <main className="bg-[#f9fbfd] text-gray-800">
      {/* ✅ Logo & Info */}
      <div className="container mx-auto py-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <img
            src="img/mainLogo.png"
            className="h-16 mx-auto md:mx-0"
            alt="Logo"
          />
          <div>
            <h1 className="font-bold">
              FSSAI / FoSCoS Food License Registration
            </h1>
            <p className="text-sm">ISO Certified Private Consultancy</p>
            <p>
              <i className="fa-solid fa-phone"></i> Helpline:{" "}
              <b>+91-8448831264</b>
            </p>
          </div>
          <img
            src="img/swach-bharat.jpg"
            className="h-14 mx-auto md:justify-self-end"
            alt="Swachh Bharat"
          />
        </div>
      </div>

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
              <p>
                <b>Applicant Name:</b> Enter the correct business name.
              </p>
              <p>
                <b>Email ID:</b> Use valid email ID.
              </p>
              <p>
                <b>Business Name:</b> Ensure spelling correctness.
              </p>
              <p>
                <b>Mobile:</b> Enter Indian mobile number.
              </p>
              <p>
                <b>Business Type:</b> Select from dropdown.
              </p>
              <p>
                <b>Address:</b> Enter accurate details.
              </p>
              <p>
                <b>Pincode:</b> Enter correct postal code.
              </p>
              <p>
                <b>State:</b> Select business state.
              </p>
              <p>
                <b>District:</b> Select correct district.
              </p>
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
                    Operators of food businesses must obtain certification from
                    the Food Safety and Standards Authority of India (FSSAI) in
                    order to comply with food safety regulations.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q2. Who needs an FSSAI registration certificate?
                  </summary>
                  <p className="mt-2 text-sm">
                    Any person or business involved in food manufacturing,
                    processing, storage, or sale needs an FSSAI registration
                    certificate.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q3. How do I get an FSSAI registration certificate?
                  </summary>
                  <p className="mt-2 text-sm">
                    You can get in touch with Online Digital India or apply for
                    an FSSAI certificate online via the FSSAI Portal.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q4. What documents are required for FSSAI registration?
                  </summary>
                  <p className="mt-2 text-sm">
                    A photo, identification, proof of address, and information
                    about the food business are examples of basic paperwork.
                  </p>
                </details>
                <details className="neu-inset rounded-lg p-3">
                  <summary className="font-medium">
                    Q5. How long is the FSSAI certificate or license valid?
                  </summary>
                  <p className="mt-2 text-sm">
                    The FSSAI license must be renewed before its expiration and
                    is valid for one to five years.
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
              For mid-sized businesses with ₹12L – ₹20Cr turnover, valid within
              one state.
            </p>
          </div>
          <div className="neu rounded-2xl p-8 text-center hover:scale-105 transition cursor-pointer group relative overflow-hidden">
            <div className="text-5xl mb-4">🏢</div>
            <h5 className="text-xl font-semibold">Central License</h5>
            <p className="text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Required for large/multi-state operations with turnover above ₹20
              Cr.
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* ✅ Card 1 */}
      <div className="rounded-2xl p-6 bg-[#f9fbfd] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2 text-[#003566]">✅ Builds Customer Trust</h3>
        <p className="text-gray-600">
          Displaying your FSSAI license shows customers that your food is safe
          and compliant, creating confidence and loyalty.
        </p>
      </div>

      {/* ✅ Card 2 */}
      <div className="rounded-2xl p-6 bg-[#f9fbfd] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2 text-[#003566]">✅ Legal Protection</h3>
        <p className="text-gray-600">
          FSSAI certificate helps you meet food safety laws, reducing risk of
          penalties or legal action.
        </p>
      </div>

      {/* ✅ Card 3 */}
      <div className="rounded-2xl p-6 bg-[#f9fbfd] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2 text-[#003566]">✅ Govt Loans & Subsidies</h3>
        <p className="text-gray-600">
          Registered businesses get access to government schemes, financial
          assistance, and MSME benefits.
        </p>
      </div>

      {/* ✅ Card 4 */}
      <div className="rounded-2xl p-6 bg-[#f9fbfd] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2 text-[#003566]">✅ National Recognition</h3>
        <p className="text-gray-600">
          Government-recognized FSSAI license boosts credibility and market reach
          across India.
        </p>
      </div>

      {/* ✅ Card 5 */}
      <div className="rounded-2xl p-6 bg-[#f9fbfd] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2 text-[#003566]">✅ Business Expansion</h3>
        <p className="text-gray-600">
          Expand your business across states and cities without restrictions.
        </p>
      </div>

      {/* ✅ Card 6 */}
      <div className="rounded-2xl p-6 bg-[#f9fbfd] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:scale-105 transition-transform duration-300">
        <h3 className="font-semibold mb-2 text-[#003566]">✅ Right to Use Logo</h3>
        <p className="text-gray-600">
          Use the FSSAI logo on your packaging and branding for better trust.
        </p>
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
