import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Getting my FSSAI license was very easy with Online Digital India. Their team guided me every step of the way.",
    name: "Ravi Kumar",
    role: "Food Business Owner (FSSAI Registration)",
  },
  {
    quote:
      "I was confused about GST registration and filing, but Online Digital India made it simple and fast.",
    name: "Anjali Sharma",
    role: "Small Entrepreneur (GST Registration)",
  },
  {
    quote:
      "With their help, I got MSME registration quickly and unlocked government scheme benefits for my startup.",
    name: "Sandeep Verma",
    role: "Startup Owner (MSME Registration)",
  },
  {
    quote:
      "They handled my IEC registration professionally — now I can confidently export my products.",
    name: "Megha Agarwal",
    role: "Export Business (IEC Registration)",
  },
  {
    quote:
      "ISO certification done on time — the team's process and follow-through were excellent.",
    name: "Amit Singh",
    role: "Manufacturer (ISO Certification)",
  },
  {
    quote:
      "They helped me list on GeM and now I receive government orders regularly.",
    name: "Priya Das",
    role: "Supplier (GeM Registration)",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 container mx-auto px-6">
      <h2 className="text-center text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div className="neo rounded-2xl p-6 text-center h-60 flex flex-col justify-center">
                <p className="text-gray-600 italic flex-grow">“{t.quote}”</p>
                <h5 className="mt-4 font-bold">{t.name}</h5>
                <p className="text-sm text-gray-700">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
