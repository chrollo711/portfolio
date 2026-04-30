import { BrowserRouter, Link } from 'react-router-dom'
import About from './components/About'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import { Services } from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  )
}

function MainApp() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              dev.portfolio
            </Link>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
                Contact
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition"
            >
              Hire me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative w-full">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm">Available for freelance & collaborations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Building scalable<br />web & AI products.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Full-Stack Developer crafting modern apps with React, FastAPI, and AI — turning ideas into production-ready MVPs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition transform"
              >
                View Projects →
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-blue-500 transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
            <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg">
              <div className="text-4xl font-bold text-blue-400">20+</div>
              <div className="text-gray-400 mt-2">Projects shipped</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg">
              <div className="text-4xl font-bold text-purple-400">3+</div>
              <div className="text-gray-400 mt-2">Years coding</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/5 rounded-lg">
              <div className="text-4xl font-bold text-blue-400">AI</div>
              <div className="text-gray-400 mt-2">Powered apps</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections with IDs */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App