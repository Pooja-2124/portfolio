import React from 'react'

export default function Experience() {
  return (
    <section className="mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Experience
      </h2>

      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">
          Web Development Intern — Websoft Infotech, Pune
        </h3>
        <p className="text-sm text-gray-600">Jan 2025 – Jun 2025</p>

        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 text-sm">
          <li>Built responsive UIs using React, HTML, and CSS.</li>
          <li>Integrated REST APIs and used Context API for state management.</li>
          <li>Collaborated with team using Git and improved app performance.</li>
        </ul>
      </div>
    </section>
  )
}
