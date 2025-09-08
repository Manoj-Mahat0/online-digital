import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="py-12">
      <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="neo rounded-2xl p-7 text-center hover:scale-105 transition">
          <img src="/img/GST-registration.webp" className="mx-auto h-48 mb-4" alt="GST" />
          <h4 className="font-semibold text-lg mb-2">GST Registration</h4>
          <p className="text-gray-600 text-sm mb-3">
            GST registration is needed for all businesses that sell goods or services. It allows you to collect and pay taxes properly.
          </p>
          <Link to="/gst" className="text-blue-600 font-medium">Learn More →</Link>
        </div>

        {/* Service 2 */}
        <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/img/gem.png" className="mx-auto h-48 mb-4" alt="GEM" />
          <h4 className="font-semibold text-lg mb-2">GEM Registration</h4>
          <p className="text-gray-600 text-sm mb-3">
            GeM registration lets you sell your products or services to the government. Many government departments buy only through GeM.
          </p>
          <Link to="/gem" className="text-blue-600 font-medium">Learn More →</Link>
        </div>

        {/* Service 3 */}
        <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/img/fssai.png" className="mx-auto h-48 mb-4" alt="FSSAI" />
          <h4 className="font-semibold text-lg mb-2">FSSAI Registration</h4>
          <p className="text-gray-600 text-sm mb-3">
            If you have a food business in India, you must get FSSAI registration. It proves your food is safe and of good quality.
          </p>
          <Link to="/fssai" className="text-blue-600 font-medium">Learn More →</Link>
        </div>

        {/* Service 4 */}
        <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/img/ISO.png" className="mx-auto h-48 mb-4" alt="ISO" />
          <h4 className="font-semibold text-lg mb-2">ISO Certification</h4>
          <p className="text-gray-600 text-sm mb-3">
            ISO certification suggests that your business follows high-quality and safety standards.
          </p>
          <Link to="/iso" className="text-blue-600 font-medium">Learn More →</Link>
        </div>

        {/* Service 5 */}
        <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/img/IEC.png" className="mx-auto h-48 mb-4" alt="IEC" />
          <h4 className="font-semibold text-lg mb-2">IEC Registration</h4>
          <p className="text-gray-600 text-sm mb-3">
            If you want to import or export goods, you need an IEC. Without it, you cannot trade outside India.
          </p>
          <Link to="/iec" className="text-blue-600 font-medium">Learn More →</Link>
        </div>

        {/* Service 6 */}
        <div className="neo rounded-2xl p-6 text-center hover:scale-105 transition">
          <img src="/img/MSME.png" className="mx-auto h-48 mb-4" alt="MSME" />
          <h4 className="font-semibold text-lg mb-2">MSME Registration</h4>
          <p className="text-gray-600 text-sm mb-3">
            MSME registration is for small and medium businesses. It gives many benefits like easy loans at low interest, government support, and subsidies.
          </p>
          <Link to="/msme" className="text-blue-600 font-medium">Learn More →</Link>
        </div>
      </div>
    </section>
  );
}
