import React from 'react'

export default function Contact() {
  return (
    <section className="mt-12 bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-4 border-b border-gray-700 pb-2">
        Contact
      </h2>

      <p className="text-gray-300">
        Email:{" "}
        <a
          href="mailto:gadhavepooja2@gmail.com"
          className="text-indigo-400 hover:text-indigo-300 transition"
        >
          gadhavepooja2@gmail.com
        </a>
      </p>

      <p className="text-gray-300 mt-2">
        Phone:{" "}
        <a
          href="tel:+919511704875"
          className="text-indigo-400 hover:text-indigo-300 transition"
        >
          +91 9511704875
        </a>
      </p>

      <div className="mt-4 flex gap-4">
        <a
          href="https://github.com/Pooja-2124"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-300 hover:text-indigo-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/pooja-gadhave-806826312"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-300 hover:text-indigo-400 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
