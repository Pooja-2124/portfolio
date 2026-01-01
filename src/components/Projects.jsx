import React from 'react'

const projects = [
{
  title: 'Hotel Booking Management System',
  desc: 'Developed a full-stack hotel booking web application with user authentication, room listings, booking management, and an admin panel to manage hotels, bookings, and availability.',
  tech: 'PHP, MySQL, HTML, CSS, Bootstrap',
  live: 'https://vacation-rental.free.nf/',
  code: 'https://github.com/Pooja-2124/hotel-booking-system'
},
  {
    title: 'Mentor-Mentee Management System',
    desc: 'Tracks mentee progress across SDLC stages; includes stage tracking, progress updates, and mentor notices.',
    tech: 'PHP, MySQL, HTML, CSS',
    live: '',
    code: ''
  },
  {
    title: 'Expense Tracker',
    desc: 'Expense tracker with pie/bar charts and monthly trends; category filters and visual insights.',
    tech: 'React.js, Chart.js',
    live: 'https://cerulean-marigold-182424.netlify.app',
    code: 'https://github.com/Pooja-2124/expense-tracker'
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather app with location detection and dynamic backgrounds based on weather.',
    tech: 'JavaScript, Fetch API',
    live: 'https://github.com/Pooja-2124/weatherApp',
    code: 'https://github.com/Pooja-2124/weather-app'
  },
  {
    title: 'Quick Notes App',
    desc: 'A React-based notes application with local storage support. Users can add, delete, and manage notes easily with a clean UI.',
    tech: 'JavaScript, React.js, LocalStorage',
    live: 'https://sunny-liger-b042aa.netlify.app',
    code: 'https://github.com/Pooja-2124/Quick-Notes-App'
  },
  {
    title: 'Recipe Finder App',
    desc: 'A JavaScript app that fetches recipes from a public API. Users can search for meals and view details like category, origin, and video tutorials.',
    tech: 'JavaScript, Fetch API, TheMealDB API',
    live: 'https://golden-profiterole-ade9d4.netlify.app/',
    code: 'https://github.com/Pooja-2124/Recipe-Finder-App'
  },
  {
    title: 'Mini Projects Collection',
    desc: 'A collection of 8+ mini web projects built with HTML, CSS, JavaScript, and React. Includes static web pages, interactive UI components, and small apps showcasing frontend concepts.',
    tech: 'HTML, CSS, JavaScript, React.js',
    live: 'https://app.netlify.com/teams/pooja-2124/projects',
    code: 'https://github.com/Pooja-2124'
  }
]

export default function Projects() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6 border-b border-gray-700 pb-2">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            {/* Title + Tech */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{p.tech}</p>
              </div>
              <div className="flex gap-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  >
                    Live
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm border border-indigo-500 text-indigo-400 rounded-md hover:bg-indigo-600 hover:text-white transition"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
