// src/pages/FssaiPage.jsx
import React from "react";

export default function FssaiPage() {
  return (
    <main className="bg-[#f9fbfd] text-gray-800">
      {/* ✅ Logo & Info */}
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Empty div for left spacing */}
          <div></div>

          {/* Center Info Section */}
          <div className="text-center">
            <h1 className="font-bold text-xl md:text-2xl">
              FSSAI / FoSCoS Food License Registration
            </h1>
            <p className="text-sm mt-1">ISO Certified Private Consultancy</p>
            <p className="mt-1">
              <i className="fa-solid fa-phone"></i> Helpline: <b>+91-8448831264</b>
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-end mt-4 md:mt-0">
            <img
              src="img/swach-bharat.jpg"
              className="h-14"
              alt="Swachh Bharat"
            />
          </div>
        </div>
      </div>

      {/* Form + Instructions */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="neo rounded-2xl p-6 flex flex-col h-full">
            <div className="bg-[#003566] text-white rounded-lg py-4 px-6 mb-6">
              <h3 className="text-center text-3xl font-semibold">Apply for FSSAI Registration</h3>
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
                className="w-full py-3 mt-4 bg-blue-800 hover:bg-blue-500 text-white rounded-lg font-bold shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Instructions + FAQ */}
          <aside className="neo rounded-2xl p-6 flex flex-col h-full">
            <div className="bg-[#003566] text-white rounded-lg py-4 px-6 mb-6">
              <h3 className="text-center text-3xl font-semibold">Instructions to Fill Form</h3>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3 text-2xl text-gray-800">
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

                <div className="mt-4 space-y-3">
                  <details className="bg-white shadow-md rounded-lg p-4 transition-all duration-300">
                    <summary className="font-medium cursor-pointer flex items-center">
                      Q1. What is FSSAI registration?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">
                      Operators of food businesses must obtain certification from the Food Safety and
                      Standards Authority of India (FSSAI) in order to comply with food safety regulations.
                    </p>
                  </details>

                  <details className="bg-white shadow-md rounded-lg p-4 transition-all duration-300">
                    <summary className="font-medium cursor-pointer flex items-center">
                      Q2. Who needs an FSSAI registration certificate?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">
                      Any person or business involved in food manufacturing, processing, storage, or sale needs an
                      FSSAI registration certificate.
                    </p>
                  </details>

                  <details className="bg-white shadow-md rounded-lg p-4 transition-all duration-300">
                    <summary className="font-medium cursor-pointer flex items-center">
                      Q3. How do I get an FSSAI registration certificate?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">
                      You can get in touch with Online Digital India or apply for an FSSAI certificate online via
                      the FSSAI Portal.
                    </p>
                  </details>

                  <details className="bg-white shadow-md rounded-lg p-4 transition-all duration-300">
                    <summary className="font-medium cursor-pointer flex items-center">
                      Q4. What documents are required for FSSAI registration?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">
                      A photo, identification, proof of address, and information about the food business are
                      examples of basic paperwork.
                    </p>
                  </details>

                  <details className="bg-white shadow-md rounded-lg p-4 transition-all duration-300">
                    <summary className="font-medium cursor-pointer flex items-center">
                      Q5. How long is the FSSAI certificate or license valid?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">
                      The FSSAI license must be renewed before its expiration and is valid for one to five years.
                    </p>
                  </details>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </section>

      {/* Types of Licenses */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <h2 className="bg-[#003566] text-white text-3xl font-semibold py-3 px-6 rounded-lg shadow">
            Types of FSSAI Licenses
          </h2>
        </div>


        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🍽",
              title: "Basic Registration",
              desc: "For small food businesses with annual turnover up to ₹12 Lakhs.",
            },
            {
              icon: "🏬",
              title: "State License",
              desc: "For mid-sized businesses with ₹12L – ₹20Cr turnover, valid within one state.",
            },
            {
              icon: "🏢",
              title: "Central License",
              desc: "Required for large/multi-state operations with turnover above ₹20 Cr.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white shadow-lg rounded-2xl p-8 text-center group cursor-pointer overflow-hidden 
                   hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#003566] hover:to-[#00509d] 
                   transition-all duration-500"
            >
              {/* Icon + Title (hide on hover) */}
              <div className="transition-all duration-500 group-hover:opacity-0">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h5 className="text-xl font-semibold text-[#003566]">{item.title}</h5>
              </div>

              {/* Description (show only on hover) */}
              <div className="absolute inset-0 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f9fbfd]">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h2 className="bg-[#003566] text-white text-3xl font-semibold py-3 px-6 rounded-lg shadow">
              Benefits of FSSAI Certificate
            </h2>
          </div>
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

      {/* Process + Who needs */}
<section className="py-12 container mx-auto px-4">
  {/* Process Heading */}
  <div className="flex justify-center mb-10">
    <h2 className="bg-[#003566] text-white text-3xl font-semibold py-3 px-6 rounded-lg shadow">
      FSSAI Registration Process
    </h2>
  </div>

  {/* Process Flow */}
  <div className="relative grid md:grid-cols-4 gap-8">
    {/* Connector Line */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 hidden md:block"></div>

    {[
      {
        icon: "fas fa-file-alt",
        title: "Step 1: Application",
        desc: "Submit your enquiry form with required details.",
      },
      {
        icon: "fas fa-id-card",
        title: "Step 2: Verification",
        desc: "Our experts review your documents and process.",
      },
      {
        icon: "fas fa-credit-card",
        title: "Step 3: Payment",
        desc: "Make the applicable fee payment for your license.",
      },
      {
        icon: "fas fa-certificate",
        title: "Step 4: Certification",
        desc: "Receive your FSSAI certificate officially.",
      },
    ].map((step, i) => (
      <div
        key={i}
        className="relative neu rounded-2xl p-6 text-center bg-white z-10 hover:scale-105 transition-transform duration-300"
      >
        <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-[#ff6b00] text-white text-2xl shadow-lg">
          <i className={step.icon}></i>
        </div>
        <h6 className="font-semibold mb-2">{step.title}</h6>
        <p className="text-gray-600 text-sm">{step.desc}</p>
      </div>
    ))}
  </div>

  {/* Who Needs Heading */}
<div className="flex justify-center mb-10">
  <h2 className="bg-[#003566] text-white text-3xl font-semibold py-3 px-6 rounded-lg shadow my-8">
    Who Needs an FSSAI License?
  </h2>
</div>

{/* Who Needs Cards */}
<div className="grid md:grid-cols-3 gap-8">
  {[
    {
      icon: "fas fa-utensils",
      title: "Restaurants & Cafes",
      desc: "All eateries, cloud kitchens, cafes, and hotels must obtain FSSAI license.",
    },
    {
      icon: "fas fa-store",
      title: "Retailers & Wholesalers",
      desc: "Shops, supermarkets, and wholesale dealers need registration.",
    },
    {
      icon: "fas fa-industry",
      title: "Food Manufacturers",
      desc: "Businesses involved in processing and packaging must have FSSAI license.",
    },
    {
      icon: "fas fa-truck",
      title: "Distributors",
      desc: "Distributors, cold storage, and transporters require registration.",
    },
    {
      icon: "fas fa-concierge-bell",
      title: "Vendors & Caterers",
      desc: "Street food vendors, caterers, and stalls must register.",
    },
    {
      icon: "fas fa-globe",
      title: "Exporters & Importers",
      desc: "Businesses importing/exporting food must get Central License.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl text-orange-500 mb-4">
        <i className={item.icon}></i>
      </div>
      <h5 className="font-semibold text-[#003566] text-lg mb-2">{item.title}</h5>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    </div>
  ))}
</div>

</section>

    </main>
  );
}
