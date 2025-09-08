import React from "react";

export default function Success() {
  return (
    <section className="py-6 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Success</h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Online Digital India</strong>, our success comes from the trust our clients
            place in us and the growth they achieve for their businesses. Over the years, we have
            helped thousands of entrepreneurs get registrations done smoothly and without stress.
          </p>
        </div>

        <div className="neo rounded-2xl p-6 flex justify-center">
          <img src="/img/about-us.webp" alt="Our Success" className="rounded-xl shadow-md" />
        </div>
      </div>
    </section>
  );
}
