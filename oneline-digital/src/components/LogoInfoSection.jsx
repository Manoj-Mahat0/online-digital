import React from "react";
import { FaPhone } from "react-icons/fa6";

export default function LogoInfoSection({
  leftLogo,
  title,
  subtitle,
  phone,
  rightLogo,
  bgColor = "bg-white", // ✅ default background
  textColor = "text-black", // ✅ default text color
  centerAlign = false, // ✅ center align option
}) {
  return (
    <div className={`${bgColor} ${textColor} py-6`}>
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 ${
          centerAlign ? "text-center" : ""
        }`}
      >
        {/* Left Logo */}
        {leftLogo && (
          <img
            src={leftLogo}
            className="h-16 mx-auto md:mx-0"
            alt="Left Logo"
          />
        )}

        {/* Center Info */}
        <div>
          {title && <h1 className="font-bold text-xl">{title}</h1>}
          {subtitle && <p className="text-sm">{subtitle}</p>}
          {phone && (
            <p>
              <FaPhone className="inline mr-1" /> Helpline: <b>{phone}</b>
            </p>
          )}
        </div>

        {/* Right Logo */}
        {rightLogo && (
          <img
            src={rightLogo}
            className="h-14 mx-auto md:justify-self-end"
            alt="Right Logo"
          />
        )}
      </div>
    </div>
  );
}
