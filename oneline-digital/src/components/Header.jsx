import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 neo px-6 py-4 flex items-center justify-between rounded-b-2xl">
      <div className="flex items-center space-x-3">
        <img src="/img/mainLogo.png" alt="Logo" className="h-10" />
        <span className="font-bold text-lg">Online Digital India</span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#services" className="hover:text-blue-600">ISO</a>
        <a href="#blog" className="hover:text-blue-600">Blog</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Mobile actions */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="neo p-2 rounded-lg">
          {open ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white/70 backdrop-blur-md shadow-md md:hidden p-4">
          <nav className="flex flex-col gap-3 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">ISO</a>
            <a href="#blog" className="hover:text-blue-600">Blog</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
