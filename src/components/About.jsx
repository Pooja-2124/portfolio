import React from 'react'

export default function About() {
  return (
    <section className="mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        About Me
      </h2>
      <p className="text-gray-700 leading-relaxed">
Enthusiastic MCA student (2025 pass-out) with a strong foundation in Java, MySQL, and web development. Skilled in building responsive front-ends using React and developing backend APIs with Node.js and PHP. Passionate about problem-solving, software development, and continuously learning new technologies. Open to opportunities in software development, system engineering, and related IT roles where I can contribute and grow in a collaborative environment.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
          <h4 className="font-medium text-gray-800">Location</h4>
          <p className="text-sm text-gray-600">Amravati, Maharashtra</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
          <h4 className="font-medium text-gray-800">Email</h4>
          <p className="text-sm text-gray-600">gadhavepooja2@gmail.com</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
          <h4 className="font-medium text-gray-800">Phone</h4>
          <p className="text-sm text-gray-600">+91 9511704875</p>
        </div>
      </div>
    </section>
  )
}
