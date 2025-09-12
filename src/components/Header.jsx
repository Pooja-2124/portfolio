import React from 'react'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gray-900 p-6 rounded-xl shadow-md">
      {/* Left side - Name + Tagline */}
      <div>
        <h1 className="text-3xl font-bold text-indigo-400">
          Pooja Shrirang Gadhave
        </h1>
        <p className="mt-2 text-gray-300 text-sm md:text-base">
          MCA Student (2025) · Aspiring Systems Engineer · Java | MERN | MySQL
        </p>
      </div>

      {/* Right side - Buttons */}
      <div className="flex flex-wrap gap-2">
        <a
          href="/resume.pdf"
          download
          className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>
        <a
          href="https://linkedin.com/in/pooja-gadhave-806826312"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-indigo-400 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition"
        >
          LinkedIn
        </a>
      </div>
    </header>
  )
}
