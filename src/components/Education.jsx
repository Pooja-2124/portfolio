import React from 'react'

export default function Education() {
  return (
    <section className="mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Education
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-900">
            MCA — Vidyabharati Mahavidyalaya, Amravati
          </h3>
          <p className="text-sm text-gray-600">2023 – 2025 (Passing: 2025)</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900">
            BCA — Vidyabharati Mahavidyalaya, Amravati
          </h3>
          <p className="text-sm text-gray-600">2020 – 2023</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900">
            HSC — Rural Institute, Amravati
          </h3>
          <p className="text-sm text-gray-600">2019 – 2020</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900">
            SSC — Holy Cross Marathi High School, Amravati
          </h3>
          <p className="text-sm text-gray-600">2017 – 2018</p>
        </div>
      </div>
    </section>
  )
}
