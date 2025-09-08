import React from "react";
import { Link } from "react-router-dom";

export default function IsoPage() {
  return (
    <main className="min-h-[60vh] container mx-auto px-6 py-12">
      <Link to="/" className="text-sm text-blue-600 mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-4">ISO Certification</h1>
      <p className="text-gray-600 mb-6">(Content coming — paste ISO details later.)</p>
    </main>
  );
}
