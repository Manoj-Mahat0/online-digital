import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 rounded-t-2xl shadow-inner mt-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          <div>
            <img src="/img/mainLogo.png" className="h-12 mb-4" alt="Logo" />
            <p className="text-sm leading-relaxed">Build your business with confidence. Online Digital India provides all registration services.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-sky-400">Twitter</a>
              <a href="#" className="hover:text-pink-500">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">ISO</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">FSSAI Registration</a></li>
              <li><a href="#" className="hover:text-white">GST Registration</a></li>
              <li><a href="#" className="hover:text-white">ISO Certification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <p className="text-sm mb-2">Above PNB Bank, Jayanta Building, Sakchi, Jsr.</p>
            <p className="text-sm mb-2">+91 84488 31264</p>
            <p className="text-sm">info@onlinedigitalindia.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Online Digital India. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
