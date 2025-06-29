import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-700 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl">
        {/* Profile Image */}
        <div className="w-full h-48">
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="text-center py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">John Abraham</h1>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col items-center space-y-4">
          <p className="text-center text-gray-600">
            Passionate developer with 5+ years of experience building web apps and scalable systems.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
            Visit Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
