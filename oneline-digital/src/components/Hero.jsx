import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[60vh] lg:h-[70vh]">
      <div className="absolute inset-0">
        <img
          src="/img/hero-bannner.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 flex items-center justify-end h-full px-6 lg:px-24">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Trusted Online Platform for All Business Compliance Services
          </h1>
          <p className="text-md md:text-lg text-gray-200 mb-6 md:mb-8">
            Fast, reliable and hassle-free registration & legal services across India
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-3 rounded-full bg-white text-gray-800 font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
