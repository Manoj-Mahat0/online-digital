import React from "react";

export default function WhyUs() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
            <img
              src="https://img.icons8.com/color/96/000000/medal.png"
              className="mx-auto h-16 mb-4"
              alt="Expertise"
            />
            <h4 className="font-semibold text-lg mb-2">Proven Expertise</h4>
            <p className="text-gray-600 text-sm">
              Years of experience in legal compliance & registrations.
            </p>
          </div>

          <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
            <img
              src="https://img.icons8.com/color/96/000000/customer-support.png"
              className="mx-auto h-16 mb-4"
              alt="Support"
            />
            <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">
              Round-the-clock assistance to resolve your queries.
            </p>
          </div>

          <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
            <img
              src="https://img.icons8.com/color/96/000000/money-bag.png"
              className="mx-auto h-16 mb-4"
              alt="Affordable"
            />
            <h4 className="font-semibold text-lg mb-2">Affordable Pricing</h4>
            <p className="text-gray-600 text-sm">
              High-quality services at competitive prices.
            </p>
          </div>

          <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
            <img
              src="https://img.icons8.com/color/96/000000/handshake.png"
              className="mx-auto h-16 mb-4"
              alt="Trust"
            />
            <h4 className="font-semibold text-lg mb-2">Trusted by Thousands</h4>
            <p className="text-gray-600 text-sm">
              Thousands of businesses trust us for compliance needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
