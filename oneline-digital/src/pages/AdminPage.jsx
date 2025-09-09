import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleLogout() {
    sessionStorage.removeItem('isAuthenticated');
    navigate('/login');
  }

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        // IMPORTANT: Replace this with your actual API endpoint for fetching data.
        // The 404 error means this URL is likely incorrect or not implemented on your backend.
        const response = await fetch('https://onlinebe.onrender.com/api/gst-registrations');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRegistrations(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRegistrations();
  }, []); // The empty array ensures this effect runs only once when the component mounts.

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <p className="mb-4">Welcome to the protected admin area. Only logged-in users can see this.</p>

      <h2 className="text-2xl font-semibold mb-4">Registrations</h2>
      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">Error fetching data: {error}. Please check the API endpoint.</p>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Service</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length > 0 ? (
                registrations.map((reg) => (
                  <tr key={reg.id}>
                    <td className="py-2 px-4 border-b text-center">{reg.id}</td>
                    <td className="py-2 px-4 border-b text-center">{reg.serviceType}</td>
                    <td className="py-2 px-4 border-b">{reg.name}</td>
                    <td className="py-2 px-4 border-b">{reg.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">No registrations found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}