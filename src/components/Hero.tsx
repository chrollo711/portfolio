function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent" />
      <div className="max-w-6xl mx-auto relative w-full">
        <div className="text-center">
          <div className="inline-block px-4 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm">Available for freelance & collaborations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Syed Mikraam
          </h1>
          <p className="text-2xl text-gray-300 mb-4">Full-Stack Developer</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Building scalable web & AI products with React, FastAPI, and AI — turning ideas into production-ready MVPs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects')
                projectsSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition transform"
            >
              View Projects →
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
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
  )
}

export default Hero