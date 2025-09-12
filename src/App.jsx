import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Header />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <footer className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Pooja Shrirang Gadhave
        </footer>
      </div>
    </div>
  )
}